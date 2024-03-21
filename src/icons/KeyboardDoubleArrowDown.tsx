// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function KeyboardDoubleArrowDown({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path
                d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"
                fill={fill}
            />
        </svg>
    )
}
