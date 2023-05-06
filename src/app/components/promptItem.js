export default class promptItem {
  constructor(root) {
    this.root = root;
    this.content = root.parentNode.getElementsByTagName("div")[0];
    this.root.addEventListener("click", this.onToggle.bind(this));
  }

  onToggle() {
    this.content.classList.toggle("show__prompt__content");
    this.root
      .getElementsByTagName("svg")[0]
      .classList.toggle("rotate__prompt__item__btn");
    // console.log(this.content);
  }
}
