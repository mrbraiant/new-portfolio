import { MiniDrawer } from '@components/drawer';
import { ReactNode } from 'react';

// type LayoutProps = {};

type LayoutProps = {
  children: ReactNode;
  showMainBackgroundImage?: boolean;
};

export const Layout = ({
  children,
  showMainBackgroundImage,
}: LayoutProps) => {
  return (
    <>
      {/* TODO: CREATE ONE COMPONENT JUST TO USE AS LAYOUT TO PASS PROPS AS CHILDREN */}
      <MiniDrawer
        showMainBackgroundImage={showMainBackgroundImage}
      >
        {children}
      </MiniDrawer>
    </>
  );
};
