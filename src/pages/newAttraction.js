import Button from "../../components/Button"
import Form from "../../components/Form"

const newAttraction = () => {
  return (
    <>
      <Button
        text={'< Back'}
        type={'back'}
        pageURL={'/'}
      />
      <Form />
    </>
  )
}

export default newAttraction
