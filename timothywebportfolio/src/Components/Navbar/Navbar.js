import React from 'react'
import './Navbar.css'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core/'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

function Navbar() {

    const classes = useStyles();
    const hello = <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheconversation.com%2Fyes-google-has-a-new-logo-but-why-46976&psig=AOvVaw3kAA0dRO5wRqHCKz4JF6v0&ust=1604350092650000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICym_2b4uwCFQAAAAAdAAAAABAD" />
        return (
            <>
              <Paper className={classes.root}>
                <Tabs
                    // value={value}
                    // onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <a className='href' target="_blank" href="https://github.com/TimothyReynoso">
                        <Tab label="Github" icon={<GitHubIcon />} />
                    </a>    
                    <a className='href' target="_blank" href="https://docs.google.com/document/d/1OKiALI9uIKjocbvylZtDr3wEFGRa0Gqt0ndtil5-RI0/edit?usp=sharing">
                        <Tab label="Resume" icon={<DescriptionIcon />}/>
                    </a> 
                    <a className='href' target="_blank" href="https://www.linkedin.com/in/timothy-reynoso-690b36162/">
                        <Tab label="Linkedin" icon={<LinkedInIcon />} />
                    </a>       
                        
                        
                </Tabs>
            </Paper>  
            </>
        )
} 

export default Navbar;