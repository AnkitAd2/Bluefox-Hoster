import { useSyncExternalStore } from 'react'

const PRICE_STORAGE_KEY = 'bluefox-hosting-prices-v1'
const PRICE_FORMAT_VERSION = 1
export const PRICE_CATALOG = [
  { id: 'domain.com', category: 'Domains', item: '.com domain', defaultPrice: 'Rs 1,950/yr' },
  { id: 'domain.net', category: 'Domains', item: '.net domain', defaultPrice: 'Rs 1,750/yr' },
  { id: 'domain.biz', category: 'Domains', item: '.biz domain', defaultPrice: 'Rs 2,450/yr' },
  { id: 'domain.np', category: 'Domains', item: '.np domain', defaultPrice: 'Free' },
  { id: 'domain.info', category: 'Domains', item: '.info domain', defaultPrice: 'Rs 1,850/yr' },
  { id: 'domain.org', category: 'Domains', item: '.org domain', defaultPrice: 'Rs 2,250/yr' },
  { id: 'web.starter', category: 'Web hosting', item: 'Starter Web', defaultPrice: 'Rs 120' },
  { id: 'web.business', category: 'Web hosting', item: 'Business Pro', defaultPrice: 'Rs 350' },
  { id: 'web.cloud', category: 'Web hosting', item: 'Cloud Ultra', defaultPrice: 'Rs 850' },
  { id: 'cloud.starter', category: 'Cloud hosting', item: 'Cloud Starter', defaultPrice: 'Rs 350' },
  { id: 'cloud.business', category: 'Cloud hosting', item: 'Cloud Business Pro', defaultPrice: 'Rs 850' },
  { id: 'cloud.enterprise', category: 'Cloud hosting', item: 'Cloud Enterprise', defaultPrice: 'Rs 1,850' },
  { id: 'wordpress.starter', category: 'WordPress hosting', item: 'WP Starter', defaultPrice: 'Rs 250' },
  { id: 'wordpress.business', category: 'WordPress hosting', item: 'WP Business', defaultPrice: 'Rs 650' },
  { id: 'wordpress.pro', category: 'WordPress hosting', item: 'WP Pro', defaultPrice: 'Rs 1,450' },
  { id: 'ecommerce.starter', category: 'eCommerce hosting', item: 'Starter Store', defaultPrice: 'Rs 450' },
  { id: 'ecommerce.business', category: 'eCommerce hosting', item: 'Growth Ecom', defaultPrice: 'Rs 990' },
  { id: 'ecommerce.pro', category: 'eCommerce hosting', item: 'Enterprise Shop', defaultPrice: 'Rs 2,150' },
  { id: 'django.starter', category: 'Django hosting', item: 'Django Starter', defaultPrice: 'Rs 550' },
  { id: 'django.business', category: 'Django hosting', item: 'Django Business', defaultPrice: 'Rs 1,150' },
  { id: 'django.pro', category: 'Django hosting', item: 'Django Enterprise', defaultPrice: 'Rs 2,250' },
  { id: 'python.starter', category: 'Python hosting', item: 'Python Starter', defaultPrice: 'Rs 450' },
  { id: 'python.business', category: 'Python hosting', item: 'Python Business', defaultPrice: 'Rs 950' },
  { id: 'python.pro', category: 'Python hosting', item: 'Python Enterprise', defaultPrice: 'Rs 1,950' },
  { id: 'node.starter', category: 'Node.js hosting', item: 'Node.js Starter', defaultPrice: 'Rs 450' },
  { id: 'node.business', category: 'Node.js hosting', item: 'Node.js Business', defaultPrice: 'Rs 950' },
  { id: 'node.pro', category: 'Node.js hosting', item: 'Node.js Enterprise', defaultPrice: 'Rs 1,950' },
  { id: 'vps.nepal.starter', category: 'VPS', item: 'Nepal VPS Starter', defaultPrice: 'Rs 1,200' },
  { id: 'vps.nepal.business', category: 'VPS', item: 'Nepal VPS Business', defaultPrice: 'Rs 2,500' },
  { id: 'vps.nepal.enterprise', category: 'VPS', item: 'Nepal VPS Enterprise', defaultPrice: 'Rs 5,000' },
  { id: 'vps.usa.starter', category: 'VPS', item: 'USA VPS Starter', defaultPrice: 'Rs 1,500' },
  { id: 'vps.usa.business', category: 'VPS', item: 'USA VPS Business', defaultPrice: 'Rs 3,000' },
  { id: 'vps.usa.enterprise', category: 'VPS', item: 'USA VPS Enterprise', defaultPrice: 'Rs 6,000' },
  { id: 'vps.europe.starter', category: 'VPS', item: 'Europe VPS Starter', defaultPrice: 'Rs 1,500' },
  { id: 'vps.europe.business', category: 'VPS', item: 'Europe VPS Business', defaultPrice: 'Rs 3,000' },
  { id: 'vps.europe.enterprise', category: 'VPS', item: 'Europe VPS Enterprise', defaultPrice: 'Rs 6,000' },
  { id: 'vps.nepal', category: 'VPS', item: 'Nepal Based VPS', defaultPrice: 'Rs 999' },
  { id: 'vps.usa', category: 'VPS', item: 'USA Based VPS', defaultPrice: 'Rs 799' },
  { id: 'vps.europe', category: 'VPS', item: 'Europe Based VPS', defaultPrice: 'Rs 849' },
  { id: 'email.google.starter', category: 'Email & cloud', item: 'Google Workspace — Business Starter', defaultPrice: 'Rs 780' },
  { id: 'email.google.standard', category: 'Email & cloud', item: 'Google Workspace — Business Standard', defaultPrice: 'Rs 1,550' },
  { id: 'email.google.plus', category: 'Email & cloud', item: 'Google Workspace — Business Plus', defaultPrice: 'Rs 2,300' },
  { id: 'email.google-cloud.committed', category: 'Email & cloud', item: 'Google Cloud — Committed Use', defaultPrice: 'Rs 2,200' },
  { id: 'email.google-cloud.enterprise', category: 'Email & cloud', item: 'Google Cloud — Enterprise', defaultPrice: 'Custom Quote' },
  { id: 'email.google-cloud.payg', category: 'Email & cloud', item: 'Google Cloud — Pay-As-You-Go', defaultPrice: 'Usage-Based' },
  { id: 'email.microsoft.basic', category: 'Email & cloud', item: 'Microsoft 365 — Business Basic', defaultPrice: 'Rs 650' },
  { id: 'email.microsoft.apps', category: 'Email & cloud', item: 'Microsoft 365 — Apps for Business', defaultPrice: 'Rs 850' },
  { id: 'email.microsoft.premium', category: 'Email & cloud', item: 'Microsoft 365 — Business Premium', defaultPrice: 'Rs 1,250' },
  { id: 'email.zoho.mail-lite', category: 'Email & cloud', item: 'Zoho Mail — Mail Lite', defaultPrice: 'Rs 350' },
  { id: 'email.zoho.mail-premium', category: 'Email & cloud', item: 'Zoho Mail — Mail Premium', defaultPrice: 'Rs 700' },
  { id: 'email.zoho.workplace', category: 'Email & cloud', item: 'Zoho Workplace — Workplace', defaultPrice: 'Rs 1,050' },
  { id: 'email.zoom.pro', category: 'Email & cloud', item: 'Zoom — Zoom Pro', defaultPrice: 'Rs 1,350' },
  { id: 'email.zoom.business', category: 'Email & cloud', item: 'Zoom — Business', defaultPrice: 'Rs 1,850' },
  { id: 'email.zoom.business-plus', category: 'Email & cloud', item: 'Zoom — Business+', defaultPrice: 'Rs 2,500' },
  { id: 'email.nord.basic', category: 'Email & cloud', item: 'NordVPN — Basic', defaultPrice: 'Rs 350' },
  { id: 'email.nord.plus', category: 'Email & cloud', item: 'NordVPN — Plus', defaultPrice: 'Rs 650' },
  { id: 'email.nord.complete', category: 'Email & cloud', item: 'NordVPN — Complete', defaultPrice: 'Rs 950' },
  { id: 'email.copilot.m365', category: 'Email & cloud', item: 'Copilot for M365', defaultPrice: 'Rs 2,800' },
  { id: 'email.copilot.pro', category: 'Email & cloud', item: 'Copilot Pro', defaultPrice: 'Rs 1,800' },
  { id: 'email.powerbi.pro', category: 'Email & cloud', item: 'Power BI Pro', defaultPrice: 'Rs 850' },
  { id: 'email.powerbi.premium', category: 'Email & cloud', item: 'Power BI Premium Per User', defaultPrice: 'Rs 2,800' },
  { id: 'email.azure.dev-test', category: 'Email & cloud', item: 'Azure — Dev / Test', defaultPrice: 'Rs 3,500' },
  { id: 'email.zoho-crm.standard', category: 'Email & cloud', item: 'Zoho CRM — Standard', defaultPrice: 'Rs 700' },
  { id: 'email.zoho-crm.professional', category: 'Email & cloud', item: 'Zoho CRM — Professional', defaultPrice: 'Rs 1,200' },
  { id: 'email.zoho-crm.enterprise', category: 'Email & cloud', item: 'Zoho CRM — Enterprise', defaultPrice: 'Rs 2,000' },
  { id: 'email.bigin.free', category: 'Email & cloud', item: 'Bigin — Free', defaultPrice: 'Rs 0' },
  { id: 'email.bigin.express', category: 'Email & cloud', item: 'Bigin — Express', defaultPrice: 'Rs 450' },
  { id: 'email.bigin.premier', category: 'Email & cloud', item: 'Bigin — Premier', defaultPrice: 'Rs 750' },
  { id: 'email.aws.free', category: 'Email & cloud', item: 'AWS — Free Tier', defaultPrice: 'Rs 0' },
  { id: 'email.aws.savings', category: 'Email & cloud', item: 'AWS — Savings Plans', defaultPrice: 'Rs 4,500+' },
  { id: 'email.microsoft.ltsc-standard', category: 'Email & cloud', item: 'Office LTSC — Standard', defaultPrice: 'Rs 8,500' },
  { id: 'email.microsoft.ltsc-professional', category: 'Email & cloud', item: 'Office LTSC — Professional', defaultPrice: 'Rs 12,000' },
  { id: 'email.azure.payg', category: 'Email & cloud', item: 'Azure — Pay-As-You-Go', defaultPrice: 'Free to Start' },
  { id: 'email.azure.enterprise', category: 'Email & cloud', item: 'Azure — Enterprise', defaultPrice: 'Custom Quote' },
  { id: 'email.zoho-workplace.standard', category: 'Email & cloud', item: 'Zoho Workplace — Standard', defaultPrice: 'Rs 700' },
  { id: 'email.zoho-workplace.professional', category: 'Email & cloud', item: 'Zoho Workplace — Professional', defaultPrice: 'Rs 1,200' },
  { id: 'email.aws.on-demand', category: 'Email & cloud', item: 'AWS — On-Demand', defaultPrice: 'Usage-Based' },
  { id: 'email.defender.business', category: 'Email & cloud', item: 'Microsoft Defender for Business', defaultPrice: 'Rs 850' },
  { id: 'email.defender.p2', category: 'Email & cloud', item: 'Microsoft Defender P2', defaultPrice: 'Rs 1,400' },
  { id: 'code.django', category: 'Developer hosting', item: 'Django hosting starting price', defaultPrice: 'From Rs 290/mo' },
  { id: 'code.python', category: 'Developer hosting', item: 'Python hosting starting price', defaultPrice: 'From Rs 290/mo' },
  { id: 'code.node', category: 'Developer hosting', item: 'Node.js hosting starting price', defaultPrice: 'From Rs 250/mo' },
  { id: 'code.java', category: 'Developer hosting', item: 'Java hosting starting price', defaultPrice: 'From Rs 350/mo' },
  { id: 'reseller.starting', category: 'Business hosting', item: 'Reseller hosting starting price', defaultPrice: 'From Rs 1,850/mo' },
  { id: 'business-toolkit.starting', category: 'Business hosting', item: 'Business toolkit starting price', defaultPrice: 'From Rs 950/mo' },
  { id: 'comparison.web-starter', category: 'Hosting comparison', item: 'Web Starter comparison price', defaultPrice: '83' },
  { id: 'comparison.web-plus', category: 'Hosting comparison', item: 'Web Plus comparison price', defaultPrice: '139' },
  { id: 'comparison.web-pro', category: 'Hosting comparison', item: 'Web Pro comparison price', defaultPrice: '222' },
  { id: 'comparison.web-elite', category: 'Hosting comparison', item: 'Web Elite comparison price', defaultPrice: '306' },
  { id: 'home.email.google', category: 'Email & cloud', item: 'Homepage Google Workspace starting price', defaultPrice: 'Rs 780' },
  { id: 'home.email.microsoft', category: 'Email & cloud', item: 'Homepage Microsoft 365 starting price', defaultPrice: 'Rs 650' },
  { id: 'home.email.zoho', category: 'Email & cloud', item: 'Homepage Zoho Workplace starting price', defaultPrice: 'Rs 700' },
  { id: 'home.email.zoom', category: 'Email & cloud', item: 'Homepage Zoom Business starting price', defaultPrice: 'Rs 1,850' },
  { id: 'pricing.starter.triennial', category: 'Web hosting plans', item: 'Starter — three-year price per month', defaultPrice: '120' },
  { id: 'pricing.starter.annual', category: 'Web hosting plans', item: 'Starter — annual price per month', defaultPrice: '180' },
  { id: 'pricing.growth.triennial', category: 'Web hosting plans', item: 'Growth — three-year price per month', defaultPrice: '240' },
  { id: 'pricing.growth.annual', category: 'Web hosting plans', item: 'Growth — annual price per month', defaultPrice: '360' },
  { id: 'pricing.bluefox.triennial', category: 'Web hosting plans', item: 'Bluefox Hoster — three-year price per month', defaultPrice: '420' },
  { id: 'pricing.bluefox.annual', category: 'Web hosting plans', item: 'Bluefox Hoster — annual price per month', defaultPrice: '620' },
  { id: 'pricing.ultimate.triennial', category: 'Web hosting plans', item: 'Ultimate — three-year price per month', defaultPrice: '720' },
  { id: 'pricing.ultimate.annual', category: 'Web hosting plans', item: 'Ultimate — annual price per month', defaultPrice: '980' },
  { id: 'pricing.starter.triennial.was', category: 'Web hosting plans', item: 'Starter — three-year comparison price', defaultPrice: '400' },
  { id: 'pricing.starter.annual.was', category: 'Web hosting plans', item: 'Starter — annual comparison price', defaultPrice: '240' },
  { id: 'pricing.growth.triennial.was', category: 'Web hosting plans', item: 'Growth — three-year comparison price', defaultPrice: '800' },
  { id: 'pricing.growth.annual.was', category: 'Web hosting plans', item: 'Growth — annual comparison price', defaultPrice: '480' },
  { id: 'pricing.bluefox.triennial.was', category: 'Web hosting plans', item: 'Bluefox Hoster — three-year comparison price', defaultPrice: '1,400' },
  { id: 'pricing.bluefox.annual.was', category: 'Web hosting plans', item: 'Bluefox Hoster — annual comparison price', defaultPrice: '840' },
  { id: 'pricing.ultimate.triennial.was', category: 'Web hosting plans', item: 'Ultimate — three-year comparison price', defaultPrice: '2,400' },
  { id: 'pricing.ultimate.annual.was', category: 'Web hosting plans', item: 'Ultimate — annual comparison price', defaultPrice: '1,200' },
  { id: 'code-page.java', category: 'Developer hosting', item: 'Bluefox Java detailed price', defaultPrice: 'Rs 350/mo' },
  { id: 'code-page.django', category: 'Developer hosting', item: 'Django detailed price', defaultPrice: 'Rs 290/mo' },
  { id: 'code-page.python', category: 'Developer hosting', item: 'Python detailed price', defaultPrice: 'Rs 290/mo' },
  { id: 'code-page.node', category: 'Developer hosting', item: 'Node.js detailed price', defaultPrice: 'Rs 250/mo' },
  { id: 'hosting-options.web', category: 'Hosting overview', item: 'Web Hosting starting price', defaultPrice: 'From Rs 120/mo' },
  { id: 'hosting-options.cloud', category: 'Hosting overview', item: 'Cloud Hosting starting price', defaultPrice: 'From Rs 350/mo' },
  { id: 'hosting-options.django', category: 'Hosting overview', item: 'Django Hosting starting price', defaultPrice: 'From Rs 290/mo' },
  { id: 'hosting-options.python', category: 'Hosting overview', item: 'Python Hosting starting price', defaultPrice: 'From Rs 290/mo' },
  { id: 'hosting-options.node', category: 'Hosting overview', item: 'Node.js Hosting starting price', defaultPrice: 'From Rs 250/mo' },
  { id: 'hosting-options.java', category: 'Hosting overview', item: 'Java Hosting starting price', defaultPrice: 'From Rs 350/mo' },
  { id: 'hosting-options.nepal-vps', category: 'Hosting overview', item: 'Nepal VPS starting price', defaultPrice: 'From Rs 1,200/mo' },
  { id: 'hosting-options.usa-vps', category: 'Hosting overview', item: 'USA VPS starting price', defaultPrice: 'From Rs 1,500/mo' },
  { id: 'hosting-options.europe-vps', category: 'Hosting overview', item: 'Europe VPS starting price', defaultPrice: 'From Rs 1,400/mo' },
  { id: 'hosting-options.reseller', category: 'Hosting overview', item: 'Reseller Hosting starting price', defaultPrice: 'From Rs 1,850/mo' },
  { id: 'hosting-options.business-toolkit', category: 'Hosting overview', item: 'Business Toolkit starting price', defaultPrice: 'From Rs 950/mo' },
  { id: 'home.hosting.web', category: 'Homepage hosting', item: 'Homepage Web Hosting starting price', defaultPrice: 'Rs 120/mo' },
  { id: 'home.hosting.cloud', category: 'Homepage hosting', item: 'Homepage Cloud Hosting starting price', defaultPrice: 'Rs 450/mo' },
  { id: 'home.hosting.wordpress', category: 'Homepage hosting', item: 'Homepage WordPress starting price', defaultPrice: 'Rs 199/mo' },
  { id: 'home.hosting.ecommerce', category: 'Homepage hosting', item: 'Homepage eCommerce starting price', defaultPrice: 'Rs 349/mo' },
  { id: 'home.hosting.django', category: 'Homepage hosting', item: 'Homepage Django starting price', defaultPrice: 'Rs 290/mo' },
  { id: 'home.hosting.python', category: 'Homepage hosting', item: 'Homepage Python starting price', defaultPrice: 'Rs 290/mo' },
  { id: 'home.hosting.node', category: 'Homepage hosting', item: 'Homepage Node.js starting price', defaultPrice: 'Rs 250/mo' },
  { id: 'home.hosting.usa-vps', category: 'Homepage hosting', item: 'Homepage USA VPS starting price', defaultPrice: 'Rs 1,500/mo' },
  { id: 'home.hosting.europe-vps', category: 'Homepage hosting', item: 'Homepage Europe VPS starting price', defaultPrice: 'Rs 1,500/mo' },
  { id: 'home.hosting.nepal-vps', category: 'Homepage hosting', item: 'Homepage Nepal VPS starting price', defaultPrice: 'Rs 1,200/mo' },
  { id: 'service-page.generic', category: 'Service landing pages', item: 'Generic service page starting price', defaultPrice: 'Rs 499' },
]

const catalogById = new Map(PRICE_CATALOG.map((item) => [item.id, item]))
const listeners = new Set()

const readStoredPrices = () => {
  if (typeof window === 'undefined') return { overrides: {}, error: '' }
  try {
    const stored = window.localStorage.getItem(PRICE_STORAGE_KEY)
    if (!stored) return { overrides: {}, error: '' }
    const parsed = JSON.parse(stored)
    if (parsed?.version !== PRICE_FORMAT_VERSION || !parsed.overrides || typeof parsed.overrides !== 'object' || Array.isArray(parsed.overrides)) {
      return { overrides: {}, error: 'Saved prices have an unrecognized format. They were not changed.' }
    }
    const overrides = {}
    for (const [id, value] of Object.entries(parsed.overrides)) {
      if (!catalogById.has(id) || typeof value !== 'string' || value.trim() === '' || value.length > 80) {
        return { overrides: {}, error: 'Saved prices contain invalid data. They were not changed.' }
      }
      overrides[id] = value
    }
    return { overrides, error: '' }
  } catch {
    return { overrides: {}, error: 'Could not read saved prices from this browser.' }
  }
}

let state = readStoredPrices()
const publish = (nextState) => {
  state = { ...state, ...nextState }
  listeners.forEach((listener) => listener())
}

const handleStorage = (event) => {
  if (event.key !== PRICE_STORAGE_KEY) return
  const next = readStoredPrices()
  publish(next)
}

const subscribe = (listener) => {
  listeners.add(listener)
  if (typeof window !== 'undefined' && listeners.size === 1) window.addEventListener('storage', handleStorage)
  return () => {
    listeners.delete(listener)
    if (typeof window !== 'undefined' && listeners.size === 0) window.removeEventListener('storage', handleStorage)
  }
}

const getSnapshot = () => state

export const usePriceStore = () => {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  return {
    ...snapshot,
    catalog: PRICE_CATALOG,
    savePrices: (prices) => {
      if (state.error) throw new Error(state.error)
      const overrides = { ...state.overrides }
      for (const [id, value] of Object.entries(prices)) {
        if (!catalogById.has(id) || typeof value !== 'string' || !value.trim() || value.length > 80) {
          throw new Error('Each price must be non-empty text under 80 characters.')
        }
        overrides[id] = value.trim()
      }
      try {
        window.localStorage.setItem(PRICE_STORAGE_KEY, JSON.stringify({
          version: PRICE_FORMAT_VERSION,
          overrides,
        }))
      } catch {
        throw new Error('Could not save prices in this browser. Check browser storage settings and try again.')
      }
      publish({ overrides, error: '' })
    },
    resetPrices: () => {
      try {
        window.localStorage.removeItem(PRICE_STORAGE_KEY)
      } catch {
        throw new Error('Could not clear saved prices in this browser.')
      }
      publish({ overrides: {}, error: '' })
    },
  }
}

export const getPrice = (id, fallback, overrides = state.overrides) => overrides[id] ?? fallback

export const getPriceAmount = (id, fallback, overrides = state.overrides) => {
  const numericText = String(getPrice(id, fallback, overrides)).replace(/[^\d.-]/g, '')
  if (!numericText) return fallback
  const amount = Number(numericText)
  return Number.isFinite(amount) ? amount : fallback
}
