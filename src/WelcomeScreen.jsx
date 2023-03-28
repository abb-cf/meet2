import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
    (
    <div className="WelcomeScreen">
    <h1>Meet App</h1>
    <h5>
        Log in to see upcoming events around the world <br />
        for full-stack developers
    </h5>
        <div className="google-btn">
            {/* <div class="google-icon-wrapper"> */}
            
            {/* </div> */}
            <button onClick={() => { props.getAccessToken() }}
                rel="nofollow noopener"
                className="btn-text"
            >
                <b>Sign in with Google</b>
            </button>
        </div>
        <br />
        <a
            href="https://abb-cf.github.io/meet2/privacy.html"
            rel="nofollow noopener"
        >
            Privacy policy
        </a>
        <footer>
        <img
            className="google-icon"
            align="left"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google sign-in" />
            </footer>
        </div>
    )
    : null
}

export default WelcomeScreen;