// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function EditIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M9 39.0001H11.2L33.35 16.8501L31.15 14.6501L9 36.8001V39.0001ZM39.7 14.7001L33.3 8.3001L35.4 6.2001C35.9667 5.63343 36.6667 5.3501 37.5 5.3501C38.3333 5.3501 39.0333 5.63343 39.6 6.2001L41.8 8.4001C42.3667 8.96676 42.65 9.66676 42.65 10.5001C42.65 11.3334 42.3667 12.0334 41.8 12.6001L39.7 14.7001ZM37.6 16.8001L12.4 42.0001H6V35.6001L31.2 10.4001L37.6 16.8001ZM32.25 15.7501L31.15 14.6501L33.35 16.8501L32.25 15.7501Z"
                fill={fill}
            />
        </svg>
    )
}
