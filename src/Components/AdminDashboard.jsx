import React, { useState } from 'react'
import { ArrowLeft, Search } from 'lucide-react'
import BlueFoxLogo from '../assets/bluefoxlogo.svg'
import { getPrice, usePriceStore } from '../utils/priceCatalog'

const AdminDashboard = ({ onExit }) => {
  const priceStore = usePriceStore()

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-4 sm:px-7 lg:px-9">
          <div className="flex min-w-0 items-center gap-4">
            <img src={BlueFoxLogo} alt="Blue Fox Hoster" className="h-10 w-auto max-w-[150px]" />
            <span className="hidden h-9 border-l border-slate-200 sm:block" />
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-slate-400">Admin</p>
              <h1 className="truncate text-base font-bold text-slate-900 sm:text-lg">Website prices</h1>
            </div>
          </div>
          <button
            type="button"
            onClick={onExit}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 sm:px-4"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Back to website</span>
            <span className="sm:hidden">Website</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-7 sm:py-8 lg:px-9">
        <WebsitePrices priceStore={priceStore} />
      </main>
    </div>
  )
}

const WebsitePrices = ({ priceStore }) => {
  const [drafts, setDrafts] = useState(() => Object.fromEntries(priceStore.catalog.map(({ id, defaultPrice }) => [
    id,
    getPrice(id, defaultPrice, priceStore.overrides),
  ])))
  const [message, setMessage] = useState('')
  const [query, setQuery] = useState('')

  const visiblePrices = priceStore.catalog.filter(({ category, item }) => `${category} ${item}`.toLowerCase().includes(query.toLowerCase()))

  const updateDraft = (id, value) => setDrafts((current) => ({ ...current, [id]: value }))

  const save = (event) => {
    event.preventDefault()
    const changed = Object.fromEntries(
      priceStore.catalog
        .filter(({ id, defaultPrice }) => drafts[id] !== getPrice(id, defaultPrice, priceStore.overrides))
        .map(({ id }) => [id, drafts[id]]),
    )
    if (Object.keys(changed).length === 0) {
      setMessage('There are no price changes to save.')
      return
    }
    setMessage('')
    try {
      priceStore.savePrices(changed)
      setMessage('Prices saved in this browser. The public website in this browser now uses these values.')
    } catch (error) {
      setMessage(error.message)
    }
  }

  const reset = () => {
    try {
      priceStore.resetPrices()
      setDrafts(Object.fromEntries(priceStore.catalog.map(({ id, defaultPrice }) => [id, defaultPrice])))
      setMessage('All prices restored to their original values.')
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div>
          <h2 className="text-sm font-bold text-slate-900">Manage website prices</h2>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Update the prices shown across the website. Changes are saved in this browser and appear on the website opened from this same browser.
          </p>
        </div>

        {priceStore.error && (
          <p role="alert" className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
            {priceStore.error}
          </p>
        )}
        {message && <p role="status" className="mt-4 rounded-xl bg-blue-50 p-3 text-xs text-blue-800">{message}</p>}
      </div>

      <form onSubmit={save} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:px-5">
          <label className="relative block w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <span className="sr-only">Search website prices</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a product or category…"
              className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-400"
            />
          </label>
          <span className="text-xs text-slate-400">{visiblePrices.length} prices</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-slate-50">
              <tr>
                {['Category', 'Website item', 'Displayed price'].map((column) => (
                  <th key={column} className="px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-slate-400">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visiblePrices.map(({ id, category, item, defaultPrice }) => (
                <tr key={id}>
                  <td className="px-5 py-3.5 text-xs text-slate-500">{category}</td>
                  <td className="px-5 py-3.5 text-xs font-semibold text-slate-800">{item}</td>
                  <td className="px-5 py-2.5">
                    <label className="sr-only" htmlFor={`price-${id}`}>{item} displayed price</label>
                    <input
                      id={`price-${id}`}
                      required
                      maxLength={80}
                      value={drafts[id] ?? defaultPrice}
                      onChange={(event) => updateDraft(id, event.target.value)}
                      className="w-full max-w-xs rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
                    />
                  </td>
                </tr>
              ))}
              {visiblePrices.length === 0 && (
                <tr>
                  <td colSpan="3" className="px-5 py-10 text-center text-sm text-slate-500">No prices match “{query}”.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap justify-end gap-2 border-t border-slate-100 p-4">
          <button
            type="button"
            onClick={reset}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
          >
            Restore defaults
          </button>
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-[0_12px_28px_rgba(30,136,229,0.45)] active:scale-95"
          >
            Save all prices
          </button>
        </div>
      </form>
    </section>
  )
}

export default AdminDashboard
