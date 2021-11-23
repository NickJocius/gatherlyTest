import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TabBox from './components/TabBox';
import DataBox from './components/DataBox';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
  }
}));

function App() {
  const classes = useStyles();
  const [newUrl, setNewUrl] = useState({});
  return (
    <div className="App">
      <Container maxWidth="xl" className={classes.root}>
        <TabBox setNewUrl={setNewUrl} />
        <DataBox newUrl={newUrl}/>
      </Container>
    </div>
  );
}

export default App;
