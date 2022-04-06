import { useState } from 'react'
import PropTypes from 'prop-types'
import { MdAddIcCall } from 'react-icons/md'
import { Form, AreaName, AreaNumber, SubmitBtn } from './ContactForm.styled'

export default function ContactForm({ handleSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = e => {
    const { name, value } = e.target

    switch (name) {
      case 'name':
        setName(value)
        break

      case 'number':
        setNumber(value)
        break

      default:
        return
    }
  }

  const onFormSubmit = e => {
    e.preventDefault()
    handleSubmit(name, number)
    reset()
  }

  const reset = () => {
    setName('')
    setNumber('')
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <AreaName>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          onChange={handleChange}
          value={name}
          required
        />
      </AreaName>

      <AreaNumber>
        Phone
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="The phone number must be numeric and may contain spaces, dashes, parentheses, and may begin with +"
          required
        />
      </AreaNumber>

      <br />

      <SubmitBtn type="submit">
        <MdAddIcCall /> <span>Add contact</span>
      </SubmitBtn>
    </Form>
  )
}
ContactForm.defaultProps = {
  handleSubmit: () => null,
}
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
