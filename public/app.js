//declarations
const body = document.querySelector('body')
const main = document.querySelector('#main')
const userSearch = document.querySelector('#user-search')
const newUser = document.querySelector('#new-user')
const stats = document.querySelector('#user-stats')
const searchBar = document.querySelector('#search-bar')
const resultBox = document.querySelector('#results')

//button functions
userSearch.addEventListener('click', userSearchButton)
newUser.addEventListener('click', newUserButton)

//callback functions
function userSearchButton() {
    let searchPopUp = document.createElement('div')
    searchPopUp.id = 'user-popup'
        let searchContainer = document.createElement('div')
        searchContainer.id = 'search-container'
            let name = document.createElement('input')
                name.id = 'name'
            let password = document.createElement('input')
                password.id = 'password'
            let email = document.createElement('input')
                email.id = 'email'
            let search = document.createElement('button')
                search.id = 'search'
                search.innerText = 'Search'
            searchContainer.append(name)
            searchContainer.append(password)
            searchContainer.append(email)
            searchContainer.append(search)
        searchPopUp.append(searchContainer)
    body.prepend(searchPopUp)
    
}

function newUserButton() {
    console.log('also working')
}