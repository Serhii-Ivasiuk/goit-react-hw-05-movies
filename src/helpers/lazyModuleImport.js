import { lazy } from 'react';

export const lazyDefaultModuleImport = (moduleName, folderName = 'pages') => {
  return lazy(() => import(`../${folderName}/${moduleName}/${moduleName}`));
};

export const lazyNamedModuleImport = (moduleName, folderName = 'pages') => {
  return lazy(() =>
    import(`../${folderName}/${moduleName}/${moduleName}`).then(module => ({
      ...module,
      default: module[moduleName],
    }))
  );
};
