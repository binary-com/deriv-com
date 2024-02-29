setTimeout(() => {
    var hash = 'fx'

    var onTabChange = (newHash) => {
        document.getElementById('#' + hash).classList.remove('active-cards')
        document.getElementById(hash).classList.remove('active-tab')
        window.location.hash = newHash
        hash = newHash
        document.getElementById('#' + newHash).classList.add('active-cards')
        document.getElementById(newHash).classList.add('active-tab')
    }
    var tabs = ['fx', 'der', 'etfs', 'stk', 'cry', 'com']
    setTimeout(() => {
        tabs.map((tabId) => {
            document.getElementById(tabId).addEventListener('click', function () {
                onTabChange(tabId)
            })
        })
        document.getElementById('#' + hash).classList.add('active-cards')
        document.getElementById(hash).classList.add('active-tab')
    }, 500)

    var upIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    upIcon.setAttribute('width', '24')
    upIcon.setAttribute('height', '24')
    upIcon.setAttribute('viewBox', '0 0 24 24')
    upIcon.setAttribute('fill', '#00bb86')
    upIcon.innerHTML = `<path d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"/>`

    var downIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    downIcon.setAttribute('width', '24')
    downIcon.setAttribute('height', '24')
    downIcon.setAttribute('viewBox', '0 0 24 24')
    downIcon.setAttribute('fill', '#DE0040')
    downIcon.innerHTML = `<path d="M21.3125 19.6875C20.9375 19.875 20.5 19.7188 20.3125 19.3438L17.5312 13.75H13C12.6875 13.75 12.4375 13.5938 12.3125 13.3438L8.65625 6.03125L3.3125 8.6875C2.9375 8.875 2.5 8.71875 2.3125 8.34375C2.125 7.96875 2.28125 7.53125 2.65625 7.34375L8.65625 4.34375C9.03125 4.15625 9.46875 4.3125 9.65625 4.6875L13.4375 12.25H17.9688C18.2812 12.25 18.5312 12.4375 18.6562 12.6875L21.6562 18.6875C21.8438 19.0625 21.6875 19.5 21.3125 19.6875Z"/>`

    function fetchData() {
        fetch('https://deriv-static-pricingfeedv2.firebaseio.com/.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                const forexData = data.eu.mkt[hash]
                if (!forexData) {
                    throw new Error('No data available')
                }
                var chngElements = document.querySelectorAll(`.percent-change.${hash}`)
                var bidElements = document.querySelectorAll(`.bid.${hash}`)
                var askElements = document.querySelectorAll(`.ask.${hash}`)
                var sprdElements = document.querySelectorAll(`.spread.${hash}`)

                var iconElements = document.querySelectorAll(`.content-top_change-image.${hash}`)

                var index = 0
                for (const key in forexData) {
                    if (index >= 4) break
                    const currency = forexData[key]
                    console.log(currency)

                    chngElements[index].textContent = currency.chng
                    bidElements[index].textContent = currency.bid
                    askElements[index].textContent = currency.ask

                    var change = parseFloat(currency.chng)
                    if (change > 0) {
                        chngElements[index].style.color = '#00bb86'
                        bidElements[index].style.color = '#00bb86'
                        askElements[index].style.color = '#00bb86'
                    } else if (change < 0) {
                        chngElements[index].style.color = '#DE0040'
                        bidElements[index].style.color = '#DE0040'
                        askElements[index].style.color = '#DE0040'
                    } else {
                        chngElements[index].style.color = '#00bb86'
                        bidElements[index].style.color = '#00bb86'
                        askElements[index].style.color = '#00bb86'
                    }

                    sprdElements[index].textContent = currency.sprd

                    if (index < iconElements.length) {
                        var icon = change === 0 ? 'remain' : change > 0 ? 'up' : 'down'
                        var selectedIcon =
                            icon === 'up' ? upIcon.cloneNode(true) : downIcon.cloneNode(true)

                        iconElements[index].innerHTML = ''
                        iconElements[index].appendChild(selectedIcon)
                    }

                    index++
                }
            })
            .catch((error) => {
                console.error('error', error)
            })
    }

    setInterval(fetchData, 5000)
}, 500)
