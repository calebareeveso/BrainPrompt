import "../../src/styles/App.scss";
import API from "./api";
import relativeTime from "./utils/relativeTime";
import Greeting from "./components/greeting";

export default class App {
  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
  <div class="text-center">
    <greeting-header></greeting-header>
    <p>
        ${API.getTextCotent()}
    </p>
    <code><u>Mayjor Update: ${relativeTime}</u></code>
  </div>
    `;

    App.onMountCustomElements();
  }

  static onMountCustomElements() {
    "customElements" in window &&
      customElements.define("greeting-header", Greeting);
  }
}
