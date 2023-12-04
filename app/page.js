import React from 'react'
import {RedirectType, redirect} from "next/navigation"

const page = () => {
    redirect("/tr", RedirectType.replace)
  return (
    <div>page</div>
  )
}

export default page