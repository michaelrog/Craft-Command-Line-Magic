import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import './pres.pcss';

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'

let deck = new Reveal({
	controls: false,
	plugins: [ Markdown, RevealHighlight ],
	hash: true,
})
deck.initialize();
