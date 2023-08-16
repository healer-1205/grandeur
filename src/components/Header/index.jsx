import React from "react"
import { icons } from "../../assets"

export const Header = () => {
  return (
    <div className="bg-transparent sm:h-32 h-24 flex fixed top-0 left-0 w-full justify-between items-center sm:px-10 px-6">
      <img alt="Logo" src={icons.Logo} />
      <div className="flex flex-col">
        <p>ABOUT</p>
        <p>WORK</p>
        <p>CONTACT</p>
      </div>
    </div>
  )
}
