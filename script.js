// let title = document.querySelector("#bigBoy");

// document.addEventListener("DOMContentLoaded", function() {
//   document.body.addEventListener("scroll", function() {
//     let pos = window.scrollY;
//     console.log(pos);
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.body.addEventListener("scroll", function() {
//     let pos = window.scrollY;
//     console.log(pos);
//   });
// });
// SEARCHBAR JS
// const searchInputWrapper = document.querySelector(".search-input-wrapper");
// const searchInput = document.querySelector("search-input input");
// const searchIcon = document.querySelector(".search-icon i");
// const closeIcon = document.querySelector(".search-input i");

// searchIcon.addEventListener("click", () => {
//   searchIcon.parentElement.classList.add("change");
//   searchInputWrapper.classList.add("change");

//   setTimeout(() => {
//     searchInput.focus();
//   }, 1000);
// });

// closeIcon.addEventListener("click", () => {
//   searchIcon.parentElement.classList.remove("change");
//   searchInputWrapper.classList.remove("change");
// });





// faq page

document.addEventListener("DOMContentLoaded", function() {
  const faqs = document.querySelectorAll(".faqContainer");

  faqs.forEach(faq =>{
    console.log("bob")
    faq.addEventListener("click", ()=> {
      faq.classList.toggle("active")
    })
  })
});