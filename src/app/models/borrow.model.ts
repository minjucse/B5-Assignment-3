import mongoose, { Schema, Document } from 'mongoose';
import { IBorrow } from "../interfaces/borrow.interface"; 

export interface BorrowDocument extends IBorrow, Document {}

const BorrowSchema: Schema = new Schema<BorrowDocument>({
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: [true, 'Book reference is required']
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1'],
    validate: {
      validator: Number.isInteger,
      message: 'Quantity must be an integer'
    }
  },
  dueDate: {
    type: Date,
    required: [true, 'Due date is required']
  }
}, {
  timestamps: true
});

export const Borrow = mongoose.model<BorrowDocument>('Borrow', BorrowSchema);
