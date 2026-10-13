import React, { useEffect, useMemo, useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import Dotnepal from '../assets/Dotnp.avif';

const TYPES = {
  personal: { 
    label: 'Personal', 
    orgLabel: null,
    body: () => 'I am writing this letter to request you to kindly register a domain for me based on my name. I have provided my personal details, and also attached a scanned copy of my citizenship with this letter. I would be very glad if you approve my domain registration request.' 
  },
  business: { 
    label: 'Business / Company', 
    orgLabel: 'Company name',
    body: (o) => `On behalf of ${o || 'our company'}, I am writing this letter to request you to kindly register the domain mentioned below for our business. I have provided the company details, and also attached scanned copies of the company registration certificate, the PAN/VAT certificate, and my citizenship with this letter. I would be very glad if you approve our domain registration request.` 
  },
  org: { 
    label: 'Organization / NGO', 
    orgLabel: 'Organization name',
    body: (o) => `On behalf of ${o || 'our organization'}, I am writing this letter to request you to kindly register the domain mentioned below for our organization. I have provided the organization details, and also attached scanned copies of the registration certificate, the renewal certificate, and my citizenship as the authorized representative. I would be very glad if you approve our domain registration request.` 
  },
  edu: { 
    label: 'Educational institution', 
    orgLabel: 'Institution name',
    body: (o) => `On behalf of ${o || 'our institution'}, I am writing this letter to request you to kindly register the domain mentioned below for our institution. I have provided the institution details, and also attached scanned copies of the registration or affiliation certificate and my citizenship as the authorized representative. I would be very glad if you approve our domain registration request.` 
  },
  gov: { 
    label: 'Government office', 
    orgLabel: 'Office name',
    body: (o) => `On behalf of ${o || 'our office'}, I am writing this letter to request you to kindly register the domain mentioned below for official use. This request is submitted on the official letterhead of the office, and I have attached a scanned copy of my citizenship and the office's authorization with this letter. I would be very glad if you approve our domain registration request.` 
  },
};

const REQUIRED = ['domain', 'ns1', 'ns2', 'name', 'addr'];
const PAPER_W = 794;
const today = () => new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function buildLetter(f) {
  const t = TYPES[f.type];
  const sign = [['Applicant Name', f.name]];
  if (t.orgLabel) {
    if (f.des) sign.push(['Designation', f.des]);
    sign.push([t.orgLabel.replace(' name', ''), f.org]);
  }
  sign.push(['Address', f.addr]);
  if (f.email) sign.push(['Email', f.email]);
  if (f.phone) sign.push(['Phone', f.phone]);
  return {
    date: f.date,
    to: ['The Hostmaster,', 'Mercantile Communication Pvt. Ltd.', 'Durbar Marg, Kathmandu'],
    subject: 'NP Domain Registration',
    paras: [t.body(f.org), 'Thank you very much for your consideration. I look forward to hearing from you soon.'],
    details: [['Domain Name', f.domain], ['Primary NS', f.ns1], ['Secondary NS', f.ns2]],
    sign,
  };
}

function Field({ id, label, required, children }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
        {label} {required && <span className="text-red-600 font-bold">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function NpLetterGenerator({ onBack }) {
  const [f, setF] = useState({
    type: 'personal', domain: '', ns1: '', ns2: '', org: '', name: '', des: '',
    addr: '', email: '', phone: '', date: today(),
  });
  const [errors, setErrors] = useState([]);
  const [toast, setToast] = useState('');
  const [busy, setBusy] = useState(false);
  const [scale, setScale] = useState(1);
  const [paperH, setPaperH] = useState(1123);
  const stageRef = useRef(null);
  const paperRef = useRef(null);

  const t = TYPES[f.type];
  const letter = useMemo(() => buildLetter(f), [f]);

  const set = (k) => (e) => {
    setF((prev) => ({ ...prev, [k]: e.target.value }));
    setErrors((prev) => prev.filter((x) => x !== k));
  };

  useEffect(() => {
    const fit = () => {
      if (!stageRef.current) return;
      setScale(Math.min(1, stageRef.current.clientWidth / PAPER_W));
      if (paperRef.current) setPaperH(paperRef.current.offsetHeight);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, [letter]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(''), 3200);
    return () => clearTimeout(id);
  }, [toast]);

  const validate = () => {
    const need = [...REQUIRED, ...(t.orgLabel ? ['org'] : [])];
    const bad = need.filter((k) => !f[k].trim());
    setErrors(bad);
    if (bad.length) {
      document.getElementById(bad[0])?.focus();
      setToast('Please fill in the required fields marked in red.');
      return false;
    }
    return true;
  };

  const fileBase = () => 'np-domain-letter-' + (f.domain.trim().replace(/[^a-z0-9.-]/gi, '_') || 'request');

  const downloadPDF = async () => {
    if (!validate()) return;
    setBusy(true);
    const host = document.createElement('div');
    host.style.cssText = `position:fixed;left:-10000px;top:0;width:${PAPER_W}px`;
    const clone = paperRef.current.cloneNode(true);
    clone.style.transform = 'none';
    clone.style.boxShadow = 'none';
    host.appendChild(clone);
    document.body.appendChild(host);
    try {
      await html2pdf().set({
        margin: 0,
        filename: fileBase() + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }).from(clone).save();
      setToast('PDF downloaded successfully.');
    } catch {
      setToast('Could not create the PDF. Please try again.');
    }
    host.remove();
    setBusy(false);
  };

  const downloadDOC = () => {
    if (!validate()) return;
    const L = letter;
    const p = (x, extra = '') => `<p style="margin:0 0 10pt;text-align:justify;${extra}">${x}</p>`;
    const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>NP Domain Registration</title>
<style>@page{size:21cm 29.7cm;margin:2.5cm}body{font-family:'Times New Roman',serif;font-size:12pt;line-height:1.4}</style></head>
<body>
${p('Date: ' + esc(L.date), 'text-align:right;margin-bottom:20pt')}
${p('To,', 'text-align:left;margin:0')}
${L.to.map((x) => p(esc(x), 'text-align:left;margin:0')).join('')}
<p style="text-align:center;font-weight:bold;text-decoration:underline;margin:20pt 0 16pt">Subject: ${esc(L.subject)}</p>
${p('Dear Sir/Madam,')}
${L.paras.map((x) => p(esc(x))).join('')}
<p style="margin:26pt 0 6pt;font-weight:bold;border-bottom:1pt solid #000">Domain Details:</p>
${L.details.map(([k, v]) => p(`<b>${k}:</b>${esc(v)}`, 'margin:0 0 3pt;text-align:left')).join('')}
${p('Sincerely,', 'margin:26pt 0 10pt')}
${L.sign.map(([k, v]) => p(`<b>${k}:</b>${esc(v)}`, 'margin:0 0 3pt;text-align:left')).join('')}
</body></html>`;
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileBase() + '.doc';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setToast('Word file downloaded successfully.');
  };

  const inputClass = (k) => `w-full px-3.5 py-2.5 border rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
    errors.includes(k) 
      ? 'border-red-500 ring-2 ring-red-500/20' 
      : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/15'
  }`;

  return (
    <section className="w-full py-10 bg-slate-50 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Wrapper Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
          
          {/* Header with Dotnepal picture */}
          <div className="bg-[#0B1F4B] text-white px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                <img src={Dotnepal} alt=".NP Registry" className="h-9 w-auto object-contain rounded" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight">.NP Domain Cover Letter Generator</h2>
                <p className="text-xs text-blue-200 mt-0.5">Fill in the details, check the live preview, and download as PDF or Word.</p>
              </div>
            </div>

            {onBack && (
              <button 
                type="button" 
                onClick={onBack}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
              >
                &larr; Back to Home
              </button>
            )}
          </div>

          {/* Grid Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[400px_minmax(0,1fr)] gap-6 p-6 lg:p-8 items-start">
            
            {/* Left Column: Form Controls */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-slate-100 px-5 py-3.5 font-bold text-slate-800 text-sm border-b border-slate-200">
                Letter details
              </div>

              <form className="p-5 flex flex-col gap-4 max-h-[calc(100vh-14rem)] overflow-y-auto" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <Field id="type" label="Domain type">
                  <select id="type" value={f.type} onChange={set('type')} className={inputClass('type')}>
                    {Object.entries(TYPES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                  </select>
                </Field>

                <Field id="domain" label="Domain name" required>
                  <input id="domain" className={inputClass('domain')} value={f.domain} onChange={set('domain')} placeholder="e.g. yourname.com.np" />
                </Field>

                <div className="grid grid-cols-2 gap-3">
                  <Field id="ns1" label="Name server 1" required>
                    <input id="ns1" className={inputClass('ns1')} value={f.ns1} onChange={set('ns1')} placeholder="ns1.hosting.com" />
                  </Field>
                  <Field id="ns2" label="Name server 2" required>
                    <input id="ns2" className={inputClass('ns2')} value={f.ns2} onChange={set('ns2')} placeholder="ns2.hosting.com" />
                  </Field>
                </div>

                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider pt-3 border-t border-slate-200 mt-1">
                  Applicant details
                </div>

                {t.orgLabel && (
                  <Field id="org" label={t.orgLabel} required>
                    <input id="org" className={inputClass('org')} value={f.org} onChange={set('org')} placeholder={t.orgLabel} />
                  </Field>
                )}

                <Field id="name" label="Full name" required>
                  <input id="name" className={inputClass('name')} value={f.name} onChange={set('name')} placeholder="Your full name" />
                </Field>

                {t.orgLabel && (
                  <Field id="des" label="Designation">
                    <input id="des" className={inputClass('des')} value={f.des} onChange={set('des')} placeholder="e.g. Managing Director" />
                  </Field>
                )}

                <Field id="addr" label="Address" required>
                  <input id="addr" className={inputClass('addr')} value={f.addr} onChange={set('addr')} placeholder="Municipality, District" />
                </Field>

                <div className="grid grid-cols-2 gap-3">
                  <Field id="email" label="Email">
                    <input id="email" type="email" className={inputClass('email')} value={f.email} onChange={set('email')} placeholder="you@example.com" />
                  </Field>
                  <Field id="phone" label="Phone">
                    <input id="phone" className={inputClass('phone')} value={f.phone} onChange={set('phone')} placeholder="98XXXXXXXX" />
                  </Field>
                </div>

                <Field id="date" label="Date">
                  <input id="date" className={inputClass('date')} value={f.date} onChange={set('date')} />
                </Field>

                <div className="flex flex-col gap-2.5 pt-3">
                  <button 
                    type="button" 
                    onClick={downloadPDF} 
                    disabled={busy}
                    className="w-full bg-[#0B1F4B] hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-colors cursor-pointer disabled:opacity-60 text-sm"
                  >
                    {busy ? 'Preparing PDF…' : 'Download as PDF'}
                  </button>
                  <button 
                    type="button" 
                    onClick={downloadDOC}
                    className="w-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold py-3 px-4 rounded-xl shadow-sm transition-colors cursor-pointer text-sm"
                  >
                    Download as Word (.doc)
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Live A4 Preview */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900">Live preview</h3>
                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  A4 size layout
                </span>
              </div>

              <div 
                ref={stageRef} 
                className="w-full overflow-hidden flex justify-center bg-slate-100 rounded-2xl border border-slate-200 p-4 shadow-inner" 
                style={{ height: paperH * scale }}
              >
                <div 
                  ref={paperRef} 
                  className="w-[794px] min-h-[1123px] bg-white text-black p-[76px] font-serif text-[15px] leading-relaxed shadow-2xl origin-top-left border-t-8 border-[#0B1F4B]" 
                  style={{ transform: `scale(${scale})` }}
                >
                  <p className="text-right mb-7">Date: {letter.date}</p>
                  
                  <div className="mb-6 text-left">
                    <p className="m-0">To,</p>
                    {letter.to.map((x) => <p key={x} className="m-0">{x}</p>)}
                  </div>

                  <p className="text-center font-bold underline my-6 text-[16px]">
                    Subject: {letter.subject}
                  </p>

                  <p className="mb-3 text-justify">Dear Sir/Madam,</p>

                  {letter.paras.map((x, i) => (
                    <p key={i} className="mb-3 text-justify">{x}</p>
                  ))}

                  <div className="mt-9">
                    <h3 className="font-bold text-[15px] border-b-2 border-black pb-1 mb-2">Domain Details:</h3>
                    {letter.details.map(([k, v]) => (
                      <div key={k} className="font-bold mb-1">
                        {k}: <span className="font-normal font-mono text-[14px]">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9">
                    <p className="mb-3">Sincerely,</p>
                    {letter.sign.map(([k, v]) => (
                      <div key={k} className="font-bold mb-1">
                        {k}: <span className="font-normal">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl text-sm z-50 animate-bounce" role="status">
          {toast}
        </div>
      )}
    </section>
  );
}