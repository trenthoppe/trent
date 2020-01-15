import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id:"1",
            name:"Floppers",
            image:"http://1.bp.blogspot.com/-q6PYHzS9UpM/Tu4Im7jyjSI/AAAAAAAACKQ/mdyhVIW8B4c/s1600/Cute+RAbbits+by+Princess+%25287%2529.jpg",
            places:3
        }
    ];
    return <UsersList items={USERS} />;
}

export default Users;