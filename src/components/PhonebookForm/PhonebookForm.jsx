import { Component } from 'react';
import { Form, Input, Label } from './Form.styled';
import { Button } from 'components/Ui/Button.styled';
// ({ inputId, onAddContact })

export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  inputReset = evt => {
    evt.target.name.value = '';
    evt.target.number.value = '';
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);
    this.inputReset(evt);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.props.nameInputId}>
          Name
          <Input
            id={this.props.nameInputId}
            type="text"
            name="name"
            onChange={this.onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.props.numberInputId}>
          Number
          <Input
            id={this.props.numberInputId}
            type="tel"
            name="number"
            onChange={this.onInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
