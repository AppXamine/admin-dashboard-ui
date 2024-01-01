

import "../Gallary/style.css"
import { useState } from "react";
import { Button, Input, Form } from "antd";
import { storage, ref, uploadBytesResumable, getDownloadURL } from "../../config/Firebase/index.js"
import { AntDragger } from "../../component/AntUploader/Index.jsx";
import { AddData, uploadFile } from "../../config/Constant/index.js";
import Spiner from "../../component/Spiner/index.jsx";
import Navbar from "../../component/Navbar/index.jsx";

function Notice() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);


    const handleUploadFile = (file) => {
        // const url = Promise.resolve(uploadFile(file, 'gallery'))

        const obj = {
            id: file.uid,
            image: file,
            title: "",
            description: "",
        }
        setData(prev => [obj, ...prev])
        // console.log("data=>", data)
    }

    const handleTitleText = (e, id) => {
        const findData = data.find(data => data.id === id)
        findData.title = e.target.value;
        console.log("data=>", data)
    }

    const handleDescriptionText = (e, id) => {
        const findData = data.find(data => data.id === id)
        findData.description = e.target.value;
        console.log("data=>", data)
    }

    const handleUploader = async() => {
        setLoading(true)
        for (let i = 0; i < data.length; i++) {
            const url = await Promise.resolve(uploadFile(data[i].image, 'notice'))
            data[i].image = url
            await AddData(data[i], "notice")
            const arr =[...data]
            arr.shift()
            setData(arr)
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
                        <p className="m-0 text-[#011635] tracking-[-0.025rem] text-[3em] font-bold">Notice File Uploader</p>
                    </div>
                    <div className="max-w-[1120px] mr-[auto] ml-[auto] h-[1px] bg-[#00337c] mt-[10px]"></div>
                    <div className="w-full h-[auto] flex flex-wrap justify-center bg-[#eee] mt-[20px] mb-[20px] ml-[auto] mr-[auto] max-w-[1200px] p-[20px]">
                        <div className="w-full bg-[#fff] rounded-[10px] mb-[20px]">
                            <AntDragger uploadFile={handleUploadFile} />
                        </div>
                    </div>
                    <div className="galleryInputs">
                        <div className="galleryInputHeading">
                            <h5>Notice Image Detail</h5>
                        </div>

                        <div className="uploadContainer">

                            {/* card map */}
                            {data.map((value, index) => <div className="uploadImageUi">
                                {console.log("index====>", index)}
                                <div key={index} className="imageUploadContainer">

                                    <img src={URL.createObjectURL(value.image)} alt="" />


                                </div>
                                <div className="uploadInputs">

                                    <div className="galleryUploadInput">
                                        <div className="labelUploadGallery">
                                            <p>Title<span>{`(i.e. 1 line title only)`}</span></p>
                                        </div>
                                        <Input
                                            placeholder="Enter notice title here"
                                            maxLength={50}
                                            className="inputUploadGallery"
                                            onChange={e => handleTitleText(e, value.id)} />
                                    </div>
                                    <div className="galleryUploadInput">
                                        <div className="labelUploadGallery">
                                            <p>Description <span>{`(i.e. mult line input upto 360 charactor max)`}</span></p>
                                        </div>

                                        <Input.TextArea
                                            onChange={e => handleDescriptionText(e, value.id)}
                                            maxLength={360}
                                            showCount
                                            style={{
                                                height: 90,
                                                resize: 'none',
                                            }} placeholder="Enter notice description here"
                                        />
                                    </div>
                                </div>
                            </div>)}
                        </div>
                        {data && <div className="gallerybtn">
                            <Button onClick={handleUploader} disabled={loading} className="btnStyle" htmlType="submit">
                                {loading ?
                                    (<Spiner />)
                                    :
                                    (<p>Upload Notice</p>)
                                }
                            </Button>
                        </div>}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Notice;