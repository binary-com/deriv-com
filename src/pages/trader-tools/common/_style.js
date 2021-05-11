import styled, { css } from 'styled-components'
import { Form } from 'formik'
import { Flex, SectionContainer, Container } from 'components/containers'
import { Dropdown, Header, Text } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device from 'themes/device'
import Patterns from 'images/common/dmt5-signals/dmt5-signals-patterns.png'

export const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${Patterns});
    background-size: cover;

    @media ${device.tabletL} {
        height: 210px;
    }
`
export const BreadCrumbContainer = styled(Container)`
    margin-top: 2.4rem;

    @media ${device.laptopL} {
        width: 100%;
    }
    @media ${device.laptopM} {
        width: 90%;
    }
`

export const StyledSection = styled(SectionContainer)`
    position: relative;
    padding: 8rem 0;

    @media ${device.laptopM} {
        padding: 40px 0;
    }
`

export const SectionSubtitle = styled(Header)`
    width: 79.2rem;
    margin: 0 auto;
    line-height: 1.5;
    @media ${device.tablet} {
        width: unset;
        padding: 0 16px;
    }
`

export const SwapTabSelector = styled(Flex)`
    padding: 22px 40px;
    width: auto;
    height: 80px;
    border-radius: 4px;
    border: solid 1px rgba(51, 51, 51, 0.1);
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

export const ContentContainer = styled(Flex)`
    @media ${device.laptopM} {
        flex-direction: column;
        margin: 40px 0;
    }
    @media ${device.laptop} {
        margin-bottom: 40px;
        padding: 0 16px;
    }
`

export const FormWrapper = styled(Flex)`
    margin-right: 4.8rem;
    max-height: 705px;
    width: unset;

    @media ${device.laptopM} {
        margin: 0 0 40px;
    }
`
export const SwapFormWrapper = styled(FormWrapper)`
    @media ${device.desktop} {
        height: 569px;
    }
    @media ${device.tabletL} {
        height: unset;
    }
`

export const CalculatorForm = styled(Form)`
    background-color: var(--color-white);
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    width: 48.6rem;

    @media ${device.mobileL} {
        width: 328px;
        margin-bottom: 20px;
    }
`

export const CalculatorHeader = styled.div`
    border-radius: 8px 8px 0 0;
    padding: 2.4rem;
    background-color: var(--color-blue-4);
`

export const CalculatorLabel = styled.label`
    font-size: var(--text-size-xs);
    font-weight: 300;
    display: block;
    margin-bottom: 1.4rem;

    @media ${device.mobileL} {
        font-size: 14px;
    }
`

export const CalculatorOutputContainer = styled(Flex)`
    position: relative;
    border-radius: 5px;
    box-sizing: border-box;
    height: 7.5rem;
    border: 1.5px solid var(--color-blue-5);
    background-color: var(--color-white);
`

export const CalculatorOutputField = styled(Flex)`
    width: 80%;
    white-space: nowrap;
    resize: none;
    background-color: var(--color-white);
    justify-content: flex-start;
    height: 95%;
    border: 0;
    padding: 2.2rem;
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--color-blue-5);
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-text-fill-color: var(--color-blue-5);
    opacity: 1;
    -webkit-opacity: 1;
    margin: 1px;

    @media ${device.tabletL} {
        font-size: 18px;
    }

    @media ${device.mobileL} {
        padding-top: 2.4rem;
        font-size: 16px;
    }

    &::-webkit-scrollbar {
        width: 0;
        background: transparent; /* Chrome/Safari/Webkit */
    }

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
`

export const CalculatorOutputSymbol = styled.label`
    margin: 1px;
    pointer-events: none;
    color: var(--color-blue-5);
    font-weight: bold;
    font-size: 2.4rem;
    padding: 2.2rem;
    @media ${device.tabletL} {
        font-size: 18px;
    }

    @media ${device.mobileL} {
        font-size: 16px;
        padding-top: 2.4rem;
    }
`

export const CalculatorBody = styled.div`
    padding: 2.4rem;
    /* stylelint-disable property-no-vendor-prefix */
    ul::-webkit-scrollbar {
        width: 12px;
    }
    ul::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        -webkit-border-radius: 7px;
        border-radius: 7px;
        background-color: var(--color-grey-32);
        -webkit-box-shadow: inset -1px -1px 0 rgba(0, 0, 0, 0.05),
            inset 1px 1px 0 rgba(0, 0, 0, 0.05);
        box-shadow: inset -1px -1px 0 rgba(0, 0, 0, 0.05), inset 1px 1px 0 rgba(0, 0, 0, 0.05);
    }
    ul::-webkit-scrollbar-corner {
        background-color: transparent;
    }
`

export const CalculatorTabItem = styled.div`
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

    ${Text} {
        @media ${device.mobileL} {
            font-size: 14px;
        }
    }
`

export const CalculatorDropdown = styled(Dropdown)`
    margin-bottom: 3.6rem;
`

export const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 2.4rem 0;
`

export const CalculateButton = styled(Button)`
    width: 100%;
`

export const RightContent = styled.div`
    display: block;
    max-width: 69rem;
    margin: 0;
    @media ${device.laptopM} {
        margin: auto;
    }
`

export const FormulaText = styled.div`
    background-color: var(--color-grey-25);
    padding: 1.6rem;
    font-size: 14px;
    line-height: 2;
`

export const StyledOl = styled.ol`
    list-style-type: none;
    counter-reset: item;
    font-weight: bold;
    margin-left: 4px;

    li {
        display: block;
        position: relative;
        margin-left: 12px;
    }
    li::before {
        position: absolute;
        content: counter(item) '  ';
        counter-increment: item;
        font-size: 10px;
        margin: -1px 0 0 -10px;
    }
    span {
        font-weight: 300;
    }
`

export const LinkWrapper = styled(Flex)`
    margin-top: 40px;
    justify-content: flex-start;

    @media ${device.laptop} {
        flex-direction: column-reverse;
        max-width: 552px;
    }
`

export const StyledLinkButton = styled(LinkButton)`
    margin-right: 8px;

    @media ${device.laptop} {
        margin: 0;
        white-space: nowrap;

        :nth-child(2) {
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
export const item_style = {
    padding: '16px 0',
}
export const header_style = {
    marginTop: '15px',
    padding: '16px 24px',
    border: 'none',
    borderRadius: '8px',
    position: 'relative',
    boxShadow: '0 4px 8px 0 rgba(14, 14, 14, 0.1)',
}
