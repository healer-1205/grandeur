import React from "react"
import { Link } from "react-router-dom"
import { icons } from "../../assets"

export const Header = () => {
  return (
    <div className="bg-transparent sm:h-32 h-24 flex fixed top-0 left-0 w-full justify-between items-center sm:px-10 px-6 sm:pt-10">
      <Link to="/">
        <img alt="Logo" src={icons.Logo} className="h-8 w-8" />
      </Link>
      <div className="flex flex-col text-right">
        <p className="font-sans not-italic font-bold cursor-pointer text-xs mb-1">
          ABOUT
        </p>
        <p className="font-sans not-italic font-bold cursor-pointer text-xs mb-1">
          WORK
        </p>
        <p className="font-sans not-italic font-bold cursor-pointer text-xs">
          CONTACT
        </p>
      </div>
    </div>
  )
}
