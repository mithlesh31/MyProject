import React, { lazy, Suspense } from 'react';
import ActivityLoader from '../component/ActivityLoader';

const loadable = (
  importFunc,
  { fallback = null } = {
    fallback: <ActivityLoader />,
  },
) => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
