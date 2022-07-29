import '../styles/MovieInfo.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import VideocamIcon from '@mui/icons-material/Videocam';
import RecommendIcon from '@mui/icons-material/Recommend';
import Cast from './Cast';
import Crew from './Crew';
import Recommendations from './Recommendations'

let style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  maxWidth: '800px'
}


function TabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  export default function TVInfo(props) {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box
        sx={{ flexGrow: 1, bgcolor: 'var(--primary-background)', display: 'flex',  color:'var(--primary-text)'}}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <Tab label="Cast" {...a11yProps(0)} sx={{color:'#fff'}} icon={<RecentActorsIcon />} />
          <Tab label="Crew" {...a11yProps(1)} sx={{color:'#fff'}} icon={<VideocamIcon />} />
          <Tab label="More Like This" {...a11yProps(2)} sx={{color:'#fff'}} icon={<RecommendIcon />} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div style={style}>
            <Cast id={props.id} category='tv' />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div style={style}>
          <Crew id={props.id} category='tv' />
        </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div style={style}>
          <Recommendations id={props.id} category='tv' />
          </div>
        </TabPanel>
      </Box>
    );
  }