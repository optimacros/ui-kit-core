// eslint-disable-next-line no-lone-blocks
{/* eslint-disable max-len */}
export default function SavedViewIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 0 15 15"
            style={{ opacity }}
        >
            <path fill={fill}
                d="M2.32813 12.2968C2.54688 12.5156 2.8141 12.625 3.12981 12.625H6.1626V6.1626H12.625V3.12981C12.625 2.8141 12.5156 2.54688 12.2968 2.32813C12.0781 2.10938 11.8109 2 11.4952 2H3.12981C2.8141 2 2.54688 2.10938 2.32813 2.32813C2.10938 2.54688 2 2.8141 2 3.12981V11.4952C2 11.8109 2.10938 12.0781 2.32813 12.2968ZM5.22597 11.6875H3.12981C3.07372 11.6875 3.02764 11.6695 2.99158 11.6334C2.95552 11.5973 2.93748 11.5513 2.93748 11.4952V9.399H5.22597V11.6875ZM5.22597 8.46153H2.93748V6.16344H5.22597V8.46153ZM5.22597 5.22597H2.93748V3.12981C2.93748 3.07372 2.95552 3.02764 2.99158 2.99158C3.02764 2.95552 3.07372 2.93748 3.12981 2.93748H5.22597V5.22597ZM8.46153 5.22597H6.16344V2.93748H8.46153V5.22597ZM11.6875 5.22597H9.399V2.93748H11.4952C11.5513 2.93748 11.5973 2.95552 11.6334 2.99158C11.6695 3.02764 11.6875 3.07372 11.6875 3.12981V5.22597Z"
            />
            <path fill={fill}
                d="M7 13.9189V12.7658H13.9188V13.9189H7ZM7.00003 11.0364V9.88328H13.9189V11.0364H7.00003ZM7.00003 7V8.15314H13.9189V7H7.00003Z"
            />
        </svg>
    )
}
