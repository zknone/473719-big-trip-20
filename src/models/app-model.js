import BasicModel from "./basic-model";
import destinations from "../data/destinations.json";
import offerGroups from "../data/offers.json";
import points from "../data/points.json";

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

  /**
   * @return {Array<Point>}
   */

  getPoints() {
    return this.#points.map(AppModel.adaptPointForClient);
  }

  /**
   * @return {Array<Destination>}
   */

  getDestinations() {
    return structuredClone(this.#destinations);
  }

  /**
   * @return {Array<Offer>}
   */

  getOfferGroups() {
    return structuredClone(this.#offerGroups);
  }

  /**
   *
   * @param {PointInSnakeCase} point
   * @return {Point}
   */
  static adaptPointForClient(point) {
    return {
      id: point.id,
      type: point.type,
      destinationId: point.destination,
      startDateTime: point.date_from,
      endDateTime: point.date_to,
      basePrice: point.base_price,
      offerIds: point.offers,
      isFavorite: point.is_favorite,
    };
  }
}

export default AppModel;
