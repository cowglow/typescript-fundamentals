function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    if (typeof padding === "string") {
        return padding + value;
    }

    throw new Error(`Expected string or number, got '${padding}'.'`);
}

type F1 = (a: string, b: string) => void;
type F2 = (a: number, b: number) => void;

var f: F1 & F2 = (a: string | number, b: string | number) => { }
