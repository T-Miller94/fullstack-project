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
                const userUpdate = document.querySelector('#user-update')
                const newTrans = document.querySelector('#new-trans-button')
                const deleteTrans = document.querySelector('#delete-trans')
                const stats = document.querySelector('#user-stats')
            const resultBox = document.querySelector('#results')

let currentuser = {}

//button functions
userSearch.addEventListener('click', userSearchButton)
newUser.addEventListener('click', newUserButton)
newTrans.addEventListener('click', newTransButton)
userUpdate.addEventListener('click', updateUserButton)
deleteTrans.addEventListener('click', deleteTransButton)

//callback functions
function userSearchButton() {
    let searchPopUp = document.createElement('div')
    searchPopUp.id = 'popup'
    searchPopUp.addEventListener('click', hidePopUp)
        let searchContainer = document.createElement('div')
        searchContainer.id = 'popup-container'
        searchContainer.classList.add('popup')
            let name = document.createElement('input')
                name.placeholder ='name'
                name.id = 'name'
                name.classList.add('search-bar')
            let id = document.createElement('input')
                id.placeholder = `id#`
                id.id = 'id'
                id.classList.add('search-bar')
            let password = document.createElement('input')
                password.placeholder = `password`
                password.id = 'password'
                password.classList.add('search-bar')
            let search = document.createElement('button')
                search.id = 'search'
                search.innerText = 'Search'
        let searchUi = document.createElement('div')
        searchUi.classList.add('search-ui')
        let head = document.createElement('h1')
        head.classList.add('head')
        head.id = 'search-head'
        head.innerText = 'Welcome Back'
        searchUi.append(name)
        searchUi.append(id)
        searchUi.append(password)
        searchUi.append(search)
        searchContainer.append(head)
        searchContainer.append(searchUi)
    searchPopUp.append(searchContainer)
    body.prepend(searchPopUp)

    search.addEventListener('click', () => {
        searchPopUp.remove()
        findUser(name.value, id.value, password.value)
    })    
}

function newUserButton() {
    let newUserPopUp = document.createElement('div')
    newUserPopUp.id = 'popup'
    newUserPopUp.addEventListener('click', hidePopUp)
        let newUserContainer = document.createElement('div')
        newUserContainer.id = 'popup-container'
        newUserContainer.classList.add('popup')
            let name = document.createElement('input')
                name.placeholder = `Enter Name`
                name.id = 'name'
                name.classList.add('search-bar')
            let password = document.createElement('input')
                password.placeholder = `Enter a Password`
                password.id = 'password'
                password.classList.add('search-bar')
            let email = document.createElement('input')
                email.placeholder = `Enter you email`
                email.id = 'email'
                email.classList.add('search-bar')
            let add = document.createElement('button')
                add.id = 'add-user'
                add.innerText = 'Add User'
        let searchUi = document.createElement('div')
        searchUi.classList.add('search-ui')
        let head = document.createElement('h1')
        head.classList.add('head')
        head.id = 'add-head'
        head.innerText = 'Enter Your Info Below'
        searchUi.append(name)
        searchUi.append(password)
        searchUi.append(email)
        searchUi.append(add)
    newUserContainer.append(head)
    newUserContainer.append(searchUi)
    newUserPopUp.append(newUserContainer)
    body.prepend(newUserPopUp)

    add.addEventListener('click', () => {
        newUserPopUp.remove()
        addUser(name.value, password.value, email.value)
    })
}

function updateUserButton() {
    let updatePopup = document.createElement('div')
    updatePopup.id = 'popup'
    updatePopup.addEventListener('click', hidePopUp)
        let updateUserContainer = document.createElement('div')
        updateUserContainer.id = 'popup-container'
        updateUserContainer.classList.add('popup')
            let name = document.createElement('input')
                name.placeholder = `${currentuser.name}`
                name.id = 'name'
                name.classList.add('search-bar')
            let password = document.createElement('input')
                password.placeholder = `${currentuser.password}`
                password.id = 'password'
                password.classList.add('search-bar')
            let email = document.createElement('input')
                email.placeholder = `${currentuser.email}`
                email.id = 'email'
                email.classList.add('search-bar')
            let update = document.createElement('button')
                update.id = 'add-user'
                update.innerText = 'Update'
        let searchUi = document.createElement('div')
        searchUi.classList.add('search-ui')
        let head = document.createElement('h1')
        head.classList.add('head')
        head.id = 'update-head'
        head.innerText = 'Enter Your New Info Below'
        searchUi.append(name)
        searchUi.append(password)
        searchUi.append(email)
        searchUi.append(update)
    updateUserContainer.append(head)
    updateUserContainer.append(searchUi)
    updatePopup.append(updateUserContainer)
    body.prepend(updatePopup)

    update.addEventListener('click', () => {
        updatePopup.remove()
        updateUser(name.value, password.value, email.value)
    })
}

function newTransButton() {
    let newTransPopup = document.createElement('div')
    newTransPopup.id = 'popup'
    newTransPopup.addEventListener('click', hidePopUp)
        let newTransContainer = document.createElement('div')
        newTransContainer.id = 'popup-container'
        newTransContainer.classList.add('popup')
            let money_in = document.createElement('input')
                money_in.placeholder = `Is Credit: true/false?`
                money_in.id = 'money_in'
                money_in.classList.add('search-bar')
            let kind = document.createElement('input')
                kind.placeholder = `Where's this from`
                kind.id = 'kind'
                kind.classList.add('search-bar')
            let amount = document.createElement('input')
                amount.placeholder = `How much? xxxx.xx`
                amount.id = 'amount'
                amount.classList.add('search-bar')
            let add = document.createElement('button')
                add.id = 'add'
                add.innerText = 'Add Transaction'
        let searchUi = document.createElement('div')
        searchUi.classList.add('search-ui')
        let head = document.createElement('h1')
        head.classList.add('head')
        head.id = 'new-trans-head'
        head.innerText = 'Enter Transaction Info Below'
        searchUi.append(money_in)
        searchUi.append(kind)
        searchUi.append(amount)
        searchUi.append(add)
    newTransContainer.append(head)
    newTransContainer.append(searchUi)
    newTransPopup.append(newTransContainer)
    body.prepend(newTransPopup)

    add.addEventListener('click', () => {
        newTransPopup.remove()
        addTrans(getBool(money_in.value), kind.value, Number(amount.value))
    })
    function getBool(str) {
        let workingStr = str.toLowerCase()
        if(workingStr === 'true') {
            return true
        } else if(workingStr === 'false') {
            return false
        }
    }
}

function deleteTransButton() {
    let deleteTransPopUp = document.createElement('div')
    deleteTransPopUp.id = 'popup'
    deleteTransPopUp.addEventListener('click', hidePopUp)
        let deleteTransrContainer = document.createElement('div')
        deleteTransrContainer.id = 'popup-container'
        deleteTransrContainer.classList.add('popup')
            let id = document.createElement('input')
                id.placeholder = 'Transaction ID#'
                id.id = 'id'
                id.classList.add('search-bar')
            let remove = document.createElement('button')
                remove.id = 'delete-trans'
                remove.innerText = 'Delete'
        let searchUi = document.createElement('div')
        searchUi.classList.add('search-ui')
        let head = document.createElement('h1')
        head.classList.add('head')
        head.id = 'new-trans-head'
        head.innerText = 'Enter Transaction ID Below'
        searchUi.append(id)
        searchUi.append(remove)
    deleteTransrContainer.append(head)
    deleteTransrContainer.append(searchUi)
    deleteTransPopUp.append(deleteTransrContainer)
    body.prepend(deleteTransPopUp)

    remove.addEventListener('click', () => {
        deleteTransPopUp.remove()
        removeTrans(Number(id.value))
    })
}

function hidePopUp(e) {
    if(e.target.id === 'popup') {
        e.currentTarget.remove()
    }
}

async function findUser(name, id, password) {
    $.get(`https://damp-taiga-73156.herokuapp.com/person/${id}`, (user) => {
        if(name === user[0].name && password === user[0].password) {
            currentuser.id = user[0].id
            currentuser.name = user[0].name
            currentuser.password = user[0].password
            currentuser.email = user[0].email
            $.get(`https://damp-taiga-73156.herokuapp.com/transactions-of/${id}`, (trans) => {
                $('#user-stats').empty()
                displayStats(currentuser)
                $('#results').empty()    
                for(let obj of trans) {
                    displayResult(obj)
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
        success: () => {
            currentuser.name = name
            currentuser.password = password
            currentuser.email = email
            displayStats(currentuser)
        },
        error: () => {console.log(error.message)}
    })
}

async function updateUser(name, password, email) {
    let messageBody =
    {
        "name": `${name}`,
        "password": `${password}`,
        "email": `${email}`
    }

    $.ajax({
        url: `https://damp-taiga-73156.herokuapp.com/person/${currentuser.id}`,
        type: 'PATCH',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(messageBody),
        success: () => {
            currentuser.name = name
            currentuser.password = password
            currentuser.email = email
            displayStats(currentuser)
        },
        error: () => {console.log(error.message)}
    })
}

async function addTrans(bool, kind, amount) {
    let messageBody =
    {
        "money_in": bool,
        "kind": `${kind}`,
        "amount": `${amount}`,
        "person_id": `${currentuser.id}`
    }

    $.ajax({
        url: `https://damp-taiga-73156.herokuapp.com/transactions`,
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(messageBody),
        success: () => {
            findUser(currentuser.name, currentuser.id, currentuser.password)
        },
        error: () => {console.log(error.message)}
    })
}

async function removeTrans (id) {
    $.ajax({
        url: `https://damp-taiga-73156.herokuapp.com/transactions/${id}`,
        type: 'DELETE',
        success: () => {
            findUser(currentuser.name, currentuser.id, currentuser.password)
        }
    })
}


function displayStats(user) {
    $('#user-stats').empty()
    let nameBlock = document.createElement('h2')
    let emailBlock = document.createElement('h4')
    
    nameBlock.innerText = `Hello, ${user.name}`
    emailBlock.innerText = `Current email on record: ${user.email}`

    stats.append(nameBlock)
    stats.append(emailBlock)
}

function displayResult(obj) {  
    let result = document.createElement('p1')
    result.innerText = `Transaction ID:${obj.trans_id} - ${isCredit(obj.money_in)} from ${obj.kind}, in the amount of $${obj.amount}`
    resultBox.append(result)
}

function isCredit(bool) {
    if(bool === true) {
        return `Credit`
    }
    if(bool === false) {
        return `Expense`
    }
}