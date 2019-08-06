import React from 'react'
import {
    StyledSection,
    StyledOrder,
    TncListText,
    StyledHeader,
    TncText,
} from './_styles'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'

export const PaymentAgents = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Payment agents’ terms and conditions')}
        </Header>
        <StyledHeader as="h4" weight="500" margin={{ top: '2rem' }}>
            {localize('A. Scope of agreement')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'This agreement between you and Us is supplementary to Our terms and conditions, published on Our website, and all clauses, whether appearing here or elsewhere in Our terms and conditions, are true and binding.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Each party shall do anything reasonably required by the other party to give effect to the provisions of this agreement.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('B. Provision of services')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'You may provide your services to those of Our clients who want to deposit and/or withdraw money through you and want to use payment methods that are different from what We accept, including some e-wallet or e-payment methods (from now on referred to as “e-payments), some local currencies (from now on referred to as “local currencies”), or some local bank wire transfers (from now on referred to as “bank wire transfers”).',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'When a client makes deposits through you, the following process takes place:',
                    )}
                </TncListText>
            </li>
            <StyledOrder type="lower-alpha">
                <li>
                    <TncListText>
                        {localize(
                            'The client makes a deposit to you, using e-payments or bank wire transfers.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'You receive the deposited amount and make an equal deposit into your Deriv account.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'You transfer the deposited amount from your Deriv account to the client’s Deriv account (from now on referred to as the "Deriv Client Account").',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
            <li>
                <TncListText>
                    {localize(
                        'When a client makes a withdrawal through you, the following process takes place:',
                    )}
                </TncListText>
            </li>
            <StyledOrder type="lower-alpha">
                <li>
                    <TncListText>
                        {localize(
                            'The client requests a withdrawal from Deriv Client Account.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'The requested sum is transferred automatically from the Deriv Client Account into your Deriv account. (If the client has reached their withdrawal limit, the withdrawal request shall not proceed until the required authentication process is completed.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'Next, you transfer the requested amount to the client.',
                        )}
                    </TncListText>
                </li>
                <TncText>
                    {localize(
                        'These transactions are not within the scope of this agreement, so if any dispute or potential dispute is caused by such transactions or in connection to them, We shall not be liable to you, the client, or any other person.',
                    )}
                </TncText>
                <li>
                    <TncListText>
                        {localize(
                            'This agreement prohibits you from offering your services to clients who live in the restricted countries listed in the General terms and conditions (the list might change from time to time).',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('C. Your obligations')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'If We ask for any information and documentation regarding your operations and competence, you shall give them to Us. For example, your registration, incorporation, memberships, authorisations, knowledge, expertise, experience, etc.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You must also perform all necessary due diligence on your clients. We shall be able to ask you at any time to provide all information and documentation related to your clients, so we can take the necessary steps for Our AML compliance.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'If for any reason, for example, lack of knowledge, expertise, experience, skills, and time, you are no longer competent, capable, adequate, or qualified to carry out the duties and obligations that you have agreed to by signing this agreement, you must notify Us immediately.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'In providing your services, you shall do the following:',
                    )}
                </TncListText>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'Be careful to transfer the funds that are deposited to your Deriv account to the correct Deriv Client account.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'If you have any information that something may bring harm or be of disadvantage to Us or Our reputation, pass that information to Us immediately.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'Follow and use all of Our business-related directions, policies, and procedures, which may be changed, re-established, or replaced from time to time.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'Fairly and accurately describe your services to the clients.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'Offer your services and other duties that are listed in this agreement at your own cost and risk.',
                            )}
                        </TncListText>
                    </li>
                </StyledOrder>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'If you own or operate a website(s), you shall do the following:',
                    )}
                </TncListText>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'Receive Our approval to include any information related to Us.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'Include a disclaimer and/or notice that any intellectual property rights, including any trademark or slogan, belong to Us, and any unauthorised use is strictly prohibited.',
                            )}
                        </TncListText>
                    </li>
                </StyledOrder>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'We shall not be responsible or liable for any matter that is caused by or related to a website that you own or use. If We suffer any losses because of a website that you use or own, you shall indemnify Us.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You shall not use any domain name that includes the name Deriv and any derivation or variation of this name that might give the impression that you and Us are the same person.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You shall not represent yourself in your advertising activities as Our representative or as a person that We have authorised.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You shall not use Our name or trademark in your advertising activities without Our written authorisation.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You shall not misrepresent the services that you provide to Our clients.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Your behaviour, advertisements, or promises  shall not be false or misleading.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You shall not prepare and publish any material or place any advertisements that refer to Us and your relationship with Us without Our authorisation.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You shall not use Deriv’s Application Programme Interface (API) in an abusive or fraudulent manner for any purposes.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('D. Our obligations')}
        </StyledHeader>
        <TncText>
            {localize(
                'If We find any mistakes or flaws related to deposits or withdrawals from or to your Deriv account or Deriv Client Account, We shall take all necessary steps to correct such mistakes or flaws within a reasonable time.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('E. Representations and warranties')}
        </StyledHeader>
        <TncText>
            {localize(
                'On the Commencement Date of this agreement and on the date of each transaction, you must make sure that all the necessary authority, power, consents, licences, or authorisations are in order, and you have taken all necessary actions that make you able to enter into and perform this agreement lawfully.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('F. On-boarding policy')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'You shall submit an application that includes the following information:',
                    )}
                </TncListText>
            </li>
            <StyledOrder type="lower-alpha">
                <li>
                    <TncListText>
                        {localize('Name, email address, and contact number')}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize('Website URL (if applicable)')}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize('A list of accepted payment methods')}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'The commissions to be charged on deposits and withdrawals',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize('Any other information that We request')}
                    </TncListText>
                </li>
            </StyledOrder>
            <li>
                <TncListText>
                    {localize(
                        'The information outlined in Paragraph 1 of this section shall be submitted to affiliates@deriv.com',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The application shall be reviewed and assessed by Our Compliance and Marketing departments. It is noted that following and implementing the anti-money laundering policy and conducting due diligence in accordance with the law and regulations, Our Compliance department shall request and collect all required information and documentation at their discretion.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'We may accept or reject your application at Our absolute discretion. If your application is accepted, you shall include all relevant information, for example, name, address, website URL (if available), email address, telephone number, commission rates, and payment methods that you use, in the payment agent list which is disclosed on Our website.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('G. Events of Default')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'Each of the following events is an “Event of Default”:',
                    )}
                </TncListText>
            </li>
            <StyledOrder type="lower-alpha">
                <li>
                    <TncListText>
                        {localize(
                            'If you die,  become incapacitated, or lose your mental soundness',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'If you become incapable of paying your debts when they fall due or go bankrupt or insolvent, as defined under any applicable bankruptcy or insolvency law if you are an individual',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'If you act in breach of any warranty, representation, or promise that you have made under this agreement',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'If any information that you have provided to Us in connection with this agreement is or becomes untrue or misleading',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'If you don’t comply with your obligations or don’t perform any of your duties or other arrangements under this agreement and such failure continues for at least one business day after you have received Our non-performance notice',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'If a third party who wants or proposes liquidation, reorganisation, restructuring, an arrangement or composition, or a freeze or moratorium related to you or your debts according to the law, involuntarily starts a proceeding against you',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'If a law-suit, action, or other legal or administrative proceeding is started against you in connection to this agreement or if part or all of your property, undertakings, or assets, whether tangible and intangible, are taken by encumbrance ',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'If you are found to have conducted a criminal offence ',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'An event that can seriously decrease your ability to perform any of your duties and obligations according to this agreement.',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
            <li>
                <TncListText>
                    {localize(
                        'If any of the events in the above paragraphs takes place, We may terminate this agreement immediately without your consent.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('H. Indemnification')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'We shall not be responsible or liable to the client as a result of your fraud, omission, negligence, misconduct, or wilful default. Also, if you breach any terms and conditions of this agreement.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'If you give advice on financial services to any client, We shall not be responsible or liable for it.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'We shall not supervise any financial services that you provide.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('I. Modification/amendment')}
        </StyledHeader>
        <TncText>
            {localize(
                'Any modification or amendment of a part or the whole of this agreement shall only be valid if both you and Us accept the changes clearly and without any ambiquity.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('J. Confidentiality')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'You shall treat all information related to Us and the client, for example, the client’s identity, financial status, trading, or transaction performance, as well as Our business plans, price points, ideas, concepts, formats, suggestions, developments, arrangements, programmes, techniques, methodologies, knowhow, and equipment as confidential (from now on referred to as the “Confidential Information”).',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You shall not produce any copies of any Confidential Information or any content that is based on the Confidential Information for personal use or distribution without Our request.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Confidential Information shall be confidential even after the termination of the business relationship between you and Us that is established under this agreement or any other agreement or arrangement.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You shall return to Us any documents that you have which are related to Our business immediately when the relationship between you and Us is terminated.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('K. Termination')}
        </StyledHeader>
        <TncText>
            {localize(
                'Either of the parties may terminate this agreement by giving seven days written notice to the other party.',
            )}
        </TncText>
    </StyledSection>
)
