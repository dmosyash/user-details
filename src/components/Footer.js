import React from 'react';

/**
 * @name Footer
 * @description It is footer of the whole App
 * it contains link to this app's github page and my emailId
 */

const footerStyle = {
    backgroundColor: '#282c34',
    height: '9vh',
    fontSize: 'calc(10px + 1vmin)',
    color: 'white',
    padding: '15px 80px',
    textAlign: 'center'
}

const ulStyle = {
    width: '100%',
    margin: '10px',
    padding: '0px'
}

const liStyle = {
    listStyleType: 'none',
    color: '#dfdfdf',
    display: 'inline',
    margin: '10px 40px'
}

const hMargin = {
    margin: '3px'
}

const Footer = (props) => (
    <div style={footerStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <a className="github-button" href="https://github.com/dmosyash" data-size="large" aria-label="Follow @dmosyash on GitHub">Follow @dmosyash</a>
                </li>
            </ul>
        <h4 style={hMargin}>kochar.yash@gmail.com</h4>
    </div>
);

export default Footer;