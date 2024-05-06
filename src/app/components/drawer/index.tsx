'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  styled,
  useTheme,
  Theme,
  CSSObject,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {
  AppBarProps as MuiAppBarProps,
} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { GenerateItems } from './generateItems';
import {
  Cottage,
  EmojiPeople,
  Leaderboard,
  Message,
  Newspaper,
  School,
  TableChart,
  TipsAndUpdates,
} from '@mui/icons-material';
import Image from 'next/image';
import { Text } from '@components/text';

const drawerWidth = 180;
const iconColor = '#00192F';

export const MiniDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(
      ['width', 'margin'],
      {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      },
    ),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(
        ['width', 'margin'],
        {
          easing: theme.transitions.easing.sharp,
          duration:
            theme.transitions.duration.enteringScreen,
        },
      ),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }));

  console.log('open', open);

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <CssBaseline />
      <Drawer
        variant="permanent"
        // onMouseMove={handleDrawerOpen}
        // onMouseLeave={handleDrawerClose}
        open={open}
        PaperProps={{
          sx: {
            background:
              'linear-gradient(to top, #00192F 0%, #B6BDC3 100%)',
          },
        }}
      >
        <DrawerHeader>
          {/* <IconButton onClick={handleDrawerClose}> */}
          <IconButton>
            {open ? (
              <div
                style={{
                  width: drawerWidth - 35,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Image
                  alt="logo"
                  src={'/images/logo.png'}
                  width={50}
                  height={50}
                />
                <ChevronLeftIcon
                  onClick={handleDrawerClose}
                  sx={{ color: iconColor }}
                />
              </div>
            ) : (
              <MenuIcon
                onClick={handleDrawerOpen}
                sx={{ color: iconColor }}
              />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
          >
            <GenerateItems
              icon={<Cottage sx={{ color: iconColor }} />}
              route="home"
              text="Home"
            />
            <GenerateItems
              icon={
                <EmojiPeople sx={{ color: iconColor }} />
              }
              route="about"
              text="About"
            />
            <GenerateItems
              icon={
                <Leaderboard sx={{ color: iconColor }} />
              }
              route="experience"
              text="Experience"
            />
            <GenerateItems
              icon={
                <TableChart sx={{ color: iconColor }} />
              }
              route="projects"
              text="Projects"
            />
            <GenerateItems
              icon={
                <TipsAndUpdates sx={{ color: iconColor }} />
              }
              route="skills"
              text="Skills"
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
          >
            <GenerateItems
              icon={<School sx={{ color: iconColor }} />}
              route="education"
              text="Education"
            />
            <GenerateItems
              icon={<Message sx={{ color: iconColor }} />}
              route="contact"
              text="Contact"
            />
            <GenerateItems
              icon={<Newspaper sx={{ color: iconColor }} />}
              route="blog"
              text="Blog"
            />
          </ListItem>
        </List>
      </Drawer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Image
          alt="main-image"
          id="home"
          src={'/images/background.png'}
          priority
          sizes="100vw"
          width={1100}
          height={600}
          style={{
            width: '100%',
            height: '95vh',
            objectFit: 'cover',
          }}
        />
        {/* <img
          alt="main-image"
          id="home"
          src={'/images/background.jpeg'}
          style={{ width: '95vw', height: '95vh' }}
        /> */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: '#DADEE1',
          }}
        >
          {/* <DrawerHeader /> */}
          {/* CONTENT AREA */}

          <div id="about">
            <div
              style={{
                width: '90vw',
                height: '20vh',
                backgroundColor: 'darkblue',
                borderRadius: 10,
              }}
            >
              <Text
                type="h4"
                sx={{ color: 'white' }}
                textAlign="center"
              >
                About me
              </Text>
            </div>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices
              mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis
              convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio
              aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer
              quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet
              proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue
              eget arcu dictum varius duis at consectetur
              lorem. Velit sed ullamcorper morbi tincidunt.
              Lorem donec massa sapien faucibus et molestie
              ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae
              suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus
              sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed
              odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa
              eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus
              orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi
              quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices
              mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis
              convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio
              aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer
              quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet
              proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue
              eget arcu dictum varius duis at consectetur
              lorem. Velit sed ullamcorper morbi tincidunt.
              Lorem donec massa sapien faucibus et molestie
              ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae
              suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus
              sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed
              odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa
              eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus
              orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi
              quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices
              mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis
              convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio
              aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer
              quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet
              proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue
              eget arcu dictum varius duis at consectetur
              lorem. Velit sed ullamcorper morbi tincidunt.
              Lorem donec massa sapien faucibus et molestie
              ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae
              suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus
              sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed
              odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa
              eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus
              orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi
              quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices
              mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis
              convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio
              aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer
              quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet
              proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue
              eget arcu dictum varius duis at consectetur
              lorem. Velit sed ullamcorper morbi tincidunt.
              Lorem donec massa sapien faucibus et molestie
              ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae
              suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus
              sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed
              odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa
              eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus
              orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi
              quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
          </div>
          <Divider />

          <div id="experience">
            <div
              style={{
                width: '90vw',
                height: '20vh',
                backgroundColor: 'darkorange',
              }}
            ></div>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices
              mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis
              convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio
              aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer
              quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet
              proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue
              eget arcu dictum varius duis at consectetur
              lorem. Velit sed ullamcorper morbi tincidunt.
              Lorem donec massa sapien faucibus et molestie
              ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae
              suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus
              sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed
              odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa
              eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus
              orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi
              quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
          </div>

          <Divider />
          <div id="projects">
            <div
              style={{
                width: '90vw',
                height: '20vh',
                backgroundColor: 'darkgreen',
              }}
            ></div>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices
              mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis
              convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio
              aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer
              quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet
              proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue
              eget arcu dictum varius duis at consectetur
              lorem. Velit sed ullamcorper morbi tincidunt.
              Lorem donec massa sapien faucibus et molestie
              ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae
              suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus
              sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed
              odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa
              eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus
              orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi
              quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices
              mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis
              convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio
              aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer
              quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet
              proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue
              eget arcu dictum varius duis at consectetur
              lorem. Velit sed ullamcorper morbi tincidunt.
              Lorem donec massa sapien faucibus et molestie
              ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae
              suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus
              sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed
              odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa
              eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus
              orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi
              quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent
              elementum facilisis leo vel. Risus at ultrices
              mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis
              convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio
              aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer
              quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet
              proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue
              eget arcu dictum varius duis at consectetur
              lorem. Velit sed ullamcorper morbi tincidunt.
              Lorem donec massa sapien faucibus et molestie
              ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae
              suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus
              sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed
              odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa
              eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus
              orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi
              quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
          </div>
        </Box>
      </div>
    </Box>
  );
};
