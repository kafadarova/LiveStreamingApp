import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '',
        scope: 'email'
      }).then(() => {
        // reference to the auth instance
        this.auth = window.gapi.auth2.getAuthInstance();
        // update the auth state
        this.onAuthChange(this.auth.isSignedIn.get());
        // event listener to check for signin/signout
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  // callback function - so arrow function
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
      if (this.props.isSignedIn === null) {
        return null;
      } else  if (this.props.isSignedIn){
        return (
          <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon" />
              Sign Out
          </button>
        );
      } else {
        return (
          <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google icon" />
              Sign In with Google
          </button>
        );
      }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
   // console.log(state);
    return {
      isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
