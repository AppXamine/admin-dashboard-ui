import "../style.css"
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, db } from "../../../config/Firebase/index.js"
import { Button, Input } from "antd";
import { AddData } from "../../../config/Functions/index.js";
import Spiner from "../../../component/Spiner/index.jsx";
import Navbar from "../../../component/Navbar/index.jsx";


function Ziyarat() {
    const [loading, setLoading] = useState(false)
    const [year, setYear] = useState("____")
    const [PQRate, setPQRate] = useState("_______")
    const [duoBedRate, setDuoBedRate] = useState("_______")
    const [threeBedRate, setThreeBedRate] = useState("______")
    const [passValid, setPassValid] = useState("_____")
    const [data, setData] = useState([])
    // console.log("setData=>",  passValid.replaceAll("-"," / "))

    const handleUploader = async () => {
        setLoading(true)
        const obj = {
            year,
            PQRate,
            duoBedRate,
            threeBedRate,
            passValid
        }
        await AddData(obj, "hajj")
        setYear("____")
        setPQRate("_______")
        setDuoBedRate("_______")
        setThreeBedRate("_______")
        setPassValid("_______")
        setLoading(false)
    }

    useEffect(() => {
        const q = query(collection(db, "hajj"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({ ...doc.data(), id: doc.id })
                setData(items)
            });

        });
    }, [])

    console.log("data====>", data)

    return (
        <>
            <div className="screen">
                <Navbar />
                <div className="packageContainer">
                    <div className="renderContainer">
                        <h1>Hajj Package Uploader</h1>
                    </div>
                    <div className="packageBlock">

                        <div className="formContainer">

                            <div className="firstInput">
                                <div className="fromLabel">
                                    <p>Package Year</p>
                                </div>
                                <Input type="number" value={year} onChange={e => setYear(e.target.value)} className="formInputStyle" maxLength={4} />
                            </div>
                            <div className="firstInput">
                                <div className="fromLabel">
                                    <p> Days Package</p>
                                </div>
                                <Input type="date" className="formInputStyle" />
                            </div>
                            <div className="firstInput">
                                <div className="fromLabel">
                                    <p>Package Amount sharing basis without Qurbani</p>
                                </div>
                                <Input type="number" value={PQRate} onChange={e => setPQRate(e.target.value)} className="formInputStyle" />
                            </div>


                            {/* <div className="firstInput">
                                <div className="fromLabel">
                                    <p>Departure Date</p>
                                </div>
                                <Input type="date" className="formInputStyle" />
                            </div> */}


                            {/* <div className="firstInput">
                                <div className="fromLabel">
                                    <p>Arrival Date</p>
                                </div>
                                <Input type="date" className="formInputStyle" />
                            </div> */}
                            <div className="firstInput">
                                <div className="fromLabel">
                                    <p>Double Bed</p>
                                </div>
                                <Input type="number" value={duoBedRate} onChange={e => setDuoBedRate(e.target.value)} className="formInputStyle" />
                            </div>

                            <div className="firstInput">
                                <div className="fromLabel">
                                    <p>Triple Bed</p>
                                </div>
                                <Input type="number" value={threeBedRate} onChange={e => setThreeBedRate(e.target.value)} className="formInputStyle" />
                            </div>
                            <div className="firstInput">
                                <div className="fromLabel">
                                    <p>Passport Valid Date</p>
                                </div>
                                <Input type="date" value={passValid} onChange={e => setPassValid(e.target.value)} className="formInputStyle" />
                            </div>
                            <div className="formBtn">
                                <Button className="btnStyle" onClick={handleUploader} htmlType="submit">
                                    {loading ?
                                        (<Spiner />)
                                        :
                                        (<p>Login Admin</p>)
                                    }
                                </Button>
                            </div>


                        </div>
                    </div>
                    <div className="packageBlockCard">
                        <div className="packageBLockImg">
                            <div className="packageBorder">
                                <div className="packageHeader">
                                    <div className="packageHeaderHeading">
                                        <h1>Hajj Package {year}</h1>
                                        <h2>32 to 34 Days Package</h2>
                                        <h1>{PQRate}/-</h1>
                                        <p>Package Amount sharing basis without Qurbani</p>
                                    </div>
                                    <div className="packageSideImage">
                                        <img src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2F1ZGklMjBhcmFiaWF8ZW58MHx8MHx8fDA%3D" alt="" />
                                    </div>
                                </div>

                                <div className="packageTableBorder">
                                    <div className="packageTable">
                                        <div className="tableHeading">
                                            <h1>Departure Date</h1>
                                            <p>June 14/15, 2022
                                                15/16 Ziqadh</p>
                                        </div>
                                        <div className="tableHeading2">
                                            <h1>Triple Bed<br />
                                                {threeBedRate}/-</h1>
                                            <p>Makkah & Madinah
                                                Separate Room Azizyah
                                                Sharing Basis</p>
                                        </div>
                                    </div>
                                    <div className="packageTable">
                                        <div className="tableHeadingCenter">
                                            <h1>Maktab - Old Mina
                                                Category: D (36)</h1>
                                        </div>
                                        <div className="tableHeading text-center">
                                            <h1>Passport Valid up-to</h1>
                                            <p>{passValid}</p>
                                        </div>
                                    </div>
                                    <div className="packageTable">
                                        <div className="tableHeading text-right">
                                            <h1>Arrival Date</h1>
                                            <p>July 19 2022
                                                20 Zillhajj</p>
                                        </div>
                                        <div className="tableHeading2 text-right">
                                            <h1>Double Bed<br />
                                                {duoBedRate}/-</h1>
                                            <p>Makkah & Madinah
                                                Separate Room Azizyah
                                                Sharing Basis</p>
                                        </div>
                                    </div>


                                </div>

                                <div className="packageTableBorder2">
                                    <div className="tableHeader bg-yello">
                                        <div className="tableHeadValue">
                                            <h1>Date</h1>
                                        </div>
                                        <div className="tableHeadValue">
                                            <h1>Accommodation</h1>
                                        </div>
                                        <div className="tableHeadValue">
                                            <h1>Meal</h1>
                                        </div>
                                    </div>
                                    <div className="tableBody">
                                        <div className="tableItems bg-offWhite">
                                            <div className="tableItemsValue ">
                                                <p>15/16 to 25 Ziqadh</p>
                                                <p>14/15 to 24 June 2022</p>
                                            </div>
                                            <div className="tableItemsValue text-center">
                                                <p>ZAM ZAM Tower
                                                </p>
                                                <p>Makkah Hotel
                                                </p>
                                            </div>
                                            <div className="tableItemsValue ">
                                                <p>Half Board 2 Dish</p>
                                                <p>Economy Class
                                                </p>
                                            </div>
                                        </div>
                                        <div className="tableItems bg-yello">
                                            <div className="tableItemsValue ">
                                                <p>15/16 to 25 Ziqadh</p>
                                                <p>14/15 to 24 June 2022</p>
                                            </div>
                                            <div className="tableItemsValue text-center">
                                                <p>ZAM ZAM Tower
                                                </p>
                                                <p>Makkah Hotel
                                                </p>
                                            </div>
                                            <div className="tableItemsValue ">
                                                <p>Half Board 2 Dish</p>
                                                <p>Economy Class
                                                </p>
                                            </div>
                                        </div>

                                        <div className="tableItems bg-offWhite">
                                            <div className="tableItemsValue ">
                                                <p>15/16 to 25 Ziqadh</p>
                                                <p>14/15 to 24 June 2022</p>
                                            </div>
                                            <div className="tableItemsValue text-center">
                                                <p>ZAM ZAM Tower
                                                </p>
                                                <p>Makkah Hotel
                                                </p>
                                            </div>
                                            <div className="tableItemsValue ">
                                                <p>Half Board 2 Dish</p>
                                                <p>Economy Class
                                                </p>
                                            </div>
                                        </div>

                                        <div className="tableItems bg-yello">
                                            <div className="tableItemsValue ">
                                                <p>15/16 to 25 Ziqadh</p>
                                                <p>14/15 to 24 June 2022</p>
                                            </div>
                                            <div className="tableItemsValue text-center">
                                                <p>ZAM ZAM Tower
                                                </p>
                                                <p>Makkah Hotel
                                                </p>
                                            </div>
                                            <div className="tableItemsValue ">
                                                <p>Half Board 2 Dish</p>
                                                <p>Economy Class
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="renderContainer">
                        <h2>Package Uploaded</h2>
                    </div>
                    <div className="cardSection">
                        {/* card reander here  */}

                        {data.map((value, index) =>
                            <div key={index} className="packageBLockImg">
                                <div className="packageBorder">
                                    <div className="packageHeader">
                                        <div className="packageHeaderHeading">
                                            <h1>Hajj Package {value.year}</h1>
                                            <h2>32 to 34 Days Package</h2>
                                            <h1>{value.PQRate}/-</h1>
                                            <p>Package Amount sharing basis without Qurbani</p>
                                        </div>
                                        <div className="packageSideImage">
                                            <img src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2F1ZGklMjBhcmFiaWF8ZW58MHx8MHx8fDA%3D" alt="" />
                                        </div>
                                    </div>

                                    <div className="packageTableBorder">
                                        <div className="packageTable">
                                            <div className="tableHeading">
                                                <h1>Departure Date</h1>
                                                <p>June 14/15, 2022
                                                    15/16 Ziqadh</p>
                                            </div>
                                            <div className="tableHeading2">
                                                <h1>Triple Bed<br />
                                                    {value.threeBedRate}/-</h1>
                                                <p>Makkah & Madinah
                                                    Separate Room Azizyah
                                                    Sharing Basis</p>
                                            </div>
                                        </div>
                                        <div className="packageTable">
                                            <div className="tableHeadingCenter">
                                                <h1>Maktab - Old Mina
                                                    Category: D (36)</h1>
                                            </div>
                                            <div className="tableHeading text-center">
                                                <h1>Passport Valid up-to</h1>
                                                <p>{value.passValid}</p>
                                            </div>
                                        </div>
                                        <div className="packageTable">
                                            <div className="tableHeading text-right">
                                                <h1>Arrival Date</h1>
                                                <p>July 19 2022
                                                    20 Zillhajj</p>
                                            </div>
                                            <div className="tableHeading2 text-right">
                                                <h1>Double Bed<br />
                                                    {value.duoBedRate}/-</h1>
                                                <p>Makkah & Madinah
                                                    Separate Room Azizyah
                                                    Sharing Basis</p>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="packageTableBorder2">
                                        <div className="tableHeader bg-yello">
                                            <div className="tableHeadValue">
                                                <h1>Date</h1>
                                            </div>
                                            <div className="tableHeadValue">
                                                <h1>Accommodation</h1>
                                            </div>
                                            <div className="tableHeadValue">
                                                <h1>Meal</h1>
                                            </div>
                                        </div>
                                        <div className="tableBody">
                                            <div className="tableItems bg-offWhite">
                                                <div className="tableItemsValue ">
                                                    <p>15/16 to 25 Ziqadh</p>
                                                    <p>14/15 to 24 June 2022</p>
                                                </div>
                                                <div className="tableItemsValue text-center">
                                                    <p>ZAM ZAM Tower
                                                    </p>
                                                    <p>Makkah Hotel
                                                    </p>
                                                </div>
                                                <div className="tableItemsValue ">
                                                    <p>Half Board 2 Dish</p>
                                                    <p>Economy Class
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="tableItems bg-yello">
                                                <div className="tableItemsValue ">
                                                    <p>15/16 to 25 Ziqadh</p>
                                                    <p>14/15 to 24 June 2022</p>
                                                </div>
                                                <div className="tableItemsValue text-center">
                                                    <p>ZAM ZAM Tower
                                                    </p>
                                                    <p>Makkah Hotel
                                                    </p>
                                                </div>
                                                <div className="tableItemsValue ">
                                                    <p>Half Board 2 Dish</p>
                                                    <p>Economy Class
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="tableItems bg-offWhite">
                                                <div className="tableItemsValue ">
                                                    <p>15/16 to 25 Ziqadh</p>
                                                    <p>14/15 to 24 June 2022</p>
                                                </div>
                                                <div className="tableItemsValue text-center">
                                                    <p>ZAM ZAM Tower
                                                    </p>
                                                    <p>Makkah Hotel
                                                    </p>
                                                </div>
                                                <div className="tableItemsValue ">
                                                    <p>Half Board 2 Dish</p>
                                                    <p>Economy Class
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="tableItems bg-yello">
                                                <div className="tableItemsValue ">
                                                    <p>15/16 to 25 Ziqadh</p>
                                                    <p>14/15 to 24 June 2022</p>
                                                </div>
                                                <div className="tableItemsValue text-center">
                                                    <p>ZAM ZAM Tower
                                                    </p>
                                                    <p>Makkah Hotel
                                                    </p>
                                                </div>
                                                <div className="tableItemsValue ">
                                                    <p>Half Board 2 Dish</p>
                                                    <p>Economy Class
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)}


                    </div>
                </div>

            </div>


        </>
    )
}

export default Ziyarat;