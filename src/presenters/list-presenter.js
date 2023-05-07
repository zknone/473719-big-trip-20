import Presenter from './presenter.js';

/**
 * @extends {Presenter<ListView>, AppModel}
 */
class ListPresenter extends Presenter {
  /**
   * @override
   * @return {ListViewState}
   */
  createViewState() {
    const points = this.model.getPoints();
    const items = points.map(this.createPointViewState, this);
    return {items};
  }

  /**
   *
   * @param {Point} point
   * @return {PointViewState}
   */
  createPointViewState(point) {}
}

export default ListPresenter;
