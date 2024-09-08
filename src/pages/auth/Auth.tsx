import { useEffect, useState } from "react";
import Login from "./auth-components/Login";
import Register from "./auth-components/Register";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ForgotPassword from "./auth-components/ForgotPassword";

export const Auth = () => {
    const location = useLocation()
    const [authState, setAuthState] = useState("login")
    useEffect(() => {
        location.pathname == "/auth/login" || location.pathname == "/auth/login/" ? setAuthState("login") : null
        location.pathname == "/auth/register" || location.pathname == "/auth/register/" ? setAuthState("register") : null
    }, [location.pathname])

    return (
        <>
            <div className="flex justify-center items-center w-full h-[100svh] bg-cont-150">
                <div className="flex justify-center w-full xl:mx-[25%] mx-5 max-w-[1400px] bg-cont-100 p-16 rounded-3xl">
                    <div className="flex flex-col items-center xl:w-1/2 w-full xl:pe-20">
                        <div className="flex xl:w-[75%] w-full rounded-full p-2 bg-[#d1d1d1]">
                            <Link to="/auth/login" className={`flex justify-center w-1/2 p-2 rounded-full ${authState == "login" ? "text-cont-100 bg-cont-150" : "text-cont-75 bg-inherit"}`}>Login</Link>
                            <Link to="/auth/register" className={`flex justify-center w-1/2 p-2 rounded-full ${authState == "register" ? "text-cont-100 bg-cont-150" : "text-cont-75 bg-inherit"}`}>Register</Link>
                        </div>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/forgotPassword" element={<ForgotPassword />} />
                        </Routes>
                    </div>
                    <div className="xl:flex hidden w-1/2 bg-[#292D32] rounded-xl"></div>
                </div>
            </div>

        </>
    );
}
export default Auth