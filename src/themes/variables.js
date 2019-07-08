import { css } from 'styled-components'

const Variables = css`
    :root {
        /* colors */
        --color-black: #0e0e0e;
        --color-white: #ffffff;
        --color-red: #ff444f;
        --color-red-1: #dd573a;
        --color-grey-1: #f4f4f4;
        --color-grey-2: #e8e8e8;
        --color-grey: #9b9b9b;
        --color-green: #85acb0;
        --color-blue: #4c76be;

        /* sizes */
        --text-size-s: 1.6rem;
        --text-size-m: 2.4rem;
        --text-size-l: 3.2rem;
        --text-size-xl: 4.8rem;
        --text-size-xxl: 6.4rem;

        /* keyframes */
        @keyframes rotates {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes sweep {
            0% {
                clip-path: polygon(
                    0% 0%,
                    0% 0%,
                    0% 0%,
                    50% 50%,
                    0% 0%,
                    0% 0%,
                    0% 0%
                );
            }
            50% {
                clip-path: polygon(
                    0% 0%,
                    0% 100%,
                    0% 100%,
                    50% 50%,
                    100% 0%,
                    100% 0%,
                    0% 0%
                );
            }
            100% {
                clip-path: polygon(
                    0% 0%,
                    0% 100%,
                    100% 100%,
                    50% 50%,
                    100% 100%,
                    100% 0%,
                    0% 0%
                );
            }
        }
    }
`

export default Variables
