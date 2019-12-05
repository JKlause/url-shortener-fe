import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UrlForm from '../components/url/UrlForm';
import Urls from '../components/url/Urls';
import { getUrls, getUrlError, getUrlReload } from '../selectors/urlSelectors';
import { createUrl, fetchUserUrls } from '../actions/urlActions';
import { sessionSignOut } from '../actions/sessionActions';



function UrlContainer({ urls, error, reload, handleSubmit, loadUrls, signOut }) {
  
  useEffect(()=> {
    loadUrls();
  }, [reload]);

  return (
    <>
      <span>Please include https:// or http:// to your URL address</span>
      {error && <span>{error}</span>}
      <UrlForm handleSubmit={handleSubmit} />
      <Urls urls={urls} />
      <span>Use your shortened url with https://shorten-you-rl.herokuapp.com/publicUrl/(your-url-here)</span>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}


const mapStateToProps = state => ({
  urls: getUrls(state),
  error: getUrlError(state),
  reload: getUrlReload(state)
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
  error: PropTypes.string,
  reload: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loadUrls: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};


