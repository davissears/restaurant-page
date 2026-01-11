export class state extends EventTarget {
  // private field variable prevents reursion
  #view;
  constructor(initPageView) {
    super();
    this.#view = initPageView;
  }
  // getter: public access to state
  get view() {
    return this.#view;
  }

  // updates state and dispatches event
  updateView(newView) {
    // Pseudo: dont update id state has not changed
    if (this.#view === newView) return;

    this.#view = newView;

    // create event
    const updateEvent = new CustomEvent("statechange", {
      detail: { newView: this.#view },
    });
    // dispatch event
    this.dispatchEvent(updateEvent);
  }
}

// use:
//      1.decalre state
// const appState = new State('home');
//      2.listen for state change
// appState.addEventListener('statechange', (e) => {
// console.log(`Page changed to: ${e.detail.newView}`);
//      3.insert DOM update logic
// });
//      4.trigger update
// appState.updateView('dashboard');
