const useScrollToElement = (targetElement: string, offset = 0) => {
    const clickToScrollHandler = () => {
        const element = document.getElementById(targetElement)
        if (element) {
            window.scrollTo({
                top: element.offsetTop + offset,
                left: 0,
                behavior: 'smooth',
            })
        }
    }
    return clickToScrollHandler
}

export default useScrollToElement
