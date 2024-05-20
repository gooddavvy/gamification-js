export interface ObjectProps {
    objectShape: "rectangle" | "cube";
    width?: string | undefined;
    height?: string | undefined;
    backgroundColor?: string | undefined;
    fontColor?: string | undefined;
    labels?: {
        front?: string | undefined;
        back?: string | undefined;
        right?: string | undefined;
        left?: string | undefined;
        top?: string | undefined;
        bottom?: string | undefined;
    }
}

/// this function gives html draw info
export function draw(objectProps: ObjectProps): string;