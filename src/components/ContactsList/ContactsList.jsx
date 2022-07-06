import { Component } from 'react';
import { Button } from 'components/ui/Button.styled';
import { ContacItemtLi, ContactsListUl } from './ContactsList.styled';

export class ContactsList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <div>
        <ContactsListUl>
          {contacts.map(contact => {
            return (
              <ContacItemtLi key={contact.id}>
                {contact.name}: {contact.number}
                <Button onClick={() => onDelete(contact.id)}>Delete</Button>
              </ContacItemtLi>
            );
          })}
        </ContactsListUl>
      </div>
    );
  }
}
