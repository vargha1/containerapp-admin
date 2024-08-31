import { useState } from "react";
export const Main = () => {
    let [list, setList] = useState([
        {
            id: 1,
            name: "VR1",
            imgSrc: "/assets/bag-happy1.png",
            Qty: 0,
        },
        {
            id: 2,
            name: "VR2",
            imgSrc: "/assets/bag-happy1.png",
            Qty: 0,
        },
        {
            id: 3,
            name: "VR3",
            imgSrc: "/assets/bag-happy1.png",
            Qty: 0,
        },
        {
            id: 4,
            name: "VR4",
            imgSrc: "/assets/bag-happy1.png",
            Qty: 0,
        },
        {
            id: 5,
            name: "VR5",
            imgSrc: "/assets/bag-happy1.png",
            Qty: 0,
        },
    ])
    function handlePopup(type: string) {
        if (type == "close") {
            document.getElementById("wrapper")?.classList.add("hidden")
        }
        if (type == "reset") {
            document.getElementById("wrapper")?.classList.add("hidden")
            setList([
                {
                    id: 1,
                    name: "VR1",
                    imgSrc: "/assets/bag-happy1.png",
                    Qty: 0,
                },
                {
                    id: 2,
                    name: "VR2",
                    imgSrc: "/assets/bag-happy1.png",
                    Qty: 0,
                },
                {
                    id: 3,
                    name: "VR3",
                    imgSrc: "/assets/bag-happy1.png",
                    Qty: 0,
                },
                {
                    id: 4,
                    name: "VR4",
                    imgSrc: "/assets/bag-happy1.png",
                    Qty: 0,
                },
                {
                    id: 5,
                    name: "VR5",
                    imgSrc: "/assets/bag-happy1.png",
                    Qty: 0,
                },
            ])
        }
        if (type == "open" && getQty() > 0) {
            document.getElementById("wrapper")?.classList.remove("hidden")
        }
    }
    function addPlate(id: any) {
        if (list[id - 1].Qty < 99) {
            list[id - 1].Qty += 1
        }
        setList([...list])
    }
    function removePlate(id: any) {
        if (list[id - 1].Qty > 0) {
            list[id - 1].Qty -= 1
        }
        setList([...list])
    }
    function getQty() {
        let Qty = list.reduce((a, b) => a + b.Qty, 0)
        return Qty
    }
    return (
        <>
            <div className="flex flex-col items-center w-full bg-white">
                <div className="flex w-full bg-[#F9FAFB] py-5 px-6 border-2 border-[#EAECF0]">
                    <h3 className="text-cont-50">Containers</h3>
                </div>
                <div className="flex flex-col w-[90%]">
                    {list.map((item, index) => (
                        <div className="flex items-center w-full border-b-2 border-[#d9d9d9] py-6" key={index}>
                            <img src={item.imgSrc} alt="" />
                            <button id={`plusBtn${item.id}`} className="flex justify-center items-center w-[40px] h-[40px] text-3xl text-cont-100 rounded-full bg--cont-150 ms-6" onClick={() => addPlate(item.id)}>+</button>
                            <input type="number" id={`num${item.id}`} className="shadow-lg rounded-full w-[60px] h-fit py-2 outline-none ps-7 mx-3 num" value={item.Qty} onChange={event => list[item.id].Qty = parseInt(event.target.value)} />
                            <button id={`minusBtn${item.id}`} className="flex justify-center items-center w-[40px] h-[40px] text-3xl text-cont-100 rounded-full bg--cont-150" onClick={() => removePlate(item.id)}>-</button>
                        </div>
                    ))}
                    <button className={`bg-[${getQty() > 0 ? "#363740" : "#0000ff"}] rounded-full fixed px-6 py-2 right-5 bottom-5 text-cont-100`} onClick={() => handlePopup("open")}>Send Request</button>
                </div>
            </div>
            <div id="wrapper" className="flex justify-center items-center fixed inset-0 hidden">
                <div className="fixed inset-0 backdrop-blur-sm z-[2]" onClick={() => handlePopup("close")}></div>
                <div className="flex flex-col items-center w-[400px] h-[500px] z-[3] shadow-lg bg-white px-10 py-4 relative">
                    <h2 className="text-2xl">Are you sure about this request?</h2>
                    <div className="flex w-full"></div>
                    {list.map((item, index) => (
                        <div className="flex items-center w-full py-1" key={index}>
                            <img src={item.imgSrc} alt="" />
                            <p className="text-6xl rotate-45">+</p>
                            <h3>{item.Qty}</h3>
                        </div>
                    ))}
                    <div className="flex w-full absolute bottom-4 px-10">
                        <button className="rounded-full w-[calc(33.33%-16px)] me-4 py-2 shadow-lg" onClick={() => handlePopup("close")}>No</button>
                        <button className="rounded-full w-2/3 py-2 bg--cont-150 text-white" onClick={() => handlePopup("reset")}>Yes, send the Request</button>
                    </div>
                </div>
            </div>
        </>
    )
}