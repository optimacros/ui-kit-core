// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function BarChartIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M0 0H22V8H0V0Z"
                fill={fill}
            />
            <path d="M0 12H32V20H0V12Z"
                fill={fill}
            />
            <path d="M0 24H14V32H0V24Z"
                fill={fill}
            />
        </svg>
    )
}
