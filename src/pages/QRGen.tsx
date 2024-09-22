import { useEffect, useState } from "react";

export const QRGen = () => {
    const [selectedOption1, setSelectedOption1] = useState("0")
    const [selectedOption2, setSelectedOption2] = useState("0")
    const [selectedOption3, setSelectedOption3] = useState("1")
    const [qty, setQty] = useState("0")

    useEffect(() => {
        setQty("1")
    }, [])
    function handleChange3(event: any) {
        console.log(event.target.value.slice(8))
        setSelectedOption3(event.target.value.slice(8))
    }
    function handleQty(event: any) {
        if (event.target.value > 0) {
            setQty(event.target.value)
        }
    }
    let countrySelector = document.getElementById("country")
    let containerModelSelector = document.getElementById("containerModel")
    function handleSelectBox(num: number) {
        if (num == 1 && countrySelector?.classList.contains("opacity-0")) {
            countrySelector?.classList.remove("opacity-0")
            countrySelector?.classList.remove("max-h-0")
            countrySelector?.classList.remove("overflow-hidden")
            countrySelector?.classList.add("max-h-[100px]")
            countrySelector?.classList.add("overflow-y-scroll")
            countrySelector?.classList.add("pt-10")
            let srch = document.getElementById("srch1") as HTMLInputElement
            srch.value = "";
            filterList1("")
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
            let srch = document.getElementById("srch2") as HTMLInputElement
            srch.value = "";
            filterList2("")
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
        for (const item of document.getElementById("country")?.children!) {
            if (item.children.item(1)?.innerHTML.toLowerCase().indexOf(term) != -1) {
                item.classList.add("block")
                item.classList.remove("hidden")
            } else {
                item.classList.add("hidden")
                item.classList.remove("block")
            }
        }
    }
    function filterList2(term: any) {
        for (const item of document.getElementById("containerModel")?.children!) {
            if (item.children.item(1)?.innerHTML.toLowerCase().indexOf(term) != -1) {
                item.classList.add("block")
                item.classList.remove("hidden")
            } else {
                item.classList.add("hidden")
                item.classList.remove("block")
            }
        }
    }
    document.querySelectorAll(".item1").forEach(item => {
        item.addEventListener("click", () => {
            countrySelector!.nextElementSibling!.innerHTML = item!.children.item(1)!.innerHTML
            setSelectedOption1("1")
            console.log("asdfasdf");
        })
    })
    document.querySelectorAll(".item2").forEach(item => {
        item.addEventListener("click", () => {
            containerModelSelector!.nextElementSibling!.innerHTML = item!.children.item(1)!.innerHTML
            setSelectedOption2("1")
            console.log("asdfasdf");
        })
    })
    return (
        <div className="flex flex-col items-center w-full px-5 mt-8 bg-[#f5f5f9]">
            <h1 className="flex w-full py-4 rounded-t-lg bg-[#F9FAFB] px-16 border-[#EAECF0] border-[1px]">QR Generator</h1>
            <div className="flex flex-col md:flex-row justify-between w-full bg-cont-100 pt-10 md:px-10">
                <div className="flex flex-col md:w-1/3 w-full md:px-2 px-[20%]">
                    <div className="flex flex-col-reverse">
                        <div className="relative flex flex-col ps-5 opacity-0 max-h-0 overflow-hidden text-[12px] md:text-[16px] bg-[#f1f1f1] rounded-md" id="country">
                            <div className="cursor-pointer item1">
                                <input type="radio" className="hidden" name="category" id="1" />
                                <label htmlFor="1">UAE</label>
                            </div>
                            <input type="text" name="srch1" id="srch1" placeholder="Search in Countries"
                                className="bg-[#f1f1f1] absolute top-0 z-50 py-2 focus:outline-none" onKeyUp={e => {
                                    const inputT = e.target as HTMLInputElement
                                    filterList1(inputT.value)
                                }} />
                        </div>
                        <div className="py-2 px-3 my-3 shadow-[0_0px_15px_-3px] rounded-full cursor-pointer text-[12px] md:text-[16px]" onClick={() => handleSelectBox(1)}>Country</div>
                    </div>
                    <div className="flex flex-col-reverse">
                        <div className="relative flex flex-col ps-5 opacity-0 max-h-0 overflow-hidden text-[12px] md:text-[16px] bg-[#f1f1f1]" id="containerModel">
                            <div className="cursor-pointer item2">
                                <input type="radio" className="hidden" name="category2" id="1" />
                                <label htmlFor="1">1</label>
                            </div>
                            <div className="cursor-pointer item2">
                                <input type="radio" className="hidden" name="category2" id="2" />
                                <label htmlFor="2">2</label>
                            </div>
                            <div className="cursor-pointer item2">
                                <input type="radio" className="hidden" name="category2" id="3" />
                                <label htmlFor="3">3</label>
                            </div>
                            <div className="cursor-pointer item2">
                                <input type="radio" className="hidden" name="category2" id="4" />
                                <label htmlFor="4">4</label>
                            </div>
                            <div className="cursor-pointer item2">
                                <input type="radio" className="hidden" name="category2" id="5" />
                                <label htmlFor="5">5</label>
                            </div>
                            <div className="cursor-pointer item2">
                                <input type="radio" className="hidden" name="category2" id="6" />
                                <label htmlFor="6">6</label>
                            </div>
                            <div className="cursor-pointer item2">
                                <input type="radio" className="hidden" name="category2" id="7" />
                                <label htmlFor="7">7</label>
                            </div>
                            <div className="cursor-pointer item2">
                                <input type="radio" className="hidden" name="category2" id="8" />
                                <label htmlFor="8">8</label>
                            </div>
                            <input type="text" name="srch2" id="srch2" placeholder="Search in Countries"
                                className="bg-[#f1f1f1] absolute top-0 z-50 py-2 focus:outline-none" onKeyUp={e => {
                                    const inputT = e.target as HTMLInputElement
                                    filterList2(inputT.value)
                                }} />
                        </div>
                        <div className="py-2 px-3 my-3 shadow-[0_0px_15px_-3px] rounded-full cursor-pointer text-[12px] md:text-[16px]" onClick={() => handleSelectBox(2)}>Container model</div>
                    </div>
                    <input type="date" name="date" id="date" className="py-2 my-3 shadow-[0_0px_15px_-3px] rounded-full" onChange={(e) => handleChange3(e)} />
                    <input type="number" value={qty} placeholder="Quantity" className="py-2 my-3 shadow-[0_0px_15px_-3px] rounded-full" name="num" id="num" onChange={(e) => handleQty(e)} />
                </div>
                <div className="flex flex-col items-center md:relative -top-5">
                    <img src="/assets/QR.png" alt="QR" />
                    <button className={`flex justify-center w-[80%] rounded-full text-cont-100 ${((parseInt(selectedOption1)) * (parseInt(selectedOption2)) * (parseInt(selectedOption3))) > 0 ? "bg-[#03C088]" : "bg-[#BFC3C2]"} text-cont100 py-2`}>Download</button>
                    <p className="text-[#03C088]">{((parseInt(selectedOption1)) * (parseInt(selectedOption2)) * (parseInt(selectedOption3))) > 0 ? qty : ""}</p>
                </div>
            </div>
        </div>
    )
}
export default QRGen;