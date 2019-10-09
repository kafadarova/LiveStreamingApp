import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '',
        scope: 'email'
      }).then(() => {
        // reference to the auth instance
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(); // this.setState({isSignedIn: this.auth.isSignedIn.get()});
        // event listener to check for signin/signout
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }
  // callback function - so arrow function
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
      if (this.state.isSignedIn === null) {
        return null;
      } else  if (this.state.isSignedIn){
        return (
          <button className="ui red google button">
            <i className="google icon" />
              Sign Out
          </button>
        );
      } else {
        return (
          <button className="ui red google button">
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

export default GoogleAuth;
