import React from 'react';
import PropTypes from 'prop-types';

function Filter({ filter, changeFilter }) {
  return (
    <label className="filter">
      Find contacts by name
      <input
        className="filter__field"
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
