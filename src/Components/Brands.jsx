import React from 'react'
import govtLogo from '../assets/government.avif'
import ingLogo from '../assets/ing.avif'
import cgLogo from '../assets/chaudhary-group.avif'
import sitaLogo from '../assets/sitaair.avif'

const brands = [
  { name: 'Government of Nepal - Ministry of Health', logo: govtLogo },
  { name: 'ING Group', logo: ingLogo },
  { name: 'CG Chaudhary Group', logo: cgLogo },
  { name: 'Sita Air', logo: sitaLogo },
]

const BrandsSlider = () => (
  <section
    aria-labelledby="associated-brands-title"
    className="overflow-hidden border-y border-slate-200/80 bg-white/90 py-7 font-sans sm:py-9"
  >
    <div className="site-container">
      <h2
        id="associated-brands-title"
        className="mb-5 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-500 sm:mb-6"
      >
        Selected organizations associated with Fox Host
      </h2>
      <div className="brand-slider relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="brand-slider-track flex w-max items-center">
          {Array.from({ length: 4 }, (_, copy) => (
            <div
              key={copy}
              aria-hidden={copy > 0}
              className="flex shrink-0 items-center gap-8 px-4 sm:gap-14 sm:px-7"
            >
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex h-14 w-36 shrink-0 items-center justify-center sm:h-16 sm:w-48"
                >
                  <img
                    src={brand.logo}
                    alt={copy === 0 ? brand.name : ''}
                    className="max-h-11 max-w-full object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-12"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    <style>{`
      @keyframes brand-slider-scroll {
        to { transform: translateX(-25%); }
      }

      .brand-slider-track {
        animation: brand-slider-scroll 36s linear infinite;
      }

      .brand-slider:hover .brand-slider-track,
      .brand-slider:focus-within .brand-slider-track {
        animation-play-state: paused;
      }

      @media (prefers-reduced-motion: reduce) {
        .brand-slider-track {
          animation: none;
        }

        .brand-slider {
          overflow-x: auto;
        }
      }
    `}</style>
  </section>
)

export default BrandsSlider
