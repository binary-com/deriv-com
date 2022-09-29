import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Input, Button } from 'components/form'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import CheckIcon from 'images/common/check_icon.png'
import device from 'themes/device'
import { useDerivApi } from 'components/hooks/use-deriv-api'
import { getLocationHash } from 'common/utility'

const UnsubscrubeWrapper = styled.div`
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
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
const EmailButton = styled(Button)`
    width: 40%;
    font-size: 14px;

    @media ${device.tabletS} {
        width: 75%;
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

type UnsubscrubePage = {
    location: any
}

const UnsubscrubePage = ({ location }: UnsubscrubePage) => {
    const [complete_status, setCompleteStatus] = useState(false)

    const url_props = location.search
    const id_string_start = url_props.indexOf('binary_user_id=') + 'binary_user_id='.length
    const id_string_end = url_props.indexOf('&')
    const checksum_string = url_props.indexOf('checksum=') + 'checksum='.length

    const binary_user_id = url_props.substring(id_string_start, id_string_end)
    const checksum = url_props.substr(checksum_string)

    const deriv_api = useDerivApi()
    const { send } = deriv_api

    const APICall = () =>
        send(
            {
                unsubscribe_email: 1,
                binary_user_id: binary_user_id,
                checksum: checksum,
            },
            (response) => {
                if (!response.error) {
                    console.log('done')
                    setCompleteStatus(true)
                }
                if (response.error) {
                    console.log('fail')
                }
            },
        )
    return (
        <Layout>
            <UnsubscrubeWrapper>
                {complete_status ? (
                    <SuccessCard>
                        <img src={CheckIcon} alt="sucess" width={48} height={48} />
                        Unsubscribe successfully
                    </SuccessCard>
                ) : (
                    <UnsubscribeForm>
                        <Title>
                            {localize('Are you sure you want to step receiving Deriv emails?')}
                        </Title>
                        <ConfirmWrapper>
                            <ConfirmButton onClick={APICall} type="submit" secondary>
                                {localize('Yes')}
                            </ConfirmButton>
                            <ConfirmButton type="submit" tertiary>
                                {localize('No')}
                            </ConfirmButton>
                        </ConfirmWrapper>
                    </UnsubscribeForm>
                )}
            </UnsubscrubeWrapper>
        </Layout>
    )
}

export default WithIntl()(UnsubscrubePage)
