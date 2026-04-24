import userService from "./user.service.js";

const userRegistration = async (req, res, next) => {
    try {
        const user = await userService.userRegistration(req.body);

        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

const userLogin = async (req, res, next) => {
    try {
        const token = await userService.userLogin(req.body);

        res.status(200).json(token);
    } catch (error) {
        next(error);
    }
};

export default {
    userRegistration,
    userLogin,
};
