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

const CommentCount = (props) => {
    const setVariables = () => {
        if (props.websiteId) {
            window.HYVOR_TALK_WEBSITE = props.websiteId
        }
    }

    React.useEffect(() => {
        setVariables()

        var scriptId = 'ht-comment-count-script'
        if (document.getElementById(scriptId)) {
            removeScript(scriptId)
        }

        addScript('//talk.hyvor.com/web-api/count/', scriptId)
    }, [])

    return <span data-talk-id={props.id} mode={props.mode || 'default'} />
}

export default CommentCount

CommentCount.propTypes = {
    id: PropTypes.any,
    mode: PropTypes.any,
    websiteId: PropTypes.number,
}
