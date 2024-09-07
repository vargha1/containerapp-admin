import { Routes, Route } from 'react-router-dom'
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
export const MainContainer = () => {
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
    return (
        <div className="flex flex-col md:w-[calc(100%-250px)] w-full items-center bg-[#f5f5f9]">
            <header className="flex justify-center items-center w-full md:px-20 px-5 py-4 border-b-2 bg-cont-100 border-[#cfcfcf]">
                <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col w-[40px] me-2 text-cont-150 md:hidden" onClick={() => handleDrawer("open")}>
                        <hr className="bg-cont-150 border-cont-150" />
                        <hr className="my-3 bg-cont-150 border-cont-150" />
                        <hr className="bg-cont-150 border-cont-150" />
                    </div>
                    <h2 className="font-bold md:text-lg text-[14px] leading-5">Hello, Vargha</h2>
                    <div className="flex items-center justify-center">
                        <input type="search" name="srch" id="srch" className="md:mx-8 mx-5 py-2 px-5 border-2 border-[#d1d1d1] rounded-full focus:outline-none" />
                        <div className="w-[48px] h-[48px] md:ms-5" id="profileIcon">
                            <img src="/assets/almubdi.png" alt="profile" />
                        </div>
                    </div>
                </div>
            </header>
            <Routes>
                <Route path='/p/home' element={<Home />} />
                <Route path='/sp/home' element={<Home />} />
                <Route path='/p/loan' element={<Loan />} />
                <Route path='/p/return' element={<Return />} />
                <Route path='/sp/shop' element={<Shops />} />
                <Route path='/sp/qr' element={<QRGen />} />
                <Route path='/p/containers' element={<Containers />} />
                <Route path='/p/requests' element={<Requests />} />
                <Route path='/sp/requests' element={<Requests />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <div className={`${page == "main" ? "hidden" : "flex"} justify-center items-center bg-cont-150 w-[75px] h-[75px] rounded-full bottom-8 right-8 fixed`}>
                <div className="flex justify-center items-center absolute bg-cont-100 w-[20px] h-[20px] right-1 top-0 rounded-full" id="addBtn">+</div>
                <SvgContainer className="w-3/5 h-3/5" fillColor="white" />
            </div>
        </div>
    );
}