import React from "react"
import { Header } from "../../components/Header"
import { Social } from "../../components/Social"
import { Grandeur } from "../../components/Grandeur"
import { AboutMe } from "../../components/AboutMe"

export const Home = () => {
  return (
    <div>
      <Header />
      <Social />
      <div className="relative sm:mt-36 mt-28">
        <Grandeur />
        <AboutMe />
      </div>
    </div>
  )
}
