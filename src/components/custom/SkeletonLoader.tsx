import React from 'react'
import styled, { keyframes } from 'styled-components'

const skeleton_animation = keyframes`
    0% {
        background-color: hsl(200deg, 20%, 70%);
    }
    100% {background-color: hsl(200deg, 20%, 85%);}
`

const text_animation = keyframes`
    0% { color: hsl(200deg, 20%, 70%);}
    100% {color: hsl(200deg, 20%, 85%);}
`

const Skeleton = styled.section`
    width: 100%;
    background: #ffffff;
    padding: 30px;
`
const SkeletonWrapper = styled.div`
    display: flex;
    gap: 25px;
`
const SkeletonItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background: #d9d9d9;
    border-radius: 25px;
    position: relative;
    overflow: hidden;
    animation: ${skeleton_animation} 1s linear infinite alternate;
`

const LoadingText = styled.span`
    font-size: 5rem;
    font-weight: bold;
    color: #7a7a7a;
    animation: ${text_animation} 1s linear infinite alternate;
    animation-delay: 0.5s;
`

const SkeletonLoader = () => (
    <Skeleton>
        <SkeletonWrapper>
            <SkeletonItem>
                <LoadingText>Loading...</LoadingText>
            </SkeletonItem>
        </SkeletonWrapper>
    </Skeleton>
)

export default SkeletonLoader
