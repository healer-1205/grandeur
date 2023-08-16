import React from "react"
import { icons } from "../../assets"

export const Social = () => {
  return (
    <div className="bg-transparent sm:h-32 h-24 flex fixed top-[500px] left-0 w-full justify-between items-center sm:px-10 px-6">
      <div className="flex flex-col">
        <img
          alt="Dribbble"
          src={icons.Dribbble}
          width={20}
          height={20}
          className="py-3"
        />
        <img
          alt="Instagram"
          src={icons.Instagram}
          width={20}
          height={20}
          className="py-3"
        />
        <img
          alt="Youtube"
          src={icons.Youtube}
          width={20}
          height={20}
          className="py-3"
        />
        <img
          alt="Linkedin"
          src={icons.Linkedin}
          width={20}
          height={20}
          className="py-3"
        />
      </div>
      <p className="font-sans not-italic font-bold cursor-pointer origin-center rotate-90">
        SOUND
      </p>
    </div>
  )
}
