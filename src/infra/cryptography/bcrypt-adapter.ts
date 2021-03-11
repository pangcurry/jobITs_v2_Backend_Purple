import { HashComparer } from "../../data/protocols/cryptography";

import bcrypt from 'bcrypt';

export class BcryptAdapter implements HashComparer {
    constructor(private readonly salt: number) {}

    async compare(plaintext: string, digest: string): Promise<boolean> {
        return bcrypt.compare(plaintext, digest);
    }
}