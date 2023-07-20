(()=>{"use strict";var t={373:(t,e,n)=>{n.r(e)},607:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),n(373);(new(a(n(162)).default)).createView()},162:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(411)),i=a(n(544)),r=a(n(94)),o=a(n(923)),l=a(n(198)),d=a(n(814)),u=a(n(930)),c=a(n(442)),h=a(n(296)),g=a(n(486)),m=a(n(691)),f=n(525),p=a(n(376));e.default=class{constructor(){this.header=new s.default,this.main=new i.default,this.garage=new o.default,this.winners=new m.default,this.createTool=new u.default,this.createTool.createButton.setCallback(this.createButtonHandler.bind(this)),this.editTool=new c.default,this.editTool.editButton.addEventListener("click",this.editButtonHandler.bind(this)),this.car=new l.default(this.editTool,this.garage),this.pagination=new h.default,this.isWin=!0,this.modal=new g.default,this.paginationHandler(),this.raceStartHandler(),this.raceResetHandler(),this.headerHandler(),this.generateButtonHandler(),this.car.renderCars()}headerHandler(){this.header.garageButton.setCallback((()=>{this.garage.getElement().style.display="flex",this.winners.getElement().style.display="none"})),this.header.winnersButton.setCallback((async()=>{this.garage.getElement().style.display="none",this.winners.getElement().style.display="flex",await this.winners.setButtonsStatus(),await this.winners.renderWinners(this.winners.sort,this.winners.order)}))}renderGarage(){const t=this.garage.toolBar;return t.append(this.createTool.getElement(),this.editTool.getElement()),t}async createView(){this.renderGarage(),this.main.container.getElement().append(this.garage.getElement(),this.winners.getElement());const t=new r.default;document.body.append(this.header.getElement(),this.main.getElement(),t.getElement(),this.modal.getElement())}paginationHandler(){this.garage.nextButton.addEventListener("click",(async()=>{await this.pagination.nextButtonHandler(this.car,this.garage)})),this.garage.prevButton.addEventListener("click",(async()=>{await this.pagination.prevButtonHandler(this.car,this.garage)})),this.winners.nextButton.addEventListener("click",(async()=>{await this.pagination.nextWinnersButtonHandler(this.car,this.winners)})),this.winners.prevButton.addEventListener("click",(async()=>{await this.pagination.prevWinnersButtonHandler(this.car,this.winners)}))}async createButtonHandler(){await(0,f.createCar)(this.createTool.createTextInput.getElement().value,this.createTool.createColorInput.value),await this.garage.setButtonsStatus(),await this.car.renderCars(),this.createTool.createTextInput.getElement().value="",this.createTool.inputHandler()}async editButtonHandler(){const t=this.editTool.editTextInput.getElement(),e=""===t.value?t.value="Default Car":t.value;await(0,f.editCar)(e,this.editTool.editColorInput.value,d.default.editCarId),await this.car.renderCars(),await this.garage.setButtonsStatus(),this.editTool.editTextInput.getElement().value="",this.editTool.editTextInput.getElement().disabled=!0,this.editTool.editHandler()}raceStartHandler(){this.garage.raceButton.addEventListener("click",(async()=>{await this.car.renderCars();const t=await Promise.all(this.car.cars.map((t=>t.startEngine())));await this.car.startRace(t),this.car.cars.forEach((t=>t.setWinners(this.modal))),this.raceButtonsDisable(),this.car.cars.forEach((t=>{t.raceButtonsDisable()}))}))}raceResetHandler(){this.garage.resetButton.addEventListener("click",(async()=>{await Promise.all(this.car.cars.map((async t=>{d.default.isAnimationEnd=!0,await t.stopEngine(),t.raceButtonsEnable()}))),await this.raceButtonsEnable(),d.default.isAnimationEnd=!1}))}generateButtonHandler(){this.garage.generateButton.setCallback((async()=>{await(0,p.default)(),await this.car.renderCars(),await this.garage.setButtonsStatus()}))}raceButtonsDisable(){this.header.garageButton.getElement().disabled=!0,this.header.winnersButton.getElement().disabled=!0,this.createTool.createButton.getElement().disabled=!0,this.createTool.createTextInput.getElement().disabled=!0,this.garage.generateButton.getElement().disabled=!0,this.editTool.editButton.disabled=!0,this.garage.raceButton.disabled=!0,this.garage.nextButton.disabled=!0,this.garage.prevButton.disabled=!0}async raceButtonsEnable(){this.header.garageButton.getElement().disabled=!1,this.header.winnersButton.getElement().disabled=!1,this.createTool.createButton.getElement().disabled=!1,this.createTool.createTextInput.getElement().disabled=!1,this.garage.generateButton.getElement().disabled=!1,this.editTool.editButton.disabled=!1,this.garage.raceButton.disabled=!1,await this.garage.setButtonsStatus()}}},198:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(558)),i=a(n(852)),r=a(n(630)),o=a(n(814)),l=n(525);class d{constructor(t,e){this.id=0,this.name="",this.color="",this.winsCounter=1,this.time=0,this.cars=[],this.editTool=t,this.garage=e,this.deleteButton=new r.default("button__car car__delete","Delete"),this.selectButton=new r.default("button__car car__select","Select"),this.startButton=new r.default("button__car car__start","Start"),this.stopButton=new r.default("button__car car__stop","Stop"),this.carImage=new i.default("car__image").getElement(),this.setButtonsCallback()}setButtonsCallback(){this.deleteButton.setCallback((async()=>{await(0,l.deleteCar)(this.id),await this.garage.setButtonsStatus();const{winners:t}=await(0,l.getWinners)();t.find((t=>t.id===this.id))&&await(0,l.deleteWinner)(this.id),await this.renderCars()})),this.selectButton.setCallback((()=>{o.default.editCarId=this.id,this.editTool.editSelectHandler(this.name,this.color)})),this.startButton.setCallback((async()=>{this.soloRaceButtonsDisable(),await this.startCar()})),this.stopButton.setCallback((async()=>{await this.stopEngine(),this.soloRaceButtonsEnable()})),this.stopButton.getElement().disabled=!0}startRace(t){this.cars.forEach((async(e,n)=>{try{const a=t[n];e.startCarRace(a),await(0,l.switchCarEngine)(e.id,"drive")}catch(t){e.carFailRace()}}))}carFailRace(){this.carImage.style.animationPlayState="paused"}async startEngine(){const t=await(0,l.switchCarEngine)(this.id,"started"),e=t.distance/t.velocity;return this.time=Math.floor(e/1e3*100)/100,this.time}async stopEngine(){const t=await(0,l.switchCarEngine)(this.id,"stopped");this.setAnimationCar(t,"none","","unset")}async startCar(){try{const t=await this.startEngine();this.setAnimationCar(t,"forwards","linear","solo"),await(0,l.switchCarEngine)(this.id,"drive")}catch(t){this.carFailRace()}}startCarRace(t){this.setAnimationCar(t,"forwards","linear","race")}setAnimationCar(t,e,n,a){this.carImage.style.animationDuration=`${t}s`,this.carImage.style.animationFillMode=`${e}`,this.carImage.style.animationTimingFunction=`${n}`,this.carImage.style.animationName=`${a}`,this.carImage.style.animationPlayState="running"}getCarContainer(t,e,n){this.id=t,this.name=e,this.color=n;const a=new i.default("car__buttons").getElement();a.append(this.selectButton.getElement(),this.deleteButton.getElement(),this.startButton.getElement(),this.stopButton.getElement());const r=new i.default("car").getElement();this.carImage.innerHTML=(0,s.default)(n);const o=new i.default("car__title","h3").getElement();o.textContent=e;const l=new i.default("car__view").getElement(),d=new i.default("car__flag").getElement();return l.append(o,this.carImage,d),r.append(a,l),r}async renderCars(){this.garage.carContainer.innerHTML="";const{cars:t,totalCars:e}=await(0,l.getCars)();this.garage.title.textContent=`Garage (${e})`,this.garage.pagesCount.textContent=`Page #${o.default.currentGaragePage}`,this.cars=[],o.default.isAnimationEnd=!1,t.forEach((t=>{const e=new d(this.editTool,this.garage);this.cars.push(e),this.garage.carContainer.append(e.getCarContainer(t.id,t.name,t.color))}))}setWinners(t){this.carImage.addEventListener("animationend",(async e=>{o.default.isAnimationEnd||"race"!==e.animationName||(o.default.isAnimationEnd=!0,t.setContent(this.name,this.time),t.openModal(),await this.setUp(this.id))}))}async setUp(t){const{winners:e}=await(0,l.getWinners)(),n=e.find((e=>e.id===t));if(n){const e=n.time>this.time?this.time:n.time;await(0,l.editWinner)(n.wins+1,e,t)}else await(0,l.createWinner)(this.id,this.winsCounter,this.time)}soloRaceButtonsDisable(){this.stopButton.getElement().disabled=!1,this.startButton.getElement().disabled=!0}soloRaceButtonsEnable(){this.stopButton.getElement().disabled=!0,this.startButton.getElement().disabled=!1}raceButtonsDisable(){this.startButton.getElement().disabled=!0,this.stopButton.getElement().disabled=!0,this.selectButton.getElement().disabled=!0,this.deleteButton.getElement().disabled=!0}raceButtonsEnable(){this.startButton.getElement().disabled=!1,this.stopButton.getElement().disabled=!0,this.selectButton.getElement().disabled=!1,this.deleteButton.getElement().disabled=!1}}e.default=d},94:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852)),i="footer",r="container footer__container",o="footer__links",l="footer__copy",d="© Rigelion 2023";class u extends s.default{constructor(){super(i,"footer"),this.createView()}createView(){const t=new s.default(r),e=new s.default(o);[{cssClassLink:"footer__link",src:"https://github.com/Rigelion154",cssClassImage:"footer__image footer__image-git"},{cssClassLink:"footer__link",src:"https://rs.school/js/",cssClassImage:"footer__image footer__image-rs"}].forEach((t=>{const n=new s.default(t.cssClassLink,"a");n.getElement().href=t.src;const a=new s.default(t.cssClassImage);n.addInnerElement(a.getElement()),e.addInnerElement(n.getElement())}));const n=new s.default(l,"h3");n.setTextContent(d),t.getElement().append(e.getElement(),n.getElement()),this.element.append(t.getElement())}}e.default=u},411:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852)),i=a(n(630)),r="header",o="nav",l="logo",d="container header__container",u="button nav__button",c="button nav__button",h="Async Race",g="Garage",m="Winners";class f extends s.default{constructor(){super(r),this.garageButton=new i.default(u,g),this.winnersButton=new i.default(c,m),this.createView()}createView(){const t=new s.default(d),e=new s.default(l,"h1");e.setTextContent(h);const n=new s.default(o).getElement();n.append(this.garageButton.getElement(),this.winnersButton.getElement()),t.getElement().append(n,e.getElement()),this.element.append(t.getElement())}}e.default=f},930:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852)),i=a(n(199)),r=a(n(630)),o="garage__form",l="garage__input",d="garage__color",u="garage__button-create button",c="Create new car",h="Create";class g extends s.default{constructor(){super(o),this.createTextInput=new i.default(l,"text",c),this.createTextInput.setCallback(this.inputHandler.bind(this)),this.createColorInput=new i.default(d,"color","","#A600A6").getElement(),this.createButton=new r.default(u,h),this.createButton.getElement().disabled=!0}inputHandler(){this.createButton.getElement().disabled=""===this.createTextInput.getElement().value.trim()}getElement(){const t=this.element;return t.append(this.createTextInput.getElement(),this.createColorInput,this.createButton.getElement()),t}}e.default=g},442:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852)),i=a(n(199)),r=a(n(630)),o="garage__form",l="garage__input",d="garage__color",u="garage__button-create button",c="Edit car",h="Edit";class g extends s.default{constructor(){super(o),this.editTextInput=new i.default(l,"text",c),this.editTextInput.getElement().disabled=!0,this.editColorInput=new i.default(d,"color","","#A600A6").getElement(),this.editButton=new r.default(u,h).getElement(),this.editButton.disabled=!0}editHandler(){this.editButton.disabled=""===this.editTextInput.getElement().value.trim()}getElement(){const t=this.element;return t.append(this.editTextInput.getElement(),this.editColorInput,this.editButton),t}editSelectHandler(t,e){this.editTextInput.getElement().value=t,this.editTextInput.getElement().disabled=!1,this.editColorInput.value=e,this.editHandler()}}e.default=g},923:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852)),i=a(n(630)),r=a(n(814)),o="garage garage__container",l="garage__toolbar",d="garage__title",u="garage__subtitle",c="cars",h="garage__button-prev button",g="garage__button-next button",m="garage__button-race button",f="garage__button-reset button",p="garage__button-generate button",_="Previous",w="Next",E="Race",b="Reset",C="Generate Cars";class B extends s.default{constructor(){super(o,"section"),this.toolBar=new s.default(l).getElement(),this.title=new s.default(d,"h2").getElement(),this.pagesCount=new s.default(u,"h4").getElement(),this.carContainer=new s.default(c).getElement(),this.prevButton=new i.default(h,_).getElement(),this.nextButton=new i.default(g,w).getElement(),this.raceButton=new i.default(m,E).getElement(),this.resetButton=new i.default(f,b).getElement(),this.generateButton=new i.default(p,C),this.setButtonsStatus().then((()=>this.setCreateTools()))}setCreateTools(){const t=new s.default("garage__buttons").getElement(),e=new s.default("garage__buttons-pagination").getElement(),n=new s.default("garage__buttons-control").getElement();e.append(this.prevButton,this.nextButton),n.append(this.raceButton,this.resetButton,this.generateButton.getElement()),t.append(e,n),this.element.append(this.title,this.pagesCount,this.toolBar,this.carContainer,t)}async setButtonsStatus(){this.nextButton.disabled=r.default.currentGaragePage===await r.default.getGarageMaxPages(),this.prevButton.disabled=1===r.default.currentGaragePage}}e.default=B},544:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852)),i="main",r="container main__container";class o extends s.default{constructor(){super(i,"main"),this.container=new s.default(r),this.element.append(this.container.getElement())}}e.default=o},486:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852)),i="modal modal__wrapper",r="modal__content";class o extends s.default{constructor(){super(i),this.modalContent=new s.default(r).getElement();const t=new s.default("modal__container").getElement(),e=new s.default("modal__image").getElement();t.append(e,this.modalContent),this.setCallback(this.closeModal.bind(this)),this.element.append(t)}setContent(t,e){this.modalContent.innerHTML=`<strong>${t}</strong> win with time <strong>${e}</strong> second!`}openModal(){this.getElement().style.display="block"}closeModal(){this.getElement().addEventListener("click",(t=>{t.target===this.getElement()&&(this.getElement().style.display="none")}))}}e.default=o},691:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852)),i=a(n(630)),r=a(n(814)),o=a(n(558)),l=n(525),d="winners winners__container",u="winners__title",c="winners__subtitle",h="winners__cars",g="winners__button-prev button",m="winners__button-next button",f="Previous",p="Next";class _ extends s.default{constructor(){super(d,"section"),this.url="http://127.0.0.1:3000",this.path={garage:"/garage",winners:"/winners"},this.title=new s.default(u,"h2").getElement(),this.pagesCount=new s.default(c,"h4").getElement(),this.carContainer=new s.default(h).getElement(),this.listItem=new s.default("winner__list-item").getElement(),this.carContainer.setAttribute("start","1"),this.prevButton=new i.default(g,f).getElement(),this.nextButton=new i.default(m,p).getElement(),this.bestTimeOrder="ASC",this.winsOrder="DESC",this.sort="",this.order="",this.setButtonsStatus().then((()=>this.setCreateTools())),this.renderWinners(this.sort,this.order)}setCreateTools(){const t=new s.default("winners__buttons");t.getElement().append(this.prevButton,this.nextButton),this.element.append(this.title,this.pagesCount,this.renderWinnersTable(),t.getElement())}async setButtonsStatus(){this.nextButton.disabled=r.default.currentWinnersPage===await r.default.getWinnersMaxPages(),this.prevButton.disabled=1===r.default.currentWinnersPage}renderWinnersTable(){const t=new s.default("winners__table").getElement(),e=new s.default("winners__table-header").getElement(),n=new s.default("winners__table-number").getElement();n.textContent="Number";const a=new s.default("winners__table-car").getElement();a.textContent="Car";const i=new s.default("winners__table-name").getElement();i.textContent="Name";const r=new s.default("winners__table-wins").getElement();r.textContent="Wins";const o=new s.default("winners__table-time").getElement();return o.innerHTML="Best <br> Time(seconds)",o.addEventListener("click",(async()=>{this.sort="time",this.order=this.bestTimeOrder,r.className="winners__table-wins",o.className=`winners__table-time ${this.order}__time`,this.bestTimeOrder="ASC"===this.bestTimeOrder?"DESC":"ASC",this.winsOrder="DESC",await this.renderWinners(this.sort,this.order)})),r.addEventListener("click",(async()=>{this.sort="wins",this.order=this.winsOrder,o.className="winners__table-time",r.className=`winners__table-wins ${this.order}__wins`,this.winsOrder="ASC"===this.winsOrder?"DESC":"ASC",this.bestTimeOrder="ASC",await this.renderWinners(this.sort,this.order)})),e.append(n,a,i,r,o),t.append(e,this.carContainer),t}async renderWinners(t,e){const{winners:n,totalWinners:a}=await(0,l.sortWinners)(t,e);this.title.textContent=`Winners (${a})`,this.pagesCount.textContent=`Page #${r.default.currentWinnersPage}`,this.carContainer.innerHTML="",await Promise.all(n.map((async(t,e)=>{const n=await(0,l.getCarById)(t.id),a=new s.default("winner__list").getElement(),i=new s.default("car__image").getElement(),r=new s.default("winner__name").getElement(),d=new s.default("winner__count").getElement(),u=new s.default("winner__time").getElement(),c=new s.default("winners__item").getElement();a.textContent=`${e+1}`,i.innerHTML=(0,o.default)(n.color),r.textContent=n.name,d.textContent=`${t.wins}`,u.textContent=`${t.time}`,c.append(a,i,r,d,u),this.carContainer.append(c)})))}}e.default=_},525:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.switchCarEngine=e.editWinner=e.editCar=e.deleteWinner=e.deleteCar=e.sortWinners=e.getWinners=e.getCars=e.getCarById=e.createWinner=e.createCar=void 0;const s=a(n(814)),i="http://127.0.0.1:3000",r="/garage",o="/winners",l="/engine";e.createCar=async function(t,e){await fetch(`${i}${r}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,color:e})})},e.createWinner=async function(t,e,n){await fetch(`${i}${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,wins:e,time:n})})},e.getCarById=async function(t){const e=await fetch(`${i}${r}/${t}`,{method:"GET"});return await e.json()},e.getCars=async function(){const t=await fetch(`${i}${r}?_page=${s.default.currentGaragePage}&_limit=${s.default.maxGaragePageItem}`);return{cars:await t.json(),totalCars:t.headers.get("X-Total-Count")}},e.getWinners=async function(){const t=await fetch(`${i}${o}?_page=${s.default.currentWinnersPage}&_limit=${s.default.maxWinnersPageItem}&_sort=time&_order=ASC`);return{winners:await t.json(),totalWinners:t.headers.get("X-Total-Count")}},e.sortWinners=async function(t,e){const n=await fetch(`${i}${o}?_page=${s.default.currentWinnersPage}&_limit=${s.default.maxWinnersPageItem}&_sort=${t}&_order=${e}`);return{winners:await n.json(),totalWinners:n.headers.get("X-Total-Count")}},e.editCar=async function(t,e,n){await fetch(`${i}${r}/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,color:e})})},e.editWinner=async function(t,e,n){await fetch(`${i}${o}/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({wins:t,time:e})})},e.deleteCar=async function(t){await fetch(`${i}${r}/${t}`,{method:"DELETE"})},e.deleteWinner=async function(t){await fetch(`${i}${o}/${t}`,{method:"DELETE"})},e.switchCarEngine=async function(t,e){return(await fetch(`${i}${l}?id=${t}&status=${e}`,{method:"PATCH"})).json()}},630:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852));class i extends s.default{constructor(t,e,n){super(t,"button"),this.button=this.element,this.button.textContent=e,n&&(this.button.type=n)}getElement(){return this.button}setCallback(t){"function"==typeof t&&this.button.addEventListener("click",(e=>t(e)))}}e.default=i},852:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e="div"){this.element=document.createElement(e),this.element.className=t}setTextContent(t){this.element.textContent=t}addInnerElement(t){this.element.append(t)}getElement(){return this.element}setCallback(t){"function"==typeof t&&this.element.addEventListener("click",(e=>t(e)))}}},558:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return`<svg xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet">\n    <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"\n    fill="${t}" stroke="none">\n    <path d="M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9 -97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421 -104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80 c-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5 -67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58 13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132 -143 17 -79 167 -155 355 \n    -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230 50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106 29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45 461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460 -687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180 28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2 190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 \n    -103 190 -283 274 -222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139 c-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30  c-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539 71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59 326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194 -1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141 -88 \n    379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39 -30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9 256 -20z"/>    \n    <path d="M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410 113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467 -94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209 -85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242 -439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110 237 178 385 206 84 16 235 11 320 -11z"/>\n    <path d="M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48 31 c-52 33 -131 65 -185 75 l-34 6 3 -163z"/>\n    <path d="M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0 15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z"/>\n    <path d="M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3 121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z"/>\n    <path d="M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9 181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z"/>\n    <path d="M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13 -45 -6z"/>\n    <path d="M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42 41 100 -1 143 -33 32 -78 38 -120 15z"/>\n    <path d="M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20 -54 2z"/>\n    <path d="M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49 -58 29z"/>\n    <path d="M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23 103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z"/>\n    <path d="M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0 86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z"/>\n    <path d="M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24 45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z"/>\n    <path d="M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101 l27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z"/>\n    <path d="M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262 68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z"/>\n    <path d="M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289 -1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392 1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67 -508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516 745 122 40 289 42 419 5z"/>\n    <path d="M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23 18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z"/>\n    <path d="M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60 128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z"/>\n    <path d="M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7 278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z"/>\n    <path d="M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5 172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z"/>\n    <path d="M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23 19 -46 5z"/>\n    <path d="M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12 39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z"/>\n    <path d="M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20 -54 2z"/>\n    <path d="M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25 44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z"/>\n    <path d="M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61 210 250 207 258 -4 12 -176 17 -272 7z"/>\n    <path d="M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0 20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z"/>\n    <path d="M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68 26z"/>\n    <path d="M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103 l26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z"/>\n    <path d="M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0 130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z"/>\n    </g>\n    </svg>`}},376:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});const a=n(525),s=["Toyota","Honda","Ford","Chevrolet","BMW","Mercedes-Benz","Volkswagen","Audi","Nissan","Hyundai","Subaru","Kia","Mazda","Lexus","Tesla","Porsche","Jaguar","Aston Martin","Ferrari","Lamborghini","Lada"],i=["Camry","Civic","Mustang","Corvette","3 Series","C-Class","Golf","A4","Altima","Elantra","Impreza","Optima","Mazda3","ES","Model 3","911","F-Type","DB11","488","Aventador","Vesta"];function r(){const t="0123456789ABCDEF";let e="#";for(let n=0;n<6;n+=1){e+=t[Math.floor(16*Math.random())]}return e}function o(){const t=Math.floor(Math.random()*s.length),e=Math.floor(Math.random()*i.length);return`${s[t]} ${i[e]}`}e.default=async function(){const t=[];for(let e=0;e<100;e+=1){const e=r(),n=o();t.push((0,a.createCar)(n,e))}await Promise.all(t)}},199:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(852));class i extends s.default{constructor(t,e,n,a){super(t,"input"),this.input=this.element,this.input.type=e,n&&(this.input.placeholder=n),a&&(this.input.value=a)}getElement(){return this.input}setCallback(t){"function"==typeof t&&this.input.addEventListener("input",(e=>t(e)))}}e.default=i},296:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=a(n(814));e.default=class{async nextButtonHandler(t,e){s.default.currentGaragePage<await s.default.getGarageMaxPages()&&(s.default.currentGaragePage+=1,await e.setButtonsStatus(),await t.renderCars())}async prevButtonHandler(t,e){s.default.currentGaragePage>1&&(s.default.currentGaragePage-=1,await e.setButtonsStatus(),await t.renderCars())}async nextWinnersButtonHandler(t,e){s.default.currentWinnersPage<await s.default.getWinnersMaxPages()&&(s.default.currentWinnersPage+=1,await e.setButtonsStatus(),await e.renderWinners(e.sort,e.order))}async prevWinnersButtonHandler(t,e){s.default.currentWinnersPage>1&&(s.default.currentWinnersPage-=1,await e.setButtonsStatus(),await e.renderWinners(e.sort,e.order))}}},814:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class n{}e.default=n,n.editCarId=0,n.currentGaragePage=1,n.currentWinnersPage=1,n.maxGaragePageItem=7,n.maxWinnersPageItem=10,n.isAnimationEnd=!1,n.getGarageMaxPages=async()=>{let t=0;const e=(await fetch(`http://127.0.0.1:3000/garage?_page=1&_limit=${n.maxGaragePageItem}`)).headers.get("X-Total-Count");return e&&(t=Math.ceil(Number(e)/n.maxGaragePageItem)),t},n.getWinnersMaxPages=async()=>{let t=0;const e=(await fetch(`http://127.0.0.1:3000/winners?_page=1&_limit=${n.maxWinnersPageItem}`)).headers.get("X-Total-Count");return e&&(t=Math.ceil(Number(e)/n.maxWinnersPageItem)),t}}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,n),i.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};n(607)})();