import { useRef } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
export const Profile = () => {
    const mapRef = useRef(null)
    return (
        <>
            <div className="flex flex-col w-[90%] mt-20 px-8 py-12 bg-[#F9FAFB]">
                <form action="/asdasd" method="post" className="flex flex-col">
                    <div className="flex justify-between">
                        <input type="text" name="username" id="username" placeholder="Enter Username" className="xl:text-2xl md:text-xl w-[45%] py-4 px-3 mb-5 rounded-full" />
                        <input type="text" name="email" id="email" placeholder="Enter Email" className="xl:text-2xl md:text-xl w-[45%] py-4 px-3 mb-5 rounded-full" />
                    </div>
                    <div className="flex justify-between mt-5">
                        <input type="password" name="old" id="old" placeholder="Old Password" className="xl:text-2xl md:text-xl w-[45%] py-4 px-3 mb-5 rounded-full" />
                        <input type="password" name="new" id="new" placeholder="New Password" className="xl:text-2xl md:text-xl w-[45%] py-4 px-3 mb-5 rounded-full" />
                    </div>
                </form>
                <div className="flex w-full h-[400px] rounded-3xl">
                    <MapContainer center={[51.505, -0.09]} zoom={13} ref={mapRef} style={{ width: "100%", height: "100%", borderRadius: "36px" }} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                </div>
            </div>
        </>
    )
}
export default Profile