import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex gap-10 justify-center flex-wrap items-end my-16 mx-6'>
      <div>
        <Image src='/home-s3.png' alt='AWS S3' width={200} height={200} className='' />
        <div className='mt-12 space-y-2'>
          <h2 className='text-blue-400 font-semibold text-2xl md:text-4xl'>What is the website about?</h2>
          <p className='text-gray-400 max-w-xl'>This website is basically my little project to help folks to handle files easily using Amazon Web Services AWS S3.</p>
        </div>
        <div className='mt-12 space-y-2'>
          <h2 className='text-blue-400 font-semibold text-2xl md:text-3xl'>How does it work?</h2>
          <p className='text-gray-400 max-w-xl'>This application uses presigned URLs to upload and fetch files from S3. The benefits of presigned URLs are that they <span className='text-blue-400'>reduce server load</span>  because the server does not need to forward file data to the client, the client can directly access it.</p>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.youtube.com/embed/x7ovkYqrraw"
          title="YouTube video player"
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className='border rounded-lg w-[336px] h-[189px] md:w-[560px] md:h-[315px]'
        ></iframe>
      </div>
    </div>
  )
}

export default About