import "../../src/styles/App.scss";
import API from "./api";
import Nav from "./components/Nav";
import Header from "./components/header";
import Prompt from "./components/prompt";
import PropmtCollection from "./components/propmtCollection";
const PromptItemList = [
  {
    pid: "190180192818900",
    pindex: 0,
    createdAt: `3-1-2000`,
    viewedAt: `1-5-2023`,
    questionTitle: "it worked!!",
    questionImage: "https://media.makeameme.org/created/hehehe-it-worked.jpg",
    answerContent: `<p>It worked!!</p>`,
  },
  {
    pid: "190180192818900",
    pindex: 0,
    createdAt: `3-1-2000`,
    viewedAt: `30-4-2023`,
    questionTitle: "What is this fruit?",
    questionImage:
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    answerContent: `<p>It worked!!</p>`,
  },
];

const PropmtCollectionItemList = [
  {
    cid: "190180192818900",
    cindex: 0,
    createdAt: `3-1-2000`,
    viewedAt: `27-4-2023`,
    name: "Waves Phy",
    noOfPropmt: 200,
    noOfOverDuePropmt: 21,
  },
  {
    cid: "190180192818900",
    cindex: 0,
    createdAt: `3-1-2000`,
    viewedAt: `6-4-2023`,
    name: "Stats Maths",
    noOfPropmt: 200,
    noOfOverDuePropmt: 9,
  },
];

export default class App {
  constructor(root) {
    this.root = root;
    this.root.innerHTML = `
    <nav class="app__nav">
    </nav>
     <div class="app__nav__overlay"></div>
    <section class='play__ground'>
      <button class="app__nav__burger"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="#090909" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      </button>
      <header class="prompt__header"></header>
      <div class="prompt__container"></div>
    </section>
    `;
    this.Nav = new Nav(".app__nav__burger", ".app__nav", ".app__nav__overlay");
    this.Header = new Header(".prompt__header");
    this.Prompt = new Prompt(".prompt__container");
    this.Prompt.updatePromptItemList(PromptItemList);

    this.PropmtCollection = new PropmtCollection(".app__nav");
    this.PropmtCollection.updatePropmtCollectionItemList(
      PropmtCollectionItemList
    );
  }
}
