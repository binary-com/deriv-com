import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'
import { Button } from 'components/form'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import CheckIcon from 'images/common/check_icon.png'
import device from 'themes/device'
import { queryParams } from 'common/utility'
import { decode } from 'common/url-base64-functions'
import { useDerivWS } from 'store'

const UnsubscribeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0 120px;
    width: 100%;
    background: var(--color-grey-8);
`
const UnsubscribeForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 588px;
    min-height: 246px;
    padding: 80px;
    gap: 40px;
    background: var(--color-white);
    border-radius: 8px;
    box-shadow: 0 20px 24px -4px rgba(14, 14, 14, 0.08), 0 8px 8px -4px rgba(14, 14, 14, 0.03);

    @media ${device.tablet} {
        min-width: unset;
        min-height: unset;
        width: 80%;
        padding: 40px 80px;
    }
`
const ConfirmWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const Title = styled.div`
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 20px;
    text-align: center;

    @media ${device.tablet} {
        font-size: 24px;
    }
`
const ConfirmButton = styled(Button)`
    width: 80px;
    height: 40px;
    font-size: 14px;
    border-radius: 4px;
    margin: 14px;
`
const SuccessCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 16px;
    min-width: 330px;
    min-height: 174px;
    background: #ffffff;
    border-radius: 8px;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;

    @media ${device.tablet} {
        min-width: 265px;
        min-height: 144px;
        padding: 32px;
        gap: 16px;
    }
`
const StyledSpinner = styled.svg`
    animation: rotate 1s linear infinite;
    margin: 40px;
    width: 200px;
    height: 200px;

    & .path {
        stroke: var(--color-red-5);
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`
const Spinner = () => (
    <StyledSpinner viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
    </StyledSpinner>
)

const UnsubscribePage = () => {
    const [complete_status, setCompleteStatus] = useState(false)
    const [loading, setLoading] = useState(false)

    const query = queryParams.get('hash') || ''

    const unsubscribe_hash = decode(query).split('+')
    const binary_user_id = unsubscribe_hash[0]
    const checksum = unsubscribe_hash[1]

    const { send } = useDerivWS()

    const UnsubscribeAPICall = useCallback(() => {
        setLoading(true)
        send(
            {
                unsubscribe_email: 1,
                binary_user_id: binary_user_id,
                checksum: checksum,
            },
            (response) => {
                if (!response.error) {
                    setLoading(false)
                    setCompleteStatus(true)
                }
                if (response.error) {
                    navigate('https://app.deriv.com/account/personal-details')
                }
            },
        )
    }, [send, binary_user_id, checksum])

    return (
        <Layout>
            {loading && (
                <UnsubscribeWrapper>
                    <Spinner />
                </UnsubscribeWrapper>
            )}
            {!loading && (
                <UnsubscribeWrapper>
                    {complete_status ? (
                        <SuccessCard>
                            <img src={CheckIcon} alt="sucess" width={48} height={48} />
                            {localize('Unsubscribe successfully')}
                        </SuccessCard>
                    ) : (
                        <UnsubscribeForm>
                            <Title>
                                {localize('Are you sure you want to stop receiving Deriv emails?')}
                            </Title>
                            <ConfirmWrapper>
                                <ConfirmButton onClick={UnsubscribeAPICall} type="submit" secondary>
                                    {localize('Yes')}
                                </ConfirmButton>
                                <Link to="https://app.deriv.com/account/personal-details">
                                    <ConfirmButton type="submit" tertiary>
                                        {localize('No')}
                                    </ConfirmButton>
                                </Link>
                            </ConfirmWrapper>
                        </UnsubscribeForm>
                    )}
                </UnsubscribeWrapper>
            )}
        </Layout>
    )
}

export default WithIntl()(UnsubscribePage)
