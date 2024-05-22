'use client';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode, useState } from 'react';
import { Paper, useMediaQuery } from '@mui/material';
import { DrawerMobile } from './drawerMobile';
import { DrawerPc } from './drawerPc';
import { MainImage } from '@components/layout/images/mainImage';
import { PalletColor } from '@utils/palletColor';
import { Footer } from '@components/layout/footer';

type MiniDrawerProps = {
  children: ReactNode;
  showMainBackgroundImage?: boolean;
};

export const MiniDrawer = ({
  children,
  showMainBackgroundImage = true,
}: MiniDrawerProps) => {
  const [open, setOpen] = useState(false);

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
          {children}
        </Box>
        <Footer />
      </div>
    </Box>
  );
};
