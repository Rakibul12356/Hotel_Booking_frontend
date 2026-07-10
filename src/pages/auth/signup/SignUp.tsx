import { type FormEvent, useEffect } from 'react'
import { HiXMark } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    className="mr-3"
    aria-hidden="true"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
)

const SignUp = () => {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate(-1)
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navigate(-1)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [navigate])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-title"
    >
      <div className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl shadow-black/50">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 transition-colors hover:text-gray-800"
          aria-label="Close signup modal"
        >
          <HiXMark className="h-6 w-6" />
        </button>

        <div className="mb-6 text-center">
          <h2 id="signup-title" className="text-2xl font-bold text-gray-800">
            Sign up for Hotel Booking
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create your account and start booking today.
          </p>
        </div>

        <div className="mb-4 space-y-4">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-full border border-gray-300 py-3 transition hover:bg-gray-50"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="my-4 flex items-center">
            <div className="grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">or</span>
            <div className="grow border-t border-gray-300" />
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full rounded-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#53B8AF] py-3 text-white transition hover:brightness-90"
            >
              Create account
            </button>
          </form>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
