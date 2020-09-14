//TODO: this a temporary way to display these svg
import React from 'react'
import PropTypes from 'prop-types'

const Choose = ({ dynamic_id }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <defs>
            <linearGradient id={dynamic_id} x1="0%" x2="100%" y1="100%" y2="0%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0H18V18H0z" transform="translate(3 3)" />
            <path
                fill={`url(#${dynamic_id})`}
                fillRule="nonzero"
                d="M9 0c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 .72C4.427.72.72 4.427.72 9c0 4.573 3.707 8.28 8.28 8.28 4.573 0 8.28-3.707 8.28-8.28C17.28 4.427 13.573.72 9 .72zm4.928 4.584c.125.126.138.32.04.46l-.041.05-6.631 6.602c-.128.127-.326.138-.466.036l-.05-.044-2.758-2.916c-.136-.144-.13-.372.015-.509.128-.121.322-.13.46-.029l.049.043 2.503 2.648 6.37-6.342c.14-.14.369-.14.509.001z"
                transform="translate(3 3)"
            />
        </g>
    </svg>
)

Choose.propTypes = {
    dynamic_id: PropTypes.string,
}
export default Choose
