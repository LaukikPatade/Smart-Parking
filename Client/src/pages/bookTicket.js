import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#f7f7f7',
  },
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: '4px',
    padding: theme.spacing(1),
  },
  button: {
    backgroundColor: '#2196f3',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0d8bf0',
    },
  },
}));

function TicketBookingPage() {
  const classes = useStyles();
  const navigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false);
  const [duration,setDuration]=useState()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h2>Book your ticket</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                label="Name"
                variant="outlined"
                className={classes.input}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                className={classes.input}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <TextField
                label="Phone"
                variant="outlined"
                type="tel"
                className={classes.input}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
              <TextField
                label="Destination"
                variant="outlined"
                className={classes.input}
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                required
              />
              <TextField
                label="Departure Date"
                variant="outlined"
                type="date"
                className={classes.input}
                InputLabelProps={{
                  shrink: true,
                }}
                value={departureDate}
                onChange={(event) => setDepartureDate(event.target.value)}
                required
              />
              <TextField
                label="Return Date"
                variant="outlined"
                type="date"
                className={classes.input}
                InputLabelProps={{
                  shrink: true,
                }}
                value={returnDate}
                onChange={(event) => setReturnDate(event.target.value)}
                required
              />
              <Button
                variant="contained"
                type="submit"
                className={classes.button}
              >
                Book Now
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TicketBookingPage;
