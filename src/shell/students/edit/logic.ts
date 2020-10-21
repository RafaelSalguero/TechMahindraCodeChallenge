import { Address, Student } from "../logic";

/**Returns true if all form data is correct */
export function validate(x: Student) : boolean {
    return !!(
        x.firstName && x.lastName &&
        x.phone &&
        x.GPA &&
        validateAddress(x.address)
    );
}

function validateAddress(x: Address): boolean {
    return !!(x.city && x.state && x.street && x.streetNumber && x.zipCode);
}