import React from 'react'
import { Helmet } from 'react-helmet'
import { isBrowser } from 'common/utility'

const Recruit = () => {
    const loadZohoScript = (callback) => {
        const script = document.createElement('script')
        script.src =
            'https://js.zohostatic.com/recruit/embed_careers_site/javascript/v1.0/embed_jobs.js'
        script.id = 'zoho-script'
        document.body.appendChild(script)

        script.onload = () => {
            if (callback) callback()
        }
    }

    React.useEffect(() => {
        loadZohoScript(() => {
            if (isBrowser()) {
                window.rec_embed_js.load({
                    widget_id: 'rec_job_listing_div',
                    page_name: 'Careers',
                    source: 'CareerSite',
                    site: 'https://deriv.zohorecruit.com',
                    empty_job_msg: 'No current Openings',
                })
            }
        })
    }, [])
    return (
        <div>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://css.zohostatic.com/recruit/embed_careers_site/css/v1.0/embed_jobs.css"
                />
            </Helmet>
            <div className="embed_jobs_head embed_jobs_with_style_1 embed_jobs_with_style">
                <div className="embed_jobs_head2">
                    <div className="embed_jobs_head3">
                        <div id="rec_job_listing_div"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recruit
