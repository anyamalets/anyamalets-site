'use client';

import { useState, useEffect } from 'react';

const quotes = [
  {
    text: 'Относиться к себе хорошо – первый и единственный способ вступить на путь личностного роста: тело, в котором ты живешь – ...единственный дом в этом путешествии. Самое меньшее, что ты должен делать – это любить, уважать и обращаться с ним бережно.',
    author: 'ПАОЛО БОРЗАКЕЛЛО',
  },
  {
    text: 'Голова уже идет кругом от обилия противоречивых сведений о еде. Пища должна быть доступным источником наслаждения, универсальной человеческой радостью, но, как это ни печально, сегодня она вызывает у многих непреходящее чувство вины и страх.',
    author: 'РЕНЕ МАКГРЕГОР',
  },
  {
    text: 'Часто мы относимся к своему телу, как к телеге, а на самом деле – это космический корабль.',
    author: 'САДХГУРУ',
  },
  {
    text: 'Ругать себя, когда вам плохо, это как кидать в себя дротики: вам не станется лучше, у вас просто станется больше ран.',
    author: 'БРЕНЕ БРАУН',
  },
  {
    text: 'Я не идеальный, но меня достаточно.',
    author: 'КАРЛ РОДЖЕРС',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % quotes.length);
  const prev = () => setCurrent((current - 1 + quotes.length) % quotes.length);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section
      id="testimonials"
      className="relative w-full bg-bg-beige scroll-mt-24 py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/photos/quote-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-bg/70 backdrop-blur-sm"></div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-center text-[28px] md:text-[32px] lg:text-[36px] font-medium text-text leading-[1.2] italic mb-16 md:mb-20">
            Вдохновение
          </h2>

          {/* Quotes carousel */}
          <div className="relative flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
            {/* Left arrow */}
            <button
              onClick={prev}
              className="hidden md:flex p-2 lg:p-3 hover:bg-accent/10 rounded-lg transition-colors flex-shrink-0"
              aria-label="Previous quote"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Quote content */}
            <div className="text-center flex-1">
              {/* Quote mark */}
              <div className="flex justify-center mb-8 md:mb-10">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  className="text-accent"
                >
                  <path
                    d="M12.5 20c-4.14 0-7.5 3.36-7.5 7.5v15c0 4.14 3.36 7.5 7.5 7.5h7.5v-7.5h-5V27.5c0-2.48 2.02-4.5 4.5-4.5V20z"
                    fill="currentColor"
                  />
                  <path
                    d="M42.5 20c-4.14 0-7.5 3.36-7.5 7.5v15c0 4.14 3.36 7.5 7.5 7.5h7.5v-7.5h-5V27.5c0-2.48 2.02-4.5 4.5-4.5V20z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Quote text - fixed height to prevent layout shift */}
              <h3
                className="text-[20px] md:text-[24px] lg:text-[26px] font-medium text-text leading-[1.6] mb-8 flex items-center justify-center min-h-[200px] md:min-h-[260px] lg:min-h-[320px]"
              >
                "{quotes[current].text}"
              </h3>

              {/* Author */}
              <p className="text-[16px] md:text-[18px] font-medium text-accent tracking-wider uppercase mb-6">
                {quotes[current].author}
              </p>

              {/* Divider */}
              <div className="h-1 w-16 bg-accent mx-auto mb-8 md:mb-10"></div>

              {/* Navigation buttons - mobile view */}
              <div className="flex md:hidden items-center justify-center gap-6">
                <button
                  onClick={prev}
                  className="p-3 hover:bg-accent/10 rounded-lg transition-colors"
                  aria-label="Previous quote"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                {/* Dots indicator */}
                <div className="flex gap-3">
                  {quotes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`rounded-full transition-all ${
                        idx === current ? 'w-10 h-3 bg-accent' : 'w-3 h-3 bg-accent/30'
                      }`}
                      aria-label={`Go to quote ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-3 hover:bg-accent/10 rounded-lg transition-colors"
                  aria-label="Next quote"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Dots indicator - desktop view */}
              <div className="hidden md:flex gap-3 md:gap-4 justify-center">
                {quotes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`rounded-full transition-all ${
                      idx === current ? 'w-10 h-3 bg-accent' : 'w-3 h-3 bg-accent/30'
                    }`}
                    aria-label={`Go to quote ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              className="hidden md:flex p-2 lg:p-3 hover:bg-accent/10 rounded-lg transition-colors flex-shrink-0"
              aria-label="Next quote"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
