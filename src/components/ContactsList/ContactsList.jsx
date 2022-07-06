import { Component } from 'react';
import { Button } from 'components/Ui/Button.styled';
import { ContacItemtLi, ContactsListUl } from './ContactsList.styled';
import { nanoid } from 'nanoid';

export class ContactsList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <div>
        <ContactsListUl>
          {contacts.map(contact => {
            return (
              <ContacItemtLi key={nanoid()}>
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
