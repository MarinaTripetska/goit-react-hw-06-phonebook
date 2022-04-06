import { ToastContainer } from 'react-toastify';
import notify from './nofifications/notifyError';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import { Container, Section, H1, H2 } from './components/BasicStyledComponents';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, filterValue } from './redux/app';

const shortid = require('shortid');

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const changeFilter = e => dispatch(filterValue(e.target.value));

  const handleSubmit = (dataName, dataNumber) => {
    const findSameName = contacts.find(
      ({ name }) => name.toLowerCase() === dataName.toLowerCase()
    );

    !findSameName
      ? dispatch(
          addContact({
            id: shortid.generate(),
            name: dataName,
            number: dataNumber,
          })
        )
      : notify(`${dataName} is already in contacts!`);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = dataId => {
    dispatch(removeContact(dataId));
  };

  return (
    <Container>
      <ToastContainer />
      <H1>Phone book</H1>
      <ContactForm handleSubmit={handleSubmit} />

      {contacts.length > 0 && (
        <Section>
          <H2>Сontacts</H2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList contacts={getVisibleContacts()} onClick={handleDelete} />
        </Section>
      )}
    </Container>
  );
}
