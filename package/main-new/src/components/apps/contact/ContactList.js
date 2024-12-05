import React, { useEffect } from 'react';
import { Nav } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
  toggleStarredContact,
} from '../../../store/apps/contacts/ContactSlice';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  // Get contacts, search term, and current filter 
  const contacts = useSelector((state) => state.contactsReducer.contacts);
  const searchTerm = useSelector((state) => state.contactsReducer.contactSearch);
  const currentFilter = useSelector((state) => state.contactsReducer.currentFilter);

  const active = useSelector((state) => state.contactsReducer.contactContent);

  const filterContacts = (contacts, filter, search) => {
    let filteredContacts = [...contacts];

    if (filter !== "show_all") {
      if (filter === "frequent_contact") {
        filteredContacts = filteredContacts.filter(
          (contact) => contact.frequentlycontacted
        );
      } else if (filter === "starred_contact") {
        filteredContacts = filteredContacts.filter((contact) =>
          contact.starred
        );
      } else if (filter === "engineering_department") {
        filteredContacts = filteredContacts.filter(
          (contact) => contact.department === 'Engineering'
        );

      }
      else if (filter === "support_department") {
        filteredContacts = filteredContacts.filter(
          (contact) => contact.department === 'Support'
        );

      }
      else if (filter === "sales_department") {
        filteredContacts = filteredContacts.filter(
          (contact) => contact.department === 'Sales'
        );

      } else {
        filteredContacts = [...contacts];
      }
    }

    // search filter
    if (search.trim() !== "") {
      const searchTermLower = search.toLowerCase();
      filteredContacts = filteredContacts.filter(
        (contact) =>
          contact.firstname.toLowerCase().includes(searchTermLower) ||
          contact.lastname.toLowerCase().includes(searchTermLower)
      );
    }

    return filteredContacts;
  };
  const filteredContacts = filterContacts(contacts, currentFilter, searchTerm);

  return (
    <Nav>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            active={active}
            {...contact}
            onContactClick={() => dispatch(SelectContact(contact.id))}
            onDeleteClick={() => dispatch(DeleteContact(contact.id))}
            onStarredClick={() => dispatch(toggleStarredContact(contact.id))}
          />
        ))
      ) : (
        <div>No contacts available</div>
      )}
    </Nav>
  );
};

export default ContactList;

