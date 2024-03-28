import { Analytics } from '@deriv-com/analytics'

const widgetEvent = (widget_name: 'trustpilot' | 'livechat' | 'whatsapp') => {
    Analytics.trackEvent('ce_widget_usage_form', {
        action: 'click',
        widget_name,
    })
}

export default widgetEvent
