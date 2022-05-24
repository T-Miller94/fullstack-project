//declarations
const body = document.querySelector('body')
const userSearch = document.querySelector('#user_search')
const newUser = document.querySelector('#new_user')
const stats = document.querySelector('#user_stats')
const searchBar = document.querySelector('#search_bar')
const resultBox = document.querySelector('#results')

//button functions
userSearch.addEventListener('click', userSearchButton)
newUser.addEventListener('click', newUserButton)

//callback functions
function userSearchButton() {
    console.log('Working')
}

function newUserButton() {
    console.log('also working')
}