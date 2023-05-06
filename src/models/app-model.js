import BasicModel from './basic-model';
import destinations from '../data/destinations.json';
import offerGroups from '../data/offers.json';
import points from  '../data/points.json';


class AppModel extends BasicModel {
  #points;
  #destinations;
  #offerGroups;

  constructor() {
    super();

    this.#points = points;
    this.#offerGroups = offerGroups;
    this.#destinations = destinations;
  }
}

export default AppModel;
