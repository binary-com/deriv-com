import './src/components/localization/config'
import GlobalStyle from 'themes/global-style'
import Layout from 'components/layout/layout'

export const wrapPageElement = ({ element, props }) => {
    return (
        <Layout {...props}>
            <GlobalStyle />
            {element}
        </Layout>
    )
}
