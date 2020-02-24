import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Rating from 'material-ui-rating';
import image1 from '../../images/popular.png';
import image2 from '../../images/safe.png';

import "./Home.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width:"250px"
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}));



export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
          <Grid container spacing={10} justify="left">
          <Grid item >
            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              Social Fixers
              <Rating name="size-medium" value={5} defaultValue={5} size="medium" readOnly={true} />

<div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <NavLink to='/download'>
                  <Button variant="contained" color="primary">
                    Download
                  </Button>
                  </NavLink>
                </Grid>
                <Grid item>
                <HashLink to='/#review'>
                  <Button variant="outlined" color="primary">
                    Rate Us!
                  </Button>
                  </HashLink>
                </Grid>
              </Grid>
            </div>
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
            Social Fixer for Facebook plugs into your browser and improves the existing Facebook.com web site. You get to pick which features you want to use:
            <li>Hide Sponsored Posts</li>
                <li>Auto-switch to the Most Recent news feed</li>
                <li>Hide Politics!</li>
                <li>Filter your news feed by keyword, author, and more</li>
                <li>Friend Manager notifies you when you've been unfriended and more</li>
                <li>Tabbed news feed organizes posts by games, apps, author</li>
                <li>Hide parts of the page you don't want to see</li>
                <li>Don't show posts again once you've read them</li>
                <li>And much more! See the List of Features.</li>
            </Typography>
            </Grid>
            </Grid>
           
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image1}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Safe and Popular
                    </Typography>
                    <Typography>
                    Built by a well-known and trusted javascript/social media expert. With well over a million downloads, it's one of the most popular Facebook extensions available.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image2}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Privacy & Security Guaranteed
                    </Typography>
                    <Typography>
                    No personal data is ever sent or recorded. Never posts anything to FB. No ads or spyware, and it's easily removed if you wish. Recommended by Facecrooks and other user advocates.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            
          </Grid>
        </Container>
        <div className="ContactUs" id="review">
        <div className="container">
          <form id="contact" action method="post">
            <h3>Quick Review</h3>
            <h4>Review us today, your review is important to us!</h4>
            <fieldset>
              <input
                placeholder="Your Username"
                type="text"
                tabIndex={1}
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type Your Review Here...."
                tabIndex={5}
                required
                defaultValue={""}
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      </main>

    </React.Fragment>
  );
}