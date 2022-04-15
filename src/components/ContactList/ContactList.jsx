import ContactItem from '../ContactIItem';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// import { removeContact } from '../../redux/app';

const StyledList = styled.ul`
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
`;

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <StyledList>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </StyledList>
  );
};
