class LoaderSpinner extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="container">
      </div>
    `;
  }
}
customElements.define("loader-spinner", LoaderSpinner);
