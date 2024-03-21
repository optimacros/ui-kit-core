// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function StockChartIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M3 6H9H15H21V42H15H9H3V6Z"
                fill={fill}
            />
            <path d="M9 0V6H15V0H9Z"
                fill={fill}
            />
            <path d="M9 42V48H15V42H9Z"
                fill={fill}
            />
            <path d="M27 12H33H39H45V33H39H33H27V12Z"
                fill={fill}
            />
            <path d="M33 0V12H39V0H33Z"
                fill={fill}
            />
            <path d="M33 33V48H39V33H33Z"
                fill={fill}
            />
        </svg>
    )
}
