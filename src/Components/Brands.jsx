import React from 'react'
import govtLogo from '../assets/government.avif'
import ingLogo from '../assets/ing.avif'
import cgLogo from '../assets/chaudhary-group.avif'
import sitaLogo from '../assets/sitaair.avif'

const BrandsVertical = () => {
  const brands = [
    { id: 1, name: 'Government of Nepal - Ministry of Health', logoUrl: govtLogo },
    { id: 2, name: 'ING Group', logoUrl: ingLogo },
    { id: 3, name: 'CG Chaudhary Group', logoUrl: cgLogo },
    { id: 4, name: 'Sita Air', logoUrl: sitaLogo },
  ]

  return (
    <section className="border-y border-slate-200 bg-white py-8 font-sans">
      <div className="site-container">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <h2 className="section-title max-w-xs text-center font-semibold leading-tight text-slate-900 lg:text-left">
            Selected organizations associated with Fox Host
          </h2>
          <div className="grid w-full grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:max-w-4xl">
            {brands.map((brand) => (
              <div key={brand.id} className="flex h-16 items-center justify-center px-2">
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  className="max-h-12 max-w-[160px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandsVertical