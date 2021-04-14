export class ConflictError extends Error {
    constructor() {
        super(`already Exist`);
        this.name = "10001";
    }
}