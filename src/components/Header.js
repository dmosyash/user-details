import React from 'react';

/**
 * @name Header
 * @description as name suggest it is Header of the whole App
 */

const headerStyle = {
    backgroundColor: '#282c34',
    height: '5vh',
    fontSize: 'calc(10px + 2vmin)',
    display: 'flex',
    color: 'white',
    padding: '10px 80px'
};

const Header = props => (
    <header style={headerStyle}>
        <div style={{cursor: 'pointer'}}><span>User Details</span></div>
    </header>
);

export default Header;