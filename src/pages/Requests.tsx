import { Link, useSearchParams } from "react-router-dom"
import { Main } from "../components/requests-components/Main"
import Pending from "../components/requests-components/Pending";
import Accepted from "../components/requests-components/Accepted";
import { getLog } from "./auth/auth-components/Login";

export const Requests = () => {
    const res = getLog()
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page')
    return (
        <>
            <div className='w-[90%] h-[100svh] flex flex-col items-center pt-8'>
                <div className="flex flex-wrap w-full mb-4">
                    {res != "shop" ?
                        <>
                            <Link to="/requests?page=main" className={`${page == "main" ? "bg-cont-150 text-cont-100" : "text-[#292D32]"} px-10 py-1 me-4 rounded-full shadow-lg `}>Request</Link>
                            <Link to="/requests?page=pending" className={`${page == "pending" ? "bg-cont-150 text-cont-100" : "text-[#292D32]"} px-10 py-1 mx-4 rounded-full shadow-lg`}>Pending</Link>
                            <Link to="/requests?page=accepted" className={`${page == "accepted" ? "bg-cont-150 text-cont-100" : "text-[#292D32]"} px-10 py-1 mx-4 rounded-full shadow-lg`}>Accepted</Link>
                        </>
                        : ""}

                    {res == "shop" ?
                        <>
                            <Link to="/requests?page=pending" className={`${page == "pending" ? "bg-cont-150 text-cont-100" : "text-[#292D32]"} px-10 py-1 mx-4 rounded-full shadow-lg`}>Requests</Link>
                            <Link to="/requests?page=accepted" className={`${page == "accepted" ? "bg-cont-150 text-cont-100" : "text-[#292D32]"} px-10 py-1 mx-4 rounded-full shadow-lg`}>Accepted</Link>
                        </>
                        : ""}
                </div>
                {page == "main" ? <Main /> : ""}
                {page == "pending" ? <Pending /> : ""}
                {page == "accepted" ? <Accepted /> : ""}
            </div>
        </>
    )
}
export default Requests