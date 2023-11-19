/* @refresh reload */
import { render } from 'solid-js/web';

import '@unocss/reset/sanitize/assets.css';
import '@unocss/reset/sanitize/forms.css';
import '@unocss/reset/sanitize/sanitize.css';
import '@unocss/reset/sanitize/typography.css';

import 'virtual:uno.css';

import App from './App';

const root = document.getElementById('root');

render(() => <App />, root!);
