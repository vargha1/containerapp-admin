import { useState } from "react";
import Login from "./auth-components/Login";

export const Auth = () => {
    const [authState, setAuthState] = useState("login")
    return (
        <>
            <div className="flex justify-center items-center w-full h-[100svh] bg-cont-150">
                <div className="flex justify-center w-full mx-[25%] max-w-[1400px] bg-cont-100 p-16 rounded-3xl">
                    <div className="flex flex-col items-center w-1/2 pe-20">
                        <div className="flex w-[75%] rounded-full p-2 bg-[#d1d1d1]">
                            <div className={`flex justify-center w-1/2 p-2 rounded-full ${authState == "login" ? "text-cont-100 bg-cont-150" : "text-cont-75 bg-inherit"}`}>Login</div>
                            <div className={`flex justify-center w-1/2 p-2 rounded-full ${authState == "register" ? "text-cont-100 bg-cont-150" : "text-cont-75 bg-inherit"}`}>Register</div>
                        </div>
                        <Login />
                    </div>
                    <div className="flex w-1/2 bg-[#292D32]"></div>
                </div>
            </div>
        </>
    );
}
export default Auth