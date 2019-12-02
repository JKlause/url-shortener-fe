import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UrlForm from '../components/url/UrlForm';
import Urls from '../components/url/Urls';
import { getUrls } from '../selectors/url/Selectors';
import { createUrl, fetchUserUrls } from '../actions/urlActions';
import { sessionSignOut } from '../actions/sessionActions';



function UrlContainer({ urls, handleSubmit, loadUrls, signOut }) {
  
  useEffect(()=> {
    loadUrls();
  }, [urls]);

  return (
    <>
      <button onClick={() => signOut()}>Sign Out</button>
      <UrlForm handleSubmit={handleSubmit} />
      <Urls urls={urls} />
    </>
  );
}


const mapStateToProps = state => ({
  urls: getUrls(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, urlText, shortUrlText) {
    event.preventDefault();
    dispatch(createUrl({ urlText, shortUrlText, count: 0 }));
  },
  loadUrls() {
    dispatch(fetchUserUrls());
  },
  signOut() {
    dispatch(sessionSignOut());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlContainer);

UrlContainer.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.shape({
    urlText: PropTypes.string.isRequired,
    shortUrlText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loadUrls: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};


