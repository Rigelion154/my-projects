const data = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-slider/pets-jenifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-slider/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-slider/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-slider/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-slider/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-slider/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-slider/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-slider/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

window.onload = function () {
  burgerHandler();
  overlayHandler();
  navLinksHandler();
  popupHandler();
  popupCloseButtonHandler();
  initSliderCards();
  initBlocks();
};

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav__links");
const overlay = document.querySelector(".overlay");
const popUp = document.querySelector(".pop-up");
const popUpBody = document.querySelector(".pop-up__body");
const popUpCloseButton = document.querySelector(".pop-up__close");
const slider = document.querySelector(".slider");
const sliderCard = document.querySelectorAll(".slider__card");
const sliderCenter = document.querySelector(".slider__center");
const sliderleft = document.querySelector(".slider__left");
const sliderRight = document.querySelector(".slider__right");
const sliderCardCenter = sliderCenter.querySelectorAll(".slider__card");
const sliderCardLeft = sliderleft.querySelectorAll(".slider__card");
const sliderCardRight = sliderRight.querySelectorAll(".slider__card");
const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");

//Burger

const burgerHandler = () => {
  burger.addEventListener("click", () => {
    if (!burger.classList.contains("burger__open")) {
      burger.classList.remove("burger__closed");
      burger.classList.add("burger__open");
    } else {
      burger.classList.remove("burger__open");
      burger.classList.add("burger__closed");
    }
    if (!navLinks.classList.contains("open")) {
      navLinks.classList.remove("closed");
      navLinks.classList.add("open");
    } else {
      navLinks.classList.remove("open");
      navLinks.classList.add("closed");
    }
    overlay.classList.toggle("display__block");
    document.body.classList.toggle("hidden");
  });
};

const navLinksHandler = () => {
  navLinks.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", onClicked);
  });
};

const overlayHandler = () =>
  overlay.addEventListener("click", () => {
    onClicked();
    closePopUp();
  });

const onClicked = () => {
  overlay.classList.remove("display__block");
  navLinks.classList.remove("open");
  navLinks.classList.add("closed");
  burger.classList.remove("burger__open");
  burger.classList.add("burger__closed");
  document.body.classList.remove("hidden");
};

//Pop-up

const popupHandler = () => {
  sliderCard.forEach((card) =>
    card.addEventListener("click", () => {
      overlay.classList.toggle("display__block");
      popUp.classList.toggle("display__block");
      document.body.classList.add("hidden");
      popUpBody.innerHTML = "";

      data.forEach((elem) => {
        if (elem.name == card.classList[2])
          popUpBody.innerHTML += `
          <img
            class="pop-up__image"
            src=${elem.img}
            alt="pet"
          />
          <div class="pop-up__content">
          <div class="pop-up__header">
            <h2 class="pop-up__title">${elem.name}</h2>
            <h3 class="pop-up__subtitle">${elem.type} - ${elem.breed}</h3>
          </div>
          <p class="pop-up__text">
          ${elem.description}
          </p>
          <ul class="pop-up__descriptions">
            <li class="pop-up__age"><b>Age:</b> ${elem.age}</li>
            <li class="pop-up__inoculations"><b>Inoculations:</b> ${elem.inoculations}</li>
            <li class="pop-up__diseases"><b>Diseases:</b> ${elem.diseases}</li>
            <li class="pop-up__parasites"><b>Parasites:</b> ${elem.parasites}</li>
          </ul>
        </div>`;
      });
    })
  );
};

const popupCloseButtonHandler = () => {
  popUpCloseButton.addEventListener("click", () => {
    onClicked();
    closePopUp();
  });
};

const closePopUp = () => {
  popUpBody.innerHTML = "";
  popUp.classList.remove("display__block");
};

//Slider

const getRandomsArrays = (data) => {
  let leftRandomArray = [];
  let rightRandomArray = [];
  let centerRandomArray = [];
  let result = [];
  for (let i = 0; i < 100; i++) {
    let randomElement = data[Math.floor(Math.random() * data.length)];
    if (
      leftRandomArray.length === 3 &&
      rightRandomArray.length === 3 &&
      centerRandomArray.length === 3
    ) {
      break;
    }
    if (
      !leftRandomArray.includes(randomElement) &&
      leftRandomArray.length < 3
    ) {
      leftRandomArray.push(randomElement);
    }

    if (
      !leftRandomArray.includes(randomElement) &&
      !rightRandomArray.includes(randomElement) &&
      rightRandomArray.length < 3
    )
      rightRandomArray.push(randomElement);
    if (
      !centerRandomArray.includes(randomElement) &&
      !leftRandomArray.includes(randomElement) &&
      !rightRandomArray.includes(randomElement) &&
      centerRandomArray.length < 3
    ) {
      centerRandomArray.push(randomElement);
    }
  }
  result.push(leftRandomArray);
  result.push(rightRandomArray);
  result.push(centerRandomArray);
  return result;
};
const initSliderCards = () => {
  let random = getRandomsArrays(data);
  const dataArray2 = random[1];

  for (i = 0; i < sliderCardCenter.length; i++) {
    sliderCardCenter[i].classList.add(`${dataArray2[i].name}`);
    sliderCardCenter[i].innerHTML = `
          <img
             src="${dataArray2[i].img}"
             alt="Cat"
             class="slider__image"
             />
           <h3 class="slider__title">${dataArray2[i].name}</h3>
           <div class="slider__button">
              <button class="frame__button button">Learn more</button>
            </div>
         `;
  }
};
const initBlocks = () => {
  let random = getRandomsArrays(data);
  const dataArray = random;
  const dataArray0 = random[0];
  for (i = 0; i < sliderCardRight.length; i++) {
    sliderCardRight[i].classList.add(`${dataArray0[i].name}`);
    sliderCardRight[i].innerHTML = `
          <img
             src="${dataArray0[i].img}"
             alt="Cat"
             class="slider__image"
             />
           <h3 class="slider__title">${dataArray0[i].name}</h3>
           <div class="slider__button">
              <button class="frame__button button">Learn more</button>
            </div>
         `;
  }
  const dataArray1 = random[1];

  for (i = 0; i < sliderCardLeft.length; i++) {
    sliderCardLeft[i].classList.add(`${dataArray1[i].name}`);
    sliderCardLeft[i].innerHTML = `
          <img
             src="${dataArray1[i].img}"
             alt="Cat"
             class="slider__image"
             />
           <h3 class="slider__title">${dataArray1[i].name}</h3>
           <div class="slider__button">
              <button class="frame__button button">Learn more</button>
            </div>
         `;
  }
};

const moveLeft = () => {
  slider.classList.add("slider__move-left");
  leftArrow.removeEventListener("click", moveLeft);
  rightArrow.removeEventListener("click", moveRight);
};
const moveRight = () => {
  slider.classList.add("slider__move-right");
  leftArrow.removeEventListener("click", moveLeft);
  rightArrow.removeEventListener("click", moveRight);
};

const moveLeftRender = () => {
  for (let i = 0; i < sliderCardCenter.length; i++) {
    sliderCardCenter[i].classList.remove(`${sliderCardCenter[i].classList[2]}`);
    sliderCardCenter[i].classList.add(`${sliderCardLeft[i].classList[2]}`);
    sliderCardLeft[i].classList.remove(`${sliderCardLeft[i].classList[2]}`);
    sliderCardRight[i].classList.remove(`${sliderCardRight[i].classList[2]}`);
    sliderCardCenter[i].innerHTML = sliderCardLeft[i].innerHTML;
  }
  // initLeftSliderBlock();
  initBlocks();
};

const moveRightRender = () => {
  for (let i = 0; i < sliderCardCenter.length; i++) {
    sliderCardCenter[i].classList.remove(`${sliderCardCenter[i].classList[2]}`);
    sliderCardCenter[i].classList.add(`${sliderCardRight[i].classList[2]}`);
    sliderCardRight[i].classList.remove(`${sliderCardRight[i].classList[2]}`);
    sliderCardLeft[i].classList.remove(`${sliderCardLeft[i].classList[2]}`);
    sliderCardCenter[i].innerHTML = sliderCardRight[i].innerHTML;
  }
  // initRightSliderBlock();
  initBlocks();
};

leftArrow.addEventListener("click", moveLeft);

rightArrow.addEventListener("click", moveRight);

slider.addEventListener("animationend", (AnimationEvent) => {
  if (AnimationEvent.animationName === "move-left") {
    moveLeftRender();
  }
  if (AnimationEvent.animationName === "move-left768") {
    moveLeftRender();
  }

  if (AnimationEvent.animationName === "move-left320") {
    moveLeftRender();
  }

  if (AnimationEvent.animationName === "move-right") {
    moveRightRender();
  }
  if (AnimationEvent.animationName === "move-right768") {
    moveRightRender();
  }

  if (AnimationEvent.animationName === "move-right320") {
    moveRightRender();
  }

  slider.classList.remove("slider__move-left");
  slider.classList.remove("slider__move-right");
  leftArrow.addEventListener("click", moveLeft);
  rightArrow.addEventListener("click", moveRight);
});

// slider.addEventListener("animationstart", initBlocks);
