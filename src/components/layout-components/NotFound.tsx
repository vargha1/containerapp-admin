import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className='w-full h-[100svh] flex flex-col justify-center items-center'>
            <h1 className="text-[12rem]">404</h1>
            <Link to="/p/home" className="text-[3rem]">Back to Home</Link>
        </div >
    )
}
export default NotFound