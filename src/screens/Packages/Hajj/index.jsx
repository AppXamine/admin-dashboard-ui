import "../style.css"
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, db } from "../../../config/Firebase/index.js"
import { Button, Input } from "antd";
import { AddData } from "../../../config/Constant/index.js";
import Spiner from "../../../component/Spiner/index.jsx";
import Navbar from "../../../component/Navbar/index.jsx";


function Hajj() {
    const [loading, setLoading] = useState(false)
    const [year, setYear] = useState("2023")
    const [PQRate, setPQRate] = useState("1000000")
    const [pkgStart, setPkgStart] = useState("32")
    const [pkgEnd, setPkgEnd] = useState("34")
    const [duoBedRate, setDuoBedRate] = useState("1000000")
    const [threeBedRate, setThreeBedRate] = useState("1000000")
    const [passValid, setPassValid] = useState("2023-12-14")
    const [data, setData] = useState([])

    const handleUploader = async () => {
        setLoading(true)
        const obj = {
            year,
            PQRate,
            pkgStart,
            pkgEnd,
            duoBedRate,
            threeBedRate,
            passValid
        }
        await AddData(obj, "hajj")
        setYear("2023")
        setPQRate("1000000")
        setPkgStart("32")
        setPkgEnd("34")
        setDuoBedRate("1000000")
        setThreeBedRate("1000000")
        setPassValid("2023-12-14")
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

                            {/* first row */}

                            <div className="dividInputs">
                                <div className="firstInput">
                                    <div className="fromLabel">
                                        <p>Package Year</p>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder=".i.e number"
                                        value={year}
                                        onChange={e => setYear(e.target.value)}
                                        className="formInputStyle"
                                        maxLength={4} />
                                </div>
                                <div className="firstInput">
                                    <div className="fromLabel">
                                        <p> Package Amount without Qurbani</p>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder=".i.e number"
                                        className="formInputStyle"
                                        maxLength={6}
                                        value={PQRate}
                                        onChange={e => setPQRate(e.target.value)} />
                                </div>
                            </div>

                            {/* second row */}

                            <div className="dividInputs">
                                <div className="firstInput">
                                    <div className="fromLabel">
                                        <p>Package Start Date <span>( i.e number )</span></p>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder=".i.e number"
                                        onChange={e => setPkgStart(e.target.value)}
                                        value={pkgStart}
                                        className="formInputStyle"
                                        maxLength={2} />
                                </div>

                                <div className="firstInput">
                                    <div className="fromLabel">
                                        <p>Package End Date  <span>( i.e number )</span></p>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder=".i.e number"
                                        onChange={e => setPkgEnd(e.target.value)}
                                        value={pkgEnd}
                                        className="formInputStyle"
                                        maxLength={2} />
                                </div>
                            </div>

                            {/* third row */}

                            <div className="dividInputs">
                                <div className="firstInput">
                                    <div className="fromLabel">
                                        <p>Departure Date</p>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder=".i.e number"
                                        onChange={e => (e.target.value)}
                                        className="formInputStyle"
                                        maxLength={6} />
                                </div>
                                <div className="firstInput">
                                    <div className="fromLabel">
                                        <p>Arrival Date</p>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder=".i.e number"
                                        onChange={e => (e.target.value)}
                                        className="formInputStyle"
                                        maxLength={6} />  </div>
                            </div>

                            {/* Forth row */}
                            <div className="dividInputs">
                                <div className="firstInput">
                                    <div className="fromLabel">
                                        <p>Double Bed Rate</p>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder=".i.e number"
                                        onChange={e => setDuoBedRate(e.target.value)}
                                        value={duoBedRate}
                                        className="formInputStyle"
                                        maxLength={6} />
                                </div>
                                <div className="firstInput">
                                    <div className="fromLabel">
                                        <p>Triple Bed Rate</p>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder=".i.e number"
                                        onChange={e => setThreeBedRate(e.target.value)}
                                        value={threeBedRate}
                                        className="formInputStyle"
                                        maxLength={6} />  </div>
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
                                        (<p>Package Upload</p>)
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* side Card */}
                    <div className="packageBlockCard">
                        <div className="packageBLockImg">
                            <div className="packageBorder">
                                <div className="packageHeader">
                                    <div className="packageHeaderHeading">
                                        <h1>Hajj Package {year}</h1>
                                        <h2>{pkgStart} to {pkgEnd} Days Package</h2>
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

                    {/* Render Area */}
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
                                            <h2>{value.pkgStart} to {value.pkgEnd} Days Package</h2>
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

export default Hajj;