import React from 'react';
import ReactDOM from 'react-dom';
import { AppMountParameters, CoreStart } from 'kibana/public';
import { AppPluginStartDependencies } from './types';
import { AnalyzeApiUiApp } from './components/app';

export const renderApp = (
  { notifications, http }: CoreStart,
  { navigation }: AppPluginStartDependencies,
  { appBasePath, element }: AppMountParameters
) => {
  ReactDOM.render(
    <AnalyzeApiUiApp
      basename={appBasePath}
      notifications={notifications}
      http={http}
      navigation={navigation}
    />,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
};
