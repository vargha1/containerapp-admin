import { Link, useNavigate } from "react-router-dom";
import { SvgShowPwd } from "../../../icons/SvgShowPwd";
import { useState } from "react";
import { login } from "../../../api/auth";
let responseAPI: any = ""
export const Login = ({ setIsLogged }: any) => {
    const nav = useNavigate()
    const [visiblityState, setVisiblityState] = useState("password")
    const handleLogin = () => {
        const email = (document.getElementById("email") as HTMLInputElement).value
        const password = (document.getElementById("pwd") as HTMLInputElement).value
        login.post("/api/v0/shops/login/", {
            "email": email,
            "password": password
        }).then(response => {
            // console.log(response);
            if (response.status == 200) {
                setIsLogged(response.data.access)
                nav("/home")
            }
            responseAPI = response.data.status
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <p className="my-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, illum.</p>
            <form action="" className="flex flex-col w-full relative" onSubmit={(e) => { e.preventDefault(); return false }}>
                <label className="mb-5" htmlFor="email" id="emailL">Email</label>
                <input type="text" name="email" id="email" className="mb-8 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Email" />
                <label className="mb-5" htmlFor="password" id="password">Password</label>
                <input type={visiblityState} id="pwd" className="mb-5 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Password" />
                <div className="flex absolute right-5 bottom-[140px]" onClick={() => { visiblityState == "password" ? setVisiblityState("text") : setVisiblityState("password") }}>
                    <SvgShowPwd />
                </div>
                <div className="flex justify-between mt-3">
                    <div className="flex">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember" className="ps-3 text-sm">Remember me</label>
                    </div>
                    <Link to="/auth/forgotPassword" className="text-sm">Forgot Password?</Link>
                </div>
                <div className="flex justify-end w-full">
                    <input type="submit" value="Login" className="w-1/2 max-w-[256px] py-3 rounded-full bg-cont-150 text-cont-100 mt-5" onClick={handleLogin} />
                </div>
            </form>
        </>
    );
}
export default Login;
export const getLog = () => {
    return responseAPI
}