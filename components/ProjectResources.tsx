import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const ProjectResources = () => {
    return (
        <Link href="https://github.com/narayan-raghuwanshi/presigned-url-s3" target='_blank' className="rounded-full border-4 border-gray-200 fixed bottom-10 right-10">
            <FaGithub size={40} color='white' />
        </Link>
    )
}

export default ProjectResources