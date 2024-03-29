import React from 'react'
import styled from 'styled-components'
import Typography from 'features/components/atoms/typography'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { Localize } from 'components/localization'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { TString } from 'types/generics'
import device from 'themes/device'

const StepperWrapper = styled.div`
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    inline-size: 700px;
    margin: 0 auto;

    @media ${device.tabletL} {
        justify-content: center;
        inline-size: 100%;
        padding-block: 20px 16px;
    }
`
const StepView = styled.div<{ first_two_steps?: boolean; is_rtl?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: ${({ is_rtl }) => (is_rtl ? 'right' : 'left')};
    margin: 0 auto;
    inline-size: ${({ first_two_steps }) => (first_two_steps ? '328px' : '95%')};
`
const StepperItem = styled.div<{ active: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    @media (max-width: 768px) {
        font-size: 12px;
    }

    &::before {
        position: absolute;
        content: '';
        border-bottom: 2px solid #999999;
        width: 100%;
        top: 13px;
        left: -50%;
        z-index: 2;
    }
    &::after {
        position: absolute;
        content: '';
        border-bottom: ${(props) => (props.active ? '2px solid #FF444F' : '2px solid #999999')};
        width: 100%;
        top: 13px;
        left: 50%;
        z-index: ${({ active }) => (active ? 3 : 2)};
    }
    &:first-child::before {
        content: none;
    }
    &:last-child::after {
        content: none;
    }
`
const StepCounter = styled.div<{ active: boolean }>`
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${(props) => (props.active ? `#FF444F` : `#999999`)};
    margin-bottom: 6px;

    &.active {
        font-weight: bold;
    }
`
const Description = styled.div`
    position: fixed;
    top: 20%;
    left: 25%;
`
const Label = styled.h4<{ active: boolean }>`
    text-align: center;
    padding-top: 10px;
    font-size: 12px;
    font-weight: ${(props) => (props.active ? 700 : 400)};
    color: ${(props) => (props.active ? `#FF444F` : `#999999`)};
`

const steps: { id: number; step_num: TString; step_name: TString; step_description?: TString }[] = [
    {
        id: 1,
        step_num: '_t_Step 1 : Account type (1 of 5)_t_',
        step_name: '_t_Account type_t_',
        step_description: '_t_Choose the type of partner account you want to register_t_',
    },
    {
        id: 2,
        step_num: '_t_Step 2 : Address details (2 of 5)_t_',
        step_name: '_t_Address details_t_',
        step_description: '_t_Personal address_t_',
    },
    {
        id: 3,
        step_num: '_t_Step 3 : Personal details (3 of 5)_t_',
        step_name: '_t_Personal details_t_',
        step_description: '_t_ Details_t_',
    },
    {
        id: 4,
        step_num: '_t_Step 4 : Subscription plan (4 of 5)_t_',
        step_name: '_t_Subscription plan_t_',
        step_description: '_t_Choose which plan you would like to subscribe._t_',
    },
    {
        id: 5,
        step_num: '_t_Step 5 : Terms of use (5 of 5)_t_',
        step_name: '_t_Terms of use_t_',
        step_description:
            '_t_Real accounts are not available to politically exposed persons (PEPs)._t_',
    },
]
const Stepper = ({ step }: { step: number }) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const is_rtl = useIsRtl()

    return (
        <StepperWrapper>
            {is_mobile_or_tablet
                ? steps.map(({ id, step_name, step_num }) => (
                      <React.Fragment key={`step-${id}`}>
                          {step === id && (
                              <StepView
                                  id={`step-${id}`}
                                  first_two_steps={step < 3}
                                  is_rtl={is_rtl}
                              >
                                  <Typography.Paragraph
                                      size="medium"
                                      textcolor="brand"
                                      weight="bold"
                                  >
                                      <Localize translate_text={step_num} />
                                  </Typography.Paragraph>
                              </StepView>
                          )}
                      </React.Fragment>
                  ))
                : steps.map(({ id, step_name }) => (
                      <StepperItem key={`step-${id}`} id={`step-${id}`} active={id < step}>
                          <StepCounter active={id <= step}>{id}</StepCounter>
                          <Label active={id === step}>
                              <Localize translate_text={step_name} />
                          </Label>
                      </StepperItem>
                  ))}
        </StepperWrapper>
    )
}

export default Stepper
