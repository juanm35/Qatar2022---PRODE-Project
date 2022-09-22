import React, { useState, useEffect } from "react"
import Link from 'next/link'

export default function Layout({ children }) {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })

  return (
      <>
        <div className={`${navbar? "bg-qatarDarkBlueTransparent" : "bg-transparent"} flex items-center text-lg h-20 w-full border-b-green border-qatarPink text-white text-center -mb-20 fixed z-10`}>
          <div className="flex w-full justify-between pl-16 pr-32">
            <div className="cursor-pointer">
              Logo
            </div>
            <div className="flex justify-between gap-4">
              <Link href="/" className="cursor-pointer">
                <a>Home</a>
              </Link>
              <Link href="/miProde" className="cursor-pointer">
                <a>Mi Prode</a>
              </Link>
              <Link href="/resultados" className="cursor-pointer">
                <a>Resultados</a>
              </Link>
            </div>
          </div>    
        </div>
        <main>{children}</main>
      </>
  )
}