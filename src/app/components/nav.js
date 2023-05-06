export default class Nav {
  constructor(navBurgerSelector, navSelector, overlySelector) {
    this.root = document.querySelector(navSelector);
    this.Burger = document.querySelector(navBurgerSelector);
    this.Overlay = document.querySelector(overlySelector);
    this.Burger.addEventListener("click", this.onToggle.bind(this));
    this.Overlay.addEventListener("click", this.onToggle.bind(this));

    this.root.innerHTML = `<h1 class="logo"> Brain Prompt </h1>
  
    <div class="prompt__search">
     <span class="prompt__search__icon">
      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="#090909" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
     </span>
       <input type="text" placeholder="search for prompts..." class="prompt__search__input"/>
   </div>
    <ul class="menu">
      <li class="menu__item"> <a class="menu__link" href="#"><span class="menu__link__icon">[10]</span><span>Physics prompts </span></a>
      </li>  
    </ul>
   <div class="add__new__prompt">
     <span class="add__new__prompt__icon">
       <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="#757575" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
     </span>
      <input type="text" placeholder="Add new prompt" class="add__new__prompt__input"/>
   </div>`;
  }
  onToggle() {
    this.root.classList.toggle("open__nav");
    this.Overlay.classList.toggle("show__nav__overlay");
  }
}
