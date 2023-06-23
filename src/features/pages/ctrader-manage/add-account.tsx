import React from 'react'
import { ctrader_manage_data } from './_ctrader-manage-data'
import CtraderManage from './_ctrader-manage'

const AddAccount = () => {
    const { title, button_url, image_url, image_url_mobile, steps, paragraph, button_text } =
        ctrader_manage_data.add_account
    return (
        <CtraderManage
            title={title}
            button_url={button_url}
            image_url={image_url}
            image_url_mobile={image_url_mobile}
            steps={steps}
            paragraph={paragraph}
            button_text={button_text}
        />
    )
}
export default AddAccount
