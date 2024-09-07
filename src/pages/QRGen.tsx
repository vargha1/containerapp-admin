import { useState } from "react";

export const QRGen = () => {
    const [selectedOption1, setSelectedOption1] = useState("1")
    const [selectedOption2, setSelectedOption2] = useState("1")
    const [selectedOption3, setSelectedOption3] = useState("1")
    const [qty, setQty] = useState(0)

    function handleChange1(event: any) {
        setSelectedOption1(event.target.value)
    }
    function handleChange2(event: any) {
        setSelectedOption2(event.target.value)
    }
    function handleChange3(event: any) {
        setSelectedOption3(event.target.value.slice(8))
    }
    function handleQty(event: any) {
        setQty(event.target.value)
    }
    return (
        <div className="flex flex-col items-center w-full px-5 mt-8 bg-[#f5f5f9]">
            <h1 className="flex w-full py-4 rounded-t-lg bg-[#F9FAFB] px-16 border-[#EAECF0] border-[1px]">QR Generator</h1>
            <div className="flex justify-between w-full h-[calc(100svh-172px)] bg-cont-100 pt-10 md:px-10">
                <div className="flex flex-col w-1/3 px-4">
                    <select value={selectedOption1} className="py-2 my-3 shadow-[0_0px_15px_-3px] rounded-full" name="country" id="country" onChange={handleChange1}>
                        <option value="1" disabled>Country</option>
                        <option value="2">UAE</option>
                    </select>
                    <select value={selectedOption2} className="py-2 my-3 shadow-[0_0px_15px_-3px] rounded-full" name="containerModel" id="containerModel" onChange={handleChange2}>
                        <option value="1" disabled>Container model</option>
                        <option value="2">1</option>
                        <option value="3">2</option>
                        <option value="4">3</option>
                        <option value="5">4</option>
                        <option value="6">5</option>
                        <option value="7">6</option>
                        <option value="8">7</option>
                        <option value="9">8</option>
                    </select>
                    <input type="date" name="date" id="date" className="py-2 my-3 shadow-[0_0px_15px_-3px] rounded-full" onChange={handleChange3} />
                    <input type="number" value={qty} placeholder="Quantity" className="py-2 my-3 shadow-[0_0px_15px_-3px] rounded-full" name="num" id="num" onChange={handleQty} />
                </div>
                <div className="flex flex-col items-center relative -top-5">
                    <img src="/assets/QR.png" alt="QR" />
                    <button className={`flex justify-center w-[80%] rounded-full text-cont-100 ${((parseInt(selectedOption1) - 1) * (parseInt(selectedOption2) - 1) * (parseInt(selectedOption3))) > 0 ? "bg-[#03C088]" : "bg-[#BFC3C2]"} text-cont100 py-2`}>Download</button>
                    <p className="text-[#03C088]">{((parseInt(selectedOption1) - 1) * (parseInt(selectedOption2) - 1) * (parseInt(selectedOption3))) > 0 ? qty : ""}</p>
                </div>
            </div>
        </div>
    )
}
export default QRGen;