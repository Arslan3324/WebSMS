import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Dashboard } from './DashboardContent';
import { useState } from 'react';
import { Student } from './student';
import { Teacher } from './Teacher';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { DropdownButton, Dropdown} from 'react-bootstrap';
import ClassIcon from '@material-ui/icons/Class';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();


  const [toolbar, settoolbar] = useState('Dashboard')
  const handle=()=>
  {
    switch(toolbar)
    {
      case 'Dashboard':
        return (
          <Dashboard/>
        )
        case 'Student':
          return (
            <Student/>
          )
          case 'Teacher':
          return (
            <Teacher/>
          )
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          <div>
          <h2><ion-icon name="school"></ion-icon></h2>
          </div>
        
          <Typography variant="h6" noWrap>
            
            School Managment System

          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>

          
              <ListItem button onClick={e=>settoolbar("Dashboard")}>
                <ListItemIcon><DashboardIcon/></ListItemIcon>
                <ListItemText primary={'Dashboard'} />
              </ListItem>
              <ListItem button onClick={e=>settoolbar("Student")}>
                <ListItemIcon><PermIdentityIcon/> </ListItemIcon>
                <ListItemText primary={'Student'} />
              </ListItem>
              <ListItem button onClick={e=>settoolbar("Teacher")}>
                <ListItemIcon><SupervisedUserCircleIcon/></ListItemIcon>
                <ListItemText primary={'Teacher'} />
              </ListItem>
              <ListItem button onClick={e=>settoolbar("Attendence")}>
                <ListItemIcon><CheckBoxIcon/></ListItemIcon>
                <ListItemText primary={'Attendence'} />
              </ListItem>
              <ListItem button onClick={e=>settoolbar("Attendence")}>
                <DropdownButton id="dropdown-basic-button" title="Classes" variant="light" style={{width:"40px"}}>
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
              </ListItem>

              
              
          </List>
          

        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

        {handle()}

      </main>
    </div>
  );
}
