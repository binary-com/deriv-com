import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import axios from 'axios'
import TrustLogo from 'images/svg/trustpilot/trust-logo.svg'
import TrustStar from 'images/svg/trustpilot/trust-star.svg'
import Stars from 'images/svg/trustpilot/stars'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'

const StyledFlex = styled(Flex)`
    .trustpilot-widget {
        flex: none;
        width: 16rem;
    }
`

const StyledLink = styled.a`
    width: 100%;
    display: flex;
    text-decoration: none;

    @media ${device.tabletS} {
        justify-content: space-between;
    }
`

const StarBox = styled(Flex)`
    flex-direction: column;
    align-items: center;

    .logo-box {
        .star {
            width: 3.9rem;
            align-self: baseline;
        }
        .logo {
            width: 12rem;
            margin: 0 0 -1.4rem 0;
        }
    }

    @media ${device.tabletS} {
        justify-content: flex-start;
        width: fit-content;
    }
`

const ScoreBox = styled(Flex)`
    flex-direction: column;
    align-items: center;

    .score {
        margin: 0 0 -0.6rem 0;
    }

    @media ${device.tabletS} {
        width: fit-content;
        flex: none;
    }
`

const RatingBox = styled(Flex)`
    margin: 1.2rem 0 0 0;
    width: 13.2rem;
`

const StarRating = styled.img`
    width: 100%;
    height: 100%;
`

export const getRatingData = (rating) => {
    const rating_str = typeof rating == 'string' ? rating : rating.toString()
    const rating_data = rating_str.split('.').map((e, k) => (k == 0 ? e : e >= 5 ? 5 : ''))
    const rate = rating_data[0]
    const point = rating_data[1] ? rating_data[1] : 0
    const icon = 'Star' + [rate, point == 5 ? 'Half' : ''].join('')

    return {
        point,
        rate,
        icon,
    }
}

const TrustPilotStars = ({ rating }) => {
    const { icon } = getRatingData(rating)

    return (
        <RatingBox>
            <StarRating src={Stars[icon]} />
        </RatingBox>
    )
}

const TrustPilotWidget = () => {
    const [trust_pilot, setTrustPilot] = useState(null)

    useEffect(() => {
        const api_key = process.env.GATSBY_TRUSTPILOT_API_KEY
        const app_name = process.env.GATSBY_TRUSTPILOT_NAME

        axios({
            method: 'GET',
            url: `https://api.trustpilot.com/v1/business-units/find?name=${app_name}&apikey=${api_key}`,
        })
            .then((res) => {
                setTrustPilot(res.data)
            })
            .catch((e) => {
                throw new Error(e)
            })
    }, [])

    if (trust_pilot) {
        const { numberOfReviews, score } = trust_pilot
        const review_score = score.trustScore + '/5'
        const numberFormat = (n) => n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

        return (
            <StyledFlex jc="space-between" className="trustpilot-container">
                <StyledLink
                    href="https://www.trustpilot.com/review/deriv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <StarBox>
                        <Flex className="logo-box">
                            <img className="star" src={TrustStar} alt="TrustPilot Star" />
                            <img className="logo" src={TrustLogo} alt="TrustPilot Logo" />
                        </Flex>
                        <TrustPilotStars rating={score.stars.toString()} />
                    </StarBox>

                    <ScoreBox>
                        <Text size={'3.2rem'} weight={'bold'} className="score">
                            {review_score}
                        </Text>
                        <Text size={'1.4rem'}>
                            <Localize
                                translate_text="{{ total_reviews }} Reviews"
                                values={{
                                    total_reviews: numberFormat(numberOfReviews.total),
                                }}
                            />
                        </Text>
                    </ScoreBox>
                </StyledLink>
            </StyledFlex>
        )
    }

    return <React.Fragment />
}

TrustPilotStars.propTypes = {
    rating: PropTypes.string.isRequired,
}

export default TrustPilotWidget
