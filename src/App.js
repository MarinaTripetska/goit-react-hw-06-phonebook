import { ToastContainer } from 'react-toastify';
import Filter from './components/Filter';
import { ContactList } from './components/ContactList';
import ContactForm from './components/ContactForm';
import { Container, Section, H1, H2 } from './components/BasicStyledComponents';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      <ToastContainer />
      <H1>Phone book</H1>
      <ContactForm />

      {contacts.length > 0 && (
        <Section>
          <H2>Сontacts</H2>
          <Filter />
          <ContactList />
        </Section>
      )}
    </Container>
  );
}
