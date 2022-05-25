//declarations
const body = document.querySelector('body')
const main = document.querySelector('#main')
    const head = document.querySelector('#head-container')
    const bodyContainer = document.querySelector('#body-container')
        const userContainer = document.querySelector('#user-container')
            const userSearch = document.querySelector('#user-search')
            const newUser = document.querySelector('#new-user')
        const mainUiContainer = document.querySelector('main-ui-container')
            const mainUi = document.querySelector('#main-ui')
                const searchBar = document.querySelector('#search-filter')
                const newTrans = document.querySelector('#new-trans-button')
                const stats = document.querySelector('#user-stats')
            const resultBox = document.querySelector('#results')

//button functions
userSearch.addEventListener('click', userSearchButton)
newUser.addEventListener('click', newUserButton)
newTrans.addEventListener('click', newTransButton)

//callback functions
function userSearchButton() {
    let searchPopUp = document.createElement('div')
    searchPopUp.id = 'popup'
    searchPopUp.addEventListener('click', hidePopUp)
        let searchContainer = document.createElement('div')
        searchContainer.id = 'popup-container'
            let name = document.createElement('input')
                name.id = 'name'
                name.classList.add('search-bar')
            let id = document.createElement('input')
                id.id = 'id'
                id.classList.add('search-bar')
            let password = document.createElement('input')
                password.id = 'password'
                password.classList.add('search-bar')
            let search = document.createElement('button')
                search.id = 'search'
                search.innerText = 'Search'
        searchContainer.append(name)
        searchContainer.append(id)
        searchContainer.append(password)
        searchContainer.append(search)
    searchPopUp.append(searchContainer)
    body.prepend(searchPopUp)

    search.addEventListener('click', () => findUser(name.value, id.value, password.value))
}

function newUserButton() {
    let newUserPopUp = document.createElement('div')
    newUserPopUp.id = 'popup'
    newUserPopUp.addEventListener('click', hidePopUp)
        let newUserContainer = document.createElement('div')
        newUserContainer.id = 'popup-container'
            let name = document.createElement('input')
                name.id = 'name'
                name.classList.add('search-bar')
            let password = document.createElement('input')
                password.id = 'password'
                password.classList.add('search-bar')
            let email = document.createElement('input')
                email.id = 'email'
                email.classList.add('search-bar')
            let add = document.createElement('button')
                add.id = 'add-user'
                add.innerText = 'Add User'
        newUserContainer.append(name)
        newUserContainer.append(password)
        newUserContainer.append(email)
        newUserContainer.append(add)
    newUserPopUp.append(newUserContainer)
    body.prepend(newUserPopUp)

    add.addEventListener('click', () => addUser(name.value, password.value, email.value))
}

function newTransButton() {
    let newTransPopup = document.createElement('div')
    newTransPopup.id = 'popup'
    newTransPopup.addEventListener('click', hidePopUp)
        let newTransContainer = document.createElement('div')
        newTransContainer.id = 'popup-container'
            let money_in = document.createElement('input')
                money_in.id = 'money_in'
                money_in.classList.add('search-bar')
            let kind = document.createElement('input')
                kind.id = 'kind'
                kind.classList.add('search-bar')
            let amount = document.createElement('input')
                amount.id = 'amount'
                amount.classList.add('search-bar')
            let person_id = document.createElement('input')
                person_id.id = 'person_id'
                person_id.classList.add('search-bar')
            let add = document.createElement('button')
                add.id = 'add'
                add.innerText = 'Add Transactionr'
        newTransContainer.append(money_in)
        newTransContainer.append(kind)
        newTransContainer.append(amount)
        newTransContainer.append(person_id)
        newTransContainer.append(add)
    newTransPopup.append(newTransContainer)
    body.prepend(newTransPopup)
}

function hidePopUp(e) {
    if(e.target.id === 'popup') {
        e.currentTarget.remove()
    }
}

async function findUser(name, id, password) {
    $.get(`https://damp-taiga-73156.herokuapp.com/person/${id}`, (user) => {
        if(name === user[0].name && password === user[0].password) {
            $.get(`https://damp-taiga-73156.herokuapp.com/transactions/${id}`, (trans) => {
                let list = trans
                for (let item of trans) {

                }

            })
        }
    })
}

async function addUser(name, password, email) {
    let messageBody =
    {
        "name": `${name}`,
        "password": `${password}`,
        "email": `${email}`
    }

    $.ajax({
        url: `https://damp-taiga-73156.herokuapp.com/person`,
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(messageBody),
        success: () => {console.log(`${name} ${email}`)},
        error: () => {console.log(error.message)}
    })
}

function displayResult(res) {
    resultBox.empty()
    for(let item in res) {
        let result = document.createElement("p1")
        result.innerText = `Transaction ID${item.trans_id}: ${isCredit(item.money_in)} from ${item.kind}, in the amount of ${item.amount}`
        resultBox.append(result)
    }
}

function isCredit(bool) {
    if(bool === true) {
        return `Credit`
    }
    if(bool === false) {
        return `Expense`
    }
}