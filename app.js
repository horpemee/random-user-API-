import get from "./utils/getElement.js";
import fetchUser from "./utils/apifetch.js";

const img = get(".display");
const btn = get(".random-user");
const heading = get(".heading");
const paragraph = get(".paragraph");
const icons = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  img.src = person.img;
  paragraph.textContent = `My name is`;
  heading.textContent = person.name;

  // icons[0].classList.add("active");
  icons.forEach((icon) => {
    const label = icon.dataset.label;
    icon.addEventListener("click", () => {
      paragraph.textContent = `My ${label} is`;
      heading.textContent = person[label];
      // console.log(person[label]);
    });

    // //     return
  });
};
const showUser = async () => {
  const person = await fetchUser();
  // fetchUser().then((data) => console.log(data));
  displayUser(person);
};
window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);

// // fetchUser();

// const displayRandomUser = (users) => {
//   const randomUser = users.map((user) => {
//     // picture, name, email,birthday,address, phone, password
//     const { title: name } = results.name;
//     const { age } = results.dob;
//     const { phone } = reults.registered;
//     const { password } = results.login;
//     const { street } = results.location;
//     const { email } = results;
//     const { url: img } = results.picture;

//     const displayContent = document.querySelector(".display-content");

//     return;

//     // <img src="${img}" alt="" />;
//   });
// };

// const displayFinal = async () => {
//   const data = await fetchUser();
//   displayRandomUser(data);
// };
// displayFinal();
