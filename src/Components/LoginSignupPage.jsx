import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react'

const LoginSignupPage = ({ onBack }) => {
  const [mode, setMode] = useState('signup')
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')
  const isSignup = mode === 'signup'

  const handleSubmit = (event) => {
    event.preventDefault()
    setNotice("Account access isn't connected yet. Your information hasn't been sent.")
  }

  const changeMode = (nextMode) => {
    setMode(nextMode)
    setShowPassword(false)
    setNotice('')
  }

  return (
    <section className="relative isolate flex min-h-[calc(100svh-8rem)] items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="site-container">
        <div className="mx-auto max-w-5xl">
          <button
            type="button"
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to home
          </button>

          <div className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-blue-900/10 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0c73d5] via-[#1268c9] to-[#073b82] p-8 text-white sm:p-10 lg:flex">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[40px] border-white/30" />
                <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full border-[50px] border-white/20" />
              </div>
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
                  Blue Fox Hoster
                </p>
                <h1 className="mt-3 max-w-sm text-3xl font-extrabold leading-tight xl:text-4xl">
                  Your next step starts here.
                </h1>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100">
                  Sign in or create an account to get started with Blue Fox Hoster.
                </p>
              </div>
              <div className="relative flex items-center gap-2 text-xs font-medium text-blue-100">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                Blue Fox Hoster account access
              </div>
            </aside>

            <div className="p-6 sm:p-10 lg:p-12">
              <div className="mx-auto max-w-md">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                  {isSignup ? 'Create your account' : 'Welcome back'}
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                  {isSignup ? 'Get started' : 'Log in'}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {isSignup
                    ? 'Create an account to continue with Blue Fox Hoster.'
                    : 'Enter your details to continue to your account.'}
                </p>

                <div className="mt-7 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
                  <button
                    type="button"
                    aria-pressed={isSignup}
                    onClick={() => changeMode('signup')}
                    className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                      isSignup ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Sign up
                  </button>
                  <button
                    type="button"
                    aria-pressed={!isSignup}
                    onClick={() => changeMode('login')}
                    className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                      !isSignup ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Log in
                  </button>
                </div>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  {isSignup && (
                    <div>
                      <label htmlFor="account-name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Full name
                      </label>
                      <input
                        id="account-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="account-email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Email address
                    </label>
                    <input
                      id="account-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="account-password" className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="account-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete={isSignup ? 'new-password' : 'current-password'}
                        minLength={isSignup ? 8 : undefined}
                        required
                        placeholder={isSignup ? 'At least 8 characters' : 'Enter your password'}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((visible) => !visible)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 transition-colors hover:text-blue-700"
                      >
                        {showPassword
                          ? <EyeOff aria-hidden="true" className="h-4 w-4" />
                          : <Eye aria-hidden="true" className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {!isSignup && (
                    <div className="flex justify-end">
                      <a
                        href="https://wa.me/9779802755605"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-blue-700 hover:text-blue-900"
                      >
                        Need help signing in?
                      </a>
                    </div>
                  )}

                  {notice && (
                    <p role="status" className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
                      {notice}{' '}
                      <a
                        href="https://wa.me/9779802755605"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline underline-offset-2"
                      >
                        Contact support.
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0c73d5] to-[#0e6cc8] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:from-[#1e88e5] hover:to-[#1565c0] hover:shadow-blue-500/30"
                  >
                    {isSignup ? 'Create account' : 'Log in'}
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-600">
                  {isSignup ? 'Already have an account?' : 'New to Blue Fox Hoster?'}{' '}
                  <button
                    type="button"
                    onClick={() => changeMode(isSignup ? 'login' : 'signup')}
                    className="font-bold text-blue-700 hover:text-blue-900"
                  >
                    {isSignup ? 'Log in' : 'Sign up'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginSignupPage
