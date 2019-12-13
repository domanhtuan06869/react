
import React, { useRef, useEffect ,useState} from 'react'
import { BrowserRouter,HashRouter,NavLink, Route, Link,Switch } from "react-router-dom";
import clsx from 'clsx';
import EditAdmin from '../componentsAdmin/EditAdmin'
import Login from '../componentsAdmin/Login'
import AddAdmin from '../componentsAdmin/AddAdmin'
import withAuth from '../componentsAdmin/withAuth'
import withAuthLogin from '../componentsAdmin/withAuthLogin'
import Contact from '../componentsAdmin/Contact'
import Customer from '../componentsAdmin/Customer'
import NewsAdmin from '../componentsAdmin/NewsAdmin'
import Chart from '../componentsAdmin/Chart'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { MainListItems, SecondaryListItems} from './Listleft';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));










function Admin(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

const [colorHome,setColorHome]=useState('blue')
const[colorContact,setColorContact]=useState('black')
const [colorNews,setColorNews]=useState('black')
const [colorCustomer,setColorCustomer]=useState('black')





  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  function logout() {
    fetch('/logout', {
      method: 'GET',
    })
      .then(res => {
        if (res.status === 200) {
          props.history.push('/login');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
        
      })
    }
 
    useEffect(()=>{
    setColorRouter()
    },[])
    function setColorRouter(){
      if(props.location.hash==='#/'){
        setColorHome('blue')
        setColorContact('black')
        setColorNews('black')
        setColorCustomer('black')
    
      }
     else if(props.location.hash==='#/contact'){
        setColorContact('blue')
        setColorHome('black')
        setColorNews('black')
        setColorCustomer('black')
    
      } else if(props.location.hash==='#/newsAdmin'){
        setColorContact('black')
        setColorHome('black')
        setColorNews('blue')
        setColorCustomer('black')
        
      } else if(props.location.hash==='#/customer'){
        setColorContact('black')
        setColorHome('black')
        setColorNews('black')
        setColorCustomer('blue')
      }
    }

    function Copyright() {
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }
  return (
    <HashRouter>
    <div>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{height:'8.8%'}} position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar  className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">     
          <FontAwesomeIcon size="lg" onClick={()=> logout()} title="Đăng xuất" icon={faSignOutAlt} />
           
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div style={{backgroundColor:'#101E59',height:'8.8%'}} className={classes.toolbarIcon}>
          <h1  style={{marginTop:'4%',color:'white'}}>KYC</h1>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{color:'white'}} />
          </IconButton>
        </div>
        <Divider />
        <List><MainListItems colorHome={colorHome} colorContact={colorContact} colorNews={colorNews} colorCustomer={colorCustomer}> </MainListItems></List>
        <Divider />
        <List><SecondaryListItems></SecondaryListItems></List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <div className="content">
          <Switch>
                    <Route exact path='/' render={(props) => <Chart setColor={setColorRouter} />}/>
                      <Route  path="/edit" component={EditAdmin}></Route>
                 
                      <Route path='/newsAdmin' render={(props) => <NewsAdmin setColor={setColorRouter} />}/>
                      <Route path='/contact' render={(props) => <Contact setColor={setColorRouter} />}/>
                      <Route path='/customer' render={(props) => <Customer setColor={setColorRouter} />}/>
          </Switch>
            
                     
      </div>
      <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
   
    </div>
  </HashRouter>
  )
}
export default Admin