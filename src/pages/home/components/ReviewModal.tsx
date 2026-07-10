import { type FormEvent, useEffect, useState } from 'react'
import { HiStar, HiXMark } from 'react-icons/hi2'

type ReviewModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit?: (rating: number, review: string) => void
}

export const ReviewModal = ({ isOpen, onClose, onSubmit }: ReviewModalProps) => {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [review, setReview] = useState('')

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setRating(0)
      setHoverRating(0)
      setReview('')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.(rating, review)
    onClose()
  }

  const displayRating = hoverRating || rating

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
    >
      <div className="mx-4 w-full max-w-xl overflow-hidden rounded-2xl bg-white">
        <div className="border-b border-gray-300 p-4">
          <div className="flex items-center justify-between">
            <h3 id="review-modal-title" className="text-xl font-semibold">
              Write a review
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 transition-colors hover:text-gray-600"
              aria-label="Close review modal"
            >
              <HiXMark className="h-6 w-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6 p-6">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Overall Rating
              </label>
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  const starValue = index + 1

                  return (
                    <button
                      key={starValue}
                      type="button"
                      onClick={() => setRating(starValue)}
                      onMouseEnter={() => setHoverRating(starValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="text-2xl transition-colors focus:outline-none"
                      aria-label={`Rate ${starValue} stars`}
                    >
                      <HiStar
                        className={
                          starValue <= displayRating
                            ? 'text-yellow-500'
                            : 'text-gray-300 hover:text-yellow-500'
                        }
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <label
                htmlFor="review-text"
                className="mb-2 block font-medium text-gray-700"
              >
                Your Review
              </label>
              <textarea
                id="review-text"
                rows={4}
                value={review}
                onChange={(event) => setReview(event.target.value)}
                placeholder="Share your experience with other travelers..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-500 focus:ring-0 focus:outline-none"
              />
            </div>
          </div>

          <div className="border-t border-gray-300 bg-gray-50 p-4">
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#53B8AF] px-4 py-2 text-white transition-all hover:brightness-90"
              >
                Submit Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
