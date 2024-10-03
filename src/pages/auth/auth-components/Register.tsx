import { register } from "../../../api/auth";

export const Register = () => {
    function handleRegister() {
        const name = (document.getElementById("shopName") as HTMLInputElement).value
        const email = (document.getElementById("email") as HTMLInputElement).value
        const phone = (document.getElementById("phone") as HTMLInputElement).value
        const logo = (document.getElementById("logoInput") as HTMLInputElement).files![0]
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("logo", logo)
        register.post("/api/v0/shops/register/", formData).then(response => {
            console.log(response.status, response.data)
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <form className="flex flex-col w-full relative mt-[46px]" method="post" onSubmit={(e) => { e.preventDefault(); return false }}>
                <label className="mb-2" htmlFor="shopName" id="shopNameL">Shop name</label>
                <input type="text" name="shopName" id="shopName" className="mb-2 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Shop's Name" />
                <label className="mb-2" htmlFor="email" id="emailL">Email</label>
                <input type="text" id="email" className="mb-2 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Email" />
                <label className="mb-2" htmlFor="phone" id="phoneL">Phone Number</label>
                <input type={"number"} id="phone" className="mb-5 outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your phone number" />
                <div className="flex justify-between">
                    <div className="flex">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember" className="ps-3"><span className="text-[#ACACAC]">I accept</span> the terms of service</label>
                    </div>
                </div>
                <input type="file" name="image" id="logoInput" accept="image/*" className="file:w-8 file:h-8 file:rounded-full file:border-none file:bg-black before:relative before:-right-[19px] before:-top-[2px] before:content-['+'] before:text-white text-white relative mt-5 -left-4 after:text-black after:absolute after:top-1 after:left-12 after:block after:h-3 after:content-['Upload-File']" />
                <div className="flex justify-end w-full">
                    <input type="submit" value="Register" className="w-1/2 max-w-[256px] py-3 rounded-full bg-cont-150 text-cont-100 mt-5" onClick={handleRegister} />
                </div>
            </form >
        </>
    );
}
export default Register;