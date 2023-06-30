import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContacForm/ContactForm';
import { Filter } from './FilterContacts/FilterContacts';
import { Container, ContainerTitle, ContactsTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';


export const App = () => {
  const contacts = useSelector(getContacts);
  
  return (
      <Container>
        <ContainerTitle>Phonebook</ContainerTitle>
        <ContactForm/>
        <ContactsTitle>Contacts</ContactsTitle>
        {contacts.length !== 0 && <Filter/>}
        <ContactList/> 
    </Container>
    );
}
