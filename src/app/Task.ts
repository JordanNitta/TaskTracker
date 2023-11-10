// Interface similar to a class
export interface Task {
    // The question mark will be optional
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}