import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { BrowserRouter,HashRouter,NavLink, Route, Link,Switch } from "react-router-dom";
var colorindext='blue'
var colorcontact='black'
function setcolo(){
  colorindext='black'
}
export const  MainListItems =({colorHome,colorContact,colorNews,colorCustomer})=> (

  <div>
 
    <NavLink style={{color:colorHome}}  to='/'>
    <ListItem button >
    <ListItemIcon >
     <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary="Dashboard" />
  </ListItem>
    </NavLink>



    <NavLink style={{color:colorNews}} to='/newsAdmin'>
  <ListItem button>
    <ListItemIcon>
      <AssignmentIcon />
    </ListItemIcon>
    <ListItemText primary="Quản lí tin tức" />
  </ListItem>
  </NavLink>


  <NavLink style={{color:colorContact}} to='/contact'>
  <ListItem button>
    <ListItemIcon>
      <PeopleIcon />
    </ListItemIcon>
    <ListItemText primary="Liên hệ" />
  </ListItem>
  </NavLink>


  <NavLink style={{color:colorCustomer}} to='/customer'>
  <ListItem button>
    <ListItemIcon>
      <BarChartIcon />
    </ListItemIcon>
    <ListItemText primary="Khách hàng" />
  </ListItem>
  </NavLink>

  <ListItem button>
    <ListItemIcon>
      <LayersIcon />
    </ListItemIcon>
    <ListItemText primary="Integrations" />
  </ListItem>
</div>
);




export const SecondaryListItems =()=>(

<div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
  )
  
