import Image from 'next/image';
import { useRouter } from 'next/router';
import MuiDrawer from '@mui/material/Drawer';
import {
  Divider,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import {
  styled,
  Theme,
  CSSObject,
} from '@mui/material/styles';
import {
  ChevronRight,
  Cottage,
  EmojiPeople,
  Leaderboard,
  Menu,
  Message,
  Newspaper,
  School,
  TableChart,
  TipsAndUpdates,
} from '@mui/icons-material';
import { GenerateItems } from '../generateItems';
import {
  DrawerHeader,
  drawerWidth,
  iconColor,
} from '../drawerPc';

type DrawerMobileProps = {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

const mobileDrawerWidth = 140;
const mobileMixinWidth = 165;

export const DrawerMobile = ({
  open,
  handleDrawerOpen,
  handleDrawerClose,
}: DrawerMobileProps) => {
  const router = useRouter();

  const openedMixin = (theme: Theme): CSSObject => ({
    width: mobileMixinWidth,
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
          background: '#B6BDC3',
          height: 'fit-content',
          width: '50px',
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
            width: mobileDrawerWidth,
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
                onClick={() => router.push('/#home')}
              />
              <IconButton onClick={handleDrawerClose}>
                <ChevronRight sx={{ color: iconColor }} />
              </IconButton>
            </div>
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
