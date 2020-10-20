import styled, { css } from 'styled-components'
import { Form, Field } from 'formik'
import { Flex } from 'components/containers'
import { Header, Text, Dropdown } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device from 'themes/device'

export const StyledText = styled(Text)`
    @media ${device.mobileL} {
        font-size: 16px;
    }
`
export const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 16px;
    }
`

export const AccountTypeTabItem = styled.div`
    height: 72px;
    width: 21rem;
    border-radius: 1rem;
    padding: 2rem;
    border: solid 1px rgba(51, 51, 51, 0.1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    ${(props) =>
        props.active
            ? css`
                  pointer-events: none;
                  border: 1.5px solid var(--color-blue-5);
                  ${Text} {
                      font-weight: bold;
                  }
              `
            : css`
                  box-shadow: unset;
                  ${Text} {
                      font-weight: unset;
                  }
              `}

    @media ${device.mobileL} {
        width: 140px;
    }

    ${StyledText} {
        @media ${device.mobileL} {
            font-size: 14px;
        }
    }
`

export const StyledHeaderP = styled.div`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #333333;
    margin-bottom: 40px;

    @media ${device.mobileL} {
        margin-bottom: 16px;
    }
`

export const WrapContainer = styled(Flex)`
    @media ${device.laptopM} {
        flex-wrap: wrap;
    }
`

export const ImageWrapper = styled.div`
    max-width: 650px;
`

export const LinkWrapper = styled(Flex)`
    padding: 2rem 2rem 1rem;
    width: 100%;
    justify-content: center;

    @media (max-width: 1420px) {
        top: 480px;
    }
    @media ${device.laptop} {
        top: 350px;
        display: inline-block;
    }
    @media ${device.tabletL} {
        top: 236px;
    }
    @media ${device.tablet} {
        position: unset;
        top: unset;
        justify-content: start;
        margin-top: 12.8px;
        padding: 0;
    }
`

export const BottomContent = styled(Flex)`
    max-width: 100%;
    align-items: center;
    margin-bottom: 7.2rem;
    font-size: 1.6rem;
    text-align: center;
`

export const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 2.4rem 0;
`

export const StyledLinkButton = styled(LinkButton)`
    padding: 1.2rem 1.5rem;
    font-size: 14px;
    max-height: 4rem;
    height: 100%;
    margin-right: 0.8rem;

    @media ${device.tablet} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        display: block;
        max-height: 40px;

        :nth-child(1) {
            margin-bottom: 16px;
        }
    }

    :active {
        outline: none;
        border: none;
    }
    :focus {
        outline: 0;
    }
`

export const FormulaText = styled.div`
    background-color: #f9fafc;
    padding: 1.6rem;
    font-size: 14px;
`

export const StyledOl = styled.ol`
    list-style: decimal;
    font-weight: bold;
    margin-left: 20px;

    span {
        font-weight: 300;
    }
`

export const StyledFormWrapper = styled(Flex)`
    margin-right: 6.4rem;
    max-height: 705px;

    @media ${device.laptopM} {
        margin-bottom: 40px;
        margin-right: 0;
    }

    @media ${device.laptop} {
        margin-bottom: 20px;
    }
`

export const StyledForm = styled(Form)`
    background-color: #ffffff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    width: 48.6rem;

    @media ${device.mobileL} {
        width: 328px;
        margin-bottom: 20px;
    }
`

export const StyledTextArea = styled(Field)`
    width: 100%;
    height: 7.5rem;
    resize: none;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1.5px solid var(--color-blue-5);
    background-color: white;
    padding: 1.5rem 2rem;
    font-size: 3rem;
    color: var(--color-blue-5);
`
export const StyledButton = styled(Button)`
    width: 100%;

    @media ${device.mobileL} {
        font-size: 14px;
    }
`

export const StyledLabel = styled.label`
    font-size: var(--text-size-xs);
    font-weight: 300;
    display: block;
    margin-bottom: 1.4rem;

    @media ${device.mobileL} {
        ${Header} {
            font-size: 16px;
        }
    }
`

export const CalculatorBody = styled.div`
    padding: 2.4rem;
`

export const CalculatorHeader = styled.div`
    padding: 3rem 2.4rem 3rem 2.4rem;
    background-color: var(--color-blue-4);
`

export const ActionSection = styled(Flex)`
    margin-top: 3rem;
    justify-content: center;
`

export const SwapActionSection = styled(Flex)`
    padding: 0 2rem 2rem 2rem;
    justify-content: center;
`

export const StyledCurrencyLabel = styled.label`
    position: absolute;
    pointer-events: none;
    color: var(--color-blue-5);
    font-size: 2.4rem;
    right: 20px;
    top: 24px;
`

export const StyledTextAreaContainer = styled.div`
    position: relative;
`

export const StyledDropdown = styled(Dropdown)`
    margin-bottom: 3.6rem;
`

export const HeaderTabItem = styled(Flex)`
    padding: 2.4rem 4rem;
    max-width: 35rem;
    width: 100%;
    height: 8.4rem;
    border-radius: 4px;
    border: solid 1px rgba(51, 51, 51, 0.1);
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    ${(props) =>
        props.active
            ? css`
                  box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
                  border: unset;
                  ${Text} {
                      font-weight: bold;
                  }
              `
            : css`
                  box-shadow: unset;
                  ${Text} {
                      font-weight: unset;
                  }
              `}

    @media ${device.mobileL} {
        padding: 12px 24px;
    }
`
