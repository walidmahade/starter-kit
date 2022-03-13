import $ from "jquery";

$("button").click(function (e) {
  $("body").append("<h2>Hello World</h2>");
});

$("body").css("background-color", "green");

// class Header {
//   constructor() {
//     this.btn = document.querySelector("button");
//     this.init();
//   }

//   init() {
//     this.btn.addEventListener("click", this.onClick.bind(this));
//   }

//   onClick() {
//     console.log("Hello World xxxx");
//   }
// }

// export default Header;
