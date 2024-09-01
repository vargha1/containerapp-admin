import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Loan from '../../pages/Loan'
import Return from '../../pages/Return'
import Containers from '../../pages/Containers'
import NotFound from '../layout-components/NotFound'
import Requests from '../../pages/Requests'
export const MainContainer = () => {
    return (
        <div className="flex flex-col w-[calc(100%-250px)] h-fit items-center bg-[#f5f5f9]">
            <header className="flex justify-center items-center w-full px-20 py-4 border-b-2 bg-cont-100 border-[#cfcfcf]">
                <div className="flex w-full justify-between items-center">
                    <h2 className="font-bold text-lg">Hello, Vargha</h2>
                    <div className="flex items-center justify-center">
                        <input type="search" name="srch" id="srch" className="mx-8 py-2 px-5 w-[250px] border-2 border-[#d1d1d1] rounded-full focus:outline-none" />
                        <div className="w-[48px] h-[48px] ms-5" id="profileIcon">
                            <img src="/assets/almubdi.png" alt="profile" />
                        </div>
                    </div>
                </div>
            </header>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/loan' element={<Loan />} />
                <Route path='/return' element={<Return />} />
                <Route path='/containers' element={<Containers />} />
                <Route path='/requests' element={<Requests />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>
    );
}