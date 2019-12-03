import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Url({ url }) {
  return (
    <div>
      <span>Your Shortened Url for {url.urlText} is {url.id}</span>
      <Link to={`/url/${url.id}`}>
        <span>Url Details</span>
      </Link>
    </div>
  );
}

Url.propTypes = {
  url: PropTypes.shape({
    urlText: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
};
