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
        `Mum was resident at the home for the final 6 weeks of her life. She was 94, very frail and we were no longer, as a family, able to provide the nursing care she needed as she neared the end of her life.
From day 1 Mum was looked after by caring staff, who treated her with dignity and kindness throughout.",
      name: "Stephen Bramley`,
      initials: "Son",
    },
    {
      text:
        "My dad was in Clifton manor for over 1 year he had dementia. Clifton manor was so caring and helpful with helping us transition my dad from living with us to permanently to living at Clifton manor as we felt guilty for having to make that decision.",
      name: "Deborah M",
      initials: "Daughter of Resident",
    },
    {
      text:
        "A truly wonderful team. The staff treat every resident with warmth, patience and respect — it feels like an extended family.",
      name: "Mark P.",
      initials: "Son",
    },
    {
      text:
        "I can’t thank the team enough for their constant support and kindness. Every day they go above and beyond for my father’s comfort and wellbeing.",
      name: "Laura D.",
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