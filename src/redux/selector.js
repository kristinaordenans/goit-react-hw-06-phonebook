export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = (filter, contacts) => {
   return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
};