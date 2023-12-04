import React from 'react'
import Link from 'next/link'
import { API_URL } from '../api'

const page = async ({params}) => {
    const res = await fetch(API_URL + "/posts?populate=*")
    const data = await res.json()
    return (
        <div>
            {
                data.data.map((veri, idx) => (
                    <Link className='block md:flex gap-3 m-3 bg-slate-100 p-4 rounded-md ' href={`/${params.locale}/${veri.attributes.slug}`} key={idx}>
                        <div className='flex items-center justify-center md:block md:w-3/12 overflow-hidden '>
                            <img className='hover:scale-125 transition-all duration-500 cursor-pointer w-52 h-52 object-cover rounded-md' src={"http://localhost:1337" + veri.attributes.img.data.attributes.formats.thumbnail.url} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 md:w-9/12 p-2 rounded-md items-center'>
                            <h2 className='font-semibold text-xl'>{veri.attributes.title}</h2>
                            <div className='h-9 m-2 overflow-hidden flex-grow'>{veri.attributes.content}</div>
                            <div className='flex items-center justify-center'>
                                <div className='w-[300px] bg-slate-200 rounded-lg p-2 cursor-pointer flex items-center justify-center hover:bg-slate-500 border-transparent'>Devamını Oku...</div>
                            </div>
                        </div>

                    </Link>
                ))
            }
        </div>
    )
}

export default page