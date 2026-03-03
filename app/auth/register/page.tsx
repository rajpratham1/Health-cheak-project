"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"

export default function RegisterPage() {
  const router = useRouter()
  const { registerWithEmail, signInWithGoogle } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await registerWithEmail(email, password, name)
      // after register, go to login page per request
      router.push('/auth/login')
    } catch (err: any) {
      setError(err?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 transform transition duration-500 hover:scale-[1.01]">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold">Create an account</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-200 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-200 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required minLength={6} className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-200 outline-none" />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-md hover:shadow-lg transition transform active:scale-95">
            {loading ? 'Creating account...' : 'Create account'}
          </button>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-slate-200" />
            <div className="text-xs text-slate-400">or continue with</div>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <button type="button" onClick={() => signInWithGoogle()} className="w-full border rounded-md py-2 flex items-center justify-center gap-2 hover:bg-slate-50 transition">
            <img src="/images/google-icon.png" alt="google" className="w-5 h-5" />
            Continue with Google
          </button>

          <div className="text-center text-sm text-slate-500">
            Already have an account? <a className="text-blue-600 hover:underline" href="/auth/login">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  )
}
