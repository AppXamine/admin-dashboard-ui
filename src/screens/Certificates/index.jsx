import "../Gallary/style.css"
import { useState } from "react";
import { Button, Input, Form } from "antd";
// import { storage, ref, uploadBytesResumable, getDownloadURL } from "../../config/Firebase/index.js"
import { AntDragger } from "../../component/AntUploader/Index.jsx";
import { AddData, uploadFile } from "../../config/Constant/index.js";
import Spiner from "../../component/Spiner/index.jsx";
import Navbar from "../../component/Navbar/index.jsx";

function Certificates() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
   const handleUploadFile = (file) => {
        //    const url = Promise.resolve(uploadFile(file, 'gallery'))
        const obj = {
            id: file.uid,
            image: file,
            title: '',
            year: '',
        }
        setData(prev => [obj, ...prev])
        console.log('data => ', data)
    }

    const handleTitleText = (e, id) => {
        const findData = data.find(data => data.id === id)
        // const filterData = image.filter(data => data.id !== id)
        findData.title = e.target.value
        console.log('data => ', findData, data, e.target.value)
    }

    const handlerYearText = (e, id) => {
        console.log("desc===>", e.target.value)
        const findData = data.find(data => data.id === id)
        findData.year = e.target.value
    }

    console.log('data => ', data)

    const handleUploader = async () => {
        setLoading(true)
        for (let i = 0; i < data.length; i++) {
            const url = await Promise.resolve(uploadFile(data[i].image, 'gallery'))
            data[i].image = url
            await AddData(data[i], "gallery")
            // const arr =[...data]
            // arr.shift()
            // setData(arr)
            console.log("data =>", data[i])
        }
        setLoading(false)
        setData([])
    }

    return (
        <>
            <div className="screen">
                <Navbar />
                <div className="gallaryContainer">
                    <div className="w-full text-center ">
                        <p className="m-0 text-[#011635] tracking-[-0.025rem] text-[3em] font-bold">Certificate File Uploader</p>
                    </div>
                    <div className="max-w-[1120px] mr-[auto] ml-[auto] h-[1px] bg-[#00337c] mt-[10px]"></div>
                    <div className="w-full h-[auto] flex flex-wrap justify-center bg-[#eee] mt-[20px] mb-[20px] ml-[auto] mr-[auto] max-w-[1200px] p-[20px]">
                        <div className="w-full bg-[#fff] rounded-[10px] mb-[20px]">
                            <AntDragger uploadFile={handleUploadFile} />
                        </div>
                    </div>
                    <div className="galleryInputs">
                        <div className="galleryInputHeading">
                            <h5>Certificate Image Detail</h5>
                        </div>
                        <div className="uploadContainer">
                            {/* card map */}
                            {data.map((value, index) =>
                                <div className="uploadImageUi">
                                    {console.log("index====>", index)}
                                    <div key={index} className="imageUploadContainer">
                                        <img src={URL.createObjectURL(value.image)} alt="" />
                                    </div>
                                    <div className="uploadInputs">
                                        <div className="galleryUploadInput">
                                            <div className="labelUploadGallery">
                                                <p>Title<span>{`(i.e. 1 line title only)`}</span></p>
                                            </div>
                                            <Input placeholder="Enter Certificate title here" maxLength={50} className="inputUploadGallery" onChange={e => handleTitleText(e, value.id)} />
                                        </div>
                                        <div className="galleryUploadInput">
                                            <div className="labelUploadGallery">
                                                <p>Certificate Year <span>{`(i.e. Number only)`}</span></p>
                                            </div>
                                            <Input type="number" placeholder="Enter certificate year here" maxLength={50} className="inputUploadGallery" onChange={e => handlerYearText(e, value.id)} />
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                        {data && <div className="gallerybtn">
                            <Button disabled={loading} onClick={handleUploader} className="btnStyle" htmlType="submit">
                                {loading ?
                                    (<Spiner />)
                                    :
                                    (<p>Upload Certificate</p>)
                                }
                            </Button>
                        </div>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Certificates;