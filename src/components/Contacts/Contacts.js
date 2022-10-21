import React from 'react';
import PropTypes from 'prop-types';

function Contacts({ contacts, onContactDelete }) {
  return (
    <ul className="contacts__list">
      {contacts.map(({ name, number, id }) => (
        <li key={id} className="contacts__item">
          {name}
          <span className="contacts__number">{number}</span>
          <button
            type="button"
            className="contacts__delete-button"
            onClick={() => onContactDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};

export default Contacts;
