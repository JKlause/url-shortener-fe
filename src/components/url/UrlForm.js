import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UrlForm = ({ handleSubmit }) => {
  const [urlText, setUrlText] = useState('');

  return (
    <section>
      <form onSubmit={event => {
        handleSubmit(event, urlText);
        setUrlText('');
      }}>
        <input type="text" value={urlText} onChange={({ target }) => setUrlText(target.value)} placeholder="URL Address to Shorten" />
        <button>Create Short Url</button>
      </form>
    </section>
  );
};

UrlForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default UrlForm;
