import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Download extends Component {
  render() {
    return (
        <div className="download-page-main">
          <h2 id="download-install">Download And Install</h2>
          <p id="install-info">Current Version: 24.1.0 released 2019-10-07 <br/><br/>
            All versions have exactly the same functionality. They only differ in technical details and how they are
            packaged specifically for each browser.
          </p>
          <div className="browser-logos">
            <Link className="firefox-logo" to="/"></Link>
            <Link className="chrome-logo" to="/"></Link>
            <Link className="safari-logo" to="/"></Link>
            <Link className="opera-logo" to="/"></Link>
            <Link className="edge-logo" to="/"></Link>
          </div>
          <div id="download-card">
            <div className="firefox-logo"></div>
            <h2>Download Social Fixer for Firefox</h2>
            <p>Click to install the extension from the official Mozilla Firefox Add-Ons site. <br/>
              <b>Are You Upgrading?</b> Firefox will update automatically every 24 hours or less. The "Download" page
              may not show you the latest version. To update Social Fixer manually, see:<br/>
              <Link to="/"><b>How to update Firefox extensions manually</b>.</Link>
            </p>
            <Link className="download-button" to="/" target="_blank" type="button">Download</Link>
          </div>
        </div>
    )
  }
}

export default Download;
