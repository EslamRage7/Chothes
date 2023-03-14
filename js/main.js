let span = document.querySelector(".top");
window.onscroll = function () {
  if (this.scrollY >= 500) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

let i = 2;
$(".add").click(function () {
  i++;
  $(".value").text(`${i}`);
});

$(`.like`).click(function () {
  $(this).toggleClass(`heart`);
});
