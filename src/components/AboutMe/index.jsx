import React from "react"

export const AboutMe = () => {
  return (
    <div className="sm:pt-64 pt-52">
      <div className="flex justify-center">
        <div className="sm:w-8/12 w-9/12 text-left font-sans not-italic font-bold sm:text-6xl text-4xl">
          <div className="not-italic">
            <p className="text-base uppercase">
              a b o u t &nbsp;&nbsp;&nbsp;&nbsp;m e
            </p>
          </div>
          <p>
            Celebrated <span className="text-[#eb5939]">watchmaker</span>
          </p>
          <p>
            <span className="text-[#eb5939]">since 2015</span>. Passionate about
          </p>
          <p>precision, craftsmanship, and</p>
          <p>timeless design. Consistently</p>
          <p>providing meticulous,</p>
          <p>high-quality service.</p>
        </div>
      </div>
    </div>
  )
}
