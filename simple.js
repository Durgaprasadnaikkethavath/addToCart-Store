{
  {
    id: 3,
    title: "Nivea Men Energy Body Wash",
    image: "/image/bd_4.png",
    price: 125,
  },
  {
    id: 4,
    title: "Dove Body Wash with Cucumber and Green Tea",
    image: "/image/bd_5.png",
    price: 204,
  },
  {
    id: 5,
    title: "Botaneco Garden Body Wash",
    image: "/image/bd_6.png",
    price: 240,
  },
  {
    id: 6,
    title: " Luxurious Hand and Body Wash",
    image: "/image/bd_7.png",
    price: 450,
  },
  {
    id: 7,
    title: "Lipstick Avon Products Cosmetics Make-up, visor, cream",
    image: "/image/mk_1.png",
    price: 102,
  },
  {
    id: 8,
    title: "Lipstick Cosmetics, Pink Lipstick, red lipstick",
    image: "/image/mk_2.png",
    price: 145,
  },
  {
    id: 9,
    title: "Purple Mascara for Voluminous Lashes",
    image: "/image/mk_3.png",
    price: 214,
  },
  {
    id: 10,
    title: "CK One Body Wash by Calvin Klein",
    image: "/image/mk_4.png",
    price: 120,
  },
  {
    id: 11,
    title: "Lux Body Wash Bottle",
    image: "/image/mk_5.png",
    price: 250,
  },
  {
    id: 12,
    title: "Red Perfume Body Wash Bottle",
    image: "/image/mk_6.png",
    price: 415,
  },
  {
    id: 13,
    title: "Nivea Men Energy Body Wash",
    image: "/image/mk_7.png",
    price: 125,
  },
  {
    id: 14,
    title: "Dove Body Wash with Cucumber and Green Tea",
    image: "/image/sr_1.png",
    price: 204,
  },
  {
    id: 15,
    title: "Botaneco Garden Body Wash",
    image: "/image/sr_2.png",
    price: 240,
  },
  {
    id: 16,
    title: " Luxurious Hand and Body Wash",
    image: "/image/sr_3.png",
    price: 450,
  },
  {
    id: 17,
    title: "Lipstick Avon Products Cosmetics Make-up, visor, cream",
    image: "/image/sr_4.png",
    price: 102,
  },
  {
    id: 18,
    title: "Lipstick Cosmetics, Pink Lipstick, red lipstick",
    image: "/image/sr_5.png",
    price: 145,
  },
  {
    id: 19,
    title: "Purple Mascara for Voluminous Lashes",
    image: "/image/wall_1.png",
    price: 214,
  },
}

<script>
 const products = [
  {
    id: 0,
    title: "product name",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUVXERm3yWgAa9s5uAIG2et2PtD1mM-1n6g&s",
    price: 20,
  },
  {
    id: 1,
    title: "product name",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUVXERm3yWgAa9s5uAIG2et2PtD1mM-1n6g&s",
    price: 20,
  },
  {
    id: 2,
    title: "product name",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUVXERm3yWgAa9s5uAIG2et2PtD1mM-1n6g&s",
    price: 20,
  },
  {
    id: 3,
    title: "product name",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUVXERm3yWgAa9s5uAIG2et2PtD1mM-1n6g&s",
    price: 20,
  },
];

const allTypeProducts = [
  ...new Set(
    products.map((item) => {
      return item;
    })
  ),
];

let i = 0;
let k = 0;
document.getElementById("root").innerHTML = allTypeProducts
  .map((item) => {
    var { title, image, price } = item;

    return (
      `
  <div class="box_container">
    <div class="box">
      <img src=${image} class="box_image"></img>
    </div>
    <div class="button">
    <p>${title}</p>
    <h1>$ ${price}.00</h1>` +
      "<button onclick='addToCart(" +
      i++ +
      ")'>AddToBag</button>" +
      "<button onclick='WishList(" +
      k++ +
      ")'>WishList</button>" +
      `</div>
  </div>
  `
    );
  })
  .join();

var cart = [];
function addToCart(a) {
  cart.push({ ...allTypeProducts[a] });
  displayCartItems();
}

function WishList(a) {
  cart.push({ ...allTypeProducts[a] });
  addToWishListStore();
}

function delElement(a) {
  cart.splice(a, 1);
  displayCartItems();
}

function displayCartItems() {
  let j = 0;
  total = 0;
  document.getElementById("cart_count").innerHTML = cart.length;

  if (cart.length == 0) {
    document.getElementById("store_items").innerHTML = `Your cart is empty`;
    document.getElementById("total").innerHTML = "$" + 0 + ".00";
  } else {
    document.getElementById("item_store").innerHTML = cart
      .map((items) => {
        var { title, image, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$" + total + ".00";

        return (
          `
        <div class="addItems">
          <div>
            <img src=${image}></img>
            </div>
            <div class="cart_button">
              <p>${title}</p>
              <h1>${price}</h1>` +
          "<button onclick='delElement(" +
          j++ +
          ")'>Delete</button>" +
          `</div>
        </div>
        `
        );
      })
      .join();
  }
}

function addToWishListStore() {
  document.getElementById("WishList_count").innerHTML = cart.length;

  if (cart.length == 0) {
    document.getElementById(
      "addToWishList"
    ).innerHTML = `Your wishlist is empty`;
  } else {
    document.getElementById("store_wishlist").innerHTML = cart.map(
      (items) => {
        var { title, image, price } = items;

        return `
          <div class="wishlist_box">
            <div>
              <img src=${image}></img>
              </div>
              <div>
                <p>${title}</p>
                <h1>${price}</h1>
                </div>
            </div>
          `;
      }
    );
  }
}
</script> -->


<!-- <div class="cart_items">
<h1>My cart</h1>
<p id="store_items">Your cart is empty</p>
<div id="item_store"></div>
<div class="total">
  <h1>total</h1>
  <h1 id="total"></h1>
</div>
</div> -->
<!-- <div class="WishList">
<h1>My WishList</h1>
<p id="WishList_count"></p>
<p id="addToWishList">Your wishlist is empty</p>
<div id="store_wishlist"></div>
</div> -->