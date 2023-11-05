const user1 = document.querySelector('.user1')
const user2 = document.querySelector('.user2')
const user3 = document.querySelector('.user3')
console.log(user1, user2, user3)
const user1info = {
    "id": "Vasya",
    "email": "vasya@gmail.com",
    "username": "Vasya"
  }

const user2info = {
    "id": "Petro",
    "email": "petro@gmail.com",
    "username": "Petro"
}
const user3info = {
    "id": "Olezha",
    "email": "olezha@gmail.com",
    "username": "Olezha"
  }

user1.addEventListener('click', () => {
    console.log("User:1")
    localStorage.setItem("user", JSON.stringify(user1info));
})

user2.addEventListener('click', () => {
    console.log("User:2")
    localStorage.setItem("user", JSON.stringify(user2info));
})

user3.addEventListener('click', () => {
    console.log("User:3")
    localStorage.setItem("user", JSON.stringify(user3info));
})