import './overlay-view.css';

import View from './view.js';
import {html} from '../utils.js';

class OverlayView extends View {
  constructor() {
    super();

    this.classList.add('overlay');
  }

  /**
   * @override
   */
  createHtml() {
    return html`

    `;
  }
}

customElements.define('overlay-view', OverlayView);

export default OverlayView;
