import { SvgContainers } from "../../icons/SvgContainers"
import { SvgHome } from "../../icons/SvgHome"
import { SvgLoan } from "../../icons/SvgLoan"
import { SvgReturn } from "../../icons/SvgReturn"
import { SvgSupport } from "../../icons/SvgSupport"
import { SvgLogout } from "../../icons/SvgLogout"
import { Link, useLocation } from "react-router-dom"
import { SvgShop } from "../../icons/SvgShop"
import { SvgQR } from "../../icons/SvgQR"
import { useState } from "react"
import { getLog } from "../../pages/auth/auth-components/Login"

export const LeftContainer = ({ setIsLogged }: any) => {
    const res = getLog()
    let location = useLocation()
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
            {res == false ?
                <div id="drawer" className="flex flex-col items-center md:w-[250px] w-full fixed top-0 bottom-0 !-left-[300%] left-0 md:!left-0 z-10 bg-cont-150 text-cont-125 transition-all duration-300">
                    <p className="text-6xl rotate-45 w-[32px] h-[32px] absolute right-5 top-6 cursor-pointer md:hidden" onClick={e => { e.stopPropagation(); handleDrawer("close") }}>+</p>
                    <h1 className="text-4xl font-[Megrim] mt-5 w-full ps-8"><span className="text-[#0b9595] font-[Megrim]">Eco</span> P<span className="text-[#0b9595] font-[Megrim]">a</span>ck</h1>
                    <h1 className="text-xl text-cont-100 w-full ps-6 md:px-8 mb-6 md:mb-12 md:ms-0 ms-5">Admin</h1>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/home" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/home" || location.pathname == "/home/" ? "bg-[#3e4049]" : ""}`}><SvgHome fillColor={location.pathname == "/home" || location.pathname == "/home/" ? "#fff" : "#60626E"} /> Home</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/loan" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/loan" || location.pathname == "/loan/" ? "bg-[#3e4049]" : ""}`}><SvgLoan fillColor={location.pathname == "/loan" || location.pathname == "/loan/" ? "#fff" : "#60626E"} /> Loan</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/return" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/return" || location.pathname == "/return/" ? "bg-[#3e4049]" : ""}`}><SvgReturn fillColor={location.pathname == "/return" || location.pathname == "/return/" ? "#fff" : "#60626E"} /> Return</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/containers" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/containers" || location.pathname == "/containers/" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/containers" || location.pathname == "/containers/" ? "#fff" : "#60626E"} /> Containers</Link>
                    <div className="cursor-pointer flex w-full py-3 ps-6 hover:bg-[#3e4049]" onClick={handleDropDown} >Request's Container</div>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/requests?page=main" id="item1" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/requests?page=main" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/requests?page=main" ? "#fff" : "#60626E"} /> Requests</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/requests?page=pending" id="item2" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/requests?page=pending" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/requests?page=pending" ? "#fff" : "#60626E"} /> Pending Requests</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/requests?page=accepted" id="item3" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/requests?page=accepted" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/requests?page=accepted" ? "#fff" : "#60626E"} /> Accepted Requests</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/support" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/support" || location.pathname == "/support/" ? "bg-[#3e4049]" : ""}`}><SvgSupport fillColor={location.pathname == "/support" || location.pathname == "/support/" ? "#fff" : "#60626E"} /> Support</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close"); setIsLogged("") }} to="/auth/login" className="w-full flex py-3 ps-6 hover:bg-[#3e4049] absolute bottom-5"><SvgLogout fillColor="#60626E" /> Logout</Link>
                </div> : ""
            }
            {res == true ?
                <div id="drawer" className="flex flex-col items-center md:w-[250px] w-full fixed top-0 bottom-0 !-left-[300%] left-0 md:!left-0 z-10 bg-cont-150 text-cont-125 transition-all duration-300">
                    <p className="text-6xl rotate-45 w-[32px] h-[32px] absolute right-5 top-6 cursor-pointer md:hidden" onClick={e => { e.stopPropagation(); handleDrawer("close") }}>+</p>
                    <h1 className="text-4xl font-[Megrim] mt-5 w-full ps-8"><span className="text-[#0b9595] font-[Megrim]">Eco</span> P<span className="text-[#0b9595] font-[Megrim]">a</span>ck</h1>
                    <h1 className="text-xl text-cont-100 w-full ps-6 md:px-8 mb-12 md:ms-0 ms-5">Super admin</h1>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/home" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/home" || location.pathname == "/home/" ? "bg-[#3e4049]" : ""}`}><SvgHome fillColor={location.pathname == "/home" || location.pathname == "/home/" ? "#fff" : "#60626E"} /> Home</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/shop" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/shop" || location.pathname == "/shop/" ? "bg-[#3e4049]" : ""}`}><SvgShop fillColor={location.pathname == "/shop" || location.pathname == "/shop/" ? "#fff" : "#60626E"} /> Shop List</Link>
                    <div className="cursor-pointer flex w-full py-3 ps-6 hover:bg-[#3e4049]" onClick={handleDropDown} >Request's Container</div>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/requests?page=pending" id="item2" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/p/requests?page=pending" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/p/requests?page=pending" ? "#fff" : "#60626E"} /> Pending Requests</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/requests?page=accepted" id="item3" className={`w-full flex ps-10 hover:bg-[#3e4049] transition-all duration-200 h-0 opacity-0 invisible ${location.pathname == "/p/requests?page=accepted" ? "bg-[#3e4049]" : ""}`}><SvgContainers fillColor={location.pathname == "/p/requests?page=accepted" ? "#fff" : "#60626E"} /> Accepted Requests</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/qr" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/qr" || location.pathname == "/qr/" ? "bg-[#3e4049]" : ""}`}><SvgQR fillColor={location.pathname == "/qr" || location.pathname == "/qr/" ? "#fff" : "#60626E"} /> QR generator</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close") }} to="/support" className={`w-full flex py-3 ps-6 hover:bg-[#3e4049] ${location.pathname == "/support" || location.pathname == "/support/" ? "bg-[#3e4049]" : ""}`}><SvgSupport fillColor={location.pathname == "/support" || location.pathname == "/support/" ? "#fff" : "#60626E"} /> Support</Link>
                    <Link onClick={e => { e.stopPropagation(); handleDrawer("close"); setIsLogged(""); localStorage.removeItem("responseApi"); localStorage.removeItem("loginStatus") }} to="/auth/login" className="w-full flex py-3 ps-6 hover:bg-[#3e4049] absolute bottom-5"><SvgLogout fillColor="#60626E" /> Logout</Link>
                </div>
                : ""}
        </>
    )
}