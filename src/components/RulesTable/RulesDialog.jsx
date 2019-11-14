import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {AppBar,Button,Grid,IconButton,Paper,TextField,Toolbar,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400
    }
}));

export const RulesDialog = ({ handleClose }) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge='start'
                        color='inherit'
                        onClick={handleClose}
                        aria-label='close'
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Add Program
                    </Typography>
                    <Button autoFocus color='inherit' onClick={handleClose}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.drawerHeader}></div>
                <Paper>
                    <form
                        className={classes.container}
                        noValidate
                        autoComplete='off'
                    >
                        <Grid
                            container
                            direction='row'
                            justify='center'
                            alignItems='center'
                            spacing={3}
                        >
                            <Grid
                                justify='center'
                                alignItems='center'
                                item
                                md={3}
                            >
                                <TextField
                                    required
                                    id='name'
                                    label='Name'
                                    className={classes.textField}
                                    margin='normal'
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction='row'
                            justify='center'
                            alignItems='center'
                            spacing={3}
                        >
                            <Grid
                                justify='center'
                                alignItems='center'
                                item
                                md={3}
                            >
                                <TextField
                                    id='description'
                                    label='Description'
                                    className={classes.textField}
                                    margin='normal'
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction='row'
                            justify='center'
                            alignItems='center'
                            spacing={3}
                        >
                            <Grid
                                justify='center'
                                alignItems='center'
                                item
                                md={3}
                            >
                                <TextField
                                    id='language'
                                    label='Language'
                                    className={classes.textField}
                                    margin='normal'
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </main>
        </div>
    );
};
