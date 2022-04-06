import PropTypes from 'prop-types'
import { MdPhoneEnabled } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { Item, Name, Phone, ButtonDelete } from './ContactsItem.styled'

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item id={id}>
      <Name>{name}:</Name>
      <Phone href={'tel: ' + name}>
        <MdPhoneEnabled /> {number}
      </Phone>

      <ButtonDelete type="button" onClick={() => onClick(id)}>
        <AiFillDelete /> <span>Delete</span>
      </ButtonDelete>
    </Item>
  )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ContactItem
