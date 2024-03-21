export default function FunnelChartIcon({ fill = 'black', opacity = 1 }: { fill: string; opacity: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M0 4H48L42 14.9091H5.45455L0 4Z"
                fill={fill}
            />
            <path d="M9.59979 19.2727H38.3998L34.7998 25.8182H12.8725L9.59979 19.2727Z"
                fill={fill}
            />
            <path d="M14.3997 30.1818H33.5997L24 44.3636L14.3997 30.1818Z"
                fill={fill}
            />
        </svg>
    )
}
