import { useEffect } from 'react'

type VideoType = {
    isIntersecting: boolean
    target: HTMLVideoElement
}

type VideoSourceType = {
    tagName: string
    src?: string
    dataset?: HTMLVideoElement
}

const createObserver = (lazyVideos: HTMLVideoElement[]) => {
    const lazyVideoObserver = new IntersectionObserver(entries => {
        entries.forEach((video: VideoType & IntersectionObserverEntry) => {
            if (video.isIntersecting) {
                // eslint-disable-next-line guard-for-in, no-restricted-syntax
                for (const source in video.target.children) {
                    const videoSource: VideoSourceType = video.target.children[source]
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
    lazyVideos.forEach(lazyVideo => {
        lazyVideoObserver.observe(lazyVideo)
    })
}

const handleLazyVideos = () => {
    const lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'))

    if (lazyVideos.length === 0) return
    if ('IntersectionObserver' in window) {
        createObserver(lazyVideos)
    }
}

export const useLazyVideo = () => {
    useEffect(() => {
        handleLazyVideos()
    }, [])
}
