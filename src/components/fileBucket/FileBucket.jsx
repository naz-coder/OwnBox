import React, {useRef, useState} from 'react';
import {FileBucketStyle} from "./FileBucketStyle";
import fileUpload from "../../assets/fileUpload.png";

const FileBucket = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUploadedSuccessfully, setFileUploadedSuccessfully] = useState(false);
    const fileInputRef = useRef(null);

    const fileChangeHandler = (e) => {
        setSelectedFile(e.target.files[0])
    };


    const fileUploadHandler = () => {
        if (!selectedFile) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append(
            "Test file",
            selectedFile, selectedFile.name
        )
        setSelectedFile(null);    
        setFileUploadedSuccessfully(true);
    };

    const fileDetails = () => {
        if (selectedFile){
            return(
                <div>
                <h2>File Info</h2>
                <p>File Name: {selectedFile.name}</p>
                <p>File Type: {selectedFile.type}</p>
                <p>Last Modified Date: {" "} 
                {new Date(selectedFile.lastModifiedDate).toDateString()}</p>
            </div>
            )
        }else if(fileUploadedSuccessfully){
            return(
                <div>
                    <br/>
                    <h4>Successfully uploaded file!!!</h4>
                </div>
            )
        }else{
            return(
                <div>
                    <br/>
                    <h4>Choose a file to upload and press the Upload Button</h4>
                </div>
            )
        }
    }

const openFileDialog = () => {
    fileInputRef.current.click();
}

  return (
    <FileBucketStyle>
        <div className="file-container">
            <div className="content">
            <div>
            <div className="section-content">
                <h1 className='title'>OwnBox File Upload System</h1>
                <p className="subtitle">Upload Files with React and a Serverless API!</p>
            </div>
            <div className="fil-upload">
                <input type="file" onChange={fileChangeHandler} className='input-btn' ref={fileInputRef}/>
                <div onClick={openFileDialog} className='custom-input-btn'>Choose file</div>
                <button onClick={fileUploadHandler} className='upload-btn'>Upload</button>
            </div>
            {fileDetails()}
            </div>
            </div>
            <div lassName='upload-hero-img'>
                <img src={fileUpload} className='upload-hero'/>
            </div>
        </div>
    </FileBucketStyle>
  )
}

export default FileBucket