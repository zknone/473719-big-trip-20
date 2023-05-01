import View from './view.js';
import {html} from '../utils.js';

class EditorView extends View {
  /**
   * @override
   */
  createHtml() {
    return html`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
        ${this.createTypeFieldHtml()}
        ${this.createDestinationHtml()}
        ${this.createEditingTimeHtml()}
        ${this.createChoosingPriceHtml()}
        ${this.createSaveButtonHtml()}
        ${this.createCancelButtonHtml()}
        </header>
        <section class="event__details">
        </section>
      </form>
    `;
  }

  /**
   * @return {SafeHtml}
   */

  createTypeFieldHtml() {
    return html`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>
          </fieldset>
        </div>
      </div>
    `;
  }

  createDestinationHtml() {
    return html`
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          Flight
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
        <datalist id="destination-list-1">
          <option value="Amsterdam"></option>
        </datalist>
      </div>
    `;
  }

  createEditingTimeHtml() {
    return html`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
      </div>
    `;
  }

  createChoosingPriceHtml() {
    return html`
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
      </div>
    `;
  }

  createSaveButtonHtml() {
    return html`
    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `;
  }

  createCancelButtonHtml() {
    return html`
    <button class="event__reset-btn" type="reset">Cancel</button>
    `;
  }
}

customElements.define('editor-view', EditorView);

export default EditorView;
