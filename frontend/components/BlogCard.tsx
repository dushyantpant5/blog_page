import { IArticle } from '@/types'
import { formatDate } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

interface IPropType{
    article:IArticle;
}

const BlogCard = ({article}:IPropType) => {
  return (
    <div>
        <Link href={`/article/${article.attributes.Slug}`}>
            <h1 className='text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'>{article.attributes.Title}</h1>
        </Link>
        <div className='flex items-center my-4'>
           <div className='rounded-lg overflow-hidden flex items-center justify-center mr-2'>
                <Image 
                    src={`http://127.0.0.1:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                    height={40}
                    width={40}
                    alt='av'
                />
           </div>
            <span className='text-sm font-bold text-gray-600'>
                {article.attributes.author.data.attributes.firstname} {' '}
                {article.attributes.author.data.attributes.lastname}
                {' '} on {' '}
                <span className='text-gray-400'>{formatDate(article.attributes.createdAt)}</span>
            </span>
            
        </div>
        <div className='text-gray-500'>
            {article.attributes.shortDescription.slice(0,250)} {article.attributes.shortDescription.length>250?'...':''}
        </div>
    </div>
  )
}

export default BlogCard