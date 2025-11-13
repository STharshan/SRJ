"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

export default function CareTypesSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      once: true, // animate only once when scrolled into view
      easing: "ease-out-cubic",
    });
  }, []);

  const careTypes = [
    {
      title: "Older Person Care",
      description:
        "Older person care supports seniors in maintaining their health, independence, and quality of life. It combines practical assistance with emotional support in a safe and comfortable environment.",
      href: "/care/residential/",
    },
    {
      title: "Dementia Care",
      description:
        "Dementia care focuses on individuals experiencing memory loss or cognitive decline. It provides structured routines, compassionate support, and tailored activities to enhance daily living and well-being.",
      href: "/care/dementia/",
    },
    {
      title: "Learning Disability / Autism",
      description:
        "Care for those with learning disabilities or autism offers personalized support to develop skills, independence, and social engagement. It emphasizes understanding, patience, and tailored approaches to meet individual needs.",
      href: "/care/respite/",
    },
    {
      title: "Mental Health Condition",
      description:
        "Mental health care supports individuals facing conditions like anxiety, depression, or other disorders. It combines therapy, guidance, and practical strategies to improve well-being and daily functioning.",
      href: "/care/nursing/",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B] mb-4">
            Types of care we provide
          </h2>
          <p className="text-lg text-[#3C2E2B]/70 max-w-2xl mx-auto">
            Specialist support tailored to individual needs, delivered with compassion and expertise
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {careTypes.map((item, i) => (
            <a
              key={i}
              href={item.href}
              data-aos="fade-up"
              data-aos-delay={i * 150} // staggered animation
              className="group bg-primary flex flex-col justify-between gap-6 rounded-xl border border-[#E8DCC7]/70 py-6 shadow-md shadow-secondary-hover hover:scale-[1.02] transition-all duration-300 h-full"
            >
              {/* Card content */}
              <div className="grid gap-2 px-6">
                <h3 className="font-serif font-semibold text-xl text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Arrow at the bottom */}
              <div className="px-6 flex items-center justify-end mt-auto">
                <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
