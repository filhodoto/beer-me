import React, { FC, useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// We need createclasses beacsue of Typescript
// https://material-ui.com/classes/api/#createclasses-classes-classes
const useclasses = makeStyles((theme) =>
  createStyles({
    wrapper: (props) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: theme.palette.text.primary,
    }),
    overlay: {
      display: 'block',
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0, 0.4)',
    },
    appbar: {
      background: 'none',
      color: theme.palette.text.primary,
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: 1,
    },
    icon: {
      color: theme.palette.text.primary,
      fontSize: '2rem',
    },
    colorText: {
      color: theme.palette.primary.main,
    },
    container: {
      textAlign: 'center',
      zIndex: 1,
    },
    title: {
      fontSize: '2.5rem',
    },
    downAction: {
      color: theme.palette.primary.main,
      fontSize: '4rem',
    },
  })
);

const Header: FC = (): JSX.Element => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setShowText(true);
  }, []);

  // This is one way of importing classes with material-ui
  const classes = useclasses();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <span className={classes.colorText}>Beer</span>Me
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        className={classes.container}
        in={showText}
        {...(showText ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <h2 className={classes.title}>
          Are you <span className={classes.colorText}>Thirsty?</span>
          <br />
          See some <span className={classes.colorText}>suggestions</span> below.
        </h2>
        <IconButton>
          <ExpandMoreIcon className={classes.downAction} />
        </IconButton>
      </Collapse>
      <span className={classes.overlay} />
    </div>
  );
};

export default Header;
