/**
 * @abstract
 * @template s
 */

class View extends HTMLElement {
  constructor() {
    super();

    /**
     * @type {s}
     */
    this.state = null;
  }

  render() {
    this.innerHTML = String(this.createHtml());
  }

  /**
   * @return {SafeHtml}
   */
  createHtml() {
    return null;
  }
}

export default View;
