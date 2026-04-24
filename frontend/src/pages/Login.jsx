import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../styles/style.css";
import { Link, useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { GoLock } from "react-icons/go";
import { GoUnlock } from "react-icons/go";
import fetchApi from "../services/fetchApi.js";
import { useState } from "react";

const registerUserFormSchema = z.object({
    email: z
        .string()
        .min(1, "O e-mail é obrigatorio")
        .email("Formato de e-mail inválido")
        .trim()
        .toLowerCase(),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

function Login() {
    const [error, setError] = useState({});
    const [ShowPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerUserFormSchema),
    });

    const userLogin = async (data) => {
        try {
            const response = await fetchApi.userLogin(data);

            if (response.ok) {
                const token = await response.json();
                localStorage.setItem("token", token);
                navigate("/home");
            } else {
                const errorData = await response.json();
                setError(errorData);
            }

            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            console.log("Ocorreu um erro, tente novamente mais tarde");
        }
    };

    return (
        <section className="container">
            <form onSubmit={handleSubmit(userLogin)}>
                <h1>Login</h1>

                <div>
                    <div className="email__container">
                        <AiOutlineMail className="email icon" />
                        <input
                            type="email"
                            className="email__input"
                            placeholder="E-mail"
                            {...register("email")}
                        />
                    </div>
                    {(errors.email || error.errorType === "email") && (
                        <span className="error-message">
                            {errors.email
                                ? errors.email.message
                                : error.message}
                        </span>
                    )}
                </div>

                <div>
                    <div className="password__container">
                        {ShowPassword ? (
                            <GoUnlock
                                className="password icon"
                                onClick={() => setShowPassword(!ShowPassword)}
                            />
                        ) : (
                            <GoLock
                                className="password icon"
                                onClick={() => setShowPassword(!ShowPassword)}
                            />
                        )}

                        <input
                            type={ShowPassword ? "text" : "password"}
                            className="password__input"
                            placeholder="Senha"
                            {...register("password")}
                        />
                    </div>
                    {(errors.password || error.errorType === "password") && (
                        <span className="error-message">
                            {errors.password
                                ? errors.password.message
                                : error.message}
                        </span>
                    )}
                </div>

                <button type="submit" className="button__submit">
                    Login
                </button>

                <span className="redirect-text">
                    Não possui uma conta? <Link to="/">Cadastre-se</Link>
                </span>
            </form>
        </section>
    );
}

export default Login;
