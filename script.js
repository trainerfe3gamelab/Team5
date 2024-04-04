const b1 = document.querySelector(".bintang1");
const b2 = document.querySelector(".bintang2");
const b3 = document.querySelector(".bintang3");
const b4 = document.querySelector(".bintang4");
const b5 = document.querySelector(".bintang5");

b1.addEventListener("click", function () {
  if (b1.classList.contains("bx-star")) {
    b1.classList.add("bxs-star");
    b1.classList.remove("bx-star");
  } else {
    b2.classList.add("bx-star");
    b2.classList.remove("bxs-star");
    b3.classList.add("bx-star");
    b3.classList.remove("bxs-star");
    b4.classList.add("bx-star");
    b4.classList.remove("bxs-star");
    b5.classList.add("bx-star");
    b5.classList.remove("bxs-star");
  }
});

b2.addEventListener("click", function () {
  if (b2.classList.contains("bx-star")) {
    b2.classList.add("bxs-star");
    b2.classList.remove("bx-star");
    b1.classList.add("bxs-star");
    b1.classList.remove("bx-star");
  } else {
    b3.classList.add("bx-star");
    b3.classList.remove("bxs-star");
    b4.classList.add("bx-star");
    b4.classList.remove("bxs-star");
    b5.classList.add("bx-star");
    b5.classList.remove("bxs-star");
  }
});

b3.addEventListener("click", function () {
  if (b3.classList.contains("bx-star")) {
    b3.classList.add("bxs-star");
    b3.classList.remove("bx-star");
    b2.classList.add("bxs-star");
    b2.classList.remove("bx-star");
    b1.classList.add("bxs-star");
    b1.classList.remove("bx-star");
  } else {
    b4.classList.add("bx-star");
    b4.classList.remove("bxs-star");
    b5.classList.add("bx-star");
    b5.classList.remove("bxs-star");
  }
});

b4.addEventListener("click", function () {
  if (b4.classList.contains("bx-star")) {
    b4.classList.add("bxs-star");
    b4.classList.remove("bx-star");
    b3.classList.add("bxs-star");
    b3.classList.remove("bx-star");
    b2.classList.add("bxs-star");
    b2.classList.remove("bx-star");
    b1.classList.add("bxs-star");
    b1.classList.remove("bx-star");
  } else {
    b5.classList.add("bx-star");
    b5.classList.remove("bxs-star");
  }
});

b5.addEventListener("click", function () {
  if (b5.classList.contains("bx-star")) {
    b5.classList.add("bxs-star");
    b5.classList.remove("bx-star");
    b4.classList.add("bxs-star");
    b4.classList.remove("bx-star");
    b3.classList.add("bxs-star");
    b3.classList.remove("bx-star");
    b2.classList.add("bxs-star");
    b2.classList.remove("bx-star");
    b1.classList.add("bxs-star");
    b1.classList.remove("bx-star");
  }
});
