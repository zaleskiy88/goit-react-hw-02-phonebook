import { Component } from 'react';
import { FilterLabel, FilterInput } from './ContactsFilter.styled';

export class ContactsFilter extends Component {
  state = { filter: '' };

  onFilterInputChange = evt => {
    const { value } = evt.currentTarget;

    this.setState({ filter: value });
  };

  render() {
    return (
      <>
        <FilterLabel>
          Find contacts by name
          <FilterInput
            type="text"
            onChange={this.props.onFilterChange}
            name="filter"
          />
        </FilterLabel>
      </>
    );
  }
}
