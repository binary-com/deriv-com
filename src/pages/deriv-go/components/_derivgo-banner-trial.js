// import React from 'react'
// import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { graphql, useStaticQuery } from 'gatsby'
// import { Flex, Container } from 'components/containers'
// import { Header, QueryImage } from 'components/elements'
// import { localize } from 'components/localization'
// import device from 'themes/device.js'
// import { Background } from 'components/elements/background-image'

// const Wrapper = styled(Container)`
//     padding-left: 8rem;
//     height: 34rem;
//     justify-content: flex-start;
//     background-color: transparent;

// `
// const BackgroundWrapper = styled(Flex)`
//     width: 100%;
//     height: 562px;
//     margin: 0 0 94.2px;
//     padding: 32px 732px 103px 222px;
//     object-fit: contain;

// `

// const ImageWrapper = styled(Flex)`
//     position: absolute;
//     height: 100%;

//     div {
//         width: 100%;
//     }

//     @media ${device.laptopM} {
//         max-width: 430px;
//     }
//     @media ${device.tabletL} {
//         max-width: 300px;
//     }
//     @media ${device.tablet} {
//         max-width: 260px;
//     }
// `

// const TextWrapper = styled.div`
//     width: 80%;
//     height: 160px;
// `
// const StyledHeader = styled(Header)`
//     @media ${device.laptopM} {
//         font-size: 4rem;
//         max-width: 60rem;
//     }
//     @media ${device.tabletS} {
//         font-size: 40px;
//         text-align: center;
//     }
// `

// const query = graphql`
//     query {
//         derivgo_background: file(relativePath: { eq: "derivgo/derivgo_background.png" }) {
//             ...fadeIn
//         }
//     }
// `
// const DerivGoBanner = ({ title }) => {
//     const data = useStaticQuery(query)

//     return (

//         <Wrapper>
//             <ImageWrapper>
//                 <QueryImage data={data['derivgo_background']} alt="derivgo background"  styles={{
//                       width: '100%',
//                       height: '562px',
//                       margin: '0 0 94.2px',
//                       padding: '32px 732px 103px 222px',
//                       objectFit: 'contain',
//                       backgroundColor:'var(--color-white)',
//                       backgroundImage: 'linear-gradient(352deg, #1e3c57 70%, #5085b6 15%)'
//                 }}  />
//             </ImageWrapper>

//             <TextWrapper>
//                 <StyledHeader>{title}</StyledHeader>
//             </TextWrapper>
//             <h3>Here</h3>
//         </Wrapper>

//     )
// }

// DerivGoBanner.propTypes = {
//     image_name: PropTypes.string,
//     title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
// }

// export default DerivGoBanner
