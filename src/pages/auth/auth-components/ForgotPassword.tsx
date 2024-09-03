export const ForgotPassword = () => {
    return (
        <>
            <p className="mt-10 mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, illum.</p>
            <form action="post" className="flex flex-col w-full relative">
                <label className="mb-2" htmlFor="email" id="emailL">Email</label>
                <input type="email" autoComplete="email" name="email" id="email" className="mb-[222px] outline-none border-[#9e896a] border-[1px] rounded-full py-3 px-6" placeholder="Enter your Email" />
                <div className="flex justify-end w-full">
                    <input type="submit" value="Send Email" className="w-1/2 max-w-[256px] py-3 rounded-full bg-cont-150 text-cont-100 mt-5" />
                </div>
            </form>
        </>
    );
}
export default ForgotPassword;