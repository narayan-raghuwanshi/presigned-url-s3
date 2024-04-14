"use client"
import Loader from '@/components/Loader';
import { Download } from 'lucide-react';
import React, { useState } from 'react'

const Collection = () => {
    const [fileId, setFileId] = useState<string>("");
    const [validId, setValidId] = useState<boolean>(true)
    const [fileUrl, setFileUrl] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const getFile = async (event: any) => {
        event.preventDefault()
        if (fileId) {
            setLoading(true)
            setFileUrl("")
            setValidId(true)
            try {
                const { url } = await fetch("/api/downloadurl", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ fileId })
                }).then(res => res.json())
                const res = await fetch(url)
                if (res.status === 200) {
                    setFileUrl(url.split('?')[0])
                } else {
                    setValidId(false)
                }
                setLoading(false)
            } catch (error) {
                console.error("Error downloading file:", error)
            }
        } else {
            alert("Please enter a file id")
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-8 flex-wrap py-10">
            <div>
                <p className='mb-5 max-w-xs mx-auto text-center text-yellow-300'>* S3 Bucket is down due to security reasons, so this might not work. *</p>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center space-y-2 max-w-xs">
                        <h3 className="text-3xl md:text-5xl font-semibold text-blue-400 flex justify-center items-center gap-3"><Download size={38} /> Download</h3>
                        <p className="text-gray-400">Enter the file id and <span className="text-blue-400">download the file</span> from AWS S3.</p>
                    </div>
                </div>
                <form className="flex flex-col gap-6 mt-20" onSubmit={getFile}>
                    <div className="flex justify-center border border-gray-400 rounded-lg bg-slate-950">
                        <input onChange={(e) => { setFileId(e.target.value) }} type="text" placeholder='Enter file id...' className="border w-full border-gray-500 rounded-md bg-slate-950 text-white p-2 transition duration-300" id="" />
                    </div>
                    <button type="submit" className="bg-white text-black font-semibold py-2 w-full rounded-lg hover:bg-gray-200 transition duration-300">Download</button>
                </form>
            </div>
            <div className={`p-2 rounded-lg flex justify-center items-center`}>
                {loading && <Loader />}
                {validId ? <img src={fileUrl} alt="" /> : <div className='text-red-400 font-semibold'>* Enter valid ID</div>}
            </div>
        </div>
    )
}

export default Collection
