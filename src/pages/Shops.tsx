import { useEffect, useState } from "react";
import { SvgLocation } from "../icons/SvgLocation";
import { SvgLock } from "../icons/SvgLock";
import { SvgShowPwd } from "../icons/SvgShowPwd";
import { SvgApply } from "../icons/SvgApply";
import shops_api from "../api/shops";

export const Shops = () => {
    const [visiblityState, setVisiblityState] = useState("password")
    function passChangerOpen(id: number) {
        document.getElementById("passChanger")?.classList.remove("invisible")
        document.getElementById("cover")?.classList.remove("invisible")
        console.log(id)
    }

    function passChangerClose() {
        document.getElementById("passChanger")?.classList.add("invisible")
        document.getElementById("cover")?.classList.add("invisible")
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await shops_api.get("/api/v0/shops/shop", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    }
                })
                console.log(response);
            } catch (err: any) {
                if (err.response) {
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }
        fetchUsers()
    }, [])

    return (
        <div className='w-full flex justify-center items-center'>
            <table className="md:w-[90%] w-full rounded-md border-2 border-[#d9d9d9] border-separate border-spacing-0 bg-cont-100 my-12">
                <thead className="bg-[#F9FAFB]">
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9] font-bold">Name</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] font-bold">Join Date</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] font-bold">Email</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] font-bold">Phone Number</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] font-bold">Password</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] font-bold">Location</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] font-bold">Actions</td>
                    </tr>
                </thead>
                { }
                <tbody>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 border-b-2 py-3 border-[#d9d9d9]">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">August 9</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">Shop@gmail.com</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLocation fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9] w-[20%]">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[10px] md:text-[16px] md:ps-12 ps-6 py-3">SHOP NAME</td>
                        <td className="text-[10px] md:text-[16px] py-3">Date</td>
                        <td className="text-[10px] md:text-[16px] py-3">Guarantee</td>
                        <td className="text-[10px] md:text-[16px] py-3">97123433333</td>
                        <td className="text-[10px] md:text-[16px] border-b-2 py-3 border-[#d9d9d9]"><SvgLock fillColor="#292D32" click={() => passChangerOpen(1)} /></td>
                        <td className="text-[10px] md:text-[16px*d9]"><SvgLock fillColor="#292D32" /></td>
                        <td className="text-[10px] md:text-[16px] 20-3">
                            <button className="md:mx-1 xl:mx-2 md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#03C088] text-cont-100 rounded-full">Activate</button>
                            <button className="md:px-1 xl:px-4 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] px-1 py-1 bg-[#FF928B] text-cont-100 rounded-full">Deactivate</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex items-center rounded-full p-2 shadow-[0_0px_15px_-3px] z-20 fixed top-1/2 bg-white select-none invisible" id="passChanger">
                <input type={visiblityState} placeholder="Enter Password..." name="vrpass" id="pass" className="p-2 mx-3 rounded-full text-lg outline-none" />
                <div className="flex absolute right-32" onClick={() => { visiblityState == "password" ? setVisiblityState("text") : setVisiblityState("password") }}>
                    <SvgShowPwd className="relative" />
                </div>
                <button className="flex justify-center items-center rounded-full md:w-10 w-5 md:h-10 h-5 ms-5 bg-[#03C088]" onClick={() => passChangerClose()}><SvgApply className="" /></button>
                <button className="flex justify-center items-center rounded-full md:w-10 w-5 md:h-10 h-5 ms-2 bg-[#FF928B] text-white text-6xl rotate-45" onClick={() => passChangerClose()}><p className="relative -top-[5px] -right-[1px]">+</p></button>
            </div>
            <div className="bg-black opacity-35 fixed top-0 right-0 bottom-0 md:left-[250px] invisible" id="cover" onClick={() => passChangerClose()}></div>
        </div >
    )
}
export default Shops;