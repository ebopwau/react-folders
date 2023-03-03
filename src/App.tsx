import React, { useState } from 'react';
import styles from './App.module.scss';

const Component = React.lazy(() => import(/* webpackChunkName: "LazyComponent" */ 'components/LazyComponent')
  .then(({ LazyComponent }) => ({ default: LazyComponent })));

export const App = () => {
  const [isLazy, toggleLazy] = useState(false);

  return (
    <React.Suspense fallback={<p>Loading</p>}>
      <div className={styles.app}>
        <h1>Hello world React!</h1>
        <button type="button" onClick={() => toggleLazy(!isLazy)}>Lazy</button>
        {
          isLazy ? <Component /> : null
        }
      </div>
    </React.Suspense>
  );
};
