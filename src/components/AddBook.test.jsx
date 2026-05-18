
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, test, expect, beforeEach } from "vitest";

import AddBook from "./AddBook";

const mockAddBook = vi.fn();

vi.mock("../context/BooksContext", () => ({
    useBooksContext: () => ({
        addBook: mockAddBook
    })
}));

describe("AddBook Component", () => {
    beforeEach(() => {
        mockAddBook.mockClear();
    });

    test("renders all form inputs and button", () => {
        render(<AddBook />);

        expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Author")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Category")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Price")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /add book/i })
        ).toBeInTheDocument();
    });

    test("updates input values when typing", async () => {
        const user = userEvent.setup();

        render(<AddBook />);

        const titleInput = screen.getByPlaceholderText("Title");
        const authorInput = screen.getByPlaceholderText("Author");
        const categoryInput = screen.getByPlaceholderText("Category");
        const priceInput = screen.getByPlaceholderText("Price");

        await user.type(titleInput, "Atomic Habits");
        await user.type(authorInput, "James Clear");
        await user.type(categoryInput, "Self Help");
        await user.type(priceInput, "25");

        expect(titleInput).toHaveValue("Atomic Habits");
        expect(authorInput).toHaveValue("James Clear");
        expect(categoryInput).toHaveValue("Self Help");
        expect(priceInput).toHaveValue(25);
    });

    test("calls addBook with correct data on submit", async () => {
        const user = userEvent.setup();

        render(<AddBook />);

        await user.type(screen.getByPlaceholderText("Title"), "Clean Code");
        await user.type(screen.getByPlaceholderText("Author"), "Robert Martin");
        await user.type(screen.getByPlaceholderText("Category"), "Programming");
        await user.type(screen.getByPlaceholderText("Price"), "40");

        await user.click(
            screen.getByRole("button", { name: /add book/i })
        );

        expect(mockAddBook).toHaveBeenCalledTimes(1);

        expect(mockAddBook).toHaveBeenCalledWith(
            expect.objectContaining({
                id: expect.any(String),
                title: "Clean Code",   
                author: "Robert Martin",
                category: "Programming",
                price: 40
            })
        );
    });

    test("does not call addBook if fields are empty", async () => {
        const user = userEvent.setup();

        render(<AddBook />);

        const titleInput = screen.getByPlaceholderText("Title");
        const authorInput = screen.getByPlaceholderText("Author");
        const categoryInput = screen.getByPlaceholderText("Category");
        const priceInput = screen.getByPlaceholderText("Price");

        await user.type(titleInput, "");
        await user.type(authorInput, "");
        await user.type(categoryInput, "");
        await user.type(priceInput, "");

        await user.click(
            screen.getByRole("button", { name: /add book/i })
        );

        expect(titleInput).toHaveValue("");
        expect(authorInput).toHaveValue("");
        expect(categoryInput).toHaveValue("");
        expect(priceInput).toHaveValue(null);

    });

    test("focus returns to title input after submit", async () => {
        const user = userEvent.setup();

        render(<AddBook />);

        const titleInput = screen.getByPlaceholderText("Title");

        await user.type(titleInput, "Test Book");
        await user.type(screen.getByPlaceholderText("Author"), "Test Author");
        await user.type(screen.getByPlaceholderText("Category"), "Testing");
        await user.type(screen.getByPlaceholderText("Price"), "10");

        await user.click(
            screen.getByRole("button", { name: /add book/i })
        );

        expect(titleInput).toHaveFocus();
    });

});   

