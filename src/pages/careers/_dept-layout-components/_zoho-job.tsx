import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { OpenPositionsProps } from './_dept-layout.types'
import RightArrow from 'images/svg/career-right-arrow.svg'

type DataProps = {
    title: OpenPositionsProps['title']
}

const ZohoJob = (data: DataProps) => {
    const [scriptLoaded, setScriptLoaded] = useState(false)

    useEffect(() => {
        const careerScript = document.createElement('script')
        careerScript.src =
            'https://js.zohostatic.com/recruit/embed_careers_site/javascript/v1.0/embed_jobs.js'
        careerScript.addEventListener('load', () => setScriptLoaded(true))
        document.body.appendChild(careerScript)
    }, [])

    useEffect(() => {
        if (!scriptLoaded) return
        addScriptForZoho()
    }, [scriptLoaded])

    const addScriptForZoho = () => {
        const addScript = (settings) => {
            const script = document.createElement('script')
            const { async, text, src, id } = settings

            if (async) script.async = settings['async']
            if (text) script.text = settings['text']
            if (src) script.src = settings['src']
            if (id) script.id = settings['id']
            document.head.appendChild(script)
        }

        addScript({
            text: `
            window.rec_embed_js && window.rec_embed_js.load({
				widget_id:"rec_job_listing_div",
				page_name: "${data.title}",
				source:"CareerSite",
				site:"https://deriv.zohorecruit.com",
				empty_job_msg:"Sorry, there are currently no open positions."
			});`,
        })
    }

    const ZohoWrapper = styled.div`
        font-family: 'IBM Plex Sans', sans-serif !important;
        width: 100%;

        .rec-group .rec-job-info:nth-child(n + 5) {
            display: none !important;
        }
        #rec_job_listing_div:not(#rec_job_listing_div *) {
            text-align: center;
            color: var(--color-grey-5);
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 3.6rem;
            width: 100%;
            display: block;
        }
        .rec_job_listing_div_jobs {
            text-align: left;
        }
        ul.rec-job-info {
            position: relative;
            margin-bottom: 0 !important;
            padding: 24px 35px 24px 18px;
            width: 100%;
            display: flex;
            border-bottom: 1px solid #f2f3f4 !important;
            align-items: center;

            &::after {
                position: absolute;
                content: url(${RightArrow});
                top: 50%;
                right: 0;
                font-size: 16px;
                transform: translateY(-50%);
            }
        }
        .embed_jobs_with_style .rec-group li.rec-job-title {
            width: 50%;
            max-width: 500px;
            margin-bottom: 0;
            padding-right: 5px;
        }
        div#rec_job_listing_div > div:first-child,
        .zrsite_Industry,
        .zrsite_Job_Type,
        .zrsite_Job_Description,
        .zrsite_Date_Opened,
        .zrsite_Remote_Job,
        .zrsite_State,
        .zrsite_Work_Experience {
            display: none !important;
        }
        .embed_jobs_head {
            background: none;
            padding: 0;
        }
        .embed_jobs_head2 {
            background-color: none;
            border: none;
            padding: 0;
            width: 100%;
        }
        .embed_jobs_with_style .rec-job-info a {
            font-family: 'IBM Plex Sans', sans-serif !important;
            color: #333333;
            text-decoration: none;
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 3.6rem;
            width: 100%;
        }
        li.zrsite_City,
        li.zrsite_Country {
            text-align: left;
            color: var(--color-black-3);
            line-height: 1.5;
            max-width: 274px;
            padding: 0;
            font-weight: 400;
            font-size: 1.6rem;
            width: auto !important;

            span:first-child {
                display: none !important;
            }

            @media (max-width: 400px) {
                max-width: 60px;
            }
        }
        li.zrsite_City {
            span:last-child::after {
                position: relative;
                content: ', ';
            }
        }
        li.zrsite_Country {
            padding: 0 0 0 5px;
        }
    `

    return (
        <ZohoWrapper>
            <div className="embed_jobs_head embed_jobs_with_style_3 embed_jobs_with_style">
                <div className="embed_jobs_head2">
                    <div className="embed_jobs_head3">
                        <div id="rec_job_listing_div" />
                    </div>
                </div>
            </div>
        </ZohoWrapper>
    )
}

export default ZohoJob
