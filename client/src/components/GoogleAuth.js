import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '',
        scope: 'email'
      })
    });
  }
  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;
