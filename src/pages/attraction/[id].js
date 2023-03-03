import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Image from "next/image"
import Button from "../../../components/Button"

const ShowPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [attraction, setAttraction] = useState({})
  const { name, image, location, description, mapURL } = attraction

  useEffect(() => {
    const fetchAttractionDetails = async () => {
      const response = await fetch(`/api/attraction/${id}`)
      const foundAtttraction = await response.json()
      setAttraction(foundAtttraction)
    }
    fetchAttractionDetails()
  }, [id])

  const handleDelete = async () => {
    await fetch(`/api/attraction/${id}`, {
      method: 'POST'
    })
    console.log('triggered')
    router.push('/')
  }

  return (
    <>
      <Button
        text={'Back'}
        type={'back'}
        pageURL={'/'}
      />
      <h1>{name}</h1>
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
      />
      <p>located in {location}</p>
      <Button
        text={`check ${name} on maps`}
        type={'map'}
        pageURL={mapURL}
      />
      <p>{description}</p>
      <button onClick={() => handleDelete(id)}>Delete {name}</button>
    </>
  )
}

export default ShowPage
