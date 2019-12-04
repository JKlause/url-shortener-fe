import {
  getUrls,
  getDetailUrl,
  getUrlError
} from '../urlSelectors';

describe('urlSelectors', () => {

  const state = {
    urls: {
      urls: 'dog',
      detail: 'cat',
      error: 'gerbil'
    }
  };

  it('getUrls retrieves the correct piece of state', () => {
    expect(getUrls(state)).toBe('dog');
  });

  it('getDetailUrl retrieves the correct piece of state', () => {
    expect(getDetailUrl(state)).toBe('cat');
  });

  it('getUrls retrieves the correct piece of state', () => {
    expect(getUrlError(state)).toBe('gerbil');
  });
});
