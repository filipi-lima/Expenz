import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchApi from "../services/fetchApi";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleAuth = async () => {
            try {
                const token = localStorage.getItem("token")

                const response = await fetchApi.handleAuth(token)

                if (!response.ok) {
                    localStorage.removeItem("token")
                    navigate("/login")
                }
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                localStorage.removeItem("token")
                navigate("/login")
            }
        };

        handleAuth();
    }, [navigate]);

    return <h1>Home</h1>;
}

export default Home;
