const BASE_URL = "http://localhost:3000";

const userRegister = async (data) => {
    const { name, email, password } = data;

    return await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });
};

const userLogin = async (data) => {
    const { email, password } = data;

    return await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
};

const handleAuth = async (token) => {
    return await fetch(`${BASE_URL}/users/home`, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Authentication": `Bearer ${token}`
        },
    });
};

export default {
    userRegister,
    userLogin,
    handleAuth,
};
