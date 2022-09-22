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
        <div className={`${navbar? "bg-qatarDarkBlueTransparent" : "bg-transparent"} flex items-center text-lg h-24 w-full border-b-green border-qatarPink text-white text-center -mb-20 fixed z-10`}>
          <div className="flex w-full h-full justify-between pl-16 pr-32 items-center">
            <Link href="/" className="cursor-pointer">
              <a><img src="/logoQatar2.svg"/></a>
            </Link>
            <div className="flex justify-between h-full w-2/5">
              <Link href="/" className="cursor-pointer ">
                <a className={`${navbar? "hover:bg-qatarGold" : "hover:bg-qatarDarkBlue"} w-1/3 px-2 h-full py-8`}>Home</a>
              </Link>
              <Link href="/miProde" className="cursor-pointer">
                <a className={`${navbar? "hover:bg-qatarGold" : "hover:bg-qatarDarkBlue"} w-1/3 px-2 h-full py-8`}>Mi Prode</a>
              </Link>
              <Link href="/resultados" className="cursor-pointer">
                <a className={`${navbar? "hover:bg-qatarGold" : "hover:bg-qatarDarkBlue"} w-1/3 px-2 h-full py-8`}>Resultados</a>
              </Link>
            </div>
          </div>    
        </div>
        <main>{children}</main>
      </>
  )
}