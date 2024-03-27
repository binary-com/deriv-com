import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Localize, LocalizedLink } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import { getLanguage } from 'common/utility'
import { TString } from 'types/generics'
import device from 'themes/device'
import Selected from 'images/svg/signup-affiliates/selected.svg'

export type AccountCardProps = {
    icon?: string
    title?: TString
    description?: TString
    selected?: boolean
    note?: TString
    value?: number
    onClick?: (e) => void
}
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledCard = styled.li<{ selected: boolean }>`
    display: flex;
    align-items: center;
    inline-size: 400px;
    padding: 16px;
    margin-block: 8px;
    position: relative;
    background: #f3f7f7;
    border: ${({ selected }) => (selected ? '1px solid #aad2d8' : '1px solid #ffffff')};
    border-radius: 8px;
    cursor: pointer;

    @media ${device.tabletL} {
        inline-size: 328px;
    }
`
const Icon = styled.img`
    width: 48px;
    height: 48px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 12px;
`

const Title = styled.h3`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;

    @media ${device.tabletL} {
        font-size: 14px;
    }
`
const Description = styled.div`
    font-size: 12px;
    line-height: 18px;

    @media ${device.tabletL} {
        font-size: 10px;
    }
`
const SelectedIcon = styled.img`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
`
export const StyledLink = styled(LocalizedLink)`
    color: var(--color-red);
    text-decoration: none;
    z-index: 10;
`
const AdditionalNote = styled.div`
    display: flex;
    flex-direction: row;
    margin-block-start: 12px;
`

let language = getLanguage()
language = language !== 'en' ? '/' + language : ''

const AccountCard = ({
    icon,
    title,
    description,
    selected,
    note,
    value,
    onClick,
}: AccountCardProps) => {
    const [is_selected, setIsSelected] = useState(false)

    const clickHandler = () => {
        setIsSelected(true)
        onClick && onClick(value)
    }

    useEffect(() => {
        setIsSelected(selected)
    }, [selected])

    return (
        <StyledCard selected={is_selected} onClick={clickHandler}>
            <Icon src={icon} alt={title} />
            <Content>
                <Title>
                    <Localize translate_text={title} />
                </Title>
                <Description>
                    {description.includes('<0>') ? (
                        <Localize
                            translate_text={description}
                            components={[
                                <StyledLink
                                    external
                                    to={`${language}/partners/affiliate-ib/`}
                                    key={0}
                                    target="_blank"
                                />,
                            ]}
                        />
                    ) : (
                        <Localize translate_text={description} />
                    )}

                    {note && (
                        <AdditionalNote>
                            <Typography.Paragraph size="xs">
                                <Localize translate_text={note} components={[<strong key={0} />]} />
                            </Typography.Paragraph>
                        </AdditionalNote>
                    )}
                </Description>
            </Content>
            {is_selected ? <SelectedIcon src={Selected} alt="selected" /> : <></>}
        </StyledCard>
    )
}

export default AccountCard
