import formattedDate from "../utils/fDate";
import promptItem from "./promptItem";
export default class Prompt {
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
    this.root.innerHTML = `  <div class="prompt">
    <div class="prompt__item"><button class="prompt__item__btn"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="#090909" fill-rule="evenodd" clip-rule="evenodd"></path></svg><span>What is physics?</span>
</button>
<img class='question__image' alt="" src="https://images.unsplash.com/photo-1544083098-76551842b5fc">
      <div class="answer__content">
        <p>Physics can be defined as...</p>
      </div>
    </div>
    </div>
  <div class="prompt__input">
      <button class="prompt__item__btn"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="#090909" fill-rule="evenodd" clip-rule="evenodd"></path></svg><input type="text" placeholder="what's the propmt?" class="add__new__prompt__item__input"/></span>
</button>
<!-- <img class='question__image' alt="" src="https://images.unsplash.com/photo-1544083098-76551842b5fc"> -->
      <div class="answer__content">
        <p>Physics can be defined as...</p>
      </div>
    </div>`;
  }

  _createPromptItemHTML(
    pid,
    pindex,
    questionTitle,
    questionImage,
    answerContent,
    createdAt,
    viewedAt
  ) {
    const getDateDiff = formattedDate.datediff(
      formattedDate.parseDate(viewedAt),
      formattedDate.parseDate(formattedDate.Today())
    );
    const isDue = getDateDiff >= 7;
    return `
         <div class="prompt__item">
         <button class="prompt__item__btn ${isDue ? "red__text" : ""}">
         <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          <span>${questionTitle}</span>
          
           <span>
      ${
        isDue
          ? `<span class="clock__icon "><svg width="13" height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z" fill="#757575" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span> 
      <span class="gray__text">${getDateDiff}dy ago</span>`
          : ""
      }
    </span>
         </button>
          <img class='question__image' alt="" src=${questionImage}>
          <div class="answer__content">
          ${answerContent}
         </div>
      </div>
        `;
  }

  updatePromptItemList(prompts) {
    const promptItemListContainer = this.root.querySelector(".prompt");

    // Empty list
    // promptItemListContainer.innerHTML = "";

    for (const prompt of prompts) {
      const html = this._createPromptItemHTML(
        prompt.pid,
        prompt.pindex,
        prompt.questionTitle,
        prompt.questionImage,
        prompt.answerContent,
        prompt.createdAt,
        prompt.viewedAt
      );
      promptItemListContainer.insertAdjacentHTML("beforeend", html);
    }
    this._reactivePromptItem();
  }

  _reactivePromptItem() {
    const promptItemBtn = document.querySelectorAll(".prompt__item__btn");
    const promptItemContentElements = Array.from(promptItemBtn).map((el) => {
      console.log(el);
      const els = new promptItem(el);
    });
  }
}
