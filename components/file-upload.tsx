// FileUpload Component
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface FileWithProgress extends File {
  progress: number;
}

export const FileUpload = () => {
  const [files, setFiles] = useState<FileWithProgress[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []).filter(
      (file) => file.type === "application/pdf"
    ) as FileWithProgress[];

    selectedFiles.forEach((file) => (file.progress = 0));
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleFileRemove = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = Array.from(event.dataTransfer.files).filter(
      (file) => file.type === "application/pdf"
    ) as FileWithProgress[];

    droppedFiles.forEach((file) => (file.progress = 0));
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const uploadFile = async (file: FileWithProgress, index: number) => {
    const formData = new FormData();
    formData.append('files', file);
  
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        setFiles((prevFiles) => {
          const updatedFiles = [...prevFiles];
          updatedFiles[index].progress = 100;
          return updatedFiles;
        });
      } else {
        setFiles((prevFiles) => {
          const updatedFiles = [...prevFiles];
          updatedFiles[index].progress = 0;
          return updatedFiles;
        });
      }
    } catch (error) {
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index].progress = 0;
        return updatedFiles;
      });
    }
  };  

  const handleUpload = async () => {
    setUploading(true);
    for (let i = 0; i < files.length; i++) {
      await uploadFile(files[i], i);
    }
    setUploading(false);
    alert("All files uploaded to the database!");
    // Here, you can implement the logic to send files to your database
  };

  return (
    <div className="w-[35%] max-w-2xl min-w-[400px] mt-5">
      <label className="block font-semibold text-[20px] text-center mb-4 text-gray-700">
        Upload New Chapters
      </label>
      <div
        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-[#0B2567]/5"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="w-full flex flex-col justify-center items-center space-y-1 text-center">
          <IoCloudUploadOutline className="h-12 w-10 my-4" />
          <div className="flex text-sm text-gray-600">
            <p>Drag & Drop Files or &nbsp; </p>
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-transparent rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>Upload files</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept="application/pdf"
                multiple
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PDF up to 10MB</p>
          <p className="text-xs text-gray-500">Drag and drop your files here</p>
        </div>
      </div>
      {files.length > 0 && (
        <div className="mt-4 max-h-48 overflow-y-auto space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex flex-col p-2 border border-gray-300 rounded-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{file.name}</span>
                <button
                  className="ml-2 text-sm text-red-600 hover:text-red-800"
                  onClick={() => handleFileRemove(index)}
                >
                  Remove
                </button>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${file.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                  ></div>
                </div>
                <span className="text-xs text-gray-600">{file.progress}%</span>
              </div>
            </li>
          ))}
        </div>
      )}
      {files.length > 0 && (
        <button
          onClick={handleUpload}
          className={`mt-4 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
            uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      )}
    </div>
  );
};
