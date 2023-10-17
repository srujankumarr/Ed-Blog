const root = document.documentElement
const searchContainer = document.querySelector('.results')
const searchBtn = document.querySelector('.search-btn')
const searchField = document.querySelector('.search-field')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const expContainer = document.querySelector('.experience-container')
const userBtn = document.querySelector('.btn-myblog')
const modeBtnLight = document.querySelector('.btn-mode-light')
const modeBtnDark = document.querySelector('.btn-mode-dark')
const submitFormBtn = document.querySelector('.submit-btn')
const inputFormContainer = document.querySelector('.input-container')
const newblogBtn = document.querySelector('.btn-new-blog')
const fontBtn1 = document.querySelector('.font-btn-1')
const fontBtn2 = document.querySelector('.font-btn-2')
const fontBtn3 = document.querySelector('.font-btn-3')
const fontBtn4 = document.querySelector('.font-btn-4')
const shareBtn = document.querySelector('.share-btn')
const resultsPerPage = 10

export const declarations = {
    root,
    searchContainer,
    searchBtn, searchField,
    prevBtn, nextBtn,
    expContainer,
    userBtn,
    modeBtnDark, modeBtnLight,
    fontBtn1, fontBtn2, fontBtn3, fontBtn4,
    resultsPerPage,
    submitFormBtn,
    inputFormContainer, newblogBtn, shareBtn
}
