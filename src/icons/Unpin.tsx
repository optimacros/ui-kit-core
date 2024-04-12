// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function Unpin({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path
                fill={fill}
                fillRule="evenodd"
                d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3"
            />
        </svg>
    )
}
