window.onload = function () {
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

  console.log(`Все пункты выполнены / 100 `);

  const navLinks = document.querySelector(".nav__links");
  const burger = document.querySelector(".burger");
  const overlay = document.querySelector(".overlay");

  //Burger
  burger.addEventListener("click", function () {
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

  const onClicked = () => {
    overlay.classList.remove("display__block");
    navLinks.classList.remove("open");
    navLinks.classList.add("closed");
    burger.classList.remove("burger__open");
    burger.classList.add("burger__closed");
    document.body.classList.remove("hidden");
  };

  overlay.addEventListener("click", () => {
    onClicked();
    closePopUp();
  });

  navLinks.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", onClicked);
  });

  // Pop - up;

  const slider = document.querySelector(".slider");
  const sliderCard = slider.querySelectorAll(".slider__card");
  const popUp = document.querySelector(".pop-up");
  // const popUpContent = document.querySelector(".pop-up__content");
  const popUpBody = document.querySelector(".pop-up__body");
  const popUpCloseButton = document.querySelector(".pop-up__close");

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

  const closePopUp = () => {
    popUpBody.innerHTML = "";
    popUp.classList.remove("display__block");
  };

  popUpCloseButton.addEventListener("click", () => {
    onClicked();
    closePopUp();
  });
};
