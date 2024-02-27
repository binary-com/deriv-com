import React from 'react'
import { Text } from '@deriv/quill-design'
import { CustomLink } from '@deriv-com/components'
import { kid_data, kid_data_multiplier } from './data/_kid_data'
import { getLanguage } from 'common/utility'
import { Divider } from 'components/elements'
import { Localize } from 'components/localization'
import PDFIcon from 'images/svg/regulatory/pdf-icon-black.svg'

const DocumentAccordion = () => {
    const selected_language = getLanguage() || 'en'
    const supported_languages = ['es', 'it', 'pl', 'pt']

    const is_supported_language = (language: string) => supported_languages.includes(language)

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4">
                {kid_data.map((data, idx) => (
                    <div key={idx} className="flex flex-row mb-800 mr-800">
                        <CustomLink
                            target="_blank"
                            className="underline inline text-base"
                            rel="noopener noreferrer"
                            href={`/regulatory/kid/${
                                is_supported_language(selected_language) && !data.is_only_en
                                    ? selected_language + '/'
                                    : ''
                            }${data.ref}`}
                        >
                            <div className="flex items-center">
                                <img src={PDFIcon} alt="pdf icon black" className="pr-400" />
                                <Text>
                                    <Localize translate_text={data.title} />
                                </Text>
                            </div>
                        </CustomLink>
                    </div>
                ))}
            </div>
            <Divider />
            <div className="grid grid-cols-1 md:grid-cols-4 mt-800">
                {kid_data_multiplier.map((data, idx) => (
                    <div key={idx} className="flex flex-row mb-800 mr-800">
                        <CustomLink
                            key={idx}
                            target="_blank"
                            className="underline inline text-base"
                            rel="noopener noreferrer"
                            href={`/regulatory/kid/${
                                is_supported_language(selected_language) && !data.is_only_en
                                    ? selected_language + '/'
                                    : ''
                            }${data.ref}`}
                            m="1.6rem 2.4rem"
                        >
                            <div className="flex items-center">
                                <img src={PDFIcon} alt="pdf icon black" className="pr-400" />
                                <Text>
                                    <Localize translate_text={data.title} />
                                </Text>
                            </div>
                        </CustomLink>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DocumentAccordion
