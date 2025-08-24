import express, { Request, Response } from "express";
import { Book } from "../models/book.model";

export const booksRoutes = express.Router();

booksRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book
        });
    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Something went wrong",
            success: false,
            error
        });
    }
});

booksRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const { filter, sortBy = 'createdAt', sort = 'asc', limit = '10' } = req.query;
        const query: any = {};
        if (filter) query.genre = filter;

        const books = await Book.find(query)
            .sort({ [sortBy as string]: sort === 'asc' ? 1 : -1 })
            .limit(parseInt(limit as string, 10));

        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: books
        });
    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Something went wrong",
            success: false,
            error
        });
    }
});

booksRoutes.get('/:bookId', async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book) {
            return res.status(404).json({
                message: "Book not found",
                success: false,
                error: { code: "NOT_FOUND", bookId: req.params.bookId }
            });
        }
        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: book
        });
    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Something went wrong",
            success: false,
            error
        });
    }
});

booksRoutes.put('/:bookId', async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).json({
                message: "Book not found",
                success: false,
                error: { code: "NOT_FOUND", bookId: req.params.bookId }
            });
        }
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: book
        });
    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Something went wrong",
            success: false,
            error
        });
    }
});

booksRoutes.delete('/:bookId', async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.bookId);
        if (!book) {
            return res.status(404).json({
                message: "Book not found",
                success: false,
                error: { code: "NOT_FOUND", bookId: req.params.bookId }
            });
        }
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: null
        });
    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Something went wrong",
            success: false,
            error
        });
    }
});
