import { SvgContainers } from "../../icons/SvgContainers"
import { SvgHome } from "../../icons/SvgHome"
import { SvgLoan } from "../../icons/SvgLoan"
import { SvgReturn } from "../../icons/SvgReturn"
import { SvgSupport } from "../../icons/SvgSupport"
import { SvgLogout } from "../../icons/SvgLogout"
import { Link, useLocation, useSearchParams } from "react-router-dom"

export const LeftContainer = () => {
    let location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get('page')
    let isOpen = false
    function handleDropDown() {
        if (isOpen) {
            window.setTimeout(() => {
                document.getElementById("item3")?.classList.add("opacity-0")
                document.getElementById("item3")?.classList.add("invisible")
                document.getElementById("item3")?.classList.add("h-0")
                document.getElementById("item3")?.classList.remove("py-3")
            }, 0)
            window.setTimeout(() => {
                document.getElementById("item2")?.classList.add("opacity-0")
                document.getElementById("item2")?.classList.add("invisible")
                document.getElementById("item2")?.classList.add("h-0")
                document.getElementById("item2")?.classList.remove("py-3")
            }, 300)
            window.setTimeout(() => {
                document.getElementById("item1")?.classList.add("opacity-0")
                document.getElementById("item1")?.classList.add("invisible")
                document.getElementById("item1")?.classList.add("h-0")
                document.getElementById("item1")?.classList.remove("py-3")
            }, 600)
            isOpen = false
        } else {
            window.setTimeout(() => {
                document.getElementById("item1")?.classList.remove("opacity-0")
                document.getElementById("item1")?.classList.remove("invisible")
                document.getElementById("item1")?.classList.remove("h-0")
                document.getElementById("item1")?.classList.add("py-3")
            }, 0)
            window.setTimeout(() => {
                document.getElementById("item2")?.classList.remove("opacity-0")
                document.getElementById("item2")?.classList.remove("invisible")
                document.getElementById("item2")?.classList.remove("h-0")
                document.getElementById("item2")?.classList.add("py-3")
            }, 300)
            window.setTimeout(() => {
                document.getElementById("item3")?.classList.remove("opacity-0")
                document.getElementById("item3")?.classList.remove("invisible")
                document.getElementById("item3")?.classList.remove("h-0")
                document.getElementById("item3")?.classList.add("py-3")
            }, 600)
            isOpen = true;
        }
    }
    return (
        <div className="flex flex-col items-center w-[250px] fixed top-0 bottom-0 left-0 bg--cont-150 text-cont-125">
            <h1 className="text-5xl text-cont-100 mt-6 mb-12">Admin</h1>
            <Link to="/p/home" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/home" || location.pathname == "/p/home/" ? ("bg-[#3e4049]") : ""}`}><SvgHome fillColor={location.pathname == "/p/home" || location.pathname == "/p/home/" ? "#fff" : "#60626E"} /> Home</Link>
            <Link to="/p/loan" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/loan" || location.pathname == "/p/loan/" ? ("bg-[#3e4049]") : ""}`}><SvgLoan fillColor={location.pathname == "/p/loan" || location.pathname == "/p/loan/" ? "#fff" : "#60626E"} /> Loan</Link>
            <Link to="/p/return" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/return" || location.pathname == "/p/return/" ? ("bg-[#3e4049]") : ""}`}><SvgReturn fillColor={location.pathname == "/p/return" || location.pathname == "/p/return/" ? "#fff" : "#60626E"} /> Return</Link>
            <Link to="/p/containers" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/containers" || location.pathname == "/p/containers/" ? ("bg-[#3e4049]") : ""}`}><SvgContainers fillColor={location.pathname == "/p/containers" || location.pathname == "/p/containers/" ? "#fff" : "#60626E"} /> Containers</Link>
            <div className="cursor-pointer flex w-full py-3 ps-6 hover:bg-[#3e4049]" onClick={() => handleDropDown()} >Request's Container</div>
            <Link to="/p/requests?page=main" id="item1" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${page == "main" ? ("bg-[#3e4049]") : ""}`}><SvgContainers fillColor={page == "main" ? "#fff" : "#60626E"} /> Requests</Link>
            <Link to="/p/requests?page=pending" id="item2" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${page == "pending" ? ("bg-[#3e4049]") : ""}`}><SvgContainers fillColor={page == "pending" ? "#fff" : "#60626E"} /> Pending Requests</Link>
            <Link to="/p/requests?page=accepted" id="item3" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${page == "accepted" ? ("bg-[#3e4049]") : ""}`}><SvgContainers fillColor={page == "accepted" ? "#fff" : "#60626E"} /> Accepted Requests</Link>
            <Link to="/p/support" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/support" || location.pathname == "/p/support/" ? ("bg-[#3e4049]") : ""}`}><SvgSupport fillColor={location.pathname == "/p/support" || location.pathname == "/p/support/" ? "#fff" : "#60626E"} /> Support</Link>
            <Link to="/p/home" className="w-full flex py-3 ps-6 hover:bg-[#3e4049] absolute bottom-5"><SvgLogout fillColor="#60626E" /> Logout</Link>
        </div>
    )
}