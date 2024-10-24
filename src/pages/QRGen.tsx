import { useEffect, useRef, useState } from "react";
import NotFound from "../components/layout-components/NotFound";
import { getLog } from "./auth/auth-components/Login";
import qr_api from "../api/QR";
import QRCode from "react-qr-code";
import { renderToStaticMarkup } from "react-dom/server";

export const QRGen = () => {
    const [loaded, setLoaded] = useState(false)
    const res = getLog()
    const [selectedOption1, setSelectedOption1] = useState("0")
    const [selectedOption2, setSelectedOption2] = useState("0")
    const [selectedOption3, setSelectedOption3] = useState("1")
    const [qty, setQty] = useState("0")
    const [id, setId] = useState("1")
    const [countryList, setCountryList] = useState({})
    const [types, setTypes] = useState({})
    const [codeValue, setCodeValue] = useState("")
    useEffect(() => {
        setCountryList({})
        setTypes({})
        async function fetchTypesAndCountries() {
            try {
                const response = await qr_api.get("/api/v0/pack/containers/types_and_countries", {
                    headers: {
                        "Authorization": `JWT ${localStorage.getItem("loginStatus")}`
                    }
                })
                setCountryList(response.data.countries)
                setTypes(response.data.types)
                setLoaded(true)
            } catch (err: any) {
                if (err.response) {
                    if (err.response.status == 403) {

                    }
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }
        fetchTypesAndCountries()
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

    const svgWrapperRef = useRef<HTMLDivElement | null>(null); // Wrapper for SVG
    const canvasRef = useRef<HTMLCanvasElement | null>(null);  // Canvas ref

    function handleQrCreation() {
        let allCodes: any = [1];
        qr_api.post("/api/v0/pack/containers/generate_codes/", {
            "country": selectedOption1,
            "type": selectedOption2,
            "count": qty,
            "shop": id
        }, {
            headers: {
                "Authorization": `JWT ${localStorage.getItem("loginStatus")}`
            }
        }).then(response => {
            allCodes = response.data.generate_codes
        })
        allCodes!.forEach((item: string) => {
            const canvasRef = useRef<HTMLCanvasElement | null>(null);
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Generate the QRCodeSVG as a string using renderToStaticMarkup
            const svgString = renderToStaticMarkup(<QRCode value={item} size={200} />);

            // Create a Blob from the SVG string
            const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(svgBlob);

            const image = new Image();
            image.onload = () => {
                // Set canvas dimensions based on the size of the QR code (in this case, 200x200)
                canvas.width = 200;
                canvas.height = 200;

                // Draw the image on the canvas
                ctx.drawImage(image, 0, 0);

                // Convert the canvas content to a PNG
                const pngUrl = canvas.toDataURL("image/png");

                // Create a download link and trigger the download
                const downloadLink = document.createElement("a");
                downloadLink.href = pngUrl;
                downloadLink.download = "qr_code.png";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);

                // Clean up the object URL
                URL.revokeObjectURL(url);
            };

            // Set the image source to the SVG Blob URL
            image.src = url;
        });
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
    useEffect(() => {
        if (loaded == true) {
            document.querySelectorAll(".itemType1").forEach(item => {
                item.addEventListener("click", () => {
                    countrySelector!.nextElementSibling!.innerHTML = item!.children.item(1)!.innerHTML
                    setSelectedOption1(item!.children.item(1)!.innerHTML)
                    console.log("asdfasdf");
                })
            })
            document.querySelectorAll(".itemType2").forEach(item => {
                item.addEventListener("click", () => {
                    containerModelSelector!.nextElementSibling!.innerHTML = item!.children.item(1)!.innerHTML
                    setSelectedOption2(item!.children.item(1)!.innerHTML)
                    console.log("asdfasdf");
                })
            })
        }
        console.log(loaded);
    }, [loaded])

    if (res == true) {
        return (
            <div className="flex flex-col items-center w-full px-5 mt-8 bg-[#f5f5f9]">
                <h1 className="flex w-full py-4 rounded-t-lg bg-[#F9FAFB] px-16 border-[#EAECF0] border-[1px]">QR Generator</h1>
                <div className="flex flex-col md:flex-row justify-between w-full bg-cont-100 pt-10 md:px-10">
                    <div className="flex flex-col md:w-1/3 w-full md:px-2 px-[20%]">
                        <div className="flex flex-col-reverse">
                            <div className="relative flex flex-col ps-5 opacity-0 max-h-0 overflow-hidden text-[12px] md:text-[16px] bg-[#f1f1f1] rounded-md" id="country">
                                {Object.keys(countryList).map((country, index) => (
                                    <div className={`cursor-pointer itemType1`} key={index}>
                                        <input type="radio" className="hidden" name="category" id={(index + 1).toString()} />
                                        <label htmlFor={index.toString()} >{country}</label>
                                    </div>
                                ))}
                                <input type="text" name="srch1" id="srch1" placeholder="Search in Countries"
                                    className="bg-[#f1f1f1] absolute top-0 z-50 py-2 focus:outline-none" onKeyUp={e => {
                                        const inputT = e.target as HTMLInputElement
                                        filterList1(inputT.value)
                                    }} />
                            </div>
                            <div className="py-2 px-3 my-3 shadow-[0_0px_15px_-3px] rounded-full cursor-pointer text-[12px] md:text-[16px]" onClick={() => handleSelectBox(1)} >Country</div>
                        </div>
                        <div className="flex flex-col-reverse">
                            <div className="relative flex flex-col ps-5 opacity-0 max-h-0 overflow-hidden text-[12px] md:text-[16px] bg-[#f1f1f1]" id="containerModel">
                                {Object.keys(types).map((type, index) => {
                                    return (
                                        <div className="cursor-pointer itemType2" key={index}>
                                            <input type="radio" className="hidden" name="category2" id={(index + 1).toString()} />
                                            <label htmlFor="1">{type}</label>
                                        </div>
                                    )
                                })}
                                <input type="text" name="srch2" id="srch2" placeholder="Search in Countries"
                                    className="bg-[#f1f1f1] absolute top-0 z-50 py-2 focus:outline-none" onKeyUp={e => {
                                        const inputT = e.target as HTMLInputElement
                                        filterList2(inputT.value)
                                    }} />
                            </div>
                            <div className="py-2 px-3 my-3 shadow-[0_0px_15px_-3px] rounded-full cursor-pointer text-[12px] md:text-[16px]" onClick={() => handleSelectBox(2)}>Container model</div>
                        </div>
                        <input type="date" name="date" id="date" className="py-2 px-3 my-3 shadow-[0_0px_15px_-3px] rounded-full" onChange={(e) => handleChange3(e)} />
                        <input type="number" value={qty} placeholder="Quantity" className="py-2 px-3 my-3 shadow-[0_0px_15px_-3px] rounded-full" name="num" id="num" onChange={(e) => handleQty(e)} />
                        <input type="number" value={id} placeholder="Shop id from shop list" className="py-2 px-3 my-3 shadow-[0_0px_15px_-3px] rounded-full" name="shopId" id="shopId" onChange={e => setId(e.target.value)} />
                    </div>
                    <div className="flex flex-col items-center md:relative -top-5" ref={svgWrapperRef}>
                        <QRCode value={codeValue} level="H" />
                        <button className={`flex justify-center w-[80%] mt-5 rounded-full text-cont-100 ${((parseInt(selectedOption3)) > 0 && selectedOption1 != "0" && selectedOption2 != "0") ? "bg-[#03C088]" : "bg-[#BFC3C2]"} text-cont100 py-2`} onClick={handleQrCreation}>Download</button>
                        <p className="text-[#03C088]">{((parseInt(selectedOption3)) > 0 && selectedOption1 != "0" && selectedOption2 != "0") ? qty : ""}</p>
                    </div>
                    <canvas ref={canvasRef} className="hidden"></canvas>
                </div>
            </div>
        )
    } else {
        return <NotFound />
    }
}
export default QRGen;