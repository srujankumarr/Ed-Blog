import { declarations } from "./declarations.js"
export function modeBtnLightHandler() {
    declarations.modeBtnLight.classList.add('hidden')
    declarations.modeBtnDark.classList.remove('hidden')
    // declarations.root.style.setProperty('--background', '#00bcd4')
    declarations.root.style.setProperty('--background', '#eff0f6')
    declarations.root.style.setProperty('--background-items', '#ffffff')
    declarations.root.style.setProperty('--color', '#000000')
}

export function modeBtnDarkHandler() {
    declarations.modeBtnDark.classList.add('hidden')
    declarations.modeBtnLight.classList.remove('hidden')
    declarations.root.style.setProperty('--background', '#000000')
    declarations.root.style.setProperty('--background-items', '#191c24')
    declarations.root.style.setProperty('--color', '#ffffff')
}
