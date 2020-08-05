import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { isBrowser } from 'common/utility'
import device from 'themes/device'

const RecruitWrapper = styled.div`
    .embed_jobs_head2 {
        width: 100%;
    }
    .rec-grp-heading {
        font-size: var(--text-size-m);
        margin: 1.6rem 0;
    }
    .embed_jobs_with_style.embed_jobs_with_style_1 {
        ul.rec-group {
            grid-template-columns: 1fr 1fr 1fr;

            @media ${device.tabletL} {
                grid-template-columns: 1fr 1fr;
            }
            @media ${device.tablet} {
                grid-template-columns: 1fr;
            }
        }
        ul.rec-job-info {
            height: auto;
            width: 100%;
            box-shadow: rgba(0, 0, 0, 0.05) 0 16px 20px 0, rgba(0, 0, 0, 0.05) 0 0 20px 0;
            margin-bottom: 2.4rem;
            border-radius: 4px;
            padding: 3.2rem;
            border: none;

            &:hover {
                background: var(--color-white);
            }
            .rec-job-title a {
                font-size: var(--text-size-s);
                color: var(--color-red);
                margin-bottom: 1.6rem;
            }
            li > span {
                font-size: var(--text-size-xs);
            }
        }
    }
`

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
        <Layout>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://css.zohostatic.com/recruit/embed_careers_site/css/v1.0/embed_jobs.css"
                />
            </Helmet>
            <RecruitWrapper>
                <div className="embed_jobs_head embed_jobs_with_style_1 embed_jobs_with_style">
                    <div className="embed_jobs_head2">
                        <div className="embed_jobs_head3">
                            <div id="rec_job_listing_div"> </div>
                        </div>
                    </div>
                </div>
            </RecruitWrapper>
        </Layout>
    )
}

export default WithIntl()(Recruit)
