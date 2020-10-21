import { Student } from "src/shell/students/logic";

/**Indicates that a student has been added to the list */
export function studentAdded(value: Student) {
    return {
        type: "STUDENT_ADDED" as const,
        payload: value
    } 
}

/**Indicates that a student has been deleted from the list */
export function studentDeleted(index: number) {
    return {
        type: "STUDENT_DELETED" as const,
        payload: index
    } 
}

/**Indicates that a student has been deleted from the list */
export function studentUpdated(index: number, value: Student) {
    return {
        type: "STUDENT_UPDATED" as const,
        payload: { index, value }
    } 
}

