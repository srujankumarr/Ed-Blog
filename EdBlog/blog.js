import { declarations } from "./modules/declarations.js";
import { userBtnHandler } from './modules/userBlogFunctions.js';
import { searchBtnHandler, prevBtnHandler, nextBtnHandler } from './modules/searchResultsFunctions.js';
import { newblogBtnHandler, hashChangeHandler, DOMContentLoadedHandler } from "./modules/feedbackFunctions.js";
import { modeBtnDarkHandler, modeBtnLightHandler } from "./modules/modes.js";
import { fontBtn1Handler, fontBtn2Handler, fontBtn3Handler, fontBtn4Handler } from "./modules/fontsizeFunctions.js";

declarations.searchBtn.addEventListener('click', searchBtnHandler)
declarations.nextBtn.addEventListener('click', nextBtnHandler)
declarations.prevBtn.addEventListener('click', prevBtnHandler)
declarations.userBtn.addEventListener('click', userBtnHandler)
declarations.modeBtnLight.addEventListener('click', modeBtnLightHandler)
declarations.modeBtnDark.addEventListener('click', modeBtnDarkHandler)
declarations.fontBtn1.addEventListener('click', fontBtn1Handler)
declarations.fontBtn2.addEventListener('click', fontBtn2Handler)
declarations.fontBtn3.addEventListener('click', fontBtn3Handler)
declarations.fontBtn4.addEventListener('click', fontBtn4Handler)
declarations.newblogBtn.addEventListener('click', newblogBtnHandler)
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
declarations.shareBtn.addEventListener('click', function () {
    const url = window.location.href
    console.log(url);
    const title = 'Ed Blog';
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
})