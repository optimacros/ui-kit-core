// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function RouteMapChartIcon({ fill = 'black', opacity = 1 }: { fill: string; opacity: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <g clipPath="url(#clip0_209_14)">
                <path d="M39 30H30C28.35 30 27 28.65 27 27C27 25.35 28.35 24 30 24H39C39 24 48 13.9688 48 9C48 4.03125 43.9688 0 39 0C34.0312 0 30 4.03125 30 9C30 11.3906 32.0812 14.9438 34.2469 18H30C25.0406 18 21 22.0406 21 27C21 31.9594 25.0406 36 30 36H39C40.65 36 42 37.35 42 39C42 40.65 40.65 42 39 42H17.3906C15.8906 44.325 14.2219 46.4719 12.9562 48H39C43.9594 48 48 43.9594 48 39C48 34.0406 43.9594 30 39 30ZM39 6C40.6594 6 42 7.34062 42 9C42 10.6594 40.6594 12 39 12C37.3406 12 36 10.6594 36 9C36 7.34062 37.3406 6 39 6ZM9 24C4.03125 24 0 28.0312 0 33C0 37.9688 9 48 9 48C9 48 18 37.9688 18 33C18 28.0312 13.9688 24 9 24ZM9 36C7.34062 36 6 34.6594 6 33C6 31.3406 7.34062 30 9 30C10.6594 30 12 31.3406 12 33C12 34.6594 10.6594 36 9 36Z"
                    fill={fill}
                />
            </g>
            <defs>
                <clipPath id="clip0_209_14">
                    <rect width="48"
                        height="48"
                        fill="white"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}
