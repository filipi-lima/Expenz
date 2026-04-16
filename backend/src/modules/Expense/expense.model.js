import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
            min: 0,
        },
        dueDate: {
            type: Date,
        },
        isFixed: {
            type: Boolean,
        },
        category: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'paid', 'late'],
            default: 'pending'
        },
        month: {
            type: Number,
            required: true,
            min: 0,
            max: 11,
        },
        year: {
            type: Number,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {
        timestamps: true,
    },
);

expenseSchema.index({ user: 1, month: 1, year: 1 });

const Expense = mongoose.model("Expense", expenseSchema)

export default Expense;
