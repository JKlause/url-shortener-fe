import { 
  SET_URL_ERROR,
  CREATE_URL,
  SET_URLS,
  SET_DETAIL_URL,
} from '../urlActions';

describe('url Actions', ()=> {

  it('SET_URL_ERROR equals the correct string', () => {
    expect(SET_URL_ERROR).toBe('SET_URL_ERROR');
  });

  it('CREATE_URL equals the correct string', () => {
    expect(CREATE_URL).toBe('CREATE_URL');
  });

  it('SET_URLS equals the correct string', () => {
    expect(SET_URLS).toBe('SET_URLS');
  });

  it('SET_DETAIL_URL equals the correct string', () => {
    expect(SET_DETAIL_URL).toBe('SET_DETAIL_URL');
  });
  
});
