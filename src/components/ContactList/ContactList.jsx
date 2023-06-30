import React from "react";
import { PropTypes } from "prop-types";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactListContainer } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getFilteredContacts } from 'redux/selector';
import { getContacts, getFilter } from "redux/selector";


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = getFilteredContacts(filter, contacts);

    return (
    <div>
        <ContactListContainer>
           {filteredContacts && filteredContacts.map(({ name, number, id })=>{
               return (
                   <ContactItem key={id}
                        id={id}
                        name={name}
                        tel={number} />
                )
             })
           }     
       </ContactListContainer>
    </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired),
}