import { Link } from "react-router-dom";
import { SvgShowPwd } from "../../../icons/SvgShowPwd";
import { useState } from "react";

export const Login = () => {
    const [visiblityState, setVisiblityState] = useState("password")
    return (
        <>
            <p className="my-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, illum.</p>
            <form action="post" className="flex flex-col w-full relative">
                <label className="mb-5" htmlFor="username" id="usernameL">Username</label>
                <input type="text" autoComplete="username" name="username" id="username" className="mb-8 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Username" />
                <label className="mb-5" htmlFor="password" id="password">Password</label>
                <input type={visiblityState} id="pwd" autoComplete="current-password" className="mb-5 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Password" />
                <div className="flex absolute right-5 bottom-[140px]" onClick={() => { visiblityState == "password" ? setVisiblityState("text") : setVisiblityState("password") }}>
                    <SvgShowPwd />
                </div>
                <div className="flex justify-between mt-3">
                    <div className="flex">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember" className="ps-3">Remember me</label>
                    </div>
                    <Link to="/auth/forgotPassword">Forgot Password?</Link>
                </div>
                <div className="flex justify-end w-full">
                    <input type="submit" value="Login" className="w-1/2 max-w-[256px] py-3 rounded-full bg-cont-150 text-cont-100 mt-5" />
                </div>
            </form>
        </>
    );
}
export default Login;