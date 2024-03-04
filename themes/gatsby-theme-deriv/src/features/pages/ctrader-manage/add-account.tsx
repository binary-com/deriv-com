import React from 'react'
import { ctrader_manage_data } from './ctrader-manage-data'
import CtraderManage from './ctrader-manage'
import { BuildVariantType } from 'features/types'

const AddAccount = ({ region }: BuildVariantType) => {
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
            region={region}
        />
    )
}
export default AddAccount
