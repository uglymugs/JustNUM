import dpdRun from '../lib/dpd_run';

// NOTE:  dpd.users.me doesn't work with dpdRun function
export const authenticateCookie = () =>
  new Promise((resolve, reject) =>
    dpd.users.me((payload, err) =>
      (payload
        ? resolve(payload)
        : reject(err || new Error('No payload')))));

export const login = (credentials) =>
  dpdRun(dpd.users.login, credentials);

export const logout = () =>
  dpdRun(dpd.users.logout, undefined);
