import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fecthAllLocations = async () => {
      const response = await fetch('/api')
      const data = await response.json()
      setLocations(data)
    }

    fecthAllLocations()
  }, [])




  return (
    <>
      <Head>
        <title>Tourio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      </main>
    </>
  )
}
