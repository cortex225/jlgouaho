'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Locale = 'en' | 'fr';

type Testimonial = {
  quote: {
    fr: string;
    en: string;
  };
  author: string;
  role: {
    fr: string;
    en: string;
  };
  company: string;
  avatar: string;
};

interface TestimonialsSliderProps {
  locale: Locale;
  testimonials: Testimonial[];
}

export function TestimonialsSlider({ locale, testimonials }: TestimonialsSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <div className="relative">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="min-w-full shrink-0 px-1"
          >
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-7 border border-white dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-4 right-6 text-8xl font-serif text-slate-100 dark:text-slate-800 leading-none select-none pointer-events-none">"</div>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6 relative z-10 italic">
                "{locale === 'fr' ? testimonial.quote.fr : testimonial.quote.en}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 border-2 border-slate-200 dark:border-slate-700">
                  <Image src={testimonial.avatar} alt={testimonial.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{testimonial.author}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {locale === 'fr' ? testimonial.role.fr : testimonial.role.en} · {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-indigo-500' : 'w-2 bg-slate-300 dark:bg-slate-700'}`}
              aria-label={`Afficher le témoignage ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

