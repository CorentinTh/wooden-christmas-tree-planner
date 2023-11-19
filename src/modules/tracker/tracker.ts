import Plausible from 'plausible-tracker';
import { config } from '../config/config';

export { setupTracker };

function setupTracker() {
  if (!config.plausible.domain) {
    return;
  }

  const plausible = Plausible({
    domain: config.plausible.domain,
    trackLocalhost: false,
    apiHost: config.plausible.apiHost,
  });

  plausible.enableAutoPageviews();
}
