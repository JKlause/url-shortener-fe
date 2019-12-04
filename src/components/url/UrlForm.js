import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UrlForm = ({ handleSubmit }) => {
  const [urlText, setUrlText] = useState('');
  const [shortUrlText, setShortUrlText] = useState('');

  return (
    <section>
      <form onSubmit={event => {
        handleSubmit(event, urlText, shortUrlText);
        setUrlText('');
        setShortUrlText('');
      }}>
        <input type="text" value={urlText} onChange={({ target }) => setUrlText(target.value)} placeholder="URL Address to Shorten" />
        <input type="text" value={shortUrlText} onChange={({ target }) => setShortUrlText(target.value)} placeholder="custom short address" />
        <button>Create Short Url</button>
      </form>
    </section>
  );
};

UrlForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default UrlForm;
