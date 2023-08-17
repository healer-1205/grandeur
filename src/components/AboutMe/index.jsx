import React, { useEffect } from "react"

export const AboutMe = () => {
  useEffect(() => {
    window.onscroll = () => {
      const scrollY = window.scrollY
      document.body.querySelector(
        ".about-text .line:nth-child(1)"
      ).style.clipPath = `inset(0 ${scrollY > 150 ? 0 : 150 - scrollY}% 0 0)`
      document.body.querySelector(
        ".about-text .line:nth-child(2)"
      ).style.clipPath = `inset(0 ${scrollY > 250 ? 0 : 250 - scrollY}% 0 0)`
      document.body.querySelector(
        ".about-text .line:nth-child(3)"
      ).style.clipPath = `inset(0 ${scrollY > 350 ? 0 : 350 - scrollY}% 0 0)`
      document.body.querySelector(
        ".about-text .line:nth-child(4)"
      ).style.clipPath = `inset(0 ${scrollY > 450 ? 0 : 450 - scrollY}% 0 0)`
      document.body.querySelector(
        ".about-text .line:nth-child(5)"
      ).style.clipPath = `inset(0 ${scrollY > 550 ? 0 : 550 - scrollY}% 0 0)`
      document.body.querySelector(
        ".about-text .line:nth-child(6)"
      ).style.clipPath = `inset(0 ${scrollY > 650 ? 0 : 650 - scrollY}% 0 0)`
    }
    return () => {
      window.onscroll = undefined
    }
  }, [])
  return (
    <div className="sm:pt-64 pt-52">
      <div className="flex justify-center">
        <div className="sm:w-8/12 w-9/12 text-left font-sans not-italic font-bold sm:text-6xl text-4xl">
          <div className="not-italic">
            <p className="text-base uppercase">
              a b o u t &nbsp;&nbsp;&nbsp;&nbsp;m e
            </p>
          </div>
          <div className="relative about-text">
            <p className="line">
              Celebrated <span className="text-[#eb5939]">watchmaker</span>
            </p>
            <p className="line">
              <span className="text-[#eb5939]">since 2015</span>. Passionate
              about
            </p>
            <p className="line">precision, craftsmanship, and</p>
            <p className="line">timeless design. Consistently</p>
            <p className="line">providing meticulous,</p>
            <p className="line">high-quality service.</p>
            <div className="absolute left-0 top-0 opacity-20">
              <p className="">
                Celebrated <span className="text-[#eb5939]">watchmaker</span>
              </p>
              <p>
                <span className="text-[#eb5939]">since 2015</span>. Passionate
                about
              </p>
              <p>precision, craftsmanship, and</p>
              <p>timeless design. Consistently</p>
              <p>providing meticulous,</p>
              <p>high-quality service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
