import 'babel-polyfill';
import React from 'react';
import Client from '@r/platform/client';
import { isEmpty } from 'lodash/lang';

import { isLocalStorageAvailable } from '@r/redux-state-archiver';

import routes from './app/router/routes';
import App from './app/App';
import allReducers from './app/reducers/importAll';
import Session from './app/models/Session';

Client({
  routes,
  reducers: allReducers,
  modifyData: data => {
    if (!isEmpty(data.session)) {
      data.session = new Session(data.session);
      window.session = data.session;
    }

    data.collapsedComments = {};

    if (isLocalStorageAvailable()) {
      try {
        data.collapsedComments = JSON.parse(window.localStorage.collapsedComments);
      } catch (e) { console.log(e); }
    }

    console.log(data);
    return data;
  },
  appComponent: <App/>,
  debug: true,
})();
