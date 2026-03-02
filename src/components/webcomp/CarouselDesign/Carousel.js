"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Designers",
    desc: "Tools that work like you do.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/designers.webp",
    thumb:
      "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-designer.webp?w=480",
  },
  {
    title: "Marketers",
    desc: "Create faster, explore new possibilities.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/marketers.webp",
    thumb:
      "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-marketer.webp?w=480",
  },
  {
    title: "VFX filmmakers",
    desc: "From concept to cut, faster.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/filmmakers.webp",
    thumb:
      "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-film.webp?w=480",
  },
  {
    title: "Content creators",
    desc: "Make scroll-stopping content, easily.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/content-creators.webp",
    thumb:
      "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-content.webp?w=480",
  },
  {
    title: "Art directors",
    desc: "Creative control at every stage.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/art-directors.webp",
    thumb:
      "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480",
  },
]

export default function CenterModeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const center = (index: number) => {
    const wrap = trackRef.current?.parentElement
    const card = trackRef.current?.children[index] as HTMLElement
    if (!wrap || !card) return

    const axis = isMobile ? "top" : "left"
    const size = isMobile ? wrap.clientHeight : wrap.clientWidth
    const start = isMobile ? card.offsetTop : card.offsetLeft
    const cardSize = isMobile ? card.clientHeight : card.clientWidth

    wrap.scrollTo({
      [axis]: start - (size / 2 - cardSize / 2),
      behavior: "smooth",
    })
  }

  const activate = (index: number) => {
    setCurrent(index)
    center(index)
  }

  const go = (step: number) => {
    const next = Math.min(Math.max(current + step, 0), projects.length - 1)
    activate(next)
  }

  // keyboard navigation
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1)
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1)
    }
    window.addEventListener("keydown", handle)
    return () => window.removeEventListener("keydown", handle)
  }, [current])

  return (
    <section className="bg-[#07090d] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="flex justify-between items-end mb-10 gap-6 flex-col md:flex-row">
          <h2 className="text-2xl md:text-4xl font-light">
            Boost your professional workflow and productivity
          </h2>

          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              disabled={current === 0}
              onClick={() => go(-1)}
              className="rounded-full"
            >
              ‹
            </Button>
            <Button
              variant="secondary"
              size="icon"
              disabled={current === projects.length - 1}
              onClick={() => go(1)}
              className="rounded-full"
            >
              ›
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={cn(
              "flex gap-5 scroll-smooth",
              isMobile ? "flex-col items-center" : "items-start"
            )}
          >
            {projects.map((item, i) => {
              const active = i === current

              return (
                <div
                  key={i}
                  onClick={() => activate(i)}
                  className={cn(
                    "relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out",
                    active
                      ? "md:flex-[0_0_30rem] -translate-y-2 shadow-2xl"
                      : "md:flex-[0_0_5rem]",
                    isMobile && active && "min-h-[300px] w-full",
                    isMobile && !active && "min-h-[80px] w-full"
                  )}
                  style={{ height: isMobile ? "auto" : "26rem" }}
                >
                  {/* background */}
                  <img
                    src={item.bg}
                    className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-500 hover:brightness-100 hover:scale-105"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 flex items-center justify-center md:justify-start p-6 gap-5">
                    {active && (
                      <img
                        src={item.thumb}
                        className="w-[130px] h-[260px] rounded-md object-cover shadow-lg hidden md:block"
                      />
                    )}

                    <div className="text-center md:text-left">
                      <h3
                        className={cn(
                          "font-bold transition-all duration-300",
                          active
                            ? "text-4xl"
                            : "writing-mode-vertical rotate-180 text-lg hidden md:block"
                        )}
                        style={
                          !active && !isMobile
                            ? { writingMode: "vertical-rl" }
                            : {}
                        }
                      >
                        {item.title}
                      </h3>

                      {active && (
                        <>
                          <p className="text-gray-300 mt-3 max-w-xs">
                            {item.desc}
                          </p>
                          <Button className="mt-4 rounded-full bg-orange-500 hover:bg-orange-600">
                            Details
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* dots */}
        {!isMobile && (
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <span
                key={i}
                onClick={() => activate(i)}
                className={cn(
                  "w-3 h-3 rounded-full cursor-pointer transition-all",
                  i === current
                    ? "bg-orange-500 scale-125"
                    : "bg-white/40"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
