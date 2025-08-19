'use client'

import Link from "next/link"

export default function GlobalError({ error, reset }) {
    console.error(error)

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
        <Link href="/">Go back home</Link>
    </div>
  )
}
