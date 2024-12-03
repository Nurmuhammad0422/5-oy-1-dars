let elCountryList = document.querySelector(".list");

function renderCountry(arr, list) {
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

    elwrapper.className =
      "w-full h-[40px] flex items-center mt-[10px] justify-between";

    elCountryLikeImg.innerHTML = `
        <button
          class="w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center"
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
          class="w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center"
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
