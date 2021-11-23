import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(4, 4),
        backgroundColor: theme.palette.background.paper,
    }
}));

const DataBox = ({ newUrl }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {newUrl.existing && (
                <div>
                    <Typography >{newUrl.existing.origUrl}</Typography>
                    <Typography >{newUrl.existing.shortUrl}</Typography>
                </div>
                
            )}
            
        </Box>
    )
}

export default DataBox
