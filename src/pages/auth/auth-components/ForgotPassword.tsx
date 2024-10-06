import forgotPass from "../../../api/forgotPass"

export const ForgotPassword = () => {
    let errorCode = 0
    const handleEmailConfirmation = (num: number) => {
        const email = (document.getElementById("email") as HTMLInputElement).value
        const code = (document.getElementById("code") as HTMLInputElement).value
        const password = (document.getElementById("Pass") as HTMLInputElement).value
        const Cpassword = (document.getElementById("CPass") as HTMLInputElement).value
        if (num == 1 && email) {
            forgotPass.post("/api/v0/shops/forget-password/", {
                "email": email
            }).then(response => {
                if (response.status == 200) {
                    document.getElementById('form1')?.classList.add("hidden")
                    document.getElementById('form2')?.classList.remove("hidden")
                } else {
                    document.getElementById('form1')?.classList.add("hidden")
                    errorCode = response.status
                    document.getElementById('errorCode')?.classList.remove("hidden")
                }
            }).catch(err => {
                document.getElementById("infoT1")!.innerHTML = err.response.data.error
            })
        } else if (num == 2) {
            if (password == Cpassword) {
                forgotPass.post("/api/v0/shops/reset-password/", {
                    "email": email,
                    "reset_code": code,
                    "new_password": password
                })
            } else {
                document.getElementById("infoT2")!.innerHTML = "Passwords Doesn't match"
            }
        }
    }
    return (
        <>
            <p className="hidden" id="errorCode">An unknown error has occurred. Error Code : {errorCode}</p>
            <form action="post" className="flex flex-col w-full relative" id="form1" onSubmit={(e) => { e.preventDefault(); handleEmailConfirmation(1); return false }}>
                <p className="mt-10 mb-3" id="infoT1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, illum.</p>
                <label className="mb-2" htmlFor="email" id="emailL">Email</label>
                <input type="email" name="email" id="email" className="mb-[222px] outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Email" />
                <div className="flex justify-end w-full">
                    <input type="submit" value="Send Email" className="w-1/2 max-w-[256px] py-3 rounded-full bg-cont-150 text-cont-100 mt-5" />
                </div>
            </form>
            <form action="post" className="flex flex-col w-full relative hidden" id="form2" onSubmit={(e) => { e.preventDefault(); handleEmailConfirmation(2); return false }}>
                <p className="mt-10 mb-3" id="infoT2">An email containing a confirmation code has been sent to you.</p>
                <label className="mb-2" htmlFor="code" id="codeL">Code</label>
                <input type="text" name="code" id="code" className="outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter the code" />
                <label className="my-2" htmlFor="Pass" id="PassL">Password</label>
                <input type="password" name="Pass" id="Pass" className="outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Password" />
                <label className="my-2" htmlFor="CPass" id="CPassL">Confirm Password</label>
                <input type="password" name="CPass" id="CPass" className="mb-[42px] outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Confirm your password" />
                <div className="flex justify-end w-full">
                    <input type="submit" value="Confirm" className="w-1/2 max-w-[256px] py-3 rounded-full bg-cont-150 text-cont-100 mt-5" />
                </div>
            </form>
        </>
    );
}
export default ForgotPassword;