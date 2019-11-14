import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
    AppBar as MaterialAppBar,
    IconButton,
    Toolbar,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { drawerWidth } from '../../data/drawer';

const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));

const AppBar = ({ handleDrawerClose, handleDrawerOpen, open }) => {
    const classes = useStyles();

    return (
        <div>
            <MaterialAppBar
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        onClick={open ? handleDrawerClose : handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <FontAwesomeIcon icon={faBars} size='sm' />
                    </IconButton>
                    <Typography variant='h6'>
                        Certificates Management
                    </Typography>
                </Toolbar>
            </MaterialAppBar>
        </div>
    );
};

export default AppBar;
