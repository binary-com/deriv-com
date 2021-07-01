import React from 'react'
import PropTypes from 'prop-types'
import { usePageLoaded } from '../../components/hooks/use-page-loaded'
import { Article } from './_article'
import { ArticleWrapper, StyledHeader } from './_help-centre-style'
import { Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const VerifyAccount = (props) => (
    <ArticleWrapper>
        {props.is_mounted && <StyledHeader as="h4" type="sub-section-title">
            {localize('Do I need to verify my Deriv account?')}
        </StyledHeader>}
        <Text>
            {localize(
                'No, you do not need to verify your Deriv account unless prompted. If your account requires verification, we will contact you via email to initiate the process and provide you with clear instructions on how to submit your documents.',
            )}
        </Text>
    </ArticleWrapper>
)
VerifyAccount.propTypes = {
    children: PropTypes.any,
    is_mounted: PropTypes.bool,
};
const VerificationDuration = (props) => (
    <ArticleWrapper>
        {props.is_mounted && <StyledHeader as="h4" type="sub-section-title">
            {localize('How long does verification take?')}
        </StyledHeader>}
        <Text>
            {localize(
                'We’ll typically take 1-3 business days to review your documents and will inform you of the result via email once it’s done.',
            )}
        </Text>
    </ArticleWrapper>
)
VerificationDuration.propTypes = {
    children: PropTypes.any,
    is_mounted: PropTypes.bool,
};
const DocumentsDeclined = (props) => (
    <ArticleWrapper>
        {props.is_mounted && <StyledHeader as="h4" type="sub-section-title">
            {localize('Why were my documents declined?')}
        </StyledHeader>}
        <Text>
            {localize(
                'We may decline your verification documents if they are insufficiently clear, invalid, expired, or have cropped edges.',
            )}
        </Text>
    </ArticleWrapper>
)
DocumentsDeclined.propTypes = {
    children: PropTypes.any,
    is_mounted: PropTypes.bool,
};

const SecurityArticle = () => {
    const [is_mounted,] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header={localize('Security')}
                title={localize('Help centre | Frequently asked questions | Security | Deriv')}
                description={localize('Frequently asked questions - Security')}
            >
                <VerifyAccount
                    text={localize('Do I need to verify my Deriv account?')}
                    label="verify-account"
                    is_mounted={is_mounted}
                />
                <VerificationDuration
                    text={localize('How long does verification take?')}
                    label="verification-duration"
                    is_mounted={is_mounted}
                />
                <DocumentsDeclined
                    text={localize('Why were my documents declined?')}
                    label="documents-declined"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(SecurityArticle)
