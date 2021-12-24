import React, { useState, useEffect } from 'react'
import Hero from './_hero'
import DeptDescription from './_dept-description'
import OpenPositions from './_open-positions'
import StaffReview from './_staff-review'
import Layout from 'components/layout/layout'

const DepartmentPage = (data) => {
    const [showJob, setShowJob] = useState(false)

    useEffect(() => {
        addScriptForZoho()
    })

    const addScriptForZoho = () => {
        const addScript = (settings) => {
            const script = document.createElement('script')
            const { async, text, src, id } = settings

            if (async) script.async = settings['async']
            if (text) script.text = settings['text']
            if (src) script.src = settings['src']
            if (id) script.id = settings['id']
            // eslint-disable-next-line no-console
            console.log(13, script)
            document.head.appendChild(script)
            setShowJob(true)
        }

        let zoho_url =
            'https://js.zohostatic.com/recruit/embed_careers_site/javascript/v1.0/embed_jobs.js'

        addScript({
            src: zoho_url,
            id: 'zoho-container',
        })

        addScript({
            text: `
            window.rec_embed_js && window.rec_embed_js.load({
				widget_id:"rec_job_listing_div",
				page_name: "Front-end",
				source:"CareerSite",
				site:"https://deriv.zohorecruit.com",
				empty_job_msg:"No current Openings"
			});`,
        })
    }
    return (
        <Layout type="careers">
            <Hero data={data.data.header} />
            <DeptDescription data={data.data.intro_section} />
            <OpenPositions showJob={showJob} data={data.data.open_position} />
            <StaffReview data={data.data.testimony_section} />
        </Layout>
    )
}

export default DepartmentPage
