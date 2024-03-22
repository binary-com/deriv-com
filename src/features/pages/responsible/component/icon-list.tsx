import { LabelPairedCircleCheckMdBoldIcon } from '@deriv/quill-icons'
import React from 'react'
import { Text } from '@deriv/quill-design'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
type listContent = {
    content: TString
}
const IconWithList = ({ content }: listContent) => {
    return (
        <div className="flex gap-gap-lg">
            <div className="icon-container">
                <LabelPairedCircleCheckMdBoldIcon />
            </div>
            <div className="text-container">
                <Text size="md">
                    <Localize translate_text={content} />
                </Text>
            </div>
        </div>
    )
}
export default IconWithList
