import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailUrl } from '../../selectors/urlSelectors';
import { fetchDetailUrl } from '../../actions/urlActions';

export default function MemeDetail({ match }) {
  const id = match.params.id;
  const dispatch = useDispatch();
  let url = useSelector(getDetailUrl);

  useEffect(() => {
    dispatch(fetchDetailUrl(id));
  }, []);

  if(!url) return <h1>Loading...</h1>;

  return (
    <>
      <div>
        <h2>{url.shortUrlText}</h2>
        <h3>Connects To {url.urlText}</h3>
        <h3>Has Been Hit {url.count} Times</h3>
      </div>
    </>
  );
}

MemeDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
