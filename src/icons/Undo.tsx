// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}

export default function UndoIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="48"
            height="48"
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M259-200v-60h310q70 0 120.5-46.5T740-422q0-69-50.5-115.5T569-584H274l114 114-42 42-186-186 186-186 42 42-114 114h294q95 0 163.5 64T800-422q0 94-68.5 158T568-200H259Z"
                fill={fill}
            />
        </svg>
    )
}
