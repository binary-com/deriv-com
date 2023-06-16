import React from 'react'
import { ctrader_manage_data } from './_ctrader-manage-data'
import CtraderManage from 'components/custom/_ctrader-manage'

const CloseAccount = () => {
    const { title, button_url, paragraph, button_text } = ctrader_manage_data.close_account
    return (
        <CtraderManage
            title={title}
            button_url={button_url}
            paragraph={paragraph}
            button_text={button_text}
        />
    )
}
export default CloseAccount
