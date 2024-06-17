// Example 1
// this.name = "Khoa";

// function Person(name) {
//   this.name = name;
//   this.showName = function () {
//     console.log(this.name);
//   };
// }

// const person = new Person("Na");
// const showPersonName = person.showName.bind(person);

// showPersonName();
// person.showName();

// Example 2
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const app = (() => {
//   const cars = ["BMW"];

//   const button = $("#add-car-btn");
//   const input = $("#car-input");
//   const list = $("#car-list");

//   return {
//     add(car) {
//       // this will refer to the object return by IIFE
//       console.log(this);
//       cars.push(car);
//     },
//     delete(index) {
//       cars.splice(index, 1);
//     },
//     render() {
//       const html = `<ul>
//         ${cars
//           .map(
//             (car, index) =>
//               `<li>
//             ${car}
//             <span class="delete" data-index="${index}">&times</span>
//           </li>`,
//           )
//           .join("")}
//       </ul>`;
//       $("#car-list").innerHTML = html;
//     },
//     handleDelete(e) {
//       const deleteBtn = e.target.closest(".delete");
//       if (deleteBtn) {
//         // can access data-attribute using dataset.attribute
//         const index = deleteBtn.dataset.index;
//         this.delete(index);
//         this.render();
//       }
//     },
//     init() {
//       // this will refer to "button", to access this in the return object context, not "button" context, should using arrow function
//       // solution 1:
//       // const _this = this;
//       // button.onclick = function () {
//       //   _this.add(input.value);
//       //   _this.render();
//       // };

//       // solution 2:
//       button.onclick = () => {
//         this.add(input.value);
//         this.render();

//         input.value = null;
//         input.focus();
//       };

//       // bind to this because if not, the this in handleDelete function will refer to list object
//       list.onclick = this.handleDelete.bind(this);

//       this.render();
//     },
//   };
// })();

// app.init();

// Example 3
// const obj = {
//   keyOne: 1,
//   keyTwo: 2,

//   log(a, b) {
//     console.log(`${this.keyOne} ${this.keyTwo}`);
//   },
// };

// // Can use bind with default parameter
// const logFunc = obj.log.bind(obj, 3, 4); // 3 4
// logFunc(1, 2); // 3 4
