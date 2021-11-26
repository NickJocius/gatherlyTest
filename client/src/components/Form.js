import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField,InputAdornment, Typography } from '@material-ui/core';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import { shortenUrl, getUrl } from '../services/urlFunctions';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '2rem'

    }
}));

const Form = ({title, action, setNewUrl, newUrl}) => {
    const classes = useStyles();
    const [url, setUrl] = useState("");
    const [valid, setValid] = useState(true);

    const handleChange = (e) => {
        e.preventDefault();
        setValid(true);
        setUrl(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (action === "Shorten") {
            shortenUrl(url).then((res) => {
                if (res.data.err !== 'invalid') {
                
                    
                    setNewUrl([{...res.data}]);
                } else {
                    setValid(false);
                }
            }).catch((err) => {
                console.log(err.error);
            })
        } else {
            getUrl(url).then((res) => {
                window.open(`${res.data.longUrl.origUrl}`);
                
            }).catch((err) => console.log(err))
        }
        setUrl('');
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} className={classes.center}>
                <Typography gutterBottom align="center" className={classes.title}>{title}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.center}>
                <TextField
                    error={!valid}
                    className={classes.margin}
                    onChange={handleChange}
                    value={url}
                    id="input-with-icon-textfield"
                    label={`${action} Url`}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <FindReplaceIcon />
                        </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item xs={12} className={classes.center}>
                <Button variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button>
            </Grid>
        </Grid>
    );
};

export default Form;
