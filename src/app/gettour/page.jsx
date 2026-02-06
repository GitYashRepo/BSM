"use client"

import { ScrollCanvas } from "@/components/scrolleffect/scroll"
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import ReactLenis from "lenis/react";
import "./gettour.css";
import AnimatedCopy from "@/components/AnimatedCopy/AnimatedCopy";


gsap.registerPlugin(ScrollTrigger);

export default function GetTour() {
   const stickyTitlesRef = useRef(null);
   const titlesRef = useRef([]);

   useEffect(() => {
      const handleResize = () => {
         ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      const stickySection = stickyTitlesRef.current;
      const titles = titlesRef.current.filter(Boolean);

      if (!stickySection || titles.length !== 3) {
         window.removeEventListener("resize", handleResize);
         return;
      }

      gsap.set(titles[0], { opacity: 1, scale: 1 });
      gsap.set(titles[1], { opacity: 0, scale: 0.75 });
      gsap.set(titles[2], { opacity: 0, scale: 0.75 });

      const pinTrigger = ScrollTrigger.create({
         trigger: stickySection,
         start: "top top",
         end: `+=${window.innerHeight * 5}`,
         pin: true,
         pinSpacing: true,
      });

      const masterTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: stickySection,
            start: "top top",
            end: `+=${window.innerHeight * 4}`,
            scrub: 0.5,
         },
      });

      masterTimeline
         .to(
            titles[0],
            {
               opacity: 0,
               scale: 0.75,
               duration: 0.3,
               ease: "power2.out",
            },
            1
         )

         .to(
            titles[1],
            {
               opacity: 1,
               scale: 1,
               duration: 0.3,
               ease: "power2.in",
            },
            1.25
         );

      masterTimeline
         .to(
            titles[1],
            {
               opacity: 0,
               scale: 0.75,
               duration: 0.3,
               ease: "power2.out",
            },
            2.5
         )

         .to(
            titles[2],
            {
               opacity: 1,
               scale: 1,
               duration: 0.3,
               ease: "power2.in",
            },
            2.75
         );

      // const workHeaderSection = stickyWorkHeaderRef.current;
      // const homeWorkSection = homeWorkRef.current;

      // let workHeaderPinTrigger;
      // if (workHeaderSection && homeWorkSection) {
      //    workHeaderPinTrigger = ScrollTrigger.create({
      //       trigger: workHeaderSection,
      //       start: "top top",
      //       endTrigger: homeWorkSection,
      //       end: "bottom bottom",
      //       pin: true,
      //       pinSpacing: false,
      //    });
      // }

      return () => {
         pinTrigger.kill();
         if (workHeaderPinTrigger) {
            workHeaderPinTrigger.kill();
         }
         if (masterTimeline.scrollTrigger) {
            masterTimeline.scrollTrigger.kill();
         }
         masterTimeline.kill();
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <>
         <ReactLenis root>
            <div className="page about">
               <section className="about-header">
                  <h1>Est</h1>
                  <h1>2015</h1>
               </section>

               <section className="about-hero">
                  <div className="about-hero-img">
                     <img src="/scroll/scroll00015.png" className="w-full" alt="Banner Image" />
                  </div>
               </section>

               <section className="about-me-copy">
                  <div className="about-me-copy-wrapper">
                     <AnimatedCopy animateOnScroll={true} tag="h3">
                        Blush, established in 2015 in Rewari, is a premium salon crafted for those who value elegance, quality, and personalized beauty experiences. From the very beginning, Blush has focused on delivering refined services that blend modern beauty trends with timeless techniques, creating results that feel effortless, confident, and uniquely tailored to every individual who walks through its doors.
                     </AnimatedCopy>

                     <AnimatedCopy animateOnScroll={true} tag="h3">
                        At the heart of Blush is Sakshi Mukhija, an accomplished salon owner with over 15 years of professional experience in beauty and makeup artistry. Her expertise spans bridal makeup, skin care, and advanced beauty techniques, ensuring every client receives thoughtful attention and customized results. Supported by Brand Steward Nitin Mukhija, Blush continues to grow with strong leadership, consistency, and a clear creative vision.
                     </AnimatedCopy>

                     <AnimatedCopy animateOnScroll={true} tag="h3">
                        Having earned the trust of over 500 happy brides, Blush has become a preferred destination for bridal and occasion-based beauty services. Each bride’s journey is handled with precision, care, and artistry, making every special day unforgettable. With a decade of dedication, a passion for excellence, and a commitment to hygiene and innovation, Blush remains a symbol of trust, expertise, and lasting beauty.
                     </AnimatedCopy>
                  </div>
               </section>

               <section className="services">
                  <div className="services-col">
                     <div className="services-banner">
                        <img src="/images/img13.jpg" alt="Image" />
                     </div>
                  </div>
                  <div className="services-col">
                     <h4>
                        Sakshi Mukhija is an experienced beauty expert with over 15 years in the industry, known for her precision, creativity, and personalized approach.
                     </h4>

                     <div className="services-list">
                        <div className="service-list-row">
                           <div className="service-list-col">
                              <h5>Saloon Owner</h5>
                           </div>
                           <div className="service-list-col">
                              <p>
                                 Mrs. Sakshi Mukhija
                              </p>
                           </div>
                        </div>

                        <div className="service-list-row">
                           <div className="service-list-col">
                              <h5>Profession</h5>
                           </div>
                           <div className="service-list-col">
                              <p>
                                 Makeup Artist
                              </p>
                           </div>
                        </div>

                        <div className="service-list-row">
                           <div className="service-list-col">
                              <h5>Est.</h5>
                           </div>
                           <div className="service-list-col">
                              <p>
                                 2015
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               <section className="about-banner-img">
                  <div className="about-banner-img-wrapper">
                     <img src="/scroll/scroll00001.png" className="w-full" alt="Image" />
                  </div>
               </section>

               <section className="fav-tools">
                  <div className="fav-tools-header">
                     <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                        BLUSH
                     </AnimatedCopy>
                     <AnimatedCopy tag="h2" animateOnScroll={true} delay={0.25}>
                        Our Services
                     </AnimatedCopy>
                     <AnimatedCopy
                        tag="p"
                        animateOnScroll={true}
                        className="secondary"
                        delay={0.5}
                     >
                        Discover our complete range of professional beauty services, thoughtfully curated to enhance your natural beauty, elevate confidence, and deliver a refined, personalized salon experience.
                     </AnimatedCopy>
                  </div>

                  <div className="fav-tools-list">
                     <div className="fav-tools-list-row">
                        <div className="fav-tool">
                           <div className="fav-tool-img">
                              <img src="/textures/img1.jpg" alt="" />
                           </div>
                           <h4>Makeup</h4>
                        </div>
                        <div className="fav-tool">
                           <div className="fav-tool-img">
                              <img src="/textures/img2.jpg" alt="" />
                           </div>
                           <h4>Hair</h4>
                        </div>
                        <div className="fav-tool">
                           <div className="fav-tool-img">
                              <img src="/textures/img3.jpg" alt="" />
                           </div>
                           <h4>Beauty</h4>
                        </div>
                     </div>
                     <div className="fav-tools-list-row">
                        <div className="fav-tool">
                           <div className="fav-tool-img">
                              <img src="/textures/img4.jpg" alt="" />
                           </div>
                           <h4>Esthetics</h4>
                        </div>
                        <div className="fav-tool">
                           <div className="fav-tool-img">
                              <img src="/textures/img5.jpg" alt="" />
                           </div>
                           <h4>Signature Services</h4>
                        </div>
                        <div className="fav-tool">
                           <div className="fav-tool-img">
                              <img src="/textures/img6.jpg" alt="" />
                           </div>
                           <h4>Franchise</h4>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </ReactLenis>
         <section ref={stickyTitlesRef} className="sticky-titles h-screen">
            <div className="sticky-titles-nav">
               <a href="/about" className="primary sm">About Me</a>
               <a href="/bsm" className="primary sm">About BSM</a>
            </div>
            <div className="sticky-titles-footer">
               <a href="/franchise" className="primary sm">Franchise</a>
               <a href="/contact" className="primary sm">Contact</a>
            </div>
            <h2 ref={(el) => (titlesRef.current[0] = el)}>
               Seamlessly control your smart home with intuitive voice commands—fast, secure, and reliable.
            </h2>
            <h2 ref={(el) => (titlesRef.current[1] = el)}>
               Experience hands-free living with our intelligent, responsive, and voice-activated home automation system.
            </h2>
            <h2 ref={(el) => (titlesRef.current[2] = el)}>
               Transform your home with powerful voice control—effortless automation at your command.
            </h2>
         </section>
         <ScrollCanvas />
      </>
   )
}
