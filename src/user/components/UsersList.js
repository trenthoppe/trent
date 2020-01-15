import React from 'react'

import './UsersList.css'

import UserItem from './UserItem';

const UsersList = props => {
    if (props.items.length == 0) {
        return (
            <div>
                <h2>No users found</h2>
            </div>
        );
    }
    else {
        return (
            <ul className="user-list">
                {props.items.map(user => 
                    <UserItem 
                        key={user.id} 
                        id={user.id} 
                        image={user.image} 
                        name={user.name}
                        placeCount={user.places}
                    />
                )}
            </ul>
        )
    }
}

export default UsersList;