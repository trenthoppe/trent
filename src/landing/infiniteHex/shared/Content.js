import React from 'react';
import { MdBook } from 'react-icons/md';

const titleContent = [{
    id: 0,
    name: "Books",
    icon: (color, size) => <MdBook color={color} size={size} />
}, {
    id: 1,
    name: "Movies",
    icon: (color, size) => <MdBook color={color} size={size} />
}, {
    id: 2, 
    name: "Podcasts",
    icon: (color, size) => <MdBook color={color} size={size} />
}, {
    id: 3,
    name: "Hobbies",
    icon: (color, size) => <MdBook color={color} size={size} />
}, {
    id: 4,
    name: "Projects",
    icon: (color, size) => <MdBook color={color} size={size} />
}, {
    id: 5,
    name: "Work",
    icon: (color, size) => <MdBook color={color} size={size} />
}, {
    id: 6,
    name: "Interests",
    icon: (color, size) => <MdBook color={color} size={size} />
}];

export default titleContent;