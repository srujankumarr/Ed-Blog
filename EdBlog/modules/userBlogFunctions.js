import { declarations } from './declarations.js'
import { feedbackData } from './data.js'
let page = 1

//Render User Blog Results
function renderUserResults(res) {
    const start = 500
    declarations.searchContainer.innerHTML = ""
    declarations.inputFormContainer.classList.add("hidden")
    declarations.expContainer.innerHTML = ""
    res.slice(start, start + declarations.resultsPerPage).forEach(feed => {
        const markup =
            `<a href="#">
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

//Hide Page Btns
export function hidePageBtns() {
    declarations.prevBtn.classList.add('hidden-btns')
    declarations.nextBtn.classList.add('hidden-btns')
}

//UserBtn Handlers
export function userBtnHandler() {
    window.location.hash = `#`
    declarations.searchContainer.innerHTML = ""
    declarations.expContainer.innerHTML = ""
    page = 1
    renderUserResults(feedbackData)
    hidePageBtns()
}

//Share Btn Handler
export function shareBtnHandler() {
    const url = window.location.href
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600');
}