import React from 'react'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'

interface ProductsHeadingProps {
    title: TString[]
}

const ProductsHeading = ({ title }: ProductsHeadingProps) => {
    return (
        <>
            <Typography.Heading
                size={'xlarge'}
                color={'secondary'}
                weight={'bold'}
                align={'left'}
                pt={'4x'}
                md={{ pt: '8x' }}
                className="at-visible-larger-than-tablet"
            >
                {title.map((text, index) => (
                    <React.Fragment key={index}>
                        <Localize translate_text={text} /> <br />
                    </React.Fragment>
                ))}
            </Typography.Heading>
            <Typography.Heading
                size={'medium'}
                color={'secondary'}
                weight={'bold'}
                align={'left'}
                pt={'4x'}
                md={{ pt: '8x' }}
                className="at-visible-phone-and-tablet"
            >
                {title.map((text, index) => (
                    <React.Fragment key={index}>
                        <Localize translate_text={text} />{' '}
                    </React.Fragment>
                ))}
            </Typography.Heading>
        </>
    )
}
export default ProductsHeading
