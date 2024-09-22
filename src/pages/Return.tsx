import { useEffect } from "react";
import api from "../api/users.ts"

export const Return = () => {
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get("/users")
            } catch (err) {

            }
        }
    }, [])

    return (
        <div className='w-full flex justify-center items-center'>
            <table className="w-[90%] rounded-md border-2 border-[#d9d9d9] border-separate border-spacing-0 bg-cont-100 my-12">
                <thead className="bg-[#F9FAFB]">
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9] font-bold">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9] font-bold">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9] font-bold">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9] font-bold">Dead line</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 border-b-2 py-3 border-[#d9d9d9]">Name</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Date</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Guarantee</td>
                        <td className="border-b-2 py-3 border-[#d9d9d9]">Dead line</td>
                    </tr>
                    <tr>
                        <td className="ps-12 py-3">Name</td>
                        <td className="py-3">Date</td>
                        <td className="py-3">Guarantee</td>
                        <td className="py-3">Dead line</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Return;