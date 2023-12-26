import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, db} from "../../config/Firebase/index.js"
import { DeleteModal, EditModal } from '../../component/Modal/index.jsx'

function SecondGallary() {
    const [gallaryData, SetGallaryData] = useState([])

    useEffect(() => {
        const q = query(collection(db, "gallary"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({ ...doc.data(), id: doc.id })
                SetGallaryData(items)
            });
          
        });
    }, [])


    console.log(gallaryData)
    return (
        <div className='w-full min-h-screen flex justify-between bg-cyan-400'>  
            {gallaryData && gallaryData.map((value, index) => {
                return (
                    <div key={value.id} className='w-[250px] m-[10px] h-[400px] flex flex-col gap-2 p-[10px] rounded-lg border'>
                        <img width={"250px"} src={value.image} alt="" />
                        <div className='w-full text-center h-auto'>
                            <p className='m-0 text-[#000]'>{value.title}</p>
                            <p className='m-0 text-[#000]'>{value.description}</p>
                        </div>
                        <div className='w-full flex flex-col gap-2 h-auto'>

                            <DeleteModal id={`${value.id}`} />
                            <EditModal id={`${value.id}`} />
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default SecondGallary