import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from '../../pages/Home'
import Loan from '../../pages/Loan'
import Return from '../../pages/Return'
import Containers from '../../pages/Containers'
import NotFound from '../layout-components/NotFound'
import Requests from '../../pages/Requests'
import { SvgContainer } from '../../icons/SvgContainer'
import { useSearchParams } from 'react-router-dom'
import QRGen from '../../pages/QRGen'
import Shops from '../../pages/Shops'
import { SvgSearch } from '../../icons/SvgSearch'
import Support from '../../pages/Support'
import Profile from '../../pages/Profile'
import { useEffect } from 'react'

export const MainContainer = ({ isLogged, setIsLogged }: any) => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page')
    function handleDrawer(state: string) {
        const drawer = document.getElementById("drawer");
        if (state == "open") {
            drawer?.classList.remove("!-left-[300%]")
        }
        if (state == "close") {
            drawer?.classList.add("!-left-[300%]")
        }
        console.log("asfdafd");
    }
    let isOpen = false;
    function handleProfile(action: string) {
        if (action == "open") {
            document.getElementById("profileDrawer")?.classList.remove("invisible")
            document.getElementById("cover2")?.classList.remove("invisible")
            document.getElementById("profileDrawer")?.classList.remove("-top-20")
            isOpen = true;
        } else if (action == "close") {
            document.getElementById("profileDrawer")?.classList.add("invisible")
            document.getElementById("cover2")?.classList.add("invisible")
            document.getElementById("profileDrawer")?.classList.add("-top-20")
            isOpen = false;
        }
        if (action == "toggle") {
            if (isOpen) {
                document.getElementById("profileDrawer")?.classList.add("invisible")
                document.getElementById("cover2")?.classList.add("invisible")
                document.getElementById("profileDrawer")?.classList.add("-top-20")
            } else {
                document.getElementById("profileDrawer")?.classList.remove("invisible")
                document.getElementById("cover2")?.classList.remove("invisible")
                document.getElementById("profileDrawer")?.classList.remove("-top-20")
            }
            isOpen = !isOpen
        }
    }
    useEffect(() => {
        if (localStorage.getItem("loginStatus") == "" || isLogged == false) {
            nav("/auth/login/")
            return
        }
    }, [])
    return (
        <div className="flex flex-col md:w-[calc(100%-250px)] w-full items-center bg-[#f5f5f9]">
            <header className="flex justify-center items-center w-full md:px-20 px-5 py-4 border-b-2 bg-cont-100 border-[#cfcfcf] bg-white relative">
                <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col w-[40px] me-2 text-cont-150 md:hidden" onClick={() => handleDrawer("open")}>
                        <hr className="bg-cont-150 border-cont-150" />
                        <hr className="my-3 bg-cont-150 border-cont-150" />
                        <hr className="bg-cont-150 border-cont-150" />
                    </div>
                    <h2 className="font-bold md:text-lg text-[14px] leading-5">Hello, Vargha</h2>
                    <div className="flex items-center justify-center relative">
                        <div className="w-[48px] h-[48px] md:ms-5 p-[8px] rounded-full border-gray-400 border-[1px]" onClick={() => handleProfile("toggle")} id="profileIcon">
                            <img src="/assets/almubdi.png" alt="profile" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-col fixed top-[83px] shadow-[0_0px_15px_-5px] rounded-lg right-5 px-12 py-2 bg-white -top-20 z-[5] invisible transition-all duration-300" id="profileDrawer">
                <p>Potato hut</p>
                <Link to="/p/profile" className="py-2" onClick={() => handleProfile("close")}>My Profile</Link>
                <Link to="/auth/login" onClick={() => { handleProfile("close"); setIsLogged("") }}>Sign Out</Link>
            </div>
            <div className="fixed top-0 right-0 bottom-0 md:left-[250px] invisible" id="cover2" onClick={() => handleProfile("close")}></div>
            <Routes>
                <Route path='/home' element={<Home />} />
                {/* <Route path='/sp/home' element={<Home />} /> */}
                <Route path='/loan' element={<Loan />} />
                <Route path='/return' element={<Return />} />
                <Route path='/shop' element={<Shops />} />
                <Route path='/qr' element={<QRGen />} />
                <Route path='/containers' element={<Containers />} />
                <Route path='/requests' element={<Requests />} />
                <Route path='/requests' element={<Requests />} />
                <Route path='/support' element={<Support />} />
                <Route path='/support' element={<Support />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <Link to="/p/requests?page=main" className={`${page == "main" || location.pathname.includes("/sp") ? "hidden" : "flex"} justify-center items-center bg-cont-150 w-[75px] h-[75px] rounded-full bottom-8 right-8 fixed`}>
                <div className="flex justify-center items-center absolute bg-cont-100 w-[20px] h-[20px] right-1 top-0 rounded-full" id="addBtn">+</div>
                <SvgContainer className="w-3/5 h-3/5" fillColor="white" />
            </Link>
        </div>
    );
}