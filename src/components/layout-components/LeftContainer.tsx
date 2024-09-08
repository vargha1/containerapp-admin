import { SvgContainers } from "../../icons/SvgContainers"
import { SvgHome } from "../../icons/SvgHome"
import { SvgLoan } from "../../icons/SvgLoan"
import { SvgReturn } from "../../icons/SvgReturn"
import { SvgSupport } from "../../icons/SvgSupport"
import { SvgLogout } from "../../icons/SvgLogout"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { SvgShop } from "../../icons/SvgShop"
import { SvgQR } from "../../icons/SvgQR"
import { useState } from "react"

export const LeftContainer = () => {
    let location = useLocation()
    const [searchParams] = useSearchParams()
    const [isOpen, setIsOpen] = useState(false)
    function handleDropDown(e: any) {
        e.stopPropagation();
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
            setIsOpen(false)
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
            setIsOpen(true)
        }
    }
    function handleDrawer(state: string) {
        const drawer = document.getElementById("drawer");
        if (state == "open") {
            drawer?.classList.remove("!-left-[300%]")
        }
        if (state == "close") {
            drawer?.classList.add("!-left-[300%]")
        }
    }
    return (
        <>
            {location.pathname.includes("/p") ?
                <div id="drawer" className="flex flex-col md:items-center md:w-[250px] w-full fixed top-0 bottom-0 !-left-[300%] left-0 md:!left-0 z-10 bg-cont-150 text-cont-125 transition-all duration-300">
                    <p className="text-6xl rotate-45 w-[32px] h-[32px] absolute right-5 top-6 cursor-pointer md:hidden" onClick={e => { e.stopPropagation(); handleDrawer("close") }}>+</p>
                    <div className="flex flex-col md:w-full md:items-center">
                        <h1 className="text-5xl text-cont-100 mt-6 mb-12 md:ms-0 ms-5">Admin</h1>
                        <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/home" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/home" || location.pathname == "/p/home/" ? "bg-[#3e4049]" : ""}`}><SvgHome fillColor={location.pathname == "/p/home" || location.pathname == "/p/home/" ? "#fff" : "#60626E"} /> Home</Link>
                        <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/loan" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/loan" || location.pathname == "/p/loan/" ? "bg-[#3e4049]" : ""}`}><SvgLoan fillColor={location.pathname == "/p/loan" || location.pathname == "/p/loan/" ? "#fff" : "#60626E"} /> Loan</Link>
                        <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/return" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/return" || location.pathname == "/p/return/" ? "bg-[#3e4049]" : ""}`}><SvgReturn fillColor={location.pathname == "/p/return" || location.pathname == "/p/return/" ? "#fff" : "#60626E"} /> Return</Link>
                        <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/containers" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/containers" || location.pathname == "/p/containers/" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/p/containers" || location.pathname == "/p/containers/" ? "#fff" : "#60626E"} /> Containers</Link>
                        <div className="cursor-pointer flex w-full py-3 ps-6 hover:bg-[#3e4049]" onClick={handleDropDown} >Request's Container</div>
                        <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/requests?page=main" id="item1" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/p/requests?page=main" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/p/requests?page=main" ? "#fff" : "#60626E"} /> Requests</Link>
                        <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/requests?page=pending" id="item2" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/p/requests?page=pending" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/p/requests?page=pending" ? "#fff" : "#60626E"} /> Pending Requests</Link>
                        <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/requests?page=accepted" id="item3" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/p/requests?page=accepted" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/p/requests?page=accepted" ? "#fff" : "#60626E"} /> Accepted Requests</Link>
                        <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/support" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/p/support" || location.pathname == "/p/support/" ? "bg-[#3e4049]" : ""}`}><SvgSupport fillColor={location.pathname == "/p/support" || location.pathname == "/p/support/" ? "#fff" : "#60626E"} /> Support</Link>
                        <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/home" className="w-full flex py-3 ps-6 hover:bg-[#3e4049] absolute bottom-5"><SvgLogout fillColor="#60626E" /> Logout</Link>
                    </div>
                </div> : ""
            }
            {location.pathname.includes("/sp") ?
                <div id="drawer" className="flex flex-col md:items-center items-start md:w-[250px] w-full fixed top-0 bottom-0 !-left-[300%] left-0 md:!left-0 z-10 bg-cont-150 text-cont-125 transition-all duration-300">
                    <p className="text-6xl rotate-45 w-[32px] h-[32px] absolute right-5 top-6 cursor-pointer md:hidden" onClick={e => { e.stopPropagation(); handleDrawer("close") }}>+</p>
                    <h1 className="text-5xl text-cont-100 mt-6 mb-12 md:ms-0 ms-5">Admin</h1>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/sp/home" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/sp/home" || location.pathname == "/sp/home/" ? "bg-[#3e4049]" : ""}`}><SvgHome fillColor={location.pathname == "/sp/home" || location.pathname == "/sp/home/" ? "#fff" : "#60626E"} /> Home</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/sp/shop" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/sp/shop" || location.pathname == "/sp/shop/" ? "bg-[#3e4049]" : ""}`}><SvgShop fillColor={location.pathname == "/sp/shop" || location.pathname == "/sp/shop/" ? "#fff" : "#60626E"} /> Shop List</Link>
                    <div className="cursor-pointer flex w-full py-3 ps-6 hover:bg-[#3e4049]" onClick={handleDropDown} >Request's Container</div>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/sp/requests?page=pending" id="item2" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/sp/p/requests?page=pending" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/sp/p/requests?page=pending" ? "#fff" : "#60626E"} /> Pending Requests</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/sp/requests?page=accepted" id="item3" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/sp/p/requests?page=accepted" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/sp/p/requests?page=accepted" ? "#fff" : "#60626E"} /> Accepted Requests</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/sp/qr" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/sp/qr" || location.pathname == "/sp/qr/" ? "bg-[#3e4049]" : ""}`}><SvgQR fillColor={location.pathname == "/sp/qr" || location.pathname == "/sp/qr/" ? "#fff" : "#60626E"} /> QR generator</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/p/support" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/sp/support" || location.pathname == "/sp/support/" ? "bg-[#3e4049]" : ""}`}><SvgSupport fillColor={location.pathname == "/sp/support" || location.pathname == "/sp/support/" ? "#fff" : "#60626E"} /> Support</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/sp/home" className="w-full flex py-3 ps-6 hover:bg-[#3e4049] absolute bottom-5"><SvgLogout fillColor="#60626E" /> Logout</Link>
                </div>
                : ""}
        </>
    )
}