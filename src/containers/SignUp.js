import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionSignup } from '../actions/sessionActions';
import { getSessionError } from '../selectors/sessionSelectors';

const mapStateToProps = state => ({
  buttonText: 'Sign Up',
  redirectText: 'Already A User? Sign In!',
  redirectLink: '/signin',
  error: getSessionError(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionSignup(username, password));
    // .then(()=>{
    //   // dispatch({
    //   //   type: SET_SESSION_ERROR
    //   // })
    // });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
