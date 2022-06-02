import React from 'react'

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1038987161336-huu44segbpr1n3i1ch1dvtj7d49p958f.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'react streams'
      })
    })
  }

  render() {
    return (
      <div>Google Auth</div>
    )
  }
}

export default GoogleAuth