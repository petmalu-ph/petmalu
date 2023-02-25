interface Owner {
    _id: string;
    firstName: string;
    lastName: string;
    address?: {
        street: string,
        barangay: string,
        city: string,
        province: string
    }
}

export default Owner;