import React from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import Button from '../button'
import Flex from '../flex-box'
import Typography from '../typography'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

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
                <AlertDialog.Overlay className="at-alert-overlay" />
                <AlertDialog.Content className="at-alert-content">
                    <AlertDialog.Title asChild className="AlertDialogTitle">
                        <div>
                            <Typography.Heading as="h3" size="xxs" pb="12x">
                                <Localize translate_text={title} />
                            </Typography.Heading>
                        </div>
                    </AlertDialog.Title>
                    <AlertDialog.Description asChild className="AlertDialogDescription">
                        <div>
                            <Typography.Paragraph>
                                <Localize translate_text={description} />
                            </Typography.Paragraph>
                        </div>
                    </AlertDialog.Description>

                    <Flex.Box gap="12x" justify="end" pt="12x">
                        <AlertDialog.Cancel asChild>
                            {cancel_button && (
                                <span>
                                    <Button.Secondary onClick={cancel_button?.onClick} outlined>
                                        <Localize translate_text={cancel_button.text} />
                                    </Button.Secondary>
                                </span>
                            )}
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <span>
                                <Button.Primary onClick={action_button.onClick}>
                                    <Localize translate_text={action_button.text} />
                                </Button.Primary>
                            </span>
                        </AlertDialog.Action>
                    </Flex.Box>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}

export default Alert
