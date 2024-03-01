import React from 'react'
import { ctrader_manage_data } from './ctrader-manage-data'
import CtraderManage from './ctrader-manage'

const ChangePassword = () => {
    const { title, button_url, paragraph, button_text } = ctrader_manage_data.change_password
    return (
        <CtraderManage
            title={title}
            button_url={button_url}
            paragraph={paragraph}
            button_text={button_text}
        />
    )
}
export default ChangePassword
