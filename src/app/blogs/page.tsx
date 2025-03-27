import BlogsTemplate from '@/templates/blogs-page'
import React from 'react'

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WC_URL}/wp-json/wp/v2/posts`)
  const posts =  await response.json()
  return (
    <BlogsTemplate posts={posts} />
  )
}

export default page

  