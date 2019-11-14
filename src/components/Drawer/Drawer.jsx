import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {
    Divider,
    Drawer as MaterialDrawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { drawerListItems, drawerWidth } from '../../data/drawer';

const useStyles = makeStyles(theme => ({
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    }
}));

const Drawer = ({
    selected,
    handleDrawerButtonClick,
    handleDrawerClose,
    open
}) => {
    const classes = useStyles();

    return (
        <MaterialDrawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={open}
            classes={{ paper: classes.drawerPaper }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <FontAwesomeIcon icon={faChevronLeft} size='sm' />
                </IconButton>
            </div>
            <Divider />
            <List>
                {drawerListItems.map((item, index) => (
                    <ListItem
                        button={true}
                        key={`list_item_${index}`}
                        onClick={() => handleDrawerButtonClick(item.title)}
                        selected={item.title === selected}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                ))}
            </List>
        </MaterialDrawer>
    );
};

export default Drawer;
