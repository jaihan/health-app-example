import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={4}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: '2em'
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Overview" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Coverage" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Transactions" href="/spam" {...a11yProps(2)} />
          <LinkTab label="View Dependents" href="/dependent" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Henry Linn<br/>
        $1000000 <br/> <br/>
        <div>
          Company: ABC Bank Limited <br/>
          Member ID: 1241U<br/>
          MemeberShip Plan: Premium Care Pro<br/>
          Validaty Date: 1 Jan 2019 to 31 Dec 2019<br/>
        </div>
        <div>
          Contact us for help<br/>
          +95 975 016 9626 Or<br/>
          support@yesdoctor.asia<br/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Coverage
      </TabPanel>
      <TabPanel value={value} index={2}>
        Transactions
      </TabPanel>
      <TabPanel value={value} index={3}>
        View Dependents
      </TabPanel>
    </div>
  );
}