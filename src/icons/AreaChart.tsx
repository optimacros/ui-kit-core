// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function AreaChartIcon({ fill = 'black', opacity = 1 }: { fill: string; opacity: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M0 12L10.6667 20L23.3333 2L37.3333 12H48V36L23.3333 16L12 30.6667L0 21.3333V12Z"
                fill={fill}
            />
            <path d="M0 28L13.3333 37.3333L24 24L48 42V46.6667H0V28Z"
                fill={fill}
            />
        </svg>
    )
}
