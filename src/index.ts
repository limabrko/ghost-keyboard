import EnvChecker from './components/EnvChecker';
import GhostKeyboard from './components/GhostKeyboard';

declare const window: any;

(EnvChecker)(typeof window !== 'undefined' ? window : this, function() {
  function createGhostKeyboard(config: Config) {
    return new GhostKeyboard(config);
  }

  return createGhostKeyboard;
});
