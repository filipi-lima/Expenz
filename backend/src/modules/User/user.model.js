import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema(
    {
        fixed: {
            type: Number,
            default: 0,
            min: 0,
        },
        extra: {
            type: Number,
            default: 0,
            min: 0,
        },
        investment: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    { _id: false },
);

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            match: /^\S+@\S+\.\S+$/,
            required: true,
        },
        password: {
            type: String,
            select: false,
            required: true,
        },
        income: incomeSchema,
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model("User", userSchema);

export default User;
