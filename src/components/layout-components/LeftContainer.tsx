import { SvgContainers } from "../../icons/SvgContainers"
import { SvgHome } from "../../icons/SvgHome"
import { SvgLoan } from "../../icons/SvgLoan"
import { SvgReturn } from "../../icons/SvgReturn"
import { SvgSupport } from "../../icons/SvgSupport"
import { SvgLogout } from "../../icons/SvgLogout"

export const LeftContainer = () => {
    return (
        <div className="flex flex-col items-center w-[250px] fixed top-0 bottom-0 left-0 bg-[#363740] text-cont-125">
            <h1 className="text-5xl text-cont-100 mt-6 mb-12">Admin</h1>
            <a href="./home" className={`w-full flex py-3 ps-6 ${window.location.pathname == "/p/home" || window.location.pathname == "/p/home/" ? ("bg-[#3e4049]") : ""}`}><SvgHome fillColor={window.location.pathname == "/p/home" || window.location.pathname == "/p/home/" ? "#fff" : "#60626E"} /> Home</a>
            <a href="./loan" className={`w-full flex py-3 ps-6 ${window.location.pathname == "/p/loan" || window.location.pathname == "/p/loan/" ? ("bg-[#3e4049]") : ""}`}><SvgLoan fillColor={window.location.pathname == "/p/loan" || window.location.pathname == "/p/loan/" ? "#fff" : "#60626E"} /> Loan</a>
            <a href="./return" className={`w-full flex py-3 ps-6 ${window.location.pathname == "/p/return" || window.location.pathname == "/p/return/" ? ("bg-[#3e4049]") : ""}`}><SvgReturn fillColor={window.location.pathname == "/p/return" || window.location.pathname == "/p/return/" ? "#fff" : "#60626E"} /> Return</a>
            <a href="./containers" className={`w-full flex py-3 ps-6 ${window.location.pathname == "/p/containers" || window.location.pathname == "/p/containers/" ? ("bg-[#3e4049]") : ""}`}><SvgContainers fillColor={window.location.pathname == "/p/containers" || window.location.pathname == "/p/containers/" ? "#fff" : "#60626E"} /> Containers</a>
            <a href="./support" className={`w-full flex py-3 ps-6 ${window.location.pathname == "/p/support" || window.location.pathname == "/p/support/" ? ("bg-[#3e4049]") : ""}`}><SvgSupport fillColor={window.location.pathname == "/p/support" || window.location.pathname == "/p/support/" ? "#fff" : "#60626E"} /> Support</a>
            <a href="./home" className="w-full flex py-3 ps-6 absolute bottom-5"><SvgLogout fillColor="#60626E" /> Logout</a>
        </div>
    )
}