import React from 'react'
import {
    StyledSection,
    TncListText,
    StyledOrder,
    StyledHeader,
    StyledTitle,
} from './_styles'
import { localize } from 'components/localization'

export const Bonuses = () => (
    <StyledSection>
        <StyledTitle as="h2" color="black">
            {localize('Bonuses')}
        </StyledTitle>
        <StyledHeader as="h4" weight="500">
            {localize('A. Deposit bonus')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'This bonus will be processed and credited to your account when both of the following cases are true:',
                    )}
                </TncListText>
            </li>
            <StyledOrder type="lower-alpha">
                <li>
                    <TncListText>
                        {localize(
                            'You have made the required minimum deposit.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'You have reached a turnover that is 5 times the bonus amount.',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
            <li>
                <TncListText>
                    {localize(
                        'Both the deposit and the bonus amounts are clearly displayed when this type of promotion is available. For example, if you choose to participate in a "Get $25 when you deposit $100" promotion, We will add an additional $25 to your account when you deposit $100 AND when you have purchased at least $125 worth of trades ($25 * 5= $125). The bonus will only be credited to your account when both of these conditions are met.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Once the bonus is credited to your account, you may withdraw the bonus and any winnings generated from it at any time.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You may utilise this bonus only when you have opened a real money account.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You can receive this bonus only if you are a new client, and you will be eligible for it only once per household. If you are an existing or former client, you do not qualify for this bonus.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'This offer cannot be used in conjunction with any other offer.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The bonus will be added to your account when you make the required minimum deposit in a single transaction. If you make multiple deposits in an attempt to accumulate the required deposit amount, you will not be eligible for this bonus.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('B. Free bonus')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'The bonus code can only be entered and activated upon account opening.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'It will be released to your account upon approval.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You can only get this promotion if you are a new client, and you will be eligible for it only once. If you are an existing or former client, you do not qualify for this promotion.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'This offer cannot be used in conjunction with any other offer.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You may withdraw the bonus amount once you have exceeded an account turnover of 25 times the bonus amount value.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Where an account is funded solely by means of a bonus code, the bonus amount plus any winnings cannot be withdrawn until you have exceeded an account turnover of 25 times the bonus amount value. The maximum amount of winnings allowed on such accounts shall be 25 times the bonus amount.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
    </StyledSection>
)
