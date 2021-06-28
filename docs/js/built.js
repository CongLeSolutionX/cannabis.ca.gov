class e extends window.HTMLElement{constructor(){if(super(),document.querySelector("api-viewer")){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","./src/css/index.css"),document.querySelector("api-viewer").shadowRoot.appendChild(e)}}connectedCallback(){if(this.classList.add("prog-enhanced"),this.expandTarget=this.querySelector(".accordion-card-container"),this.expandButton=this.querySelector(".accordion-card-header"),this.expandButton.addEventListener("click",this.listen.bind(this)),this.activateButton=this.querySelector(".accordion-card-header"),this.eventType=this.dataset.eventType?this.dataset.eventType:"click","true"===this.activateButton.getAttribute("aria-expanded")){this.triggerAccordionClick();let t=this.querySelectorAll(".accordion-card-container a"),n=this.querySelectorAll(".accordion-card-container button");for(var e=0;e<t.length;e++)t[e].removeAttribute("tabindex");for(e=0;e<n.length;e++)n[e].removeAttribute("tabindex")}else{let t=this.querySelectorAll(".accordion-card-container a"),n=this.querySelectorAll(".accordion-card-container button");for(e=0;e<t.length;e++)t[e].setAttribute("tabindex","-1");for(e=0;e<n.length;e++)n[e].setAttribute("tabindex","-1")}}listen(){this.cardBodyHeight||(this.cardBodyHeight=this.querySelector(".card-body").clientHeight+24),this.expandTarget.clientHeight>0?this.closeAccordion():this.expandAccordion()}triggerAccordionClick(){const e=new MouseEvent(this.eventType,{view:window,bubbles:!0,cancelable:!0});this.expandButton.dispatchEvent(e)}closeAccordion(){this.expandTarget.style.height="0px",this.expandTarget.setAttribute("aria-hidden","true"),this.querySelector(".accordion-card-header").classList.remove("accordion-alpha-open"),this.activateButton.setAttribute("aria-expanded","false");let e=this.querySelectorAll(".accordion-card-container a"),t=this.querySelectorAll(".accordion-card-container button");for(var n=0;n<e.length;n++)e[n].setAttribute("tabindex","-1");for(n=0;n<t.length;n++)t[n].setAttribute("tabindex","-1")}expandAccordion(){this.expandTarget.style.height=this.cardBodyHeight+"px",this.expandTarget.setAttribute("aria-hidden","false"),this.querySelector(".accordion-card-header").classList.add("accordion-alpha-open"),this.querySelector(".accordion-card-container").classList.remove("collapsed"),this.activateButton.setAttribute("aria-expanded","true");let e=this.querySelectorAll(".accordion-card-container a"),t=this.querySelectorAll(".accordion-card-container button");for(var n=0;n<e.length;n++)e[n].removeAttribute("tabindex");for(n=0;n<t.length;n++)t[n].removeAttribute("tabindex")}}window.customElements.define("cagov-accordion",e);const t=document.createElement("style");t.textContent="/* accordion component specific classes */\ncagov-accordion .cagov-accordion-card {\n  border-radius: .3rem !important;\n  margin-bottom: 0;\n  min-height: 3rem;\n  margin-top: .5rem;\n  border: solid 1px #ededef !important;\n}\n\ncagov-accordion .accordion-card-container {\n  display: block;\n  overflow: hidden;\n}\n\ncagov-accordion button.accordion-card-header {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 0 0 0 1rem;\n  background-clip: border-box;\n  background-color: #EDEDEF;\n  border: none;\n  position: relative;\n  width: 100%;\n  line-height: 3rem;\n}\ncagov-accordion .accordion-title {\n  text-align: left;\n  margin-bottom: 0;\n  color: var(--primary-color, #064E66);\n  margin-right: auto;\n  width: 90%;\n  padding: 0 0.5rem 0 0 !important;\n  font-size: 1.125rem;\n  font-weight: bold;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container {\n  height: 0px;\n  transition: height 0.3s ease;\n}\ncagov-accordion.prog-enhanced .accordion-card-container .card-body {\n  padding-left: 1rem;\n}\n\ncagov-accordion .collapsed {\n  display: block;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.accordion-title h4,\n.accordion-title h3,\n.accordion-title h2 {\n  padding: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  font-size: 1.2rem !important;\n  font-weight: 700;\n  color: var(--primary-color, #064E66);\n  text-align: left !important;\n}\n\nbutton.accordion-card-header:hover {\n  background-color: var(--hover-color, #F9F9FA);\n}\nbutton.accordion-card-header:hover .accordion-title {\n  text-decoration: underline;\n}\nbutton.accordion-card-header:focus {\n  outline-offset: -2px;\n}\n\n.accordion-icon svg line {\n  stroke-width: 4px;  \n}\n\n.prog-enhanced .accordion-alpha .plus-minus {\n  width: 2.125rem;\n  height: 2.125rem;\n  border: none;\n  overflow: hidden;\n  margin-left: 1rem;\n  color: var(--primary-color, #064E66);\n  align-self: flex-start;\n}\n.prog-enhanced .accordion-alpha .plus-minus svg {\n  fill: var(--primary-color, #064E66);\n  width: 25px;\n  height: 25px;\n}\n\n.prog-enhanced .accordion-alpha-open cagov-plus .accordion-icon {\n  display: none !important;\n}\n.prog-enhanced .accordion-alpha-open cagov-minus .accordion-icon {\n  display: block !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .accordion-alpha-open + .accordion-card-container {\n    height: 100% !important;\n  }\n}\n\n/*# sourceMappingURL=index.css.map */\n",document.querySelector("head").appendChild(t);class n extends window.HTMLElement{constructor(){if(super(),document.querySelector("api-viewer")){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","./src/css/index.css"),document.querySelector("api-viewer").shadowRoot.appendChild(e)}}connectedCallback(){let e=this.dataset.question?this.dataset.question:"Did you find what you were looking for?",t=this.dataset.yes?this.dataset.yes:"Yes",n=this.dataset.no?this.dataset.no:"No",a=this.dataset.commentPrompt?this.dataset.commentPrompt:"What was the problem?";this.positiveCommentPrompt=this.dataset.positiveCommentPrompt?this.dataset.positiveCommentPrompt:"Great! What were you looking for today?";let i=this.dataset.thanksFeedback?this.dataset.thanksFeedback:"Thank you for your feedback!",o=this.dataset.thanksComments?this.dataset.thanksComments:"Thank you for your comments!",r=this.dataset.submit?this.dataset.submit:"Submit";!this.dataset.characterLimit||this.dataset.characterLimit,!this.dataset.anythingToAdd||this.dataset.anythingToAdd,!this.dataset.anyOtherFeedback||this.dataset.anyOtherFeedback,this.endpointUrl=this.dataset.endpointUrl;let c=function(e,t,n,a,i,o,r){return`\n  <div class="feedback-form cagov-stack">\n    <div class="js-feedback-form feedback-form-question">\n      <label class="feedback-form-label" id="feedback-rating">${e}</label>\n      <button class="feedback-form-button js-feedback-yes feedback-yes" id="feedback-yes" aria-labelledby="feedback-rating">${t}</button>\n      <button class="feedback-form-button js-feedback-no" id="feedback-no" aria-labelledby="feedback-rating">${n}</button>\n    </div>\n          \n    <div class="feedback-form-thanks js-feedback-thanks" role="alert">${i}</div>\n          \n    <div class="feedback-form-add">\n      <label class="feedback-form-label js-feedback-field-label" for="add-feedback">${a}</label>\n      <div class="feedback-form-add-grid">\n        <textarea name="add-feedback" class="js-add-feedback feedback-form-textarea" id="add-feedback" rows="1"></textarea>\n        <button class="feedback-form-button js-feedback-submit" type="submit" id="feedback-submit">${r}</button>\n      </div>\n    </div>\n\n    <div class="feedback-form-thanks feedback-thanks-add" role="alert">${o}</div>\n  </div>`}(e,t,n,a,i,o,r);this.innerHTML=c,this.applyListeners()}applyListeners(){this.wasHelpful="",this.querySelector(".js-add-feedback").addEventListener("focus",(e=>{this.querySelector(".js-feedback-submit").style.display="block"}));let e=this.querySelector(".js-add-feedback");e.addEventListener("keyup",(function(t){e.value.length>15?e.setAttribute("rows","3"):e.setAttribute("rows","1")})),e.addEventListener("blur",(t=>{0!==e.value.length&&(this.querySelector(".js-feedback-submit").style.display="block")})),this.querySelector(".js-feedback-yes").addEventListener("click",(e=>{this.querySelector(".js-feedback-field-label").innerHTML=this.positiveCommentPrompt,this.querySelector(".js-feedback-form").style.display="none",this.querySelector(".feedback-form-add").style.display="block",this.wasHelpful="yes",this.dispatchEvent(new CustomEvent("ratedPage",{detail:this.wasHelpful}))})),this.querySelector(".js-feedback-no").addEventListener("click",(e=>{this.querySelector(".js-feedback-form").style.display="none",this.querySelector(".feedback-form-add").style.display="block",this.wasHelpful="no",this.dispatchEvent(new CustomEvent("ratedPage",{detail:this.wasHelpful}))})),this.querySelector(".js-feedback-submit").addEventListener("click",(t=>{this.querySelector(".feedback-form-add").style.display="none",this.querySelector(".feedback-thanks-add").style.display="block";let n={};n.url=window.location.href,n.helpful=this.wasHelpful,n.comments=e.value,n.userAgent=navigator.userAgent,fetch(this.endpointUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>console.log(e)))}))}}window.customElements.define("cagov-feedback",n);const a=document.createElement("style");a.textContent='cagov-feedback {\n  width: 100%;\n}\ncagov-feedback .feedback-form {\n  background: var(--standout-color, #2F4C2C);\n  padding: 1rem;\n  border-radius: 0.3125rem;\n}\ncagov-feedback .feedback-form-question {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\ncagov-feedback .feedback-form-label {\n  color: #fff;\n  display: block;\n  margin-right: 1rem;\n  transition: 0.3s color cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  line-height: 3rem;\n}\ncagov-feedback .feedback-form-button {\n  padding: 1rem;\n  color: var(--standout-color, #2F4C2C);\n  border: none;\n  border-radius: 0.3rem;\n  transition: 0.3s background cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  cursor: pointer;\n  margin: 0 0.5rem 0 0;\n  display: inline !important;\n  font-weight: bold;\n  /* defensive overrides */\n  position: relative;\n  text-transform: none;\n  top: auto;\n  right: auto;\n  background: #fff;\n}\ncagov-feedback .feedback-form-button:hover {\n  background: #d5dbd5;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);\n  text-decoration: underline;\n}\ncagov-feedback .feedback-form-button:focus {\n  box-shadow: 0 0 0 2px #fff;\n}\ncagov-feedback .feedback-form-button .feedback-yes {\n  margin-right: 1rem;\n}\ncagov-feedback .feedback-form-add {\n  padding-top: 2rem;\n  display: none;\n}\n@media (min-width: 48rem) {\n  cagov-feedback .feedback-form-add {\n    text-align: left;\n    padding-top: 0;\n  }\n}\ncagov-feedback .feedback-form-add-grid {\n  position: relative;\n  margin-top: 1rem;\n}\n@media (min-width: 48rem) {\n  cagov-feedback .feedback-form-add-grid {\n    display: inline-flex;\n    flex-flow: column;\n    align-items: flex-start;\n  }\n}\ncagov-feedback .feedback-form-textarea {\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  font-family: "Roboto", sans-serif;\n  color: darkblue;\n  max-width: 90%;\n  height: 127px;\n  width: 600px;\n}\ncagov-feedback .feedback-form-thanks {\n  display: none;\n  color: #fff;\n}\ncagov-feedback .feedback-form-error {\n  position: relative;\n  top: 100%;\n  left: 0;\n  display: none;\n  font-weight: 300;\n  text-align: left;\n}\n\n/*# sourceMappingURL=index.css.map */\n',document.querySelector("head").appendChild(a);class i extends window.HTMLElement{connectedCallback(){this.innerHTML='<div class="accordion-icon" aria-hidden="true">\n        <svg viewbox="0 0 25 25">\n            <title>Minus</title>\n            <line x1="6" y1="12.5" x2="19" y2="12.5"  fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />\n        </svg>\n      </div>'}}function o(e,t){return`<li class="cagov-pagination__item">\n    <a\n      href="javascript:void(0);"\n      class="cagov-pagination__button"\n      aria-label="${e} ${t}"\n      data-page-num="${t}"\n    >\n      ${t}\n    </a>\n  </li>`}window.customElements.define("cagov-minus",i);class r extends window.HTMLElement{constructor(){if(super(),document.querySelector("api-viewer")){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","./src/css/index.css"),document.querySelector("api-viewer").shadowRoot.appendChild(e)}}connectedCallback(){this.currentPage=parseInt(this.dataset.currentPage?this.dataset.currentPage:"1"),this.render()}render(){let e=this.dataset.previous?this.dataset.previous:"&#60;",t=this.dataset.next?this.dataset.next:"&#62;",n=this.dataset.page?this.dataset.page:"Page";this.totalPages=this.dataset.totalPages?this.dataset.totalPages:"1";let a=function(e,t,n,a,i){return`<nav aria-label="Pagination" class="cagov-pagination">\n    <ul class="cagov-pagination__list">\n      <li class="cagov-pagination__item">\n        <a\n          href="javascript:void(0);"\n          class="cagov-pagination__link cagov-pagination__previous-page"\n          aria-label="${t} ${n}"\n        >\n          <span class="cagov-pagination__link-text ${a>2?"":"cagov-pagination__link-inactive"}"> ${t} </span>\n        </a>\n      </li>\n      ${a>2?o(n,1):""}\n\n      ${a>3?'<li\n    class="cagov-pagination__item cagov-pagination__overflow"\n    role="presentation"\n  >\n    <span> … </span>\n  </li>':""}\n\n      ${a>1?o(n,a-1):""}\n\n      <li class="cagov-pagination__item cagov-pagination-current">\n        <a\n          href="javascript:void(0);"\n          class="cagov-pagination__button"\n          aria-label="Page ${a}"\n          aria-current="page"\n          data-page-num="${a}"\n        >\n          ${a}\n        </a>\n      </li>\n\n      ${a<i?o(n,a+1):""}\n\n      ${a<i-3?'<li\n    class="cagov-pagination__item cagov-pagination__overflow"\n    role="presentation"\n  >\n    <span> … </span>\n  </li>':""}\n\n      ${a<i-1?o(n,i):""}\n\n      <li class="cagov-pagination__item">\n        <a\n          href="javascript:void(0);"\n          class="cagov-pagination__link cagov-pagination__next-page"\n          aria-label="${e} ${n}"\n        >\n          <span class="cagov-pagination__link-text ${a>i-1?"cagov-pagination__link-inactive":""}"> ${e} </span>\n        </a>\n      </li>\n    </ul>\n  </nav>`}(t,e,n,this.currentPage,this.totalPages);this.innerHTML=a,this.applyListeners()}static get observedAttributes(){return["data-current-page","data-total-pages"]}attributeChangedCallback(e,t,n){"data-current-page"===e&&(this.currentPage=parseInt(n),this.render())}applyListeners(){this.querySelectorAll(".cagov-pagination__button").forEach(function(e){e.addEventListener("click",(e=>{this.currentPage=parseInt(e.target.dataset.pageNum),this.dispatchEvent(new CustomEvent("paginationClick",{detail:this.currentPage})),this.dataset.currentPage=this.currentPage}))}.bind(this)),this.querySelector(".cagov-pagination__previous-page").addEventListener("click",(e=>{e.target.classList.contains("cagov-pagination__link-inactive")||(this.currentPage--,this.currentPage<1&&(this.currentPage=1),this.dispatchEvent(new CustomEvent("paginationClick",{detail:this.currentPage})),this.dataset.currentPage=this.currentPage)})),this.querySelector(".cagov-pagination__next-page").addEventListener("click",(e=>{e.target.classList.contains("cagov-pagination__link-inactive")||(this.currentPage++,this.currentPage>this.totalPages&&(this.currentPage=this.totalPages),this.dispatchEvent(new CustomEvent("paginationClick",{detail:this.currentPage})),this.dataset.currentPage=this.currentPage)}))}}window.customElements.define("cagov-pagination",r);const c=document.createElement("style");c.textContent="cagov-pagination .cagov-pagination__list {\n  list-style: none;\n  margin: 0;\n  padding: 0 !important;\n  display: flex;\n}\ncagov-pagination .cagov-pagination__item {\n  border: 1px solid #EDEDEF;\n  border-radius: 0.3rem;\n  margin: 0.25rem;\n}\ncagov-pagination .cagov-pagination__item a {\n  padding: 0.75rem 0.875rem;\n  display: inline-block;\n  color: var(--primary-color, #064E66);\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item:hover {\n  background: #F9F9FA;\n}\ncagov-pagination .cagov-pagination__item:hover a {\n  text-decoration: underline;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current {\n  background-color: #064E66;\n  background-color: var(--primary-color, #064E66);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a {\n  color: #fff;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow {\n  border: none;\n  padding: 0.875rem 0;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow:hover {\n  background: inherit;\n}\ncagov-pagination .cagov-pagination__link-inactive {\n  color: grey;\n  border-color: grey;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=index.css.map */\n",document.querySelector("head").appendChild(c);class s extends window.HTMLElement{connectedCallback(){this.innerHTML='<div class="accordion-icon" aria-hidden="true">\n        <svg viewbox="0 0 25 25">\n            <title>Plus</title>\n            <line x1="6" y1="12.5" x2="19" y2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />\n            <line y1="6" x1="12.5" y2="19" x2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />\n        </svg>\n      </div>'}}window.customElements.define("cagov-plus",s),console.log("wtf");class d extends window.HTMLElement{connectedCallback(){this.menuContentFile=this.dataset.json,this.querySelector(".open-menu").addEventListener("click",this.toggleMainMenu.bind(this)),console.log("expansion listeners call"),this.expansionListeners()}toggleMainMenu(){this.querySelector(".hamburger").classList.contains("is-active")?this.closeMainMenu():this.openMainMenu()}openMainMenu(){this.classList.add("display-menu"),this.querySelector(".hamburger").classList.add("is-active"),this.querySelector(".menu-trigger").classList.add("is-fixed");var e=this.querySelector(".menu-trigger-label");e.innerHTML=e.getAttribute("data-closelabel")}closeMainMenu(){this.classList.remove("display-menu"),this.classList.remove("reveal-items"),this.querySelector(".hamburger").classList.remove("is-active"),this.querySelector(".menu-trigger").classList.remove("is-fixed");var e=this.querySelector(".menu-trigger-label");e.innerHTML=e.getAttribute("data-openlabel")}expansionListeners(){this.querySelectorAll(".js-expandable-mobile").forEach((e=>{const t=e.closest(".expanded-menu-section");if(t){const n=t.querySelector(".expanded-menu-dropdown");n&&(n.setAttribute("aria-hidden","true"),e.closest(".expanded-menu-col").setAttribute("aria-expanded","false"))}e.addEventListener("click",(function(e){e.preventDefault(),this.closest(".expanded-menu-section").classList.toggle("expanded"),this.closest(".expanded-menu-col").setAttribute("aria-expanded","true");const t=this.closest(".expanded-menu-section").querySelector(".expanded-menu-dropdown");t&&t.setAttribute("aria-hidden","false")}))}))}}window.customElements.define("cagov-navoverlay",d);
