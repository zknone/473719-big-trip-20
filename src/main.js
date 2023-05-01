import './views/brief-view.js';
import './views/add-view.js';
import './views/filter-view.js';
import './views/sort-view.js';
/**
 * @type {BriefView}
 * @type {AddView}
 * @type {FilterView}
 * @type {SortView}
 *
 *
 *
 */

const briefView = document.querySelector('brief-view');
const addView = document.querySelector('add-view');
const filterView = document.querySelector('filter-view');
const sortView = document.querySelector('sort-view');
briefView.render();
addView.render();
filterView.render();
sortView.render();
