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
import { SectionTitle } from '@components/sectionTitle';
import { Paper, useMediaQuery } from '@mui/material';

const drawerWidth = 180;
const iconColor = '#00192F';

export const MiniDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const openedMixin = (theme: Theme): CSSObject => ({
    width: isMobileVersion ? drawerWidth - 30 : drawerWidth,
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
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(${theme.spacing(7)} + 1px)`,
    // },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
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
        width: '100%',
      }}
    >
      <CssBaseline />
      {isMobileVersion ? (
        <Drawer
          variant="permanent"
          // onMouseMove={handleDrawerOpen}
          // onMouseLeave={handleDrawerClose}
          open={open}
          PaperProps={{
            sx: {
              background: '#B6BDC3',
              height: '410px',
              width: '50px',
              // height: '300px',
              // opacity: 0.8,
              // position: 'fixed',
              top: '50%',
              left: 0,
              transform: 'translate(0%, -50%)',
              borderRadius: '0 15px 15px 0',

              // zIndex: 2,
            },
          }}
          style={{
            zIndex: 2,
            backgroundColor: '#DADEE1',
          }}
        >
          <DrawerHeader>
            <div
              style={{
                width: drawerWidth - 55,
                // display: 'flex',
                // justifyContent: 'space-between',
                // alignItems: 'center',
              }}
            >
              {open ? (
                <div
                  style={{
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
                  <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon
                      sx={{ color: iconColor }}
                    />
                  </IconButton>
                </div>
              ) : (
                <IconButton>
                  <MenuIcon
                    onClick={handleDrawerOpen}
                    sx={{ color: iconColor }}
                  />
                </IconButton>
              )}
            </div>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              disablePadding
              sx={{
                display: 'block',
              }}
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
                  <TipsAndUpdates
                    sx={{ color: iconColor }}
                  />
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
                botomIcons
              />
              <GenerateItems
                icon={<Message sx={{ color: iconColor }} />}
                route="contact"
                text="Contact"
                botomIcons
              />
              <GenerateItems
                icon={
                  <Newspaper sx={{ color: iconColor }} />
                }
                route="blog"
                text="Blog"
                botomIcons
              />
            </ListItem>
          </List>
        </Drawer>
      ) : (
        // Not Mobile version
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
            <div
              style={{
                width: drawerWidth - 25,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {open ? (
                <>
                  <Image
                    alt="logo"
                    src={'/images/logo.png'}
                    width={50}
                    height={50}
                  />
                  <IconButton>
                    <ChevronLeftIcon
                      onClick={handleDrawerClose}
                      sx={{ color: iconColor }}
                    />
                  </IconButton>
                </>
              ) : (
                <IconButton>
                  <MenuIcon
                    onClick={handleDrawerOpen}
                    sx={{ color: iconColor }}
                  />
                </IconButton>
              )}
            </div>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              disablePadding
              sx={{
                display: 'block',
              }}
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
                  <TipsAndUpdates
                    sx={{ color: iconColor }}
                  />
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
                botomIcons
              />
              <GenerateItems
                icon={<Message sx={{ color: iconColor }} />}
                route="contact"
                text="Contact"
                botomIcons
              />
              <GenerateItems
                icon={
                  <Newspaper sx={{ color: iconColor }} />
                }
                route="blog"
                text="Blog"
                botomIcons
              />
            </ListItem>
          </List>
        </Drawer>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Paper
          elevation={8}
          variant="elevation"
          style={{
            width: '100%',
            height: '95vh',
            objectFit: 'cover',
            zIndex: 1,
          }}
        >
          <Image
            alt="main-image"
            id="home"
            src={
              isMobileVersion
                ? '/images/background-mobile.gif'
                : '/images/background.gif'
            }
            // priority
            unoptimized
            // sizes="100vw"
            width={1100}
            height={600}
            style={{
              width: '100%',
              height: '95vh',
              objectFit: 'cover',
            }}
          />
        </Paper>

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
            <SectionTitle title="About" />
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
            <SectionTitle
              title="Experience"
              backgroundColor="#24394C"
            />
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
            <SectionTitle
              title="Projects"
              backgroundColor="#485A6A"
            />
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
          <div id="skills">
            <SectionTitle
              title="Skills"
              backgroundColor="#6D7B88"
            />
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
          <div id="education">
            <SectionTitle
              title="Education"
              backgroundColor="#919CA5"
            />
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
          <div id="contact">
            <SectionTitle
              title="Contact"
              backgroundColor="#6D7B88"
            />
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
          <div id="blog">
            <SectionTitle
              title="Blog"
              backgroundColor="#485A6A"
            />
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
