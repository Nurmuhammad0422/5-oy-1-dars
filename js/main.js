let elCountryList = document.querySelector(".list");
let elSelect = document.querySelector(".country-select");
let elSearchInput = document.querySelector(".search-input");

let elLikeBtn = document.querySelector(".like-btn")
let elBasketBtn = document.querySelector(".basket-btn")

let elLikeCount = document.querySelector(".like-count")
let elBasketCount = document.querySelector(".basket-count")

function renderCountry(arr, list) {
  list.innerHTML = null;
  arr.map((item) => {
    let elCountryItem = document.createElement("li");
    let elCountryImg = document.createElement("img");
    let elcontentWrapper = document.createElement("div");
    let elCountryName = document.createElement("h2");
    let elCountryPopulation = document.createElement("p");
    let elCpital = document.createElement("p");
    let elwrapper = document.createElement("div");
    let elCountryLikeImg = document.createElement("button");
    let elcountrysevedImg = document.createElement("button");
    let elcountrymoreImg = document.createElement("button");

    elCountryItem.className =
      "w-[267px] bg-slate-200 rounded-md overflow-hidden";

    elCountryImg.src = item.flag;
    elCountryImg.className = "w-full h-[160px] object-cover";
    elCountryImg.alt = item.name;

    elcontentWrapper.className = "p-[24px]";

    elwrapper.className ="w-full h-[40px] flex items-center mt-[10px] justify-between";

    elCountryLikeImg.innerHTML = `
        <button
          onclick="handleLikeBtnClick(${item.id})"
          class="${item.isLiked ? "bg-red-500" : ""} w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center"
        >
          <img
            src="./images/like-img.svg"
            alt="like-img"
            width="22"
            height="22"
          />
        </button>
        `;
    elcountrysevedImg.innerHTML = `
        <button
          onclick = "handleBasketBtnClick(${item.id})"
          class="${item.isBasket ? "bg-green-500" : ""} w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center"
        >
          <img
            src="./images/saved.png"
            alt="saved-img"
            width="22"
            height="22"
          />
        </button>
        `;

    elcountrymoreImg.innerHTML = `
        <button
          class="w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center"
        >
          <img
            src="./images/more-img.png"
            alt="more-img"
            width="22"
            height="22"
          />
        </button>
        `;

    elCountryName.textContent = item.name;
    elCountryName.className = "text-[22px] font-bold";

    elCountryPopulation.textContent = `Population: ${item.population}`;
    elCpital.textContent = `Capital: ${item.capital}`;

    elCountryItem.append(elCountryImg, elcontentWrapper);
    elwrapper.append(elCountryLikeImg, elcountrysevedImg, elcountrymoreImg);
    elcontentWrapper.append(
      elCountryName,
      elCountryPopulation,
      elCpital,
      elwrapper
    );
    list.append(elCountryItem);
  });
}
renderCountry(countrys, elCountryList);

// Select part start
function renderSelectOption(arr, list) {
  arr.forEach((item) => {
    let elOption = document.createElement("option");
    elOption.textContent = item.capital;
    elOption.value = item.capital.toLowerCase();
    list.append(elOption);
  });
}
renderSelectOption(countrys, elSelect);

elSelect.addEventListener("change", function (evt) {
  if (evt.target.value == "all") {
    renderCountry(countrys, elCountryList);
  } else {
    const result = countrys.filter(
      (item) => item.capital.toLowerCase() == evt.target.value
    );
    renderCountry(result, elCountryList);
  }
});
// Select part end

// Search part start
elSearchInput.addEventListener("input", function (e) {
  const value = e.target.value.toLowerCase();
  const searchedList = countrys.filter((item) =>
    item.name.toLowerCase().includes(value)
  );
  renderCountry(searchedList, elCountryList);
});
// Search part end

// Like btn click start 
function handleLikeBtnClick(id){
  const singleObj = countrys.find(item => item.id == id)
  singleObj.isLiked = !singleObj.isLiked
  renderCountry(countrys, elCountryList)
  elLikeCount.textContent = countrys.filter(item => item.isLiked == true).length
}
// Like btn click end

// Basket btn click start
function handleBasketBtnClick(id){
  const singleObj = countrys.find(item => item.id == id)
  singleObj.isBasket = !singleObj.isBasket
  renderCountry(countrys, elCountryList)
  elBasketCount.textContent = countrys.filter(item => item.isBasket == true).length
}
// Basket btn click end

// Show Like list start
elLikeBtn.addEventListener("click", function(e){
  const likeCountry = countrys.filter(item => item.isLiked)
  renderCountry(likeCountry, elCountryList);
})
// Show Like list end

// Show basket list start
elBasketBtn.addEventListener("click", function(e){
  const BasketCountry = countrys.filter(item => item.isBasket)
  renderCountry(BasketCountry, elCountryList);
})
// Show basket list end