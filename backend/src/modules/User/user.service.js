import User from "./user.model.js";
import bcrypt from "bcryptjs";

const userRegistration = async (data) => {
    const { email, password } = data;

    const emailExists = await User.findOne({ email });

    if (emailExists) {
        const error = new Error("Esse e-mail já está sendo utilizado");
        error.statusCode = 400;
        throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({ ...data, password: passwordHash });

    return {
        id: user._id,
        name: user.name,
        email: user.email,
    };
};

export default {
    userRegistration,
};
