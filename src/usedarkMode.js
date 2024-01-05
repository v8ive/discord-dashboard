

const usedarkMode = () => {
    let isdark = Boolean
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        isdark = true
    } else {
        document.documentElement.classList.remove('dark')
        isdark = false
    }
    return isdark
}

export default usedarkMode;
