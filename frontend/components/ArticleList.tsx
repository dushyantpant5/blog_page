import { IArticle } from '@/types'
import React from 'react'
import BlogCard from './BlogCard';
import BlogCardWithImage from './BlogCardWithImage';

interface IPropType{
  articles:IArticle[];
}

const ArticleList = ({articles}:IPropType) => {
  return (
    <div className='grid lg:grid-cols-2 grid-gap gap-16 mt-16'>
      {articles.map((article,index)=>{
        return <div key={article.id}>
         { index===1?<BlogCardWithImage article={article}/>:
          <BlogCard article={article}/>}
        </div>
        
      })}
    </div>
  )
}

export default ArticleList