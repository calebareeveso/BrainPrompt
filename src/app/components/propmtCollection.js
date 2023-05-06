import formattedDate from "../utils/fDate";
export default class PropmtCollection {
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
  }
  _createPropmtCollectionItemHTML(
    cid,
    cindex,
    name,
    noOfPropmt,
    noOfOverDuePropmt,
    createdAt,
    viewedAt
  ) {
    return `
           <li class="menu__item"> <a class="menu__link" href="#${name}"><span class="menu__link__icon ${
      formattedDate.datediff(
        formattedDate.parseDate(viewedAt),
        formattedDate.parseDate(formattedDate.Today())
      ) >= 7
        ? "red__text"
        : ""
    }">[${noOfOverDuePropmt}]</span><span>${name}</span></a>
        </li>  
          `;
  }

  updatePropmtCollectionItemList(collections) {
    const promptItemListContainer = this.root.querySelector(".menu");

    // Empty list
    // promptItemListContainer.innerHTML = "";

    for (const collection of collections) {
      const html = this._createPropmtCollectionItemHTML(
        collection.cid,
        collection.cindex,
        collection.name,
        collection.noOfPropmt,
        collection.noOfOverDuePropmt,
        collection.createdAt,
        collection.viewedAt
      );
      promptItemListContainer.insertAdjacentHTML("beforeend", html);
    }
  }
}
