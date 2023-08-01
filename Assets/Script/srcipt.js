let username = [] //dynamic array

const addBtnEl = document.getElementById('addBtn')
const userListEl = document.getElementById('userList')
const liEl = document.createElement('li')
const addToListEl = document.getElementById('addToList')



// console.log(username)
// username.push('admin04')
// username.push('admin05')
// console.log(username)
// username.pop()
// username.pop()
// console.log(username)
// username.unshift('admin00')
// console.log(username)
// username.shift()
// console.log(username)

addBtnEl.addEventListener('click', function(){
    username = []
    let newInput = addToListEl.value
    username.push(newInput)

    // for( let i in username){
    //         userListEl.innerHTML += username[i]
    // }


    // userListEl.appendChild(liEl)
     for( let i in username){
            userListEl.innerHTML += `<li style="margin-left:20px"> ${username[i]}</li>`
    }
    addToListEl.value = '' 

})