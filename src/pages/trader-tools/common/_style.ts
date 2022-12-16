import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Form } from 'formik'
import { Flex, SectionContainer, Container } from 'components/containers'
import { Dropdown, Header, Text } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device from 'themes/device'
import Patterns from 'images/common/dmt5-signals/dmt5-signals-patterns.png'

type CalculatorTabItemProps = {
    active?: ReactNode
    disabled?: ReactNode
}

type PnlCalculatorTabItemProps = {
    active?: ReactNode
    disabled?: ReactNode
}

type FormulaValueType = {
    width?: string
    mb?: string
    ml?: string
    pt?: string
    pb?: string
    mw?: string
}

type PointerContainerType = {
    width?: string
    height?: string
    ml?: string
    top?: boolean
    mw?: string
}

type PointerStickType = {
    height?: string
    ml?: string
    w?: string
}
type PointerDotType = {
    ml?: string
}

type PointerTextType = {
    ml?: string
    top?: boolean
}
type FormulaWrapperType = {
    ml?: string
    mt?: string
    cg?: string
}

export const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${Patterns});
    background-size: cover;

    @media ${device.tabletL} {
        height: 210px;
    }
    @media ${device.mobileL} {
        height: auto;
        min-height: 210px;
    }
`

export const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 32px;
        line-height: 40px;
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
const swap_tab_selector_css = (props) =>
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
          `

export const SwapTabSelector = styled(Flex)`
    margin-left: 15px;
    border: solid 1px rgba(51, 51, 51, 0.1);
    padding: 22px 16px;
    width: 21rem;
    height: 80px;
    border-radius: 4px;
    flex-direction: column;
    cursor: pointer;

    :nth-child(2) {
        margin-left: 0;
        margin-right: 15px;
    }

    ${swap_tab_selector_css}

    @media ${device.mobileL} {
        width: 160px;
    }
`

export const ContentContainer = styled(Flex)`
    @media ${device.laptopM} {
        flex-direction: column;
        margin: 40px 0;
    }
    @media ${device.laptop} {
        margin-bottom: 0;
        padding: 0 16px;
    }
`

export const FormWrapper = styled(Flex)`
    margin-right: 4.8rem;
    height: 100%;
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

const CalculatorFormStyles = css`
    background-color: var(--color-white);
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);

    @media ${device.mobileL} {
        margin-bottom: 20px;
        width: 320px;
    }
`

export const CalculatorForm = styled(Form)`
    width: 54rem;
    ${CalculatorFormStyles}
`
export const PnlCalculatorFormMobile = styled(Form)`
    width: 43rem;
    ${CalculatorFormStyles}

    @media (min-width: 1200px) {
        width: 54rem;
    }
`

export const PnlHeaderOverflow = styled.div`
    border-radius: 8px 8px 0 0;
    overflow-x: scroll;
`
const CalculatorHeaderStyles = css`
    border-radius: 8px 8px 0 0;
    padding: 2.4rem;
    background-color: var(--color-blue-4);
`

export const CalculatorHeader = styled.div`
    ${CalculatorHeaderStyles}
`

export const PnlCalculatorHeader = styled.div`
    ${CalculatorHeaderStyles}

    @media (max-width: 424px) {
        width: 440px;
        overflow-x: scroll;
    }
`

export const PnlCalculatorHeaderMobile = styled.div`
    border-radius: 8px 8px 0 0;
    padding: 2.4rem;
    background-color: var(--color-blue-4);
    width: 440px;
    overflow-x: scroll;
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

export const PnLCalculatorOutputContainer = styled(Flex)`
    position: relative;
    border-radius: 8px;
    box-sizing: border-box;
    height: 56px;
    border: 1px solid var(--color-green);
    background-color: var(--color-white);
    max-width: 23rem;
    @media ${device.tablet} {
        max-width: 37rem;
    }
`

const CalculatorOutputFieldStyles = css`
    width: 80%;
    white-space: nowrap;
    resize: none;
    background-color: var(--color-white);
    justify-content: flex-start;
    height: 95%;
    font-weight: 500;
    overflow-x: auto;
    overflow-y: hidden;
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

export const CalculatorOutputField = styled(Flex)`
    padding: 2.2rem;
    font-size: 2.4rem;
    color: var(--color-blue-5);
    -webkit-text-fill-color: var(--color-blue-5);
    ${CalculatorOutputFieldStyles}
`

export const PnLCalculatorOutputField = styled(Flex)`
    padding: 16px;
    font-size: 16px;
    color: var(--color-green);
    -webkit-text-fill-color: var(--color-green);
    ${CalculatorOutputFieldStyles}
`

const CalculatorOutputSymbolStyles = css`
    margin: 1px;
    pointer-events: none;
    font-weight: bold;
    @media ${device.tabletL} {
        font-size: 18px;
    }

    @media ${device.mobileL} {
        font-size: 16px;
        padding-top: 2.4rem;
    }
`

export const CalculatorOutputSymbol = styled.label`
    color: var(--color-blue-5);
    font-size: 2.4rem;
    padding: 2.2rem;
    ${CalculatorOutputSymbolStyles}
`

export const PnLCalculatorOutputSymbol = styled.label`
    color: var(--color-green);
    font-size: 16px;
    padding: 16px;
    ${CalculatorOutputSymbolStyles}
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

const calculator_tab_item_style_css = (props: { active: string }) =>
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
          `

const CalculatorTabItemStyles = css`
    width: 50%;
    height: 60px;
    margin-right: 15px;
    border-radius: 8px;
    padding: 2rem;
    border: solid 1px rgba(51, 51, 51, 0.1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    ${calculator_tab_item_style_css}

    ${Text} {
        @media ${device.mobileL} {
            font-size: 14px;
        }
    }
`

export const CalculatorTabItem = styled.div<CalculatorTabItemProps>`
    :nth-child(2) {
        margin-right: 0;
    }

    ${CalculatorTabItemStyles}
`

export const PnlCalculatorTabItem = styled.div<PnlCalculatorTabItemProps>`
    width: 100%;
    margin-right: 2.5rem;
    height: 53px;

    :nth-child(2) {
        margin-right: 0;
    }

    ${CalculatorTabItemStyles}

    @media ${device.mobileL} {
        width: 140px;
        height: 53px;
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

export const PnLInputGroup = styled.div`
    position: relative;
    width: 100%;
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
    padding: 1rem;
    font-size: 12px;
    line-height: 30px;
    width: auto;

    @media ${device.tablet} {
        width: auto;
        line-height: 20px;
    }
`
export const StyledSpan = styled.span`
    color: black;
    font-size: 13px;
`
export const StyledOl = styled.ol`
    list-style-type: none;
    counter-reset: item;
    font-weight: bold;
    font-size: 10px;

    li {
        display: block;
        position: relative;
        line-height: 14px;
        margin: 14px;
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
export const FormulaContainer = styled(Flex)`
    width: auto;
    height: ${(props) => (props.height ? props.height : '132px')};
    margin: 0;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: ${(props) => (props.pt ? props.pt : '52px')};
    padding-bottom: ${(props) => (props.pb ? props.pb : '52px')};
    border-radius: 4px;
    background-color: var(--color-blue-4);
    position: relative;
    direction: ltr;
`

export const FormulaContainerMobile = styled(Flex)`
    width: auto;
    height: ${(props) => (props.height ? props.height : '162px')};
    background-color: var(--color-blue-4);
    position: relative;
    padding-right: 6px;
    padding-left: 6px;
    padding-top: ${(props) => (props.pt ? props.pt : '45px')};
    @media ${device.mobileS} {
        height: ${(props) => (props.height ? props.height : '152px')};
        padding-top: ${(props) => (props.pt ? props.pt : '40px')};
    }
`
export const FormulaContainerSwapMobile = styled(Flex)`
    width: auto;
    height: ${(props) => (props.height ? props.height : '192px')};
    background-color: var(--color-blue-4);
    position: relative;
    padding-right: 6px;
    padding-left: 6px;
    padding-top: ${(props) => (props.mt ? props.mt : '45px')};
    @media ${device.mobileS} {
        height: 182px;
        padding-top: ${(props) => (props.mt ? props.mt : '40px')};
    }
`

export const FormulaHighlight = styled(Flex)`
    margin-top: ${(props) => (props.mt ? props.mt : '0')};
    height: ${(props) => (props.height ? props.height : '72px')};
    gap: ${(props) => (props.gp ? props.gp : 0)};
    border-radius: 4px;
    border: 1.5px solid var(--color-blue-5);
    background-color: white;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    justify-content: ${(props) => (props.jc ? props.jc : 'center')};
    padding-right: ${(props) => (props.pr ? props.pr : '0')};
    padding-left: ${(props) => (props.pl ? props.pl : '0')};
`
export const FormulaHighlightForPnlMultiplier = styled(Flex)`
    display: table;
    text-align: center;
    border-radius: 4px;
    border: 1.5px solid var(--color-blue-5);
    background-color: white;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    justify-content: ${(props) => (props.jc ? props.jc : 'center')};
    padding-right: ${(props) => (props.pr ? props.pr : '0')};
`

export const FormulaHighlightMobile = styled(Flex)`
    margin-left: 8px;
    margin-right: 8px;
    height: ${(props) => (props.height ? props.height : '68px')};
    gap: ${(props) => (props.gp ? props.gp : 0)};
    border-radius: 4px;
    border: 1px solid #85acb0;
    background-color: white;
    justify-content: ${(props) => (props.jc ? props.jc : 'center')};
    align-items: center;
    font-weight: 600;
    flex-direction: ${(props) => (props.syn_mobile ? 'column' : '')};
    font-size: ${(props) => (props.fs ? props.fs : '16px')};
    padding: ${(props) => (props.pd ? props.pd : '0')};
    @media ${device.mobileS} {
        font-size: 12px;
    }
`
export const FormulaValue = styled.div<FormulaValueType>`
    display: inline-block;
    min-width: ${(props) => (props.width ? props.width : '50px')};
    text-align: center;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
`
export const FormulaValueSwapSynthetic = styled.div`
    display: inline-block;
    min-width: 40px;
    text-align: center;
    margin-bottom: ${(props: FormulaValueType) => (props.mb ? props.mb : '0')};
`
export const FormulaValueSwapSyntheticMobile = styled.div`
    display: inline-block;
    min-width: ${(props: FormulaValueType) => (props.mw ? props.mw : '0')};
    text-align: center;
    margin-bottom: ${(props: FormulaValueType) => (props.mb ? props.mb : '0')};
`
export const FormulaValuePnlMultiplierMobile = styled.div`
    display: inline-block;
    text-align: center;
    margin-bottom: ${(props: FormulaValueType) => (props.mb ? props.mb : '0')};
    @media ${device.tabletL} {
        min-width: 19px;
    }
    @media ${device.mobileM} {
        min-width: 12px;
    }
`

export const FormulaValueSwapMobile = styled.div`
    display: inline-block;
    text-align: center;
    margin-bottom: ${(props: FormulaValueType) => (props.mb ? props.mb : '0')};
    @media ${device.tabletL} {
        min-width: 28px;
    }
    @media ${device.mobileM} {
        min-width: 20px;
    }
`
export const FormulaValuePnlMobile = styled.div`
    display: inline-block;
    text-align: center;
    margin-bottom: ${(props: FormulaValueType) => (props.mb ? props.mb : '0')};
    @media ${device.tabletL} {
        min-width: 40px;
    }
    @media ${device.mobileM} {
        min-width: 32px;
    }
`
export const FormulaValuePnlMobileTakeProfit = styled.div`
    display: inline-block;
    text-align: center;
    margin-bottom: ${(props: FormulaValueType) => (props.mb ? props.mb : '0')};
    @media ${device.tabletL} {
        min-width: 25px;
    }
    @media ${device.mobileM} {
        min-width: 15px;
    }
`
export const PnlMobileTakeProfitPip = styled.div`
    display: inline-block;
    text-align: center;
    @media ${device.tabletL} {
        min-width: 28px;
    }
    @media ${device.mobileM} {
        min-width: 15px;
    }
`
export const FormulaValuePnlStoplossPip = styled.div`
    display: inline-block;
    text-align: center;
    @media ${device.tabletL} {
        min-width: 30px;
    }
    @media ${device.mobileM} {
        min-width: 22px;
    }
`
export const FormulaValuePnlStoploss = styled.div`
    display: inline-block;
    text-align: center;
    @media ${device.tabletL} {
        min-width: 30px;
    }
    @media ${device.mobileM} {
        min-width: 22px;
    }
`

export const FormulaValueMobile = styled.div`
    display: inline-block;
    text-align: center;
    margin-bottom: ${(props: FormulaValueType) => (props.mb ? props.mb : '0')};

    @media ${device.mobileM} {
        min-width: ${(props: FormulaValueType) => (props.mw ? 'props.mw' : '17px')};
    }
`
export const FormulaValueSwapFinancialMobile = styled.div`
    display: inline-block;
    text-align: center;
    margin-bottom: ${(props: FormulaValueType) => (props.mb ? props.mb : '0')};

    @media ${device.tabletL} {
        min-width: 20px;
    }
    @media ${device.mobileM} {
        min-width: 16px;
    }
`
export const FormulaGreen = styled.span`
    display: inline-block;
    color: var(--color-blue-5);
`

export const PointerContainer = styled.div<PointerContainerType>`
    display: flex;
    position: absolute;
    height: ${(props) => (props.height ? props.height : '80px')};
    margin-top: ${(props) => (props.top ? '-100px' : '8px')};
    flex-direction: ${(props) => (props.top ? 'column-reverse' : 'column')};
    align-items: center;
    max-width: ${(props) => (props.width ? 'props.width' : '60px')};
    white-space: normal;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
`

export const PointerContainerMobile = styled.div<PointerContainerType>`
    display: flex;
    position: absolute;
    height: ${(props) => (props.height ? props.height : '80px')};
    margin-top: ${(props) => (props.top ? '-100px' : '8px')};
    flex-direction: ${(props) => (props.top ? 'column-reverse' : 'column')};
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    align-items: center;
    max-width: ${(props) => (props.mw ? 'props.mw' : '22px')};
    white-space: normal;
`

export const PointerDot = styled.div<PointerDotType>`
    height: 9px;
    width: 9px;
    background-color: black;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    border-radius: 50%;
    opacity: 0.1;
`

export const PointerDotMobile = styled.div<PointerDotType>`
    height: 7px;
    width: 7px;
    background-color: black;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    border-radius: 50%;
    opacity: 0.1;
`

export const PointerStick = styled.div<PointerStickType>`
    position: relative;
    height: ${(props) => (props.height ? props.height : '25px')};
    width: 1px;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    background-color: black;
    opacity: 0.1;
`
export const PointerStickHorizontal = styled.div<PointerStickType>`
    position: relative;
    height: 0;
    width: ${(props) => (props.w ? props.w : '59px')};
    border: 1px solid;
    background-color: black;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    opacity: 0.1;
`
export const PointerStickHorizontalMobile = styled.div<PointerStickType>`
    position: relative;
    height: 0;
    border: 1px solid;
    background-color: black;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    opacity: 0.1;
    @media ${device.tabletL} {
        width: 83px;
    }
    @media ${device.mobileM} {
        width: 76px;
    }
`
export const PointerStickMobile = styled.div<PointerStickType>`
    position: relative;
    height: ${(props) => (props.height ? props.height : '24px')};
    width: 1px;
    background-color: black;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    opacity: 0.1;
`
export const PointerHorizontalStickMobile = styled.div<PointerStickType>`
    position: relative;
    height: 0;
    width: ${(props) => (props.w ? props.w : '59px')};
    border: 1px solid;
    background-color: black;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    opacity: 0.1;
    @media ${device.mobileS} {
        width: ${(props) => (props.w ? props.w : '45px')};
    }
`
export const PointerText = styled.div<PointerTextType>`
    margin-top: 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-blue-5);
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
`

export const PointerTextMobile = styled.div<PointerTextType>`
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    font-weight: 600;
    color: var(--color-blue-5);
    font-size: 14px;
    @media ${device.mobileS} {
        font-size: 12px;
    }
`
export const PointerTextMobilePnlMultiplier = styled.div<PointerTextType>`
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    font-weight: 600;
    color: var(--color-blue-5);
    font-size: 13px;
    @media ${device.mobileM} {
        font-size: 12px;
    }
`

export const Sup = styled.span`
    color: black;
    font-size: 9px;
    vertical-align: super;
`

export const FormulaTopWrapper = styled.div`
    display: block;
`
export const FormulaTopWrapperSwapMobile = styled.div`
    display: block;
    padding-top: 12px;
`
export const FormulaTopWrapperPnl = styled.div<FormulaWrapperType>`
    display: block;
    margin-top: ${(props) => (props.mt ? props.mt : '24px')};
`
export const FormulaTopWrapperMobile = styled.div<FormulaWrapperType>`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: ${(props) => (props.cg ? props.cg : '0')};
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    margin-top: ${(props) => (props.mt ? props.mt : '0')};
`
export const FormulaTopWrapperPnlMobile = styled.div<FormulaWrapperType>`
    display: flex;
    margin-top: 14px;
`
export const PnlBottomWrapperMobile = styled.div<FormulaWrapperType>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: -20px;
    margin-top: -28px;
`
export const FormulaTopWrapperPnlMultiplierMobile = styled.div<FormulaWrapperType>`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: ${(props) => (props.cg ? props.cg : '12px')};
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    margin-top: ${(props) => (props.mt ? props.mt : '0')};
    @media ${device.mobileM} {
        grid-column-gap: ${(props) => (props.cg ? props.cg : '2px')};
    }
`
export const FormulaBottomWrapperPnlMobile = styled.div<FormulaWrapperType>`
    display: grid;
    grid-auto-flow: column;
    margin-top: ${(props) => (props.mt ? props.mt : '0')};
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    @media ${device.mobileM} {
        grid-column-gap: ${(props) => (props.cg ? props.cg : '2px')};
    }
    @media ${device.tabletL} {
        margin-left: ${(props) => (props.ml ? props.ml : '113px')};
    }
    @media ${device.mobileM} {
        margin-left: ${(props) => (props.ml ? props.ml : '-97px')};
    }
`
export const FormulaBottomWrapperPnl = styled.div<FormulaWrapperType>`
    display: block;
    margin-left: -170px;
    padding-bottom: 24px;
    margin-top: 15px;
`
export const FormulaBottomWrapper = styled.div<FormulaWrapperType>`
    display: block;
`
export const FormulaBottomWrapperMobile = styled.div<FormulaWrapperType>`
    display: block;
    padding-top: 12px;
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
`
export const PnlBottomWrapper = styled.div`
    display: block;
    margin-top: 10px;
`
