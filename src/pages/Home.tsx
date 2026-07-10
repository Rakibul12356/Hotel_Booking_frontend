import { useQuery } from '@tanstack/react-query'

async function fetchWelcomeMessage(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return 'Welcome to your RealEState app.'
}

export function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['welcome'],
    queryFn: fetchWelcomeMessage,
  })

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Home</h1>
      <p className="text-gray-600">
        React Router v7, TanStack Query, Tailwind CSS, and Roboto are ready to
        use.
      </p>

      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        {isLoading && <p className="text-sm text-gray-500">Loading...</p>}
        {isError && (
          <p className="text-sm text-red-600">Failed to load welcome message.</p>
        )}
        {data && <p className="text-sm text-gray-800">{data}</p>}
      </div>
    </section>
  )
}
