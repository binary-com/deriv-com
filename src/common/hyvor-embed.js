import React from 'react'
import PropTypes from 'prop-types'

function addScript(src, id) {
    var script = document.createElement('script')
    script.src = src
    script.id = id

    document.body.appendChild(script)
}

function removeScript(id) {
    var script = document.getElementById(id)
    if (id) {
        script.parentElement.removeChild(script)
    }
}

/**
 * Embeds Hyvor Talk thread on a web page
 */
const Embed = (props) => {
    React.useEffect(() => {
        setVariables()
        addHyvorScript()
    }, [])

    const setVariables = () => {
        window.HYVOR_TALK_WEBSITE = props.websiteId
        window.HYVOR_TALK_CONFIG = {
            url: props.url || false,
            id: props.id || false,
            title: props.title || document.title,
            loadMode: props.loadMode || 'default',
            language: props.language || null,
            sso: props.sso || null,
            palette: props.palette || null,
        }
    }

    const addHyvorScript = () => {
        if (document.getElementById('ht-embed-script')) {
            removeScript('ht-embed-script')
        }
        addScript('//talk.hyvor.com/web-api/embed', 'ht-embed-script')
    }

    return <div id="hyvor-talk-view" />
}

export default Embed

Embed.propTypes = {
    id: PropTypes.any,
    language: PropTypes.string,
    loadMode: PropTypes.any,
    palette: PropTypes.object,
    sso: PropTypes.object,
    title: PropTypes.string,
    url: PropTypes.any,
    websiteId: PropTypes.number.isRequired,
}
