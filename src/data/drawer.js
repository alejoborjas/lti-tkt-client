import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faCertificate,
    faGraduationCap,
    faListAlt,
    faRuler,
    faUsers
} from '@fortawesome/free-solid-svg-icons';

export const drawerWidth = 240;

export const drawerListItems = [
    {
        title: 'Rules',
        icon: <FontAwesomeIcon icon={faRuler} size='lg' />,
        path: '/rules'
    },
    {
        title: 'Programs',
        icon: <FontAwesomeIcon icon={faListAlt} size='lg' />,
        path: '/programs'
    },
    {
        title: 'Diplomas',
        icon: <FontAwesomeIcon icon={faCertificate} size='lg' />,
        path: '/diplomas'
    },
    {
        title: 'Certificates',
        icon: <FontAwesomeIcon icon={faGraduationCap} size='lg' />,
        path: '/certificates'
    },
    {
        title: 'Users',
        icon: <FontAwesomeIcon icon={faUsers} size='lg' />,
        path: '/users'
    },
    {
        title: 'Courses',
        icon: <FontAwesomeIcon icon={faBook} size='lg' />,
        path: '/courses'
    }
];
