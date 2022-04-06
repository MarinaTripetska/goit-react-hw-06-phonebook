import ContactItem from '../ContactIItem'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledList = styled.ul`
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
`

const ContactList = ({ contacts, onClick }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} onClick={onClick} />
      ))}
    </StyledList>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
}

export default ContactList
