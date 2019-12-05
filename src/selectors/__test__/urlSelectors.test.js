import {
  getUrls,
  getDetailUrl,
  getUrlError,
  getUrlReload
} from '../urlSelectors';

describe('urlSelectors', () => {

  const state = {
    urls: {
      urls: 'dog',
      detail: 'cat',
      error: 'gerbil',
      reload: 'fish'
    }
  };

  it('getUrls retrieves the correct piece of state', () => {
    expect(getUrls(state)).toBe('dog');
  });

  it('getDetailUrl retrieves the correct piece of state', () => {
    expect(getDetailUrl(state)).toBe('cat');
  });

  it('getUrlError retrieves the correct piece of state', () => {
    expect(getUrlError(state)).toBe('gerbil');
  });

  it('getUrlReload retrieves the correct piece of state', () => {
    expect(getUrlReload(state)).toBe('fish');
  });
});
