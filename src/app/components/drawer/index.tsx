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
import {
  Button,
  Paper,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { useRouter } from 'next/router';
import { DrawerMobile } from './drawerMobile';
import { DrawerPc } from './drawerPc';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

type inputType = {
  question: string;
};

const gptKey =
  'sk-proj-8fmazzVi8szno79M33QlT3BlbkFJgt5Xin5WSZoP1MGpvTai';

export const MiniDrawer = () => {
  const [open, setOpen] = useState(false);
  const [gptTextResponse, setGptTextResponse] =
    useState<string>();

  const router = useRouter();
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  const client = axios.create({
    headers: {
      Authorization: 'Bearer ' + gptKey,
    },
  });

  const schema = Yup.object().shape({
    question: Yup.string().required(
      'Please write your question',
    ),
  });

  const initialValues = {
    question: '',
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: inputType) => {
    console.log('values', values);

    const params = {
      prompt: values.question,
      model: 'gpt-3.5-turbo-instruct',
      max_tokens: 10,
      temperature: 0,
    };

    await client
      .post('https://api.openai.com/v1/completions', params)
      .then((result) => {
        console.log('res', result.data.choices[0].text);
        setGptTextResponse(result.data.choices[0].text);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const openedMixin = (theme: Theme): CSSObject => ({
  //   width: isMobileVersion ? drawerWidth - 15 : drawerWidth,
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   overflowX: 'hidden',
  // });

  // const closedMixin = (theme: Theme): CSSObject => ({
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   overflowX: 'hidden',
  //   width: `calc(${theme.spacing(7)} + 1px)`,
  //   // [theme.breakpoints.up('sm')]: {
  //   //   width: `calc(${theme.spacing(7)} + 1px)`,
  //   // },
  // });

  // const Drawer = styled(MuiDrawer, {
  //   shouldForwardProp: (prop) => prop !== 'open',
  // })(({ theme, open }) => ({
  //   width: drawerWidth,
  //   flexShrink: 0,
  //   whiteSpace: 'nowrap',
  //   boxSizing: 'border-box',
  //   ...(open && {
  //     ...openedMixin(theme),
  //     '& .MuiDrawer-paper': openedMixin(theme),
  //   }),
  //   ...(!open && {
  //     ...closedMixin(theme),
  //     '& .MuiDrawer-paper': closedMixin(theme),
  //   }),
  // }));

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
      }}
    >
      <CssBaseline />
      {isMobileVersion ? (
        <DrawerMobile
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      ) : (
        // Not Mobile version
        <DrawerPc
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
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
                ? '/images/background-mobile-nf.gif'
                : '/images/background.gif'
            }
            priority
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={schema}
            >
              {({ errors, handleChange }) => (
                <Form>
                  <div
                    style={{ display: 'flex', gap: '1rem' }}
                  >
                    <TextField
                      id="question"
                      name="question"
                      label="Write your question to my A.I."
                      type="text"
                      variant="outlined"
                      onChange={handleChange}
                      defaultValue={initialValues.question}
                      error={Boolean(errors.question)}
                      size="small"
                      multiline
                      rows={2}
                      maxRows={3}
                      fullWidth
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      size="large"
                    >
                      Ask
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
            <Text type="h6">
              <strong>Answer: </strong>
            </Text>
            <Text type="body1">{gptTextResponse}</Text>
          </div>

          <Divider />
          <div id="blog">
            <SectionTitle
              title="Blog"
              backgroundColor="#485A6A"
            />
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
            <Typography
              variant={
                /* isMobileVersion ? 'body2' :  */ 'body1'
              }
            >
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
