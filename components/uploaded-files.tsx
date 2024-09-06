import React from "react";
import { Button } from "./ui/button";
import { MdDeleteOutline, MdOutlineOpenInNew } from "react-icons/md";

interface UploadedFilesProps {
  files: { name: string; id: string }[];
  onView: (id: string) => void;
  onDelete: (id: string) => void;
}

export const UploadedFiles: React.FC<UploadedFilesProps> = ({
  files,
  onView,
  onDelete,
}) => {
  return (
    <div className="w-[35%] h-2/3 max-w-2xl min-w-[400px] mt-5">
      <h1 className="block font-semibold text-[20px] text-center mb-4 text-gray-700">
        Manage Uploaded Files
      </h1>

      <div className="flex flex-col gap-3 overflow-y-auto min-h-[200px] max-h-[500px] p-5 border-[1.5px] border-[#0B2567]/20 rounded-md">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex justify-between items-center bg-[#0B2567]/5 border-[#0B2567] border-[1.5px] p-3 rounded-md"
          >
            <div className="font-medium text-[#0B2567]">{file.name}</div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="default"
                className="flex gap-1 justify-center items-center"
                onClick={() => onView(file.id)}
              >
                <MdOutlineOpenInNew className="h-4 w-4" />
                View
              </Button>
              <Button
                size="sm"
                variant="default"
                className="flex gap-1 justify-center items-center bg-red-500 hover:bg-red-600 text-white"
                onClick={() => onDelete(file.id)}
              >
                <MdDeleteOutline className="h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
