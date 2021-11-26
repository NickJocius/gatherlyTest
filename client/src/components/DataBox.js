import React from 'react';
import { Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(4, 4),
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        textDecoration: 'underline',
        fontSize: '1.5rem'
    },
    linkBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}));

const DataBox = ({ newUrl }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography gutterBottom className={classes.title}>Url Data</Typography>
            {newUrl.existing && (
                <div className={classes.linkBox}>
                    <Typography>Original Url: {newUrl.existing.origUrl}</Typography>
                    <Typography>Shortened Url: {newUrl.existing.shortUrl}</Typography>
                </div>
                
            )}
            {!newUrl.existing && (
                <div className={classes.linkBox}>
                    <Typography>Original Url: {newUrl.newUrl.origUrl}</Typography>
                    <Typography>Shortened Url: {newUrl.newUrl.shortUrl}</Typography>
                </div>
            )}
        </Box>
    )
}

export default DataBox
