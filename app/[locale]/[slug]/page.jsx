import React from 'react'
import { API_URL } from '/app/api'

const page = async ({ params }) => {

  const res = await fetch(`${API_URL}/posts?populate=*&locale=${params.locale}&filters[slug]=${params.slug}`)
  const dtvr = await res.json()

  const vr = dtvr.data[0]
  return (
    <div className='w-[900px] mx-auto  flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>{vr.attributes.title}</h1>
      <div>{vr.attributes.content}</div>
      <div dangerouslySetInnerHTML={{ __html: vr.attributes.content }} />
      <img src={"http://localhost:1337" + vr.attributes.img.data.attributes.formats.thumbnail.url} alt="kedi" />
      <div dangerouslySetInnerHTML={{ __html: vr.attributes.icerik }} />
    </div>
  )
}

export default page