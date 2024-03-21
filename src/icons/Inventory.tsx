// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function InventoryIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M279-277h60v-406h-60v406Zm171-200h60v-206h-60v206Zm171 120h60v-326h-60v326ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"
                fill={fill}
            />
        </svg>
    )
}
