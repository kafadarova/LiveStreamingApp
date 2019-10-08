import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '',
        scope: 'email'
      }).then(() => {
        // reference to the auth instance
        this.auth = window.gapi.auth2.getAuthInstance();
      })
    });
  }
  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;
