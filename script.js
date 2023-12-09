let bagItem = [];
onLoad();

function onLoad() {
  displayhomepage();
  displaybgCount();
}
function addtobag(itemid) {
  bagItem.push(itemid);
  localStorage.setItem("bagItem", JSON.stringify(bagItem));
  displaybgCount();
}

function displaybgCount() {
  let bagItemcount = document.querySelector(".bag-item-count");
  if (bagItem.length > 0) {
    bagItemcount.style.visibility = "visible";
    bagItemcount.innerText = bagItem.length;
  } else {
    bagItemcount.style.visibility = "hidden";
  }
}
function displayhomepage() {
  let itemContainerElement = document.querySelector(".items-container");

  if (!itemContainerElement) {
    return;
  }
  let innerHTML = "";
  items.forEach((item) => {
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
<button class="btn-add-bag" onclick="addtobag(${item.id})" >add to Bag</button>
</div>`;
  });

  itemContainerElement.innerHTML = innerHTML;
}
