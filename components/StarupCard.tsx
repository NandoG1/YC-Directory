import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Author, Startup } from '@/sanity/types'

export type StartupTypeCard = Omit<Startup, "author"> & {author?:Author}

const StarupCard = ({post}: {post: StartupTypeCard}) => {
    const {} = post
  return (
    <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 group'>
        <div className='flex justify-between items-center'>
            <p className='font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100'>
                {formatDate(post._createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6'/>
                <span className='font-medium text-[16px] text-black'>{post.views}</span>
            </div>
        </div>

        <div className='flex justify-between items-center mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${post.author?._id}`}> 
                    <p className='font-medium text-[16px] text-black line-clamp-1'>{post.author?.name}</p>
                </Link>
                <Link href={`/startup/${post._id}`}>
                    <h3 className='font-semibold text-[26px] text-black line-clamp-1'>{post.title}</h3>
                </Link>
            </div>
            <Link href={`/user/${post.author?._id}`} >
                <Image src="" alt="Gambar" width={48} height={48} className='rounded-full'/>
            </Link>
        </div>  

        <Link href={`/startup/${post._id}`}>
            <p className='font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all'>
                {post.description}
            </p>
            <img src={post.image} alt="" className='w-full h-[164px] rounded-[10px] object-cover'/>
        </Link>

        <div className='flex justify-between items-center gap-3 mt-5'>
            <Link href={`/?query=${post.category?.toLowerCase()}`}>
                <p className='font-medium text-[16px] text-black'>{post.category}</p>
            </Link>
            <Button className='rounded-full bg-black font-medium text-[16px] text-white px-5 py-3'>
                <Link href={`/startup/${post._id}`}>
                    Details
                </Link>
            </Button>
        </div>

    </li>
  )
}

export default StarupCard