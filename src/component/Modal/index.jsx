import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EditData, deleteData } from '../../config/Constant';
import "./style.css"
import { Input } from 'antd';
import { UpdateUpload } from '../AntUploader/Index';
const DeleteModal = ({ id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = (id) => {
        deleteData(id)
        setIsModalOpen(false);

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {/* modal btn show */}
            <Button danger type="primary" onClick={showModal}>
                delete
            </Button>
            <Modal
                header={[
                ]}
                footer={[

                    <Button key="delete" danger type="primary" onClick={() => handleOk(id)}>
                        Confirmed Delete
                    </Button>
                ]}
                title="Delete" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='modaldeleteConatiner'>
                    <p>Are you sure you delete Permenantly?</p>
                </div>
            </Modal>
        </>
    );
};


const EditModal = ({ id }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = (id) => {
        EditData(id, {title, description})
        setIsModalOpen(false);

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button danger type="primary" onClick={showModal}>
                Edit
            </Button>
            <Modal

                footer={[
                    <div key="edit" className='modalFooter'>
                        <Button key="edit" className='EditBtn' onClick={() => handleOk(id)}>
                            <p>Update</p>
                        </Button>
                    </div>
                ]}
                title="Update Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='modalEditBody'>
                <div className='uploadercontainer'>
                <UpdateUpload/>
                </div>
                    <div className='labelStyles'>
                        <p>Title</p>
                        <Input type='text' onChange={(e) => setTitle(e.target.value)} className='inputStyles' />
                    </div>
                    <div className='labelStyles'>
                        <p>Description</p>
                        <Input type='text' onChange={(e) => setDescription(e.target.value)} className='inputStyles' />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export { DeleteModal, EditModal };