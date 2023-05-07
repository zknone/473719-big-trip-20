import View from './view.js';
import {html} from '../utils.js';

/**
 * @extends {View<PointViewState>}
 */

class CardView extends View {
  /**
   * @override
   */
  createHtml() {
    return html`
      <div class="event">
        ${this.createStartDateHtml()}
        ${this.createIconHtml()}
        ${this.createDestinationHtml()}
        ${this.createScheduleHtml()}
        ${this.createPriceHtml()}
        ${this.createOffersHtml()}
        ${this.createStarButtonHtml()}
        ${this.createRollupButtonHtml()}
      </div>
    `;
  }

  /**
   * @return {SafeHtml}
   */

  createStartDateHtml() {
    const point = this.state;
    return html`
      <time class="event__date" datetime="${point.startDateTime}">${point.startDate}</time>
    `;
  }

  createIconHtml() {
    const point = this.state;
    const type = point.types.find((it) => it.isSelected);
    return html`
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.value}.png" alt="Event type icon">
      </div>
    `;
  }

  createDestinationHtml() {
    const point = this.state;
    const destination = point.destinations.find((it) => it.isSelected);
    const type = point.types.find((it) => it.isSelected);
    return html`
      <h3 class="event__title">${type.value} ${destination.name}</h3>
    `;
  }

  createScheduleHtml() {
    return html`
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>
          —
          <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>
        </p>
        <p class="event__duration">01H 10M</p>
      </div>
    `;
  }

  createPriceHtml() {
    return html`
      <p class="event__price">
        €&nbsp;<span class="event__price-value">160</span>
      </p>
    `;
  }

  createOffersHtml() {
    const point = this.state;
    const type = point.types.find((it) => it.isSelected);
    const offers = point.offers.filter((it) => it.isSelected);
    if (!offers.length) {
      return '';
    }
    return html`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offers.map((it) => html`
          <li class="event__offer">
            <span class="event__offer-title">${it.title}</span>
            +€&nbsp;
            <span class="event__offer-price">${it.price}</span>
          </li>
        `)}
      </ul>
    `;
  }

  createStarButtonHtml() {
    return html`
      <button class="event__favorite-btn" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `;
  }

  createRollupButtonHtml() {
    return html`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `;
  }
}

customElements.define('card-view', CardView);

export default CardView;

