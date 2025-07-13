import mongoose, { Document, Schema } from 'mongoose';
import { IBook } from "../interfaces/book..interface"; 

export interface BookDocument extends IBook, Document {}

const BookSchema: Schema = new Schema<BookDocument>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']
  },
  isbn: {
    type: String,
    required: [true, 'ISBN is required'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  copies: {
    type: Number,
    required: [true, 'Copies is required'],
    min: [0, 'Copies must be a non-negative integer'],
    validate: {
      validator: Number.isInteger,
      message: 'Copies must be an integer'
    }
  },
  available: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export const BookModel = mongoose.model<BookDocument>('Book', BookSchema);
