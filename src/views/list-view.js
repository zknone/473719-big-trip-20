import View from "./view.js";
import CardView from "./card-view.js";

class ListView extends View {
  constructor() {
    super();

    this.classList.add("trip-list");
    this.setAttribute("role", "list");
  }

  /**
   * @override
   */
  render() {
    const views = new Array(4).fill().map(this.createItemView);

    this.replaceChildren(...views);
  }

  createItemView() {
    const view = new CardView();

    return view;
  }
}

customElements.define("list-view", ListView);

export default ListView;
