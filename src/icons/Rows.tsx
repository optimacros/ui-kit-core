// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function RowsIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M39 39V31.15H9V39H39ZM39 28.15V19.85H9V28.15H39ZM39 16.85V9H9V16.85H39ZM9 42C8.2 42 7.5 41.7 6.9 41.1C6.3 40.5 6 39.8 6 39V9C6 8.2 6.3 7.5 6.9 6.9C7.5 6.3 8.2 6 9 6H39C39.8 6 40.5 6.3 41.1 6.9C41.7 7.5 42 8.2 42 9V39C42 39.8 41.7 40.5 41.1 41.1C40.5 41.7 39.8 42 39 42H9Z"
                fill={fill}
            />
        </svg>
    )
}
