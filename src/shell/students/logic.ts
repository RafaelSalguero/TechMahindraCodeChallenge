export interface Student {
    firstName: string;
    lastName: string;
    address: Address;

    phone: string;
    GPA: number;
}

export interface Address {
    street: string;

    /**Street number, type string since in some localities address numbers can contain letters */
    streetNumber: string;
    city: string;
    state: string;
    zipCode: string;   
}