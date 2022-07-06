import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContainerDiv } from 'components/ui/ContainerDiv.styled';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onContactFormSubmit = (contactName, contactNumber) => {
    const { contacts } = this.state;
    const contact = { id: nanoid(), name: contactName, number: contactNumber };
    const normalizedFilterValue = contactName.toLowerCase();
    const normalizedNamesArr = contacts.map(contact =>
      contact.name.toLowerCase()
    );

    normalizedNamesArr.includes(normalizedFilterValue)
      ? alert(`${contactName} is in list`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, contact],
        }));
  };

  deleteContact = contactId => {
    this.setState(contacsState => ({
      contacts: contacsState.contacts.filter(
        contact => contact.id !== contactId
      ),
    }));
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredConatcs = () => {
    const { contacts, filter } = this.state;
    const normalizedFilterValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  render() {
    const filteredContacts = this.getFilteredConatcs();
    return (
      <ContainerDiv>
        <h2>Phonebook</h2>

        <PhonebookForm
          nameInputId={nanoid()}
          numberInputId={nanoid()}
          onAddContact={this.onContactFormSubmit}
        ></PhonebookForm>

        <h2>Contacts</h2>

        <ContactsFilter onFilterChange={this.onFilterChange}></ContactsFilter>

        <ContactsList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        ></ContactsList>
      </ContainerDiv>
    );
  }
}
