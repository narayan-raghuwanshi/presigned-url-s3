"use client"
import Popup from "@/components/Popup";
import { Upload } from "lucide-react";
import { useState } from "react";
export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [fileUrl, setFileUrl] = useState<string>("")
  const [fileId, setFileId] = useState<string>("")
  const [isModalOpen, setPopupOpen] = useState(false);

  const handleUpload = async (event: any) => {
    event.preventDefault()
    if (file) {
      try {
        const { url } = await fetch("/api/uploadurl").then(res => res.json())
        const res = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: file
        })
        setFileUrl(url.split('?')[0])
        setFileId(url.split('?')[0].split('/').pop())
        setPopupOpen(true)
      } catch (error) {
        console.error("Error uploading file:", error)
      }
    } else {
      alert("Please select a file to upload")
    }
  }

  const onChange = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files
    if (files && files.length > 0) {
      setFile(files[0])
    }
  }

  return (
    <div className="flex justify-center flex-col items-center pt-10">
      <div>
        {/* <p className='mb-5 text-yellow-300'>*AWS will not work due to security reasons.*</p> */}
        <div className="flex flex-col justify-center items-center">
          <div className="text-center space-y-2 max-w-xs">
            <h3 className="text-3xl md:text-5xl font-semibold text-blue-400 flex justify-center items-center gap-3"><Upload size={38} /> Upload file</h3>
            <p className="text-gray-400">Upload a file and make sure you <span className="text-blue-400">keep the ID safe</span> after uploading.</p>
          </div>
        </div>
        <form className="flex flex-col gap-6 mt-20" onSubmit={handleUpload}>
          <div className="flex justify-center border border-gray-400 rounded-lg bg-slate-950">
            <input onChange={onChange} type="file" name="" className="border border-gray-500 rounded-md text-white p-2 bg-zinc-800 hover:bg-zinc-900 transition duration-300" id="" />
          </div>
          <button type="submit" className="bg-white text-black font-semibold py-2 w-full rounded-lg hover:bg-gray-200 transition duration-300">Upload</button>
        </form>
        <img src={fileUrl} alt="" />
      </div>
      <Popup subHeading={fileId} buttonText="Cancel" isOpen={isModalOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
}