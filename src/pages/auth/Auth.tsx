import { useEffect, useState } from "react";
import Login from "./auth-components/Login";
import Register from "./auth-components/Register";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ForgotPassword from "./auth-components/ForgotPassword";

export const Auth = ({ isLogged, setIsLogged }: any) => {
    const location = useLocation()
    const [authState, setAuthState] = useState("login")
    useEffect(() => {
        location.pathname == "/auth/login" || location.pathname == "/auth/login/" ? setAuthState("login") : null
        location.pathname == "/auth/register" || location.pathname == "/auth/register/" ? setAuthState("register") : null
    }, [location.pathname])

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full bg-cont-150">
                <h1 className="text-5xl font-[Megrim] mt-3"><span className="text-[#0b9595] font-[Megrim]">Eco</span> P<span className="text-[#0b9595] font-[Megrim]">a</span>ck</h1>
                <div className="flex justify-center lg:w-1/2 mt-10 mx-5 max-w-[1400px] bg-cont-100 lg:p-16 px-8 py-16 rounded-3xl mb-28">
                    <div className="flex flex-col items-center xl:w-1/2 w-full xl:pe-20">
                        <div className="flex xl:w-[75%] w-full rounded-full p-2 bg-[#d1d1d1]">
                            <Link to="/auth/login" className={`flex justify-center w-1/2 p-2 rounded-full ${authState == "login" ? "text-cont-100 bg-cont-150" : "text-cont-75 bg-inherit"}`}>Login</Link>
                            <Link to="/auth/register" className={`flex justify-center w-1/2 p-2 rounded-full ${authState == "register" ? "text-cont-100 bg-cont-150" : "text-cont-75 bg-inherit"}`}>Register</Link>
                        </div>
                        <Routes>
                            <Route path="/login" element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
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