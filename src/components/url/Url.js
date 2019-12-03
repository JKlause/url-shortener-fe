import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteUrl } from '../../actions/urlActions';

export default function Url({ url }) {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(textarea) {
    textAreaRef.current.select();
    document.execCommand('copy');
    textarea.target.focus();
    setCopySuccess('Copied!');
  }

  //line 23 conditionally render shortText/id
  return (
    <div>
      <div>
        Your Shortened Url for {url.urlText} is
        <form>
          <textarea ref={textAreaRef} value={url.shortUrlText ? url.shortUrlText : url.id}/> 
        </form>
        <div>
          {
            document.queryCommandSupported('copy') &&
          <div>
            <button onClick={copyToClipboard}>Copy</button>
            {copySuccess}
          </div>
          }
        </div>
      </div>
      <button onClick={()=> deleteUrl(url.id)}>Delete</button>
      <Link to={`/url/${url.id}`}>
        <span>Url Details</span>
      </Link>
    </div>
  );
}

Url.propTypes = {
  url: PropTypes.shape({
    urlText: PropTypes.string.isRequired,
    shortUrlText: PropTypes.string,
    count: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
};
