import "./style.css"
import { BiUpload } from "react-icons/bi"
import { message, Upload, Modal, Button } from 'antd';

import React, { useState } from 'react';

const { Dragger } = Upload;
const AntDragger = ({ uploadFile }) => {
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file);
            }
            if (info.file.status === 'done') {
                uploadFile(info.file.originFileObj)
                console.log("info.fileList", info.fileList)
            } else if (info.file.status === 'error') {
                uploadFile(info.file.originFileObj)
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <Dragger
            accept="jpg"
            showUploadList={false}
            {...props}>
            <p className="ant-upload-drag-icon UploadIcon">
                <BiUpload fill="#011635" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
            </p>
        </Dragger>
    )
};

const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const UpdateUpload = () => (
    <Upload
        className="EditUploader"
        listType="picture"
        {...props}>
        <Button className="BtnUploader" icon={<BiUpload className="UpIcon" fill="#000" size={15} />}>Click to Upload</Button>
    </Upload>
);
export { AntDragger, UpdateUpload };
