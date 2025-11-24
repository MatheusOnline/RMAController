import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

function LoginVerify() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("user_token");

        if (!token) {
            navigate("/login");
        }
    }, []); // <-- evita loop infinito

    return <Outlet />;
}

export default LoginVerify;
