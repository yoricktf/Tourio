import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'

export default function Home() {
  const [attractions, setAttractions] = useState([])

  useEffect(() => {
    const fecthAllAttractions = async () => {
      const response = await fetch('/api')
      const data = await response.json()
      setAttractions(data)
    }
    fecthAllAttractions()
  }, [])
  console.log(attractions)
  return (
    <>
      <Head>
        <title>Tourio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {attractions.map(attraction => {
          return (
            <Card
              key={attraction._id}
              id={attraction._id}
              name={attraction.name}
              location={attraction.location}
              image={attraction.image}
              mapURL={attraction.mapURL}
              description={attraction.description}
            />
          )
        })}
        <Button
          text={'+Place'}
          type={'addPlace'} />
      </main>
    </>
  )
}
