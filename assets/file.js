AOS.init();

// const form = document.querySelector(".form");
// const userName = document.querySelector("#fname");
// const userEmail = document.querySelector("#email");
// const userNumber = document.querySelector("#number");
// const userMessage = document.querySelector("#subject");

// // Make post request
// const postUser = async (data = {}) => {
//   const response = await fetch("http://localhost:5000", {
//     method: "POST",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   try {
//     const responseData = await response.json();
//     if ((response.status = 200)) {
//       alert(responseData.msg);
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Collect form data
//   let user = {
//     name: userName.value,
//     email: userEmail.value,
//     number: userNumber.value,
//     message: userMessage.value,
//   };

//   postUser(user);
//   (userName.value = ""),
//     (userEmail.value = ""),
//     (userNumber.value = ""),
//     (userMessage.value = "");
// });

// Initialize Animate on Scroll
