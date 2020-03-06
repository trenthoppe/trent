import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Mt. Rainier',
        description:'Really tall mountain in Washington. Over 14,000 ft high; dont look down!',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mount_Rainier_from_west.jpg/1200px-Mount_Rainier_from_west.jpg',
        addrss:'Mount Rainier National Park, 39000 State Route 706 E, Ashford, WA 98304',
        creator:'u1',
        location: {
            lat: '46.853104',
            lng: '-121.75915'
        }
    },
    {
        id:'p2',
        title:'Mt. Rainier 2',
        description:'Really tall mountain in Washington. Over 14,000 ft high; dont look down!',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mount_Rainier_from_west.jpg/1200px-Mount_Rainier_from_west.jpg',
        addrss:'Mount Rainier National Park, 39000 State Route 706 E, Ashford, WA 98304',
        creator:'u2',
        location: {
            lat: '46.853104',
            lng: '-121.75915'
        }
    },
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={loadedPlaces}/>
    );
}

export default UserPlaces;