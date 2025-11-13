"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Review() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // initial states
      gsap.set(cards, { yPercent: 30, opacity: 0 });
      gsap.set(cards[0], { yPercent: 0, opacity: 1 });

      // timeline for card reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
          end: "+=" + cards.length * 400,
          scrub: 1.5,
        },
      });

      // Animate each card one by one
      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(cards[i], { opacity: 1, yPercent: 0, duration: 1 }, i * 0.5);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
     {
      text:
        `Dreadfully understaffed. Frequent change of staff and management. Clearly no investment in building or staff. Agency staff not adequately trained. I do not believe my father's basic care needs are being met.`,
      initials: "Daughter of Resident",
    },
    {
      text:
        "My relative went into this home a couple of months ago. Since moving in, I have peace of mind. I know that he is well looked after and that he has people that actually care about him. The staff are caring and take the time to feed him as he is unable to do this. They change him regularly and move his position to make sure there are no bedsores.",
      name: "Deborah M",
      initials: "Daughter of Resident",
    },
    {
      text:
        "The home has always been clean warm and welcoming. The staff are always attentive and doing activities or sitting and chatting to the residents. My mum seems happy and settled.",
      name: "Patricia B",
      initials: "Son",
    },
    {
      text:
        "My mother was in The Old Vicarage Care Home for over 9 years and from day one we were very pleased with the care and love she received. The staff were kind at all times and spent as much time as they could talking to her especially when she was eventually confined to her room.",
      name: "Leah H",
      initials: "Daughter",
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
    >
      {/* === Background image scrolls normally === */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="Hear it from our clients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* === Heading === */}
      <div className="relative z-10 text-center pt-32 pb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-primary">
          Hear it from our clients
        </h2>
      </div>

      {/* === Cards container === */}
      <div
        ref={cardsContainerRef}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-8 pb-32"
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-full bg-white/10 backdrop-blur-md rounded-2xl h-60 border border-white/10 
                       shadow-[0_0_20px_rgba(0,0,0,0.3)] p-6 md:p-8 opacity-0 transform translate-y-8"
          >
            <p className="text-lg md:text-xl font-semibold mb-3 text-primary">{item.initials}</p>
            <p className="text-sm md:text-base opacity-80 mb-4">{item.text}</p>
            <div className="flex items-center gap-13 text-primary">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}