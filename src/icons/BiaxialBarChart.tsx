// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function BiaxialBarChartIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M39 0H45V48H39V0Z"
                fill={fill}
            />
            <path d="M27 12H33V48H27V12Z"
                fill={fill}
            />
            <path d="M15 6H21V48H15V6Z"
                fill={fill}
            />
            <path d="M3 24H9V48H3V24Z"
                fill={fill}
            />
        </svg>
    )
}
