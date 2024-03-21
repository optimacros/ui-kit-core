// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function AddMultipleIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M12.6528 19.6001H17.2844V46H12.6528V19.6001Z"
                fill={fill}
            />
            <path d="M2 30.484H28.3999V35.1156H2V30.484ZM30.484 2H35.1156V28.3999H30.484V2Z"
                fill={fill}
            />
            <path d="M19.6001 12.8848H46V17.5163H19.6001V12.8848Z"
                fill={fill}
            />
        </svg>
    )
}
