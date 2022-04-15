import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdPhoneEnabled } from 'react-icons/md';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Item, Name, Phone, Button } from './ContactsItem.styled';
import { removeContact } from '../../redux/app';
import { useDispatch } from 'react-redux';
import { Modal } from '../Modal';
import ContactForm from '../ContactForm';
const ContactItem = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <Item id={id}>
      <Name>{name}:</Name>
      <Phone href={'tel: ' + name}>
        <MdPhoneEnabled /> {number}
      </Phone>

      <Button type="button" onClick={() => dispatch(removeContact(id))}>
        <AiFillDelete /> <span>Delete</span>
      </Button>

      <Button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
        <AiFillEdit /> <span>Edit</span>
      </Button>

      {isModalOpen && (
        <Modal onClose={setIsModalOpen}>
          <ContactForm contactId={id} closeForm={setIsModalOpen} />
        </Modal>
      )}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
