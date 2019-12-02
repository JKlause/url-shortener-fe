import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionSignIn } from '../actions/sessionActions';

const mapStateToProps = () => ({
  buttonText: 'Sign In',
  redirectText: 'New User? Sign Up!',
  redirectLink: '/signup'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionSignIn(username, password));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
