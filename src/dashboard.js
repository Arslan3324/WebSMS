import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Dashboard } from './DashboardContent';
import { useState } from 'react';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();
  const [toolbar,Settoolbar]=useState('Dashboard');
  const LoadToolbar=()=>{
      switch(toolbar)
      {
          case 'Dashboard':
              return (
                  <Dashboard/>
              );
          case 'Student':
              return;
      }

  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {LoadToolbar()}
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItem button onClick={e=>Settoolbar('Dashboard')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary='Dashboard'/>
            </ListItem>
            <ListItem button onClick={e=>Settoolbar('Student')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary='Student'/>
            </ListItem>
            <ListItem button onClick={e=>Settoolbar('Teacher')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary='Teacher'/>
            </ListItem>
            <ListItem button onClick={e=>Settoolbar('Teacher')}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary='Student'/>
            </ListItem>
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
