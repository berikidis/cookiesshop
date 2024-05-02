'use client'

import { useEffect } from 'react'

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string }
   reset: () => void
}) {
   useEffect(() => {
      console.error(error)
   }, [error])

   return (
      <div>
         <h2>Oh no, something went wrong... maybe refresh?</h2>
         <button onClick={() => reset()}>Try again</button>
      </div>
   )
}
