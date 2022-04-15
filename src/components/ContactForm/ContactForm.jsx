import { useState } from 'react';
import { MdAddIcCall } from 'react-icons/md';
import { Form, AreaName, AreaNumber, SubmitBtn } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, editContact } from '../../redux/app';
import notify from '../../nofifications/notifyError';

const shortid = require('shortid');

export default function ContactForm({ contactId, closeForm }) {
  const contacts = useSelector(state => state.contacts);
  const contactState = contacts.find(contact => contact.id === contactId);

  const [inputName, setInputName] = useState(() =>
    contactId ? contactState.name : ''
  );
  const [inputNumber, setInputNumber] = useState(() =>
    contactId ? contactState.number : ''
  );
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();

    const findSameName = contacts.find(
      ({ name }) => name.toLowerCase() === inputName.toLowerCase()
    );

    if (contactId) {
      !findSameName
        ? dispatch(
            editContact({ id: contactId, name: inputName, number: inputNumber })
          )
        : notify(`${inputName} is already in contacts!`);

      closeForm();
    } else {
      !findSameName
        ? dispatch(
            addContact({
              id: shortid.generate(),
              name: inputName,
              number: inputNumber,
            })
          )
        : notify(`${inputName} is already in contacts!`);

      setInputName('');
      setInputNumber('');
    }
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <AreaName>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          onChange={e => setInputName(e.target.value)}
          value={inputName}
          required
        />
      </AreaName>

      <AreaNumber>
        Phone
        <input
          type="tel"
          name="number"
          onChange={e => setInputNumber(e.target.value)}
          value={inputNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="The phone number must be numeric and may contain spaces, dashes, parentheses, and may begin with +"
          required
        />
      </AreaNumber>

      <br />

      <SubmitBtn type="submit">
        <MdAddIcCall />
        {contactId ? <span>Edit contact</span> : <span>Add contact</span>}
      </SubmitBtn>
    </Form>
  );
}
