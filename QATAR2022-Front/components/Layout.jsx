import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter();

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
              <a><img src={navbar? "/logoQatarRed.svg" : "/logoQatarWhite.svg"}/></a>
            </Link>
            <div className="flex justify-between h-full w-2/5">
              <Link href="/" className="cursor-pointer ">
                <a className={`${navbar? "hover:bg-qatarGold" : "hover:bg-qatarDarkBlue"} w-1/3 px-2 h-full py-8 text-xl ${router.pathname === '/'? "font-bold underline" : "text-white"}`}>Home</a>
              </Link>
              <Link href="/miProde" className="cursor-pointer">
                <a className={`${navbar? "hover:bg-qatarGold" : "hover:bg-qatarDarkBlue"} w-1/3 px-2 h-full py-8 text-xl ${router.pathname === '/miProde'? "font-bold underline" : "text-white"}`}>Mi Prode</a>
              </Link>
              <Link href="/resultados" className="cursor-pointer">
                <a className={`${navbar? "hover:bg-qatarGold" : "hover:bg-qatarDarkBlue"} w-1/3 px-2 h-full py-8 text-xl ${router.pathname === '/resultados'? "font-bold underline" : "text-white"}`}>Resultados</a>
              </Link>
            </div>
          </div>    
        </div>
        <main>{children}</main>
      </>
  )
}