let bagItem = [];
onLoad();
let searchInput = document.querySelector(".search_input");
searchInput.addEventListener("input", filterHandler);

function filterHandler(event) {
  let searchText = event.target.value.toLowerCase();
  let filterItem = filterItemsByCompany(searchText);
  displayhomepage(filterItem);
}

function onLoad() {
  let bagItemStr = localStorage.getItem("bagItem");
  bagItem = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayhomepage();
  displaybgCount();
}

function addtobag(itemid) {
  bagItem.push(itemid);
  localStorage.setItem("bagItem", JSON.stringify(bagItem));
  displaybgCount();
}

function displaybgCount() {
  let bagItemCount = document.querySelector(".bag-item-count");
  bagItemCount.style.visibility = bagItem.length > 0 ? "visible" : "hidden";
  bagItemCount.innerText = bagItem.length;
}

function displayhomepage(filteredItems = items) {
  let itemContainerElement = document.querySelector(".items-container");

  if (!itemContainerElement) {
    return;
  }

  let innerHTML = "";
  filteredItems.forEach((item) => {
    innerHTML += `<div class="item-container">
        <img class="item-imgge" src="${item.image}" alt="">
        <div class="rating">${item.rating.stars}|${item.rating.count}</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price"> rs ${item.current_price} </span>
          <span class="original-price">rs  ${item.original_price} </span>
          <span class="discount"> (${item.discount_percentage} % off )</span>
        </div>
        <button class="btn-add-bag" onclick="addtobag(${item.id})">Add to Bag</button>
      </div>`;
  });

  itemContainerElement.innerHTML = innerHTML;
}

function filterItemsByCompany(searchText) {
  return items.filter((item) => {
    return item.company.toLowerCase().includes(searchText);
  });
}
