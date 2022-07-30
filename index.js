const addButton = document.querySelector(".addBtnContainer");
const firstAdd = document.querySelector(".firstAdd");
const secondAdd = document.querySelector(".secondAdd");
const thirdAdd = document.querySelector(".thirdAdd");
const fourthAdd = document.querySelector(".fourthAdd");
const itemName = document.querySelector(".nameOfItem");
const cart = document.querySelector(".cartContainer");
const total = document.querySelector(".total");
let amount = 1;
let individualPrice = 0;

class Items {
  constructor(itemName, price, amount, id) {
    this.itemName = itemName;
    this.price = price;
    this.amount = amount;
    this.id = id;
  }
}

const item1 = new Items("Alexa", 30, 1, 1);
const item2 = new Items("Vaccum Cleaner", 115, 1, 2);
const item3 = new Items("Watch", 80, 1, 3);
const item4 = new Items("Earphone", 75, 1, 4);

const items = [item1, item2, item3, item4];
let prices = [];

const addingItems = function () {
  firstAdd.addEventListener("click", () => {
    renderNewPrice(items[0]);
  });
  secondAdd.addEventListener("click", () => {
    renderNewPrice(items[1]);
  });
  thirdAdd.addEventListener("click", () => {
    renderNewPrice(items[2]);
  });
  fourthAdd.addEventListener("click", () => {
    renderNewPrice(items[3]);
  });
};

addingItems();

const renderNewPrice = function (items) {
  let clicks = 0;
  console.log(clicks);
  const element = document.createElement("div");
  total.innerHTML = `Total: $ ${items.price}`;
  element.classList.add("calculationSection");
  element.innerHTML = `            
            <div class="nameOfItem">${items.itemName}</div>
            <div class="quantity"> ${items.amount}</div>
            <div class="resultContainer">$${items.price}</div>
            <div className="btnContainer">
                <i class="plusBtn fa-solid fa-circle-plus fa-2x"></i>
                <i class="minusBtn fa-solid fa-circle-minus fa-2x"></i>
            </div>
          `;
  cart.insertAdjacentElement("afterbegin", element);
  const plusBtn = element.querySelector(".plusBtn");
  const minusBtn = element.querySelector(".minusBtn");
  const quantity = element.querySelector(".quantity");
  const result = element.querySelector(".resultContainer");

  plusBtn.addEventListener("click", function () {
    items.amount++;
    individualPrice = items.price * items.amount;
    quantity.innerHTML = items.amount;
    result.innerHTML = `$ ${individualPrice}`;
    total.innerHTML = `Total: $ ${individualPrice}`;
  });

  minusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    items.amount--;
    individualPriceOne = individualPrice - items.price;
    quantity.innerHTML = items.amount;
    result.innerHTML = `$ ${individualPriceOne}`;
    individualPrice = individualPriceOne;
    total.innerHTML = `Total: $ ${individualPrice}`;
    if (items.amount < 1) {
      cart.removeChild(e.currentTarget.parentElement.parentElement);
    }
  });
};
