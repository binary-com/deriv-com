import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TrustLogo from 'images/svg/trustpilot/trust-logo.svg'
import Star from 'images/svg/trustpilot/star.svg'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import { Localize } from 'components/localization'

const query = graphql`
    query {
        trustPilotPublicBusinessUnit {
            score {
                stars
                trustScore
            }
            numberOfReviews {
                total
            }
        }
    }
`

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
`

const ScoreBox = styled(Flex)`
    flex-direction: column;
    align-items: center;

    .score {
        margin: 0 0 -0.6rem 0;
    }
`

const RatingBox = styled(Flex)`
    margin: 1.2rem 0 0 0;
`

const RatingItem = styled.div`
    position: relative;
    background-color: #dcdce6;
    border-radius: 0.2rem;
    overflow: hidden;
    width: 2rem;
    height: 2rem;
    margin: 0 0.8rem 0 0;

    &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props) => (props.percent || props.percent === 0 ? props.percent + '%' : '100%')};
        height: 100%;
        background: ${(props) => (props.color ? props.color : '#11B37C')};
        z-index: 1;
    }
`

const StarRating = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0.2rem;
    z-index: 2;
`

const getRatingData = (rating) => {
    const rating_colors = ['#FF3820', '#FD8727', '#FECF00', '#74D00E', '#11B37C']
    const rating_data = rating.split('.').map((e, k) => (k == 0 ? e : e >= 5 ? 5 : 0))
    const rate = rating_data[0]
    const point = rating_data[1] ? rating_data[1] : 0
    const color_key = rate == 4 && point >= 5 ? rate : rate - 1
    const color = rating_colors[color_key]

    return {
        color,
        point,
        rate,
    }
}

const TrustPilotRateStar = ({ rating }) => {
    const { color } = getRatingData(rating)
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="starRating"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            className="star"
        >
            <g
                className="tp-star"
                transform="matrix(0.961658, 0, 0, 0.976231, -6.455077, -7.427239)"
            >
                <path
                    className="tp-star__shape"
                    d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z"
                    fill={color}
                />
            </g>
        </svg>
    )
}

const TrustPilotStars = ({ rating }) => {
    const items = Array.from(Array(5).keys())

    const getData = (n) => {
        const { color, point, rate } = getRatingData(rating)

        let percent = 100

        if (n == rate) {
            percent = point * 10
        }

        if (n > rate) {
            percent = 0
        }

        return {
            color,
            percent,
        }
    }

    return (
        <RatingBox>
            {items.map((s, k) => {
                const { color, percent } = getData(s)

                return (
                    <RatingItem key={`rating-${k}`} percent={percent} color={color}>
                        <StarRating src={Star} />
                    </RatingItem>
                )
            })}
        </RatingBox>
    )
}

const TrustPilotWidget = () => {
    const data = useStaticQuery(query)

    const [trust_pilot, setTrustPilot] = useState(null)

    useEffect(() => {
        if (data) {
            setTrustPilot(data.trustPilotPublicBusinessUnit)
        }
    }, [data])

    if (trust_pilot) {
        const { numberOfReviews, score } = trust_pilot

        score.stars = 4.7

        return (
            <StyledFlex jc="space-between" className="trustpilot-container">
                <StyledLink
                    href="https://www.trustpilot.com/review/deriv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <StarBox>
                        <Flex className="logo-box">
                            <TrustPilotRateStar rating={score.stars.toString()} />
                            <img className="logo" src={TrustLogo} />
                        </Flex>
                        <TrustPilotStars rating={score.stars.toString()} />
                    </StarBox>

                    <ScoreBox>
                        <Text size={'3.2rem'} weight={'bold'} className="score">
                            {score.trustScore}/5
                        </Text>
                        <Text size={'1.4rem'}>
                            <Localize
                                translate_text="{{ total_reviews }} Reviews"
                                values={{
                                    total_reviews: numberOfReviews.total,
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

TrustPilotRateStar.propTypes = {
    rating: PropTypes.string.isRequired,
}
export default TrustPilotWidget
