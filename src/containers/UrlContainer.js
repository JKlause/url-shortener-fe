import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UrlForm from '../components/url/UrlForm';
import Urls from '../components/url/Urls';
import { getUrls } from '../selectors/urlSelectors';
import { createUrl, fetchUserUrls } from '../actions/urlActions';
import { sessionSignOut } from '../actions/sessionActions';



function UrlContainer({ urls, handleSubmit, loadUrls, signOut }) {
  
  useEffect(()=> {
    loadUrls();
  }, [urls]);

  return (
    <>
      <span>Please include https:// or http:// to your URL address</span>
      <UrlForm handleSubmit={handleSubmit} />
      <Urls urls={urls} />
      <span>Use your shortened url with http://localhost:7891/publicUrl/(your-url-here)</span>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}


const mapStateToProps = state => ({
  urls: getUrls(state),
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, urlText, shortUrlText) {
    event.preventDefault();

    const dispatchUrl = {
      urlText,
      count: 0
    };
    if(shortUrlText) dispatchUrl.shortUrlText = shortUrlText;

    dispatch(createUrl(dispatchUrl));
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
    shortUrlText: PropTypes.string,
    count: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loadUrls: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};


