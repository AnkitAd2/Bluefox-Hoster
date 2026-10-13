import React from 'react'

const plans = [
  { name: 'Web Starter', price: '83' },
  { name: 'Web Plus', price: '139' },
  { name: 'Web Pro', price: '222', popular: true },
  { name: 'Web Elite', price: '306' },
]

const included = [true, true, true, true]

const featureGroups = [
  {
    title: 'Core specs',
    rows: [
      { label: 'Websites', values: ['2', '10', 'Unlimited', 'Unlimited'] },
      { label: 'NVMe SSD storage', values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { label: 'Bandwidth', values: ['Unmetered', 'Unmetered', 'Unmetered', 'Unmetered'] },
      { label: 'File limit', values: ['150,000', '300,000', '350,000', '600,000'] },
      { label: 'Web mailboxes', values: ['20', '30', '30', 'Unlimited'] },
      { label: 'MySQL databases', values: ['10', '20', '30', 'Unlimited'] },
      { label: 'Subdomains', values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
    ],
  },
  {
    title: 'Performance',
    rows: [
      { label: 'LVE RAM', values: ['2GB', '3GB', '4GB', '5GB'] },
      { label: '7× faster performance', values: [false, false, false, true] },
      { label: 'Automated caching', detail: 'Full-page caching and resource compression without manual configuration.', values: included },
      { label: 'Resource management', detail: 'Helps reduce slow load times and common high-load issues.', values: included },
      { label: 'Premium upgrades', detail: 'Critical CSS generation, image optimization, and Redis object caching.', values: included },
      { label: 'Optimize website', values: included },
    ],
  },
  {
    title: 'Security & backup',
    rows: [
      { label: 'Security', values: ['24/7 Monitoring', '24/7 Monitoring', 'Foxnett Fortress', 'Foxnett Fortress'] },
      { label: 'Daily backups', values: included },
      { label: 'Free SSL certificate', values: included },
      { label: 'Auto SSL', values: included },
      { label: 'Imunify360', detail: 'Automated web server security suite.', values: included },
      { label: 'Virus scanning', values: included },
      { label: 'ModSecurity domain manager', detail: 'Per-domain web application firewall settings.', values: included },
      { label: 'IP blocker', values: included },
      { label: 'Hotlink protection', values: included },
      { label: 'Google Authenticator', values: included },
      { label: 'Backup manager', values: included },
      { label: 'File and directory restoration', values: included },
      { label: 'JetBackup 5', values: included },
      { label: 'Uptime guarantee', values: ['99.99%', '99.99%', '99.99%', '99.99%'] },
    ],
  },
  {
    title: 'Development & tools',
    rows: [
      { label: 'Managed WordPress', values: included },
      { label: 'PHP, Python & Node.js', values: [false, false, true, true] },
      { label: 'cPanel + 1-click installer', values: included },
      { label: 'Softaculous apps installer', values: included },
      { label: 'Sitejet AI builder', values: included },
      { label: 'Sitejet builder', values: included },
      { label: 'Sitepad website builder', values: included },
      { label: 'Select PHP version', values: included },
      { label: 'MultiPHP manager', values: included },
      { label: 'MultiPHP INI editor', values: included },
      { label: 'PHP configuration', values: included },
      { label: 'Setup Node.js app', values: [false, false, true, true] },
      { label: 'Setup Python app', values: [false, false, true, true] },
      { label: 'Setup Ruby app', values: included },
      { label: 'Git version control', values: included },
      { label: 'Cron jobs', values: included },
      { label: 'SSH & terminal access', values: [false, false, false, false] },
    ],
  },
  {
    title: 'Files, FTP & databases',
    rows: [
      { label: 'File manager', values: included },
      { label: 'FTP', values: included },
      { label: 'FTP account manager', values: included },
      { label: 'MySQL', values: included },
      { label: 'PhpMyAdmin', values: included },
      { label: 'PostgreSQL', values: included },
      { label: 'PHP PostgreSQL (Pg) Admin', values: included },
    ],
  },
  {
    title: 'Email',
    rows: [
      { label: 'Web mail', values: included },
      { label: 'Email disk usage', values: included },
      { label: 'Email filtering manager', values: included },
    ],
  },
  {
    title: 'DNS & domains',
    rows: [
      { label: 'Advanced zone editor', detail: 'All DNS records except MX.', values: included },
      { label: 'Simple zone editor', detail: 'Custom A and CNAME records.', values: included },
      { label: 'Track DNS', values: included },
      { label: 'Manage DNSSEC', values: included },
      { label: 'Redirects', values: included },
      { label: 'Free .com/.net/.org domain', values: [false, false, true, true] },
    ],
  },
  {
    title: 'Monitoring & extras',
    rows: [
      { label: 'Resource usage', values: included },
      { label: 'Site quality monitoring', values: included },
      { label: 'Metrics editor', values: included },
      { label: 'Social media management', values: included },
      { label: 'Free website migration', values: included },
      { label: '24/7 local support', values: included },
    ],
  },
]

const FeatureValue = ({ value, highlighted }) => {
  if (typeof value !== 'boolean') {
    return <span className={`text-sm font-medium ${highlighted ? 'text-slate-950' : 'text-slate-700'}`}>{value}</span>
  }

  return (
    <span
      aria-label={value ? 'Included' : 'Not included'}
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${value && highlighted ? 'bg-blue-600 text-white' : value ? 'bg-slate-100 text-slate-700' : 'bg-slate-100 text-slate-400'}`}
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {value ? <path d="m5 12 4 4L19 6" /> : <path d="m7 7 10 10M17 7 7 17" />}
      </svg>
    </span>
  )
}

const HostingComparisonSection = () => (
  <>
    <section id="cloud-hosting" className="scroll-mt-32 py-12 font-sans sm:py-16">
      <div className="site-container">
        <div className="rounded-[26px] border border-slate-900/10 bg-[#f5f8fc] px-4 py-8 shadow-sm sm:rounded-[32px] sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="max-w-2xl">
            <p id="pricing" className="scroll-mt-32 text-xs font-medium text-slate-500">Compare hosting plans</p>
            <h2 className="section-title mt-3 text-balance font-semibold text-slate-950">
              Every feature, <span className="text-blue-600">side by side.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Compare Web Starter, Web Plus, Web Pro, and Web Elite, including the cPanel tools bundled with each plan.
            </p>
            <p className="mt-3 text-sm text-slate-500 lg:hidden">Swipe sideways to compare plans.</p>
          </div>

          <div id="plans" className="mt-8 scroll-mt-32 overflow-hidden rounded-[22px] border border-slate-900/10 bg-white sm:rounded-[26px]">
            <div className="overflow-x-auto [scrollbar-color:rgba(10,25,47,0.22)_transparent] [scrollbar-width:thin] lg:overflow-visible [&amp;::-webkit-scrollbar]:h-1.5 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-thumb]:bg-slate-400/50 [&amp;::-webkit-scrollbar-track]:bg-transparent">
              <table className="w-full min-w-[920px] border-separate border-spacing-0 lg:min-w-0 lg:table-fixed">
                <caption className="sr-only">Feature comparison for Fox Host shared hosting plans</caption>
                <thead className="z-30 lg:sticky lg:top-24">
                  <tr>
                    <th scope="col" className="sticky left-0 z-40 w-[34%] min-w-[220px] border-b border-r border-slate-900/10 bg-white px-4 py-5 text-left lg:w-[28%]">
                      <span className="text-xs font-medium text-slate-500">Feature</span>
                    </th>
                    {plans.map((plan, index) => (
                      <th scope="col" key={plan.name} className={`min-w-[160px] border-b border-slate-900/10 px-3 py-5 text-center ${index === 2 ? 'bg-blue-50' : 'bg-white'}`}>
                        <span className="flex flex-col items-center gap-1.5">
                          <span className="text-[15px] font-semibold text-slate-950">{plan.name}</span>
                          {plan.popular ? <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[11px] font-medium text-white">Most popular</span> : <span className="h-5" aria-hidden="true" />}
                          <span className="text-sm text-slate-600">NPR {plan.price}<span className="text-slate-400">/mo</span></span>
                          <span className="text-[11px] text-slate-500">3-year plan</span>
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                {featureGroups.map((group) => (
                  <tbody key={group.title}>
                    <tr>
                      <th scope="colgroup" colSpan={5} className="sticky left-0 z-10 border-b border-slate-900/[0.06] bg-slate-100 px-4 py-3 text-left">
                        <span className="text-xs font-medium text-slate-600">{group.title}</span>
                      </th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr className="group" key={row.label}>
                        <th scope="row" className="sticky left-0 z-10 border-b border-r border-slate-900/[0.06] bg-white px-4 py-3.5 text-left group-hover:bg-slate-50">
                          <span className="block text-sm font-medium text-slate-900">{row.label}</span>
                          {row.detail && <span className="mt-1 block max-w-64 text-xs font-normal leading-snug text-slate-500">{row.detail}</span>}
                        </th>
                        {row.values.map((value, index) => (
                          <td key={`${row.label}-${plans[index].name}`} className={`border-b border-slate-900/[0.06] px-3 py-3.5 text-center group-hover:bg-slate-50 ${index === 2 ? 'bg-blue-50/60 group-hover:bg-blue-50' : 'bg-white'}`}>
                            <div className="flex min-h-6 items-center justify-center">
                              <FeatureValue value={value} highlighted={index === 2} />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                ))}
                <tfoot>
                  <tr>
                    <th scope="row" className="sticky left-0 z-10 border-r border-slate-900/[0.06] bg-white px-4 py-5 text-left">
                      <span className="text-xs font-medium text-slate-500">Get started</span>
                    </th>
                    {plans.map((plan, index) => (
                      <td key={plan.name} className={`px-3 py-5 ${index === 2 ? 'bg-blue-50/60' : 'bg-white'}`}>
                        <span className={`inline-flex h-11 w-full items-center justify-center rounded-full px-3 text-sm font-semibold ${index === 2 ? 'bg-slate-950 text-white' : 'border border-slate-900/10 bg-white text-slate-900'}`}>
                          Get Started
                        </span>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-500">SSH and Terminal access are not available on shared hosting plans.</p>
        </div>
      </div>
    </section>

    
  </>
)

export default HostingComparisonSection