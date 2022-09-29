import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter();

    const [navbar, setNavbar] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);

    function handleOpenMenuClick() {
      setMenuOpen(true)
    } 

    function handleCloseMenuClick() {
      setMenuOpen(false)
    }

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
        <div className={`${navbar? "bg-qatarSilver/[0.95] text-qatarRed shadow-2xl" : "bg-transparent text-white"} flex justify-end items-center text-lg h-24 w-full border-b-green border-qatarRed text-center -mb-20 fixed z-10`}>
          <div className="hidden md:flex md:w-full md:h-full md:justify-between md:pl-16 md:pr-32 md:items-center">
            <Link href="/" className="cursor-pointer">
              <a><img src={navbar? "/logoQatarRed.svg" : "/logoQatarWhite.svg"}/></a>
            </Link>
            <div className="flex justify-between h-full w-3/5 lg:w-2/5">
              <Link href="/" className="cursor-pointer ">
                <a className={`${navbar? "hover:bg-qatarRed hover:text-white" : "hover:bg-qatarSilver hover:text-qatarRed"} w-1/3 px-2 h-full py-8 text-xl ${router.pathname === '/'? "font-bold underline" : ""}`}>Home</a>
              </Link>
              <Link href="/miProde" className="cursor-pointer">
                <a className={`${navbar? "hover:bg-qatarRed hover:text-white" : "hover:bg-qatarSilver hover:text-qatarRed"} w-1/3 px-2 h-full py-8 text-xl ${router.pathname === '/miProde'? "font-bold underline" : ""}`}>Mi Prode</a>
              </Link>
              <Link href="/resultados" className="cursor-pointer">
                <a className={`${navbar? "hover:bg-qatarRed hover:text-white" : "hover:bg-qatarSilver hover:text-qatarRed"} w-1/3 px-2 h-full py-8 text-xl ${router.pathname === '/resultados'? "font-bold underline" : ""}`}>Resultados</a>
              </Link>
            </div>
          </div>
          <div className="flex justify-end px-8 md:hidden">
            {menuOpen?
              <svg onClick={handleCloseMenuClick} fill="currentColor" className=" h-8 w-6 z-50 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>:
              <svg onClick={handleOpenMenuClick} fill="currentColor" className="mx-4 h-10 w-10 z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M442 114H6a6 6 0 01-6-6V84a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6z"/></svg>
            }
          </div>
          <div className={`${menuOpen? "w-full sm:w-1/2 opacity-100" : "w-0 overflow-hidden opacity-0"} h-screen bg-qatarSilver text-qatarRed fixed top-0 md:hidden transition-all delay-150`}>
              <div className="flex flex-col mt-24 ">
                <hr></hr>
                <Link href="/" className="cursor-pointer">
                  <span onClick={handleCloseMenuClick} className="h-14 w-full flex items-center justify-center text-2xl hover:bg-qatarRed hover:text-white">Home</span>
                </Link>
                <hr></hr>
                <Link href="/miProde" className="cursor-pointer">
                  <div onClick={handleCloseMenuClick} className="h-14 w-full flex items-center justify-center text-2xl hover:bg-qatarRed hover:text-white">Mi Prode</div>
                </Link>
                <hr></hr>
                <Link href="/resultados" className="cursor-pointer">
                  <div onClick={handleCloseMenuClick} className=" h-14 w-full flex items-center justify-center text-2xl hover:bg-qatarRed hover:text-white">Resultados</div>
                </Link>
                <hr></hr>
            </div>
            <div className="flex items-center justify-center mt-24">
              <img src="/logoQatarRed.svg"/>
            </div>
          </div>    
        </div>
        <main>{children}</main>
      </>
  )
}