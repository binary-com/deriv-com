import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import { DragDrop, useDragDropFiles } from './components/_drag_drop_component.js'
import validation from 'common/validation'
import { trimSpaces } from 'common/utility'
import { Container, SectionContainer, Flex } from 'components/containers'
import { Input, Button } from 'components/form'
import { TimelineTick } from 'components/elements/timeline'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'

const formValidation = (values) => {
    let errors = {}
    const email = trimSpaces(values.email)
    const email_error = validation.required(email) || validation.email(email)

    if (email_error) {
        errors.email = email_error
    }

    return errors
}

const FormCard = styled(Flex)`
    border: 1px solid #f2f3f4;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(14, 14, 14, 0.1);
    border-radius: 8px;
    max-width: 996px;
`

const InputWrapper = styled(Flex)`
    height: fit-content;
`

const ScrollWrapper = styled.div`
    overflow-y: scroll;
    height: 495px;
    padding: 65px 64px 0;
`

const ButtonWrapper = styled(Flex)`
    padding: 20px 64px 20px 0;
    border-top: ;
`

const RadioWrapper = styled(Flex)`
    max-width: 320px;
    justify-content: space-between;

    & > div {
        display: flex;
        align-items: center;

        & > input {
            border: 2px solid #999999;
            margin: 0 8px 0 0;
        }
    }
`

const SideForm = styled(Flex)`
    height: auto;
    max-width: 407px;
    background: black;
    border-radius: 8px 0 0 8px;
`

const StyledInput = styled(Input)`
    width: 48%;
`

const SubmitABugReport = () => {
    const [file, setFile] = useDragDropFiles()
    React.useEffect(() => {
        console.log(file)
    }, [file])

    return (
        <SectionContainer>
            <Container direction="column">
                <Header type="heading-2" as="h2" align="center" mb="8px">
                    {localize('Submit a bug report')}
                </Header>
                <Text>
                    {localize(
                        'Send us a report using the form below. We’ll contact you after we’ve reviewed your report.',
                    )}
                </Text>
                <FormCard>
                    <SideForm>
                        <Flex height="auto" m="100px 60px auto" fd="column">
                            <Header color="white" type="subtitle-2">
                                {localize('Our response times:')}
                            </Header>
                            <TimelineTick>
                                <TimelineTick.Item>
                                    <Header color="white" type="paragraph-1">
                                        {localize('First response')}
                                    </Header>
                                    <Header color="white" type="paragraph-2" weight="400">
                                        {localize('1 business day from report submission')}
                                    </Header>
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    <Header color="white" type="paragraph-1">
                                        {localize('Triage')}
                                    </Header>
                                    <Header color="white" type="paragraph-2" weight="400">
                                        {localize('3 business days from report submission')}
                                    </Header>
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    <Header color="white" type="paragraph-1">
                                        {localize('Payout')}
                                    </Header>
                                    <Header color="white" type="paragraph-2" weight="400">
                                        {localize('7 business days from report submission')}
                                    </Header>
                                </TimelineTick.Item>
                            </TimelineTick>
                        </Flex>
                    </SideForm>
                    <Formik
                        initialValues={{ first_name: '', last_name: '', email: '' }}
                        onSubmit={async (values) => {
                            console.log(values)
                            console.log(file)
                        }}
                        validate={formValidation}
                    >
                        {({ values, errors, handleChange, handleBlur, resetForm }) => (
                            <Form noValidate style={{ height: '100%', width: '100%' }}>
                                <ScrollWrapper>
                                    <InputWrapper fd="column">
                                        <Flex mb="24px" fd="column">
                                            <Header type="paragraph-1">
                                                {localize('Personal details')}
                                            </Header>
                                            <Flex jc="space-between">
                                                <StyledInput
                                                    name="first_name"
                                                    error={errors.first_name}
                                                    value={values.first_name}
                                                    handleError={resetForm}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    autoComplete="off"
                                                    type="text"
                                                    label={localize('First name')}
                                                    background="white"
                                                    placeholder={'First name'}
                                                    data-lpignore="true"
                                                    required
                                                />
                                                <StyledInput
                                                    name="last_name"
                                                    error={errors.last_name}
                                                    value={values.last_name}
                                                    handleError={resetForm}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    autoComplete="off"
                                                    type="text"
                                                    label={localize('Last name')}
                                                    background="white"
                                                    placeholder={'Last name'}
                                                    data-lpignore="true"
                                                    required
                                                />
                                            </Flex>
                                            <Input
                                                name="email"
                                                error={errors.email}
                                                value={values.email}
                                                handleError={resetForm}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="off"
                                                type="text"
                                                label={localize('Email')}
                                                background="white"
                                                placeholder={'example@email.com'}
                                                data-lpignore="true"
                                                required
                                            />
                                        </Flex>
                                        <Flex mb="24px" fd="column">
                                            <Header type="paragraph-1">
                                                {localize('Bug details')}
                                            </Header>
                                            <Input
                                                name="bug_title"
                                                error={errors.bug_title}
                                                value={values.bug_title}
                                                handleError={resetForm}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="off"
                                                type="text"
                                                label={localize('Title')}
                                                background="white"
                                                placeholder={'Title'}
                                                data-lpignore="true"
                                                required
                                            />
                                            <Flex mb="16px" fd="column">
                                                <Header
                                                    color="grey-5"
                                                    type="paragraph-2"
                                                    weight="400"
                                                >
                                                    {localize('Severity')}
                                                </Header>
                                                <RadioWrapper>
                                                    <div>
                                                        <input
                                                            type="radio"
                                                            id="critical"
                                                            name="severity"
                                                            value="critical"
                                                        />
                                                        <label htmlFor="critical">
                                                            <Header type="paragraph-2" weight="400">
                                                                {localize('Critical')}
                                                            </Header>
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="radio"
                                                            id="high"
                                                            name="severity"
                                                            value="high"
                                                        />
                                                        <label htmlFor="high">
                                                            <Header type="paragraph-2" weight="400">
                                                                {localize('High')}
                                                            </Header>
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="radio"
                                                            id="medium"
                                                            name="severity"
                                                            value="medium"
                                                        />
                                                        <label htmlFor="medium">
                                                            <Header type="paragraph-2" weight="400">
                                                                {localize('Medium')}
                                                            </Header>
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="radio"
                                                            id="low"
                                                            name="severity"
                                                            value="low"
                                                        />
                                                        <label htmlFor="low">
                                                            <Header type="paragraph-2" weight="400">
                                                                {localize('Low')}
                                                            </Header>
                                                        </label>
                                                    </div>
                                                </RadioWrapper>
                                            </Flex>
                                            <Input
                                                name="bug_description"
                                                error={errors.bug_description}
                                                value={values.bug_description}
                                                handleError={resetForm}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="off"
                                                type="text"
                                                label={localize('Description')}
                                                background="white"
                                                placeholder={'Description'}
                                                data-lpignore="true"
                                                required
                                            />
                                            <Input
                                                name="bug_steps"
                                                error={errors.bug_steps}
                                                value={values.bug_steps}
                                                handleError={resetForm}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="off"
                                                type="text"
                                                label={localize('Steps to reproduce')}
                                                background="white"
                                                placeholder={'Steps to reproduce'}
                                                data-lpignore="true"
                                                required
                                            />
                                        </Flex>
                                        <Flex mb="24px" fd="column">
                                            <Header type="paragraph-1">
                                                {localize('Attachments')}
                                            </Header>
                                            <DragDrop file={file} setFile={setFile} />
                                        </Flex>
                                    </InputWrapper>
                                </ScrollWrapper>
                                <ButtonWrapper jc="flex-end">
                                    <Button secondary type="submit">
                                        Submit
                                    </Button>
                                </ButtonWrapper>
                            </Form>
                        )}
                    </Formik>
                </FormCard>
            </Container>
        </SectionContainer>
    )
}

export default SubmitABugReport
