import { useRouter } from 'next/navigation';

const Form = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());

    const response = await fetch('/api', {
      method: "POST",
      body: JSON.stringify(formDataObj)
    })

    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" />
      <label htmlFor="image">Image:</label>
      <input id="image" name="image" type="text" />
      <label htmlFor="location">Location:</label>
      <input id="location" name="location" type="text" />
      <label htmlFor="map">Map:</label>
      <input id="map" name="mapURL" type="text" />
      <label htmlFor="description">Description:</label>
      <textarea name="description" id="description" cols="30" rows="10"></textarea>
      <button>Submit Place</button>
    </form>
  )
}

export default Form
