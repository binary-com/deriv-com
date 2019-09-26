import React from 'react'
import {
    StyledSection,
    StyledHeader,
    StyledOrder,
    TncListText,
    StyledTitle,
} from './_styles'
import { localize } from 'components/localization'

export const SecurityAndPrivacy = () => (
    <StyledSection>
        <StyledTitle as="h2" color="black">
            {localize('Security and privacy')}
        </StyledTitle>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'We recognise the importance of protecting your personal and financial information.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'All the information that We obtain about you assists Us in servicing you and your account. We understand that you may be concerned about what We do with this information.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'We have outlined Our privacy practices for you as follows:',
                    )}
                </TncListText>
            </li>
        </StyledOrder>

        <StyledHeader as="h4" weight="500">
            {localize('A. Use of information')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'We operate in full compliance with applicable Data Protection laws. These regulatory measures place obligations on the users of personal data such as Us. They also lay down the principles for fair and lawful processing of all the information that We acquire.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'It is Our commitment to safeguard your privacy online at all times. We only use your personal information to help Us service your account, to improve Our services, and to provide you with products that you have requested. We do not sell your personal information to third parties, but We may provide it to payment providers to facilitate transactions on your account.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Your personal information is used primarily as a way of validating you as the legitimate account owner and proper recipient of withdrawal payments. We also use this information to process your trades. We collect from you all personal and financial data that are directly related to you when you fill in the account opening form. In all instances, you have either a legal or a contractual obligation to provide Us with the information. If such information is not provided, We will be unable to provide you with Our services.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'We reserve the right to request further information from you whenever deemed appropriate under the circumstances. For example, We may ask you to send Us additional acceptable documents to confirm the authenticity of your account details or of any withdrawal request.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'We hold all the personal data that We collect from you with due diligence and only process them for purposes as required or allowed by law. This includes the process of obtaining and sharing of certain information with third parties for credit or identity checks to comply with legal and regulatory obligations. In certain cases, We may process your data to fulfil Our  contractual obligations with you.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'We also collect basic tax residence information for the purposes of CRS/FATCA compliance. The tax information that you provide may only be disclosed to the authorities who are legally charged with collecting this information for CRS/FATCA reporting, and We will only do so to the extent that We are legally obliged to collect it from you and disclose it to the authorities. We do not use, disclose, or process this information in any other way at any time.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You may update your personal information at any time by logging in to the "Settings" section of your account. It is your responsibility to ensure that We are promptly and continually informed of any change in your personal information. You should note that if you provide Us with inaccurate information, or if you fail to notify Us of any changes to the information previously supplied by you, this may adversely affect the quality of the services that We can provide.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('B. Profiling and categorisation')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'We collect and assess your data to profile you in relation to Our products. We do this manually with the assistance of automated processing. By categorisation, We will be able to provide you with the most appropriate products and services.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('C. Cookies and device information')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'Cookies are small text files stored on computer drives and are widely used in order to make websites work and to improve the user experience. All recent versions of browsers give you a level of control over cookies. You can delete all cookies that are already on your computer, and the browser can be set to prevent them from being placed. However, if you choose not to receive Our cookies, the full usability of Our website may be adversely affected.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You should note that Our website generates log files that record the IP addresses of accesses to your account, login attempts, and device information such as the manufacturer, model, operating system, and browser. This information is gathered for the sole purpose of providing assistance with investigating your account in the unlikely event that the account is accessed by unauthorised users. Information supplied by some cookies also helps Us understand how visitors use the website, so that We can improve how it presents its content.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Our cookies are not deemed dangerous and cannot access any other information on your computer.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'By using or interacting with Deriv, you are giving Us permission to use the Google Analytics User ID feature, which allows Google to capture your  Deriv login ID such as VRTC1234 and MT1234. When this feature is enabled, no personally identifiable information other than your Deriv login ID or other data that can be linked to such information by Google is shared with or disclosed to Google.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('D. Data retention')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'If you choose to close your Deriv account, your data will be kept only until Our legal and regulatory obligations on data retention are met. We will delete your data once the applicable retention period expires.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('E. Security statement')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'We ensure that your personal data and transactions are secure by taking the following measures:',
                    )}
                </TncListText>
            </li>
            <StyledOrder type="lower-alpha">
                <li>
                    <TncListText>
                        {localize(
                            'Your password and login ID are unique, and passwords are hashed so that not even Our staff can read them. This is the why We cannot retrieve your password if you cannot recall it. Instead, We will send you a link to set a new password yourself.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We maintain customer balances in cash or cash equivalent. We ensure that 100% of your balance is available for immediate withdrawal, subject to verification.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'All credit card details are submitted directly to the Visa/Mastercard network using the latest SSL encryption technology, in accordance with bank policies.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'Our information security policies are based on industry best practices in access control and business continuity.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We use identity verification services and real-time fraud detection measures to help protect you from unauthorised access to your account. We also monitor account activity for signs of unusual activity that might indicate fraud and work with collection and law-enforcement agencies to address fraud issues.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'Maintaining the security of your login details, any linked email address, and any personal computer or device on which your account is accessible is your responsibility (e.g. password protection, screen locking, etc.). We shall not be held responsible if there is unauthorised use of your account when We are not at fault.',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('F. Links')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'Our website contains links to other websites and may contain banner or icon advertisements related to third-party websites. These websites and their advertisements may submit cookies to your web browser, which is beyond Our control. We are not responsible for the privacy practices or the content of such websites. We encourage you to read the privacy policies of these websites because their practices may differ from Ours.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('G. Notification of changes')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'Any changes in Our privacy policy or security statement will be posted on this website. For any material changes that directly affect the economic use of your personal information, We will request your prior authorisation in writing before effecting such changes on your account.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
    </StyledSection>
)
