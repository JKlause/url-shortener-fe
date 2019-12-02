import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Url({ url }) {
  return (
    <div>
      <a href={url.urlText} >{url.shortUrlText}</a>
      <Link to={`/url/${url.id}`}>
        <span>Url Details</span>
      </Link>
    </div>
  );
}

Url.propTypes = {
  url: PropTypes.shape({
    urlText: PropTypes.string.isRequired,
    shortUrlText: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
};
