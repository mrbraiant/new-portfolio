// import styles from "./page.module.css";

import { HomeTemplate } from '@components/templates/home';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<h1>loading</h1>}>
        <HomeTemplate />
      </Suspense>
    </main>
  );
}
