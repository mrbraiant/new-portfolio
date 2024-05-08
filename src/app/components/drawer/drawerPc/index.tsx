import {
  ChevronLeft,
  Menu,
  Cottage,
  EmojiPeople,
  Leaderboard,
  Message,
  Newspaper,
  School,
  TableChart,
  TipsAndUpdates,
} from '@mui/icons-material';
import {
  Divider,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import {
  styled,
  Theme,
  CSSObject,
} from '@mui/material/styles';
import Image from 'next/image';
import { GenerateItems } from '../generateItems';
import { useRouter } from 'next/router';

type DrawerPcProps = {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

export const drawerWidth = 180;
export const iconColor = '#00192F';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const DrawerPc = ({
  open,
  handleDrawerOpen,
  handleDrawerClose,
}: DrawerPcProps) => {
  const router = useRouter();

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
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(${theme.spacing(7)} + 1px)`,
    // },
  });

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

  return (
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
                onClick={() => router.push('/#home')}
                style={{ cursor: 'pointer' }}
              />
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeft sx={{ color: iconColor }} />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={handleDrawerOpen}>
              <Menu sx={{ color: iconColor }} />
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
            icon={<EmojiPeople sx={{ color: iconColor }} />}
            route="about"
            text="About"
          />
          <GenerateItems
            icon={<Leaderboard sx={{ color: iconColor }} />}
            route="experience"
            text="Experience"
          />
          <GenerateItems
            icon={<TableChart sx={{ color: iconColor }} />}
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
        <ListItem disablePadding sx={{ display: 'block' }}>
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
            icon={<Newspaper sx={{ color: iconColor }} />}
            route="blog"
            text="Blog"
            botomIcons
          />
        </ListItem>
      </List>
    </Drawer>
  );
};
