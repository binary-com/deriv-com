import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { SEO } from 'components/containers'
import { Button } from 'components/form'
import { Localize, localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import CheckIcon from 'images/common/check_icon.png'
import device from 'themes/device'
import { queryParams } from 'common/utility'
import { decode, isValid } from 'common/url-base64-functions'
import { Header } from 'components/elements'
import apiManager from 'common/websocket'
import { TSocketResponseData } from 'common/websocket/types'

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
    padding: 80px 44px;
    background: var(--color-white);
    border-radius: 8px;
    box-shadow: 0 20px 24px -4px rgba(14, 14, 14, 0.08), 0 8px 8px -4px rgba(14, 14, 14, 0.03);

    @media ${device.tablet} {
        min-width: unset;
        min-height: unset;
        width: 80%;
        padding: 71px 31.5px;
    }
`
const ConfirmWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 16px;

    @media ${device.tablet} {
        margin-top: 24px;
    }
`
const Title = styled(Header)`
    text-align: center;
    font-weight: normal;
`
const ConfirmButton = styled(Button)`
    width: 80px;
    height: 40px;
    font-size: 14px;
    border-radius: 4px;
    margin: 0 12px;
    white-space: nowrap;

    @media ${device.tablet} {
        margin: 0 8px;
    }
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
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState()

    const query = queryParams.get('hash') || ''
    const unsubscribe_hash = isValid(query) && decode(query).split('+')
    const binary_user_id = Number(unsubscribe_hash[0])
    const checksum = unsubscribe_hash[1]

    const onClose = () => {
        window.opener = null
        window.open('about:blank', '_self')
        window.close()
    }

    const UnsubscribeAPICall = useCallback(async () => {
        setLoading(true)
        try {
            const response = await apiManager.augmentedSend('unsubscribe_email', {
                binary_user_id: binary_user_id,
                checksum: checksum,
            })
            setData(response['unsubscribe_email'] as TSocketResponseData<T>)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [binary_user_id, checksum])

    return (
        <Layout>
            <SEO
                title={localize('_t_Unsubscribe | Emails | Deriv_t_')}
                description={localize('_t_Unsubscribe from Deriv emails._t_')}
            />
            <>
                {loading ? (
                    <UnsubscribeWrapper>
                        <Spinner />
                    </UnsubscribeWrapper>
                ) : (
                    <UnsubscribeWrapper>
                        {data && !error ? (
                            <SuccessCard>
                                <img src={CheckIcon} alt="success" width={48} height={48} />
                                <Localize translate_text="_t_Unsubscribed successfully_t_" />
                            </SuccessCard>
                        ) : (
                            <UnsubscribeForm>
                                <Title type="subtitle-2">
                                    <Localize translate_text="_t_Are you sure you want to stop receiving Deriv emails?_t_" />
                                </Title>
                                <ConfirmWrapper>
                                    <ConfirmButton
                                        onClick={UnsubscribeAPICall}
                                        type="submit"
                                        secondary
                                    >
                                        <Localize translate_text="_t_Yes_t_" />
                                    </ConfirmButton>
                                    <ConfirmButton onClick={onClose} type="submit" tertiary>
                                        <Localize translate_text="_t_No_t_" />
                                    </ConfirmButton>
                                </ConfirmWrapper>
                            </UnsubscribeForm>
                        )}
                    </UnsubscribeWrapper>
                )}
            </>
        </Layout>
    )
}

export default WithIntl()(UnsubscribePage)
