import { domain, clientId, audience, apiUri } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    audience,
    redirectUri: window.location.origin,
  },
  httpInterceptor: {
    allowedList: [{ "uri": apiUri[0].uri },
    { "uri": apiUri[1].uri }]
  }
};
