import { declarations } from "./modules/declarations.js";
import { userBtnHandler, shareBtnHandler } from './modules/userBlogFunctions.js';
import { searchBtnHandler, prevBtnHandler, nextBtnHandler } from './modules/searchResultsFunctions.js';
import { newblogBtnHandler, hashChangeHandler, DOMContentLoadedHandler } from "./modules/feedbackFunctions.js";
import { modeBtnDarkHandler, modeBtnLightHandler } from "./modules/modes.js";
import { fontBtn1Handler, fontBtn2Handler, fontBtn3Handler, fontBtn4Handler } from "./modules/fontsizeFunctions.js";


//------------------------------------- Search Results -------------------------------
declarations.searchBtn.addEventListener('click', searchBtnHandler)

declarations.nextBtn.addEventListener('click', nextBtnHandler)

declarations.prevBtn.addEventListener('click', prevBtnHandler)

//-------------------------------------- User Btn ---------------------------------
declarations.userBtn.addEventListener('click', userBtnHandler)

declarations.userBtnMob.addEventListener('click', userBtnHandler)

//-------------------------------------- Share Btn ----------------------------------
declarations.shareBtnMob.addEventListener('click', shareBtnHandler)

declarations.shareBtn.addEventListener('click', shareBtnHandler)

//------------------------------------- Modes ------------------------------------------
declarations.modeBtnLight.addEventListener('click', modeBtnLightHandler)

declarations.modeBtnDark.addEventListener('click', modeBtnDarkHandler)

//---------------------------------- Font Buttons -----------------------------------------
declarations.fontBtn1.addEventListener('click', fontBtn1Handler)

declarations.fontBtn2.addEventListener('click', fontBtn2Handler)

declarations.fontBtn3.addEventListener('click', fontBtn3Handler)

declarations.fontBtn4.addEventListener('click', fontBtn4Handler)

declarations.newblogBtn.addEventListener('click', newblogBtnHandler)

//---------------------------------------- Experience ----------------------------------------
window.addEventListener('DOMContentLoaded', DOMContentLoadedHandler)

window.addEventListener('hashchange', hashChangeHandler)

declarations.searchContainer.addEventListener('click', function (e) {
    e.preventDefault()
    const ele = e.target
    const res = ele.closest('.search-item')
    const id = res.querySelector('#id').dataset.rid
    if (!id) return
    window.location.hash = `#${id}`
})

window.addEventListener('click', function () {
    console.clear()
})