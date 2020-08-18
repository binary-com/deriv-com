//TODO: this a temporary way to display these svg
import React from 'react'
import PropTypes from 'prop-types'

const Terms = ({ dynamic_id }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <defs>
            <linearGradient id={`${dynamic_id}1`} x1="7.986%" x2="92.014%" y1="100%" y2="0%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
            <linearGradient id={`${dynamic_id}2`} x1="0%" x2="100%" y1="50.781%" y2="49.219%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
            <linearGradient id={`${dynamic_id}3`} x1="0%" x2="100%" y1="51.02%" y2="48.98%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
            <linearGradient id={`${dynamic_id}4`} x1="0%" x2="100%" y1="52%" y2="48%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
            <linearGradient id={`${dynamic_id}5`} x1="0%" x2="100%" y1="55.556%" y2="44.444%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(3 3)">
            <path d="M0 0H18V18H0z" />
            <path
                fill={`url(#${dynamic_id})1`}
                fillRule="nonzero"
                d="M9.02 0c.505 0 .986.203 1.337.56l.093.101 1.348 1.589h1.685c.358.006.699.14.962.376l.107.108L16.79 5.25h.085v.096l.028.031c.193.22.312.492.34.778l.007.143v10.296c0 .774-.636 1.4-1.423 1.406H6.682c-.789 0-1.432-.628-1.432-1.406v-.844H2.167c-.745 0-1.356-.577-1.412-1.31l-.005-.11V1.447c-.01-.38.135-.748.4-1.02.235-.243.55-.391.883-.421L2.159 0H9.02zm4.457 3H6.682C6.303 3 6 3.296 6 3.656v12.938c0 .36.303.656.682.656h9.142c.376-.003.676-.298.676-.656V6.296c0-.104-.024-.205-.072-.296h-1.436c-.727 0-1.345-.489-1.404-1.128l-.005-.102-.069-1.766L13.477 3zM9 .75H2.159c-.178 0-.348.072-.472.2-.103.106-.167.243-.183.395l-.004.093V14.33c0 .342.255.623.584.665l.083.005H5.25V3.656c0-.733.57-1.332 1.294-1.4l.138-.006H9V.75zm5.286 2.813l.047 1.192c0 .236.237.455.567.49l.092.005h.794l-1.5-1.687zM9.751 1.02L9.75 2.25h1.065l-.937-1.103c-.04-.046-.081-.088-.127-.127z"
            />
            <rect
                width="6"
                height="1"
                x="8.625"
                y="7.875"
                fill={`url(#${dynamic_id})2`}
                fillRule="nonzero"
                rx=".375"
            />
            <rect
                width="5.25"
                height="1"
                x="8.625"
                y="9.375"
                fill={`url(#${dynamic_id})3`}
                fillRule="nonzero"
                rx=".375"
            />
            <rect
                width="6"
                height="1"
                x="8.625"
                y="10.875"
                fill={`url(#${dynamic_id})2`}
                fillRule="nonzero"
                rx=".375"
            />
            <rect
                width="5.25"
                height="1"
                x="8.625"
                y="12.375"
                fill={`url(#${dynamic_id})3`}
                fillRule="nonzero"
                rx=".375"
            />
            <rect
                width="3.75"
                height="1"
                x="8.625"
                y="13.875"
                fill={`url(#${dynamic_id})4`}
                fillRule="nonzero"
                rx=".375"
            />
            <rect
                width="2.25"
                height="1"
                x="3.375"
                y="5.625"
                fill={`url(#${dynamic_id})5`}
                fillRule="nonzero"
                rx=".375"
            />
            <rect
                width="2.25"
                height="1"
                x="3.375"
                y="7.125"
                fill={`url(#${dynamic_id})5`}
                fillRule="nonzero"
                rx=".375"
            />
            <rect
                width="2.25"
                height="1"
                x="3.375"
                y="8.625"
                fill={`url(#${dynamic_id})5`}
                fillRule="nonzero"
                rx=".375"
            />
            <rect
                width="2.25"
                height="1"
                x="3.375"
                y="10.125"
                fill={`url(#${dynamic_id})5`}
                fillRule="nonzero"
                rx=".375"
            />
            <rect
                width="2.25"
                height="1"
                x="3.375"
                y="11.625"
                fill={`url(#${dynamic_id})5`}
                fillRule="nonzero"
                rx=".375"
            />
        </g>
    </svg>
)

Terms.propTypes = {
    dynamic_id: PropTypes.string,
}
export default Terms
