import React from 'react'

import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage } from './styles';

export default function Upload({ onUpload }) {
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Click or drag your product image here</UploadMessage>
    }

    if(isDragReject) {
      return <UploadMessage type='error'>Unsupported file</UploadMessage>
    }

    return <UploadMessage type='success'>Drop the file here</UploadMessage>
  }


  return (
    <Dropzone accept='image/*' onDropAccepted={onUpload}>
      { ({ getRootProps, getInputProps, isDragActive, isDragReject}) => (
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()}/>
              {renderDragMessage(isDragActive, isDragReject)}
            </DropContainer>
        )}
    </Dropzone>
  );
}

