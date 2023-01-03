import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

const ExpenseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
    maxlength: 100,
  },
  type: {
    type: String,
    required: [true, "Please add a type"],
    maxlength: 50,
  },
  status: {
    type: String,
    required: [true, "Please add a current status"],
    enum: ["paid", "unpaid"],
  },
  amount: {
    type: Number,
    required: [true, "Please add an amount"],
    min: [0, "Must be at least 0, got {VALUE}"],
    max: 100000000000,
  },
  amountType: {
    type: String,
    required: [true, "Please add an amount type"],
    enum: ["incoming", "outgoing"],
  },
  sheet: {
    type: ObjectId,
    ref: "Sheet",
    required: [true, "Please provide a sheet"],
    immutable: true,
  },
  owner: {
    type: ObjectId,
    ref: "User",
    required: [true, "Please provide a user"],
    immutable: true,
  },
});

export default mongoose.model("Expense", ExpenseSchema);
