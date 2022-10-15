// setTimeout(() => { console.log("merhaba"); }, 5000);

// setInterval(() => {
//     console.log("Merhaba ben her saniye çalışacağım");
// }, 10);

// const sayHi = (cb) => {
//     cb();
// }

// sayHi(() => {
//     console.log("Hello");
// });

import fetch from 'node-fetch';
import axios from 'axios';

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(data => data.json())
//     .then(users => {
//         console.log(users)
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(data => data.json())
//         .then(posts => {
//             console.log("Post 1 geldi !" ,posts)
//             fetch("https://jsonplaceholder.typicode.com/posts/2")
//             .then(data => data.json())
//             .then(posts => {
//                 console.log("Post 2 geldi !" ,posts)
//             });
//         });
//     });

// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     console.log(users);

//     const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     console.log(posts);

//     const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
//     console.log(post);
// }

// getData();

// async function getData() {
//     const users = await axios("https://jsonplaceholder.typicode.com/users");
//     console.log(users);
// }
// getData();

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number === 1) {
//             resolve({text: "Selam"});
//         }   

//         reject("Bir problem olustu");
//     });
// };

// getComments(2).then(data => console.log(data)).catch((e) => console.log(e));

// const Student = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };

// const student1 = new Student(12,13);

// console.log(student1.height);

// const users = axios("https://jsonplaceholder.typicode.com/users").then(data => console.log(data));

// const getPost = (number) => {
//     return new Promise(async (revolve, reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + number);
//         revolve(data);
//         reject("Bir sorun oldu");
//     });
// };

// console.log(await getPost());

// function sayHello(name) {
//     console.log(`Hello ${name}`);
// }

// function tryCallback(callback) {
//     const name = "emre";
//     callback(name);
// }

// tryCallback(sayHello);

