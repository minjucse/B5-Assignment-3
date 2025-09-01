import express, { Application, Request, Response } from "express";
import cors from "cors";
import { booksRoutes } from "./app/controllers/book.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";

const app: Application = express();

const allowedOrigins = ["http://localhost:5173"];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/books", booksRoutes);
app.use("/api/borrow", borrowRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("📚 Welcome to Minimal Library Management System API");
});

export default app;
