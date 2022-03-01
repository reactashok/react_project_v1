import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Login from '../Pages/Login/Login';
import Typography from '@mui/material/Typography';
import dosa from '../Images/Image.png'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    login:false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
  <box>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
        <h2 className='loginhead'>Login</h2>
      </Typography>
      <img className='dosaimage' src={dosa}/>

    <Box className='drawer'
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 650 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className=''>
        Login Form
      </Typography> */}
      <div className='drawlogin'>
      <Login/>
      </div>
    </Box>
    </box>
  );

  return (
    <div>
      {[ 'right', ].map((anchor) => (

        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>LOGIN</Button>
          { console.log(anchor,"anchor")}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
