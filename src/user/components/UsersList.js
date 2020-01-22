import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import UserItem from './UserItem';

import './UsersList.css'

const UsersList = props => {
    if (props.items.length == 0) {
        return (
            <Card>
                <h2>No users found</h2>
            </Card>
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