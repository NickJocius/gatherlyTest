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
    }
}));

const Form = ({title, action, setNewUrl}) => {
    const classes = useStyles();
    const [url, setUrl] = useState("");
    const [valid, setValid] = useState(true);

    const handleChange = (e) => {
        e.preventDefault();
        setValid(true);
        setUrl(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (action === "Shorten") {
            shortenUrl(url).then((res) => {
                if (res.data.err !== 'invalid') {
                    setNewUrl(res.data);
                } else {
                    setValid(false);
                }
            }).catch((err) => {
                console.log(err.error);
            })
        } else {
            getUrl(url).then((res) => {
            setNewUrl(res.data);
            }).catch((err) => {
                console.log(err.error);
            })
        }
        
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} className={classes.center}>
                <Typography variant="h3" gutterBottom align="center">{title}</Typography>
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
