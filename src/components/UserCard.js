import React from 'react';

/**
 * @name UserCard
 * @description It is card component for a user.
 * It shows the details of a user. It is a dumb and reusable component.
 */


const cardStyle = {
    display: 'grid',
    gridTemplateColumns: '25% 50% 25%',
    border: '1px solid',
    borderRadius: '10px',
    backgroundColor: '#fff',
    margin: '7px',
    textAlign: 'center',
    fontSize: '18px',
    paddingBottom: '8px'
}

const lStyle = {
    fontSize: 'small',
    font: 'status-bar'
}

const UserCard = ({ user }) => {

    return (
        <div key={user.accountId} style={cardStyle}>
            <div>
                <label style={lStyle}>Account-Id</label>
                <br />
                <span>{user.accountId}</span>
            </div>
            <div>
                <label style={lStyle}>Full Name</label>
                <br />
                <span>{user.firstName} {user.lastName}</span>
            </div>
            <div>
                <label style={lStyle}>Age</label>
                <br />
                <span>{user.age}</span>
            </div>
        </div>
    )
}

export default UserCard;