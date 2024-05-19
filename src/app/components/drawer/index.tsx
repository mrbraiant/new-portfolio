'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';

import { ReactNode, useState } from 'react';

import { Paper, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { DrawerMobile } from './drawerMobile';
import { DrawerPc } from './drawerPc';

import { MainImage } from '@components/layout/images/mainImage';
import { PalletColor } from '@utils/palletColor';

type MiniDrawerProps = {
  children: ReactNode;
  showMainBackgroundImage?: boolean;
};

export const MiniDrawer = ({
  children,
  showMainBackgroundImage = true,
}: MiniDrawerProps) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
        // PC VERSION
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
          width: '100%',
        }}
      >
        {showMainBackgroundImage ? (
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
            <MainImage />
          </Paper>
        ) : null}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: PalletColor.auraWhite,
          }}
        >
          {/* <DrawerHeader /> */}
          {/* CONTENT AREA */}

          {children}
        </Box>
      </div>
    </Box>
  );
};
