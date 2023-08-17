import React from "react"
import { Header } from "../../components/Header"
import { Social } from "../../components/Social"
import { Grandeur } from "../../components/Grandeur"
import { AboutMe } from "../../components/AboutMe"
import { WhatIDo } from "../../components/WhatIDo"
// import Cursor from "react-cursor-follow"
import { Cursor } from "../../components/Cursor"

export const Home = () => {
  return (
    <div>
      <Cursor />
      <Header />
      <Social />
      <div className="relative sm:mt-36 mt-28">
        <Grandeur />
        <AboutMe />
        <WhatIDo />
      </div>
    </div>
  )
}
