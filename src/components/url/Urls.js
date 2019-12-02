import React from 'react';
import PropTypes from 'prop-types';
import Url from './Url';

export default function Urls({ urls }) {
  const urlElements = urls.map(url => {
    const urlData = {
      urlText: url.urlText,
      shortUrlText: url.shortUrlText,
      id: url.id
    };
    return (
      <Url url={urlData} key={url.id}/>
    );
  });

  return (
    <section>
      {urlElements}
    </section>
  );
}

Urls.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.shape({
    urlText: PropTypes.string.isRequired,
    shortUrlText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired
};
