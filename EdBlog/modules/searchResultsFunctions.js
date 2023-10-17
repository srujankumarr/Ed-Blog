import { declarations } from './declarations.js'
import { feedbackData, roles, companies } from './data.js'
let searchResults = []
let page = 1

//Render Spinner
function renderSpinner(ele) {
    ele.innerHTML = ""
    const markup = `
    <div class="spinner">
                    <img class="spinner-img" src="img/spinner.gif" alt="">
                </div>
    `
    ele.insertAdjacentHTML('afterbegin', markup)
}

// Render Error 
function renderError(ele, msg) {
    ele.innerHTML = ""
    const markup = `
    <div class="error dark-items">
    <p class="error-message dark-items">Something Went Wrong! ${msg} </p>
</div>
    `
    ele.insertAdjacentHTML('afterbegin', markup)

}

//Render Page Buttons
function renderPageBtns() {
    declarations.nextBtn.classList.remove('hidden-btns')
}

//Render Search Results
const renderSearchResults = function (res) {
    const start = getPageNumbers()
    declarations.searchContainer.innerHTML = ""
    res.slice(start, start + declarations.resultsPerPage).forEach(feed => {
        const markup =
            `<a href="#${feed.id}">
                    <li class="search-item dark-items">
                        <p id='id' data-rid="${feed.id}" class="hidden"></p>
                        <img class="company-logo" src="img/${feed.company}.png" alt="">
                        <div class="search-item-data">
                            <p class="data company-name">${feed.company} ( ${feed.package} )</p>
                            <p class="data company-role">${feed.role}</p>
                        </div>
                    </li>
                    </a>
                    `
        declarations.searchContainer.insertAdjacentHTML('afterbegin', markup)
    })
}
const searchResultsRoles = function (val) {
    const res = feedbackData.filter(feed => {
        if (feed.role === val)
            return feed
    })
    return res
}

const searchResultsCompanies = function (val) {
    const res = feedbackData.filter(feed => {
        if (feed.company === val)
            return feed
    })
    return res
}
//Getting Page Number
const getPageNumbers = function () {
    return (page - 1) * declarations.resultsPerPage
}

export function searchBtnHandler(e) {
    e.preventDefault()
    try {
        page = 1
        window.location.hash = `#`
        renderSpinner(declarations.searchContainer)
        declarations.inputFormContainer.innerHTML = ""
        declarations.inputFormContainer.classList.add("hidden")
        const val = declarations.searchField.value
        declarations.searchField.value = ""
        declarations.expContainer.innerHTML = ""
        if (!val) throw new Error(`Enter Value`)
        if (roles.includes(val)) {
            searchResults = searchResultsRoles(val)
            renderSearchResults(searchResults)
        } else if (companies.includes(val)) {
            searchResults = searchResultsCompanies(val)
            renderSearchResults(searchResults)
        } else {
            throw new Error(`Enter Valid Input`)
        }
        renderPageBtns()
    } catch (err) {
        renderError(declarations.searchContainer, ` ${err.message}`)
    }
}

//PrevButton Handler
export function prevBtnHandler() {
    if (!searchResults.length) return
    page -= 1
    if (page == 1)
        declarations.prevBtn.classList.add('hidden-btns')
    if (searchResults.length / declarations.resultsPerPage >= page)
        declarations.nextBtn.classList.remove('hidden-btns')
    renderSearchResults(searchResults)
    declarations.nextBtn.textContent = `Page ${page + 1} →`
    declarations.prevBtn.textContent = `← Page ${page - 1}`
}

//Next Button Handler
export function nextBtnHandler() {
    if (!searchResults.length) return
    page += 1
    if (page > 1)
        declarations.prevBtn.classList.remove('hidden-btns')
    if (searchResults.length / declarations.resultsPerPage < page)
        declarations.nextBtn.classList.add('hidden-btns')
    renderSearchResults(searchResults)
    declarations.nextBtn.textContent = `Page ${page + 1} →`
    declarations.prevBtn.textContent = `← Page ${page - 1}`
}

