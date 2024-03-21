export default function ChooseFontIcon({ fill = 'black', opacity = 1 }: { fill?: string; opacity?: number }) {
    return (
        <svg width="15"
            height="15"
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
        >
            <path d="M290-160v-540H80v-100h520v100H390v540H290Zm360 0v-340H520v-100h360v100H750v340H650Z"
                fill={fill}
            />
        </svg>
    )
}
