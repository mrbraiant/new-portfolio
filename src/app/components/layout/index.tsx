import { MiniDrawer } from '@components/drawer';
import { ReactNode } from 'react';

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
      <MiniDrawer
        showMainBackgroundImage={showMainBackgroundImage}
      >
        {children}
      </MiniDrawer>
    </>
  );
};
