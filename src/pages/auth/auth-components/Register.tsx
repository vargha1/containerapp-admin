import { useState } from "react";
import { SvgShowPwd } from "../../../icons/SvgShowPwd";

export const Register = () => {
    const [visiblityState, setVisiblityState] = useState("password")
    return (
        <>
            <form action="post" className="flex flex-col w-full relative mt-[46px]">
                <label className="mb-2" htmlFor="shopName" id="shopNameL">Shop name</label>
                <input type="text" name="shopName" id="shopName" className="mb-2 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Shop's Name" />
                <label className="mb-2" htmlFor="email" id="email">Email</label>
                <input type="email" id="email" autoComplete="email" className="mb-2 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Email" />
                <label className="mb-2" htmlFor="phone" id="phone">Phone Number</label>
                <input type={visiblityState} id="phone" autoComplete="tel" className="mb-5 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your phone number" />
                <div className="flex absolute right-5 bottom-[180px]" onClick={() => { visiblityState == "password" ? setVisiblityState("tel") : setVisiblityState("password") }}>
                    <SvgShowPwd />
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember" className="ps-3"><span className="text-[#ACACAC]">I accept</span> the terms of service</label>
                    </div>
                </div>
                <input type="file" name="" id="" accept="image/*" className="file:w-8 file:h-8 file:rounded-full file:border-none file:bg-black before:relative before:-right-[19px] before:-top-[2px] before:content-['+'] before:text-white text-white relative mt-5 -left-4 after:text-black after:absolute after:top-1 after:left-12 after:block after:h-3 after:content-['Upload-File']" />
                <div className="flex justify-end w-full">
                    <input type="submit" value="Login" className="w-1/2 max-w-[256px] py-3 rounded-full bg-cont-150 text-cont-100 mt-5" />
                </div>
            </form >
        </>
    );
}
export default Register;