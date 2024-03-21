// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function FlexibleIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M30.6 42L17.45 37.35L8.5 40.9C7.93333 41.2 7.375 41.1833 6.825 40.85C6.275 40.5167 6 40.0167 6 39.35V11.45C6 11.0167 6.125 10.6333 6.375 10.3C6.625 9.96667 6.95 9.71667 7.35 9.55L17.45 6L30.6 10.6L39.5 7.05C40.0667 6.78333 40.625 6.80833 41.175 7.125C41.725 7.44167 42 7.93333 42 8.6V36.85C42 37.2167 41.875 37.5333 41.625 37.8C41.375 38.0667 41.0667 38.2667 40.7 38.4L30.6 42ZM28.9 38.25V13L19.1 9.7V34.95L28.9 38.25ZM31.9 38.25L39 35.9V10.3L31.9 13V38.25ZM9 37.65L16.1 34.95V9.7L9 12.05V37.65Z"
                fill={fill}
            />
        </svg>
    )
}
