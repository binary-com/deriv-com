import React from 'react'

const handleLazyVideos = () => {
    const lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'))

    if (lazyVideos.length === 0) return

    if ('IntersectionObserver' in window) {
        const lazyVideoObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (video) {
                if (video.isIntersecting) {
                    for (let source in video.target.children) {
                        const videoSource = video.target.children[source]
                        if (
                            typeof videoSource.tagName === 'string' &&
                            videoSource.tagName === 'SOURCE'
                        ) {
                            videoSource.src = videoSource.dataset.src
                        }
                    }

                    video.target.load()
                    video.target.classList.remove('lazy')
                    lazyVideoObserver.unobserve(video.target)
                }
            })
        })

        lazyVideos.forEach(function (lazyVideo) {
            lazyVideoObserver.observe(lazyVideo)
        })
    }
}

export const useLazyVideo = () => {
    React.useEffect(() => {
        handleLazyVideos()
    }, [])
}
