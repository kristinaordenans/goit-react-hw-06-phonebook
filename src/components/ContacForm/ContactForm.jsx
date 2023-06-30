import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Label, Input, Span } from "./ContactForm.styled";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selector";
import { addContact } from "redux/contactSlice";


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const dispatch = useDispatch();
  const formReff = useRef(null);
  const  contacts  = useSelector(getContacts);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      
      case 'number':
        setPhone(e.target.value);
        break;
      
      default:
        return;
    }
  };

  const handlrAddToContactList = (e) => {
        const includesName = contacts.find(({ name }) => name);
        const includesNumber = contacts.find(({ number }) => number);
        e.preventDefault();

        if(includesName) {
            alert(`'${name}'is alredy in contacts`)
        } else if(includesNumber) {
            alert(`'${number}'is alredy in contacts`)
        } else {
            dispatch(addContact({ name, number }));
          setName('');
          setPhone('');
        }
  }

  return (
    <Form onSubmit={handlrAddToContactList} ref={formReff}>
            <Label>
              <Span>Name</Span>
              <Input type="text"
                 value={name}
                 onChange={handleChange}
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required/>
              </Label>
            <Label>
              <Span>Phone</Span>
              <Input type="tel"
                 value={number}
                 onChange={handleChange}
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required />
              </Label>
            <Button type="submit">Add contact</Button>
          </Form>
  )
}
