import { declarations } from "./declarations.js"
export function fontBtn1Handler() {
    declarations.fontBtn1.classList.add('font-btn-active')
    declarations.fontBtn2.classList.remove('font-btn-active')
    declarations.fontBtn3.classList.remove('font-btn-active')
    declarations.fontBtn4.classList.remove('font-btn-active')
    declarations.root.style.setProperty('--font-size-small', `13px`)
    declarations.root.style.setProperty('--font-size-medium', `16px`)
    declarations.root.style.setProperty('--font-size-large', `19px`)
}
export function fontBtn2Handler() {
    declarations.fontBtn1.classList.remove('font-btn-active')
    declarations.fontBtn2.classList.add('font-btn-active')
    declarations.fontBtn3.classList.remove('font-btn-active')
    declarations.fontBtn4.classList.remove('font-btn-active')
    declarations.root.style.setProperty('--font-size-small', `16px`)
    declarations.root.style.setProperty('--font-size-medium', `19px`)
    declarations.root.style.setProperty('--font-size-large', `22px`)
}
export function fontBtn3Handler() {
    declarations.fontBtn1.classList.remove('font-btn-active')
    declarations.fontBtn2.classList.remove('font-btn-active')
    declarations.fontBtn3.classList.add('font-btn-active')
    declarations.fontBtn4.classList.remove('font-btn-active')
    declarations.root.style.setProperty('--font-size-small', `19px`)
    declarations.root.style.setProperty('--font-size-medium', `22px`)
    declarations.root.style.setProperty('--font-size-large', `25px`)
}
export function fontBtn4Handler() {
    declarations.fontBtn1.classList.remove('font-btn-active')
    declarations.fontBtn2.classList.remove('font-btn-active')
    declarations.fontBtn3.classList.remove('font-btn-active')
    declarations.fontBtn4.classList.add('font-btn-active')
    declarations.root.style.setProperty('--font-size-small', `22px`)
    declarations.root.style.setProperty('--font-size-medium', `25px`)
    declarations.root.style.setProperty('--font-size-large', `27px`)
}

