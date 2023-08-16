import React from "react"
import { Header } from "../../components/Header"
import { Social } from "../../components/Social"

export const Home = () => {
  return (
    <div>
      <Header />
      <Social />
      <div className="relative sm:mt-36 mt-28">
        <div className="uppercase font-bold text-center not-italic">
          <p className="text-base">g r a n d e u r</p>
        </div>
        <div className="flex justify-center uppercase">
          <div className="sm:w-5/12 w-11/12 text-center font-sans not-italic font-bold">
            <p className="text-8xl leading-[5rem]">crafting</p>
            <p className="text-8xl leading-[5rem]">time</p>
            <p className="text-8xl leading-[5rem] text-[#eb5939]">creating</p>
            <p className="text-8xl leading-[5rem] text-[#eb5939]">legacy</p>
            <p className="text-8xl leading-[5rem]">since</p>
            <p className="text-8xl leading-[5rem]">2015</p>
          </div>
        </div>
      </div>
    </div>
  )
}
