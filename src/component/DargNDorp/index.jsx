import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import {BiUpload} from "react-icons/bi"


const baseStyle = {
    flex: 1,
    maxWidth:"500px",
    width:"100%",
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:"center",
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#00337c',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#9e9e9e',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor:"pointer",
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

export default function StyledDropzone(props) {
    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
        acceptedFiles
    } = useDropzone({ accept: { 'image/*': [] } });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);


    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

      console.log(files)



    return (
        <div className="container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <div className=' text-[50px] p-[20px]'><BiUpload  style={{fill:"#00337c"}}/></div>
                <p className='text-[#00337c] text-center'>Drag 'n' drop some files here, or<br/> click to select files</p>
            </div>
        </div>
    );
}

<StyledDropzone />