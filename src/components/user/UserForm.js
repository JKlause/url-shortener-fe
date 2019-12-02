import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSessionId } from '../../selectors/sessionSelectors';

const UserForm = ({ buttonText, handleSubmit, redirectText, redirectLink }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const sessionId = useSelector(getSessionId);

  if(sessionId) return <Redirect to="/" />;

  return (
    <>
      <form onSubmit={event => handleSubmit(event, username, password)}>
        <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
        <button>{buttonText}</button>
      </form>
      <Link to={redirectLink}>{redirectText}</Link>
    </>
  );
};

UserForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  redirectText: PropTypes.string.isRequired,
  redirectLink: PropTypes.string.isRequired
};

export default UserForm;

