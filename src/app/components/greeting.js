// static asset
import calebAvatar from "/static/images/caleb.svg";

export default class Greeting extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
  <header>
    <a class="logo" href="http://calebareeveso.com/" target="_blank">
      <img src="${calebAvatar}" alt="Caleb Avatar" />
    </a>
    <h1 class="text-center">Hello!!</h1>
  </header>
    `;
  }

  connectedCallback() {
    console.log("connected!", this);
  }

  disconnectedCallback() {
    console.log("disconnected", this);
  }
}
