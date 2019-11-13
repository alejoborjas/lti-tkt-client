import React from 'react';
import { CssBaseline, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { AppBar } from '../components/AppBar';
import { Drawer } from '../components/Drawer';
import { ProgramsTable } from '../components/ProgramsTable';
import { drawerWidth } from '../data/drawer';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}));

const AdminPage = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [drawerSelected, setDrawerSelected] = React.useState('');

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerButtonClick = itemName => {
        setDrawerSelected(itemName);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
                open={open}
            />
            <Drawer
                selected={drawerSelected}
                handleDrawerButtonClick={handleDrawerButtonClick}
                handleDrawerClose={handleDrawerClose}
                open={open}
            />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open
                })}
            >
                <div className={classes.drawerHeader}></div>
                <Paper className={classes.paper}>
                    <ProgramsTable />
                </Paper>
            </main>
        </div>
    );
};

export default AdminPage;
