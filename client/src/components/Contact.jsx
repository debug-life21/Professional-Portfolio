import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'

const initialForm = { name: '', email: '', message: '' }
const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')

function getFieldError(name, value) {
  if (!value.trim()) return 'This field is required.'
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return 'Enter a valid email address.'
  }
  return ''
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [touched, setTouched] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [notice, setNotice] = useState(null)

  useEffect(() => {
    if (!notice) return undefined

    const timeout = window.setTimeout(() => setNotice(null), 5000)
    return () => window.clearTimeout(timeout)
  }, [notice])

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function getInputClass(name) {
    const invalid = touched[name] && getFieldError(name, form[name])
    return `mt-2 w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 transition focus:outline-none ${
      invalid
        ? 'border-rose-400/60 ring-2 ring-rose-400/15 focus:border-rose-300'
        : 'border-slate-700/80 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10'
    }`
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setNotice(null)
    setTouched({ name: true, email: true, message: true })

    if (Object.entries(form).some(([name, value]) => getFieldError(name, value))) {
      setNotice({ type: 'error', message: 'Please check the highlighted fields and try again.' })
      return
    }

    setIsSending(true)
    try {
      const response = await fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Your message could not be sent. Please try again.')
      }

      setForm(initialForm)
      setTouched({})
      setNotice({ type: 'success', message: 'Thanks for reaching out. Your message is on its way!' })
    } catch (error) {
      setNotice({
        type: 'error',
        message: error instanceof Error ? error.message : 'A network error occurred. Please try again.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section-space">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="pt-2">
            <p className="eyebrow">Let&apos;s talk</p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-100 sm:text-4xl">
              Have a good idea? <span className="text-cyan-300">Let&apos;s build it.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Have a project in mind, a question, or just want to say hello? Send a note and I&apos;ll get back to you.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm text-slate-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-cyan-200"><Icon name="mail" size={17} /></span>
              <span>Send a message using the form</span>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-medium text-slate-300">
                  Your name
                  <input
                    className={getInputClass('name')}
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Wendmachew Tsegaye"
                    value={form.name}
                    onChange={updateField}
                    onBlur={() => setTouched((current) => ({ ...current, name: true }))}
                    aria-invalid={Boolean(touched.name && getFieldError('name', form.name))}
                    required
                    maxLength={100}
                  />
                  {touched.name && getFieldError('name', form.name) && <span className="mt-1.5 block text-xs text-rose-300">{getFieldError('name', form.name)}</span>}
                </label>
                <label className="block text-xs font-medium text-slate-300">
                  Email address
                  <input
                    className={getInputClass('email')}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={updateField}
                    onBlur={() => setTouched((current) => ({ ...current, email: true }))}
                    aria-invalid={Boolean(touched.email && getFieldError('email', form.email))}
                    required
                    maxLength={254}
                  />
                  {touched.email && getFieldError('email', form.email) && <span className="mt-1.5 block text-xs text-rose-300">{getFieldError('email', form.email)}</span>}
                </label>
              </div>
              <label className="mt-5 block text-xs font-medium text-slate-300">
                Your message
                <textarea
                  className={`${getInputClass('message')} min-h-36 resize-y`}
                  name="message"
                  placeholder="Tell me a little about what you have in mind..."
                  value={form.message}
                  onChange={updateField}
                  onBlur={() => setTouched((current) => ({ ...current, message: true }))}
                  aria-invalid={Boolean(touched.message && getFieldError('message', form.message))}
                  required
                  maxLength={5000}
                />
                {touched.message && getFieldError('message', form.message) && <span className="mt-1.5 block text-xs text-rose-300">{getFieldError('message', form.message)}</span>}
              </label>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-5 text-slate-500">Your details are only used to respond to your message.</p>
                <button
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-300 to-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:from-cyan-200 hover:to-white disabled:cursor-wait disabled:opacity-60"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send message'}
                  {!isSending && <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {notice && (
        <div
          role={notice.type === 'error' ? 'alert' : 'status'}
          aria-live="polite"
          className={`toast-enter fixed bottom-6 right-6 z-50 flex max-w-[calc(100%-3rem)] items-center gap-3 rounded-2xl border px-5 py-4 text-sm shadow-2xl backdrop-blur-xl ${
            notice.type === 'success'
              ? 'border-emerald-300/20 bg-slate-900/95 text-emerald-100'
              : 'border-rose-300/20 bg-slate-900/95 text-rose-100'
          }`}
        >
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${notice.type === 'success' ? 'bg-emerald-300/10 text-emerald-300' : 'bg-rose-300/10 text-rose-300'}`}>
            <Icon name={notice.type === 'success' ? 'check' : 'spark'} size={16} />
          </span>
          {notice.message}
        </div>
      )}
    </section>
  )
}
