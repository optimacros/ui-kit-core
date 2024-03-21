// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function KeyboardDoubleArrowLeft({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
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
                d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"
                fill={fill}
            />
        </svg>
    )
}
