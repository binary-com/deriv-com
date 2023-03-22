import React from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import Button from '../button'
import FlexBox from '../flex-box'
import Typography from '../typography'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'
import './alert.scss'

type AlertButtonProps = {
    text: TString
    onClick?: React.MouseEventHandler<'button'>
}

export interface AlertProps {
    title?: TString
    description: TString
    cancel_button?: AlertButtonProps
    action_button: AlertButtonProps
}

const Alert = ({
    title = '_t_Alert_t_',
    description,
    cancel_button,
    action_button,
}: AlertProps) => {
    return (
        <AlertDialog.Root defaultOpen>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="alert-overlay" />
                <AlertDialog.Content className="alert-content">
                    <AlertDialog.Title className="AlertDialogTitle">
                        <Typography.Heading size="xxs" pb="12x">
                            <Localize translate_text={title} />
                        </Typography.Heading>
                    </AlertDialog.Title>
                    <AlertDialog.Description className="AlertDialogDescription">
                        <Typography.Paragraph>
                            <Localize translate_text={description} />
                        </Typography.Paragraph>
                    </AlertDialog.Description>

                    <FlexBox gap="12x" justify="end" pt="12x">
                        <AlertDialog.Cancel asChild>
                            {cancel_button && (
                                <Button.Secondary onClick={cancel_button?.onClick} outlined>
                                    <Localize translate_text={cancel_button.text} />
                                </Button.Secondary>
                            )}
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <Button.Primary onClick={action_button.onClick}>
                                <Localize translate_text={action_button.text} />
                            </Button.Primary>
                        </AlertDialog.Action>
                    </FlexBox>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}

export default Alert
