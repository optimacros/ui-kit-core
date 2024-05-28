export interface ArgumentType {
    [key: string]: {
        control?: string;
        description?: string;
        table?: {
            disable?: boolean;
            defaultValue?: { summary: string };
        };
        labels?: {
            [key:string]: string;
        };
        options?: string[];
    };
}
