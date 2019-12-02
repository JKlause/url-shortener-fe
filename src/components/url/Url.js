import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateCount } from '../../actions/urlActions';

export default function Url({ url }) {
  return (
    <div>
      <a href={url.urlText} rel='noopener noreferrer' target='_blank' onClick={()=> updateCount({ ...url, count: url.count + 1 })}>{url.shortUrlText}</a>
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
    count: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
};
