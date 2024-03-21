import { useId } from 'react'

// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function UnlockIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    const clipPathId = useId()

    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <g clipPath={`url(#${clipPathId})`}>
                <path d="M40 35.65L37 32.65V19.3H23.65L20.65 16.3H30.5V11.55C30.5 9.71667 29.8417 8.16667 28.525 6.9C27.2084 5.63333 25.6334 5 23.8 5C21.9334 5 20.3584 5.64167 19.0751 6.925C17.7917 8.20833 17.15 9.75 17.15 11.55V12.8L14.4 10.05C14.7 7.71667 15.7417 5.79167 17.525 4.275C19.3084 2.75833 21.4 2 23.8 2C26.5 2 28.7917 2.925 30.675 4.775C32.5584 6.625 33.5 8.88333 33.5 11.55V16.3H37C37.8334 16.3 38.5417 16.5917 39.125 17.175C39.7084 17.7583 40 18.4667 40 19.3V35.65ZM43.35 48.9L38.2001 43.75C37.9334 43.85 37.7167 43.9167 37.55 43.95C37.3834 43.9833 37.2001 44 37 44H11C10.1667 44 9.45838 43.7083 8.87505 43.125C8.29172 42.5417 8.00005 41.8333 8.00005 41V19.3C8.00005 18.5333 8.26672 17.8583 8.80005 17.275C9.33338 16.6917 9.98338 16.3667 10.75 16.3L-0.699951 4.85L1.45005 2.75L45.5 46.8L43.35 48.9ZM35.5 41L26.75 32.3C26.3834 32.6667 25.9834 32.9333 25.55 33.1C25.1167 33.2667 24.6334 33.35 24.1 33.35C23.0334 33.35 22.1417 33 21.425 32.3C20.7084 31.6 20.35 30.7167 20.35 29.65C20.35 29.1167 20.4417 28.625 20.625 28.175C20.8084 27.725 21.0834 27.3167 21.4501 26.95L13.75 19.3H11V41H35.5Z"
                    fill={fill}
                />
            </g>
            <defs>
                <clipPath id={clipPathId}>
                    <rect width="48"
                        height="48"
                        fill="white"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}
