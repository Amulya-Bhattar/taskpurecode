import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';

export default function Tabs(props) {
    function displayHandler() {
        props.setDisplay(true);
    }
    return (
        <Box sx={{ width: '100%', maxWidth: 360, color: 'white', paddingLeft: 2 }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Students" onClick={displayHandler}  sx={ props.display && {borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", color: "black", bgcolor:"white",pl:1}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SchoolOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Teachers" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DateRangeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Event" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountBalanceWalletOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Finance" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <RestaurantOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Food" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Person2OutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="User" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <QuestionAnswerOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Chat" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ShowChartOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Latest Activity" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>

        </Box>
    );
}
