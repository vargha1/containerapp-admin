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
    handleChange1("1")
    handleChange2("1")
    function handleChange3(event: any) {
        setSelectedOption3(event.target.value.slice(8))
    }
    function handleQty(event: any) {
        setQty(event.target.value)
    }
    function handleSelectBox(num: number) {
        let countrySelector = document.getElementById("country")
        let containerModelSelector = document.getElementById("containerModel")
        if (num == 1 && countrySelector?.classList.contains("opacity-0")) {
            countrySelector?.classList.remove("opacity-0")
            countrySelector?.classList.remove("max-h-0")
            countrySelector?.classList.remove("overflow-hidden")
            countrySelector?.classList.add("max-h-[100px]")
            countrySelector?.classList.add("overflow-y-scroll")
            countrySelector?.classList.add("pt-10")
        } else {
            countrySelector?.classList.add("opacity-0")
            countrySelector?.classList.add("max-h-0")
            countrySelector?.classList.add("overflow-hidden")
            countrySelector?.classList.remove("max-h-[100px]")
            countrySelector?.classList.remove("overflow-y-scroll")
            countrySelector?.classList.remove("pt-10")
        }

        if (num == 2 && containerModelSelector?.classList.contains("opacity-0")) {
            containerModelSelector?.classList.remove("opacity-0")
            containerModelSelector?.classList.remove("max-h-0")
            containerModelSelector?.classList.remove("overflow-hidden")
            containerModelSelector?.classList.add("max-h-[100px]")
            containerModelSelector?.classList.add("overflow-y-scroll")
            containerModelSelector?.classList.add("pt-10")
        } else {
            containerModelSelector?.classList.add("opacity-0")
            containerModelSelector?.classList.add("max-h-0")
            containerModelSelector?.classList.add("overflow-hidden")
            containerModelSelector?.classList.remove("max-h-[100px]")
            containerModelSelector?.classList.remove("overflow-y-scroll")
            containerModelSelector?.classList.remove("pt-10")
        }
    }
    function filterList1(term: any) {
        if (document.getElementById("country")!.children?.item(1)!.innerHTML.toLowerCase().indexOf(term) != -1) {
            document.getElementById("country")!.classList.add("block")
            document.getElementById("country")!.classList.remove("hidden")
        } else {
            document.getElementById("country")!.classList.add("hidden")
            document.getElementById("country")!.classList.remove("block")
        }
    }

    return (
        <div className="flex flex-col items-center w-full px-5 mt-8 bg-[#f5f5f9]">
            <h1 className="flex w-full py-4 rounded-t-lg bg-[#F9FAFB] px-16 border-[#EAECF0] border-[1px]">QR Generator</h1>
            <div className="flex flex-col md:flex-row justify-between w-full md:h-[calc(100svh-172px)] bg-cont-100 pt-10 md:px-10">
                <div className="flex flex-col md:w-1/3 w-full md:px-2 px-[20%]">
                    <div className="flex flex-col-reverse">
                        <div className="relative flex flex-col ps-5 opacity-0 max-h-0 overflow-hidden text-[12px] md:text-[16px] bg-[#f1f1f1] rounded-md" id="country">
                            <div>UAE</div>
                            <input type="text" name="srch" id="srch" placeholder="Search in Countries"
                                className="bg-[#f1f1f1] absolute top-0 z-50 py-2 focus:outline-none" onKeyUp={e => {
                                    const inputT = e.target as HTMLInputElement
                                    filterList1(inputT.value)
                                }} />
                        </div>
                        <div className="py-2 px-3 my-3 shadow-[0_0px_15px_-3px] rounded-full cursor-pointer text-[12px] md:text-[16px]" onClick={() => handleSelectBox(1)}>Country</div>
                    </div>
                    <div className="flex flex-col-reverse">
                        <div className="relative flex flex-col ps-5 opacity-0 max-h-0 overflow-hidden text-[12px] md:text-[16px] bg-[#f1f1f1]" id="containerModel">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <input type="text" name="srch" id="srch" placeholder="Search in Models"
                                className="bg-[#f1f1f1] absolute top-0 z-50 py-2 focus:outline-none" />
                        </div>
                        <div className="py-2 px-3 my-3 shadow-[0_0px_15px_-3px] rounded-full cursor-pointer text-[12px] md:text-[16px]" onClick={() => handleSelectBox(2)}>Container model</div>
                    </div>
                    <input type="date" name="date" id="date" className="py-2 my-3 shadow-[0_0px_15px_-3px] rounded-full" onChange={handleChange3} />
                    <input type="number" value={qty} placeholder="Quantity" className="py-2 my-3 shadow-[0_0px_15px_-3px] rounded-full" name="num" id="num" onChange={handleQty} />
                </div>
                <div className="flex flex-col items-center md:relative -top-5">
                    <img src="/assets/QR.png" alt="QR" />
                    <button className={`flex justify-center w-[80%] rounded-full text-cont-100 ${((parseInt(selectedOption1) - 1) * (parseInt(selectedOption2) - 1) * (parseInt(selectedOption3))) > 0 ? "bg-[#03C088]" : "bg-[#BFC3C2]"} text-cont100 py-2`}>Download</button>
                    <p className="text-[#03C088]">{((parseInt(selectedOption1) - 1) * (parseInt(selectedOption2) - 1) * (parseInt(selectedOption3))) > 0 ? qty : ""}</p>
                </div>
            </div>
        </div>
    )
}
export default QRGen;