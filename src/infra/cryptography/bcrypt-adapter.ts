import { HashComparer } from "../../data/protocols/cryptography";

export class BcryptAdapter implements HashComparer {
    async compare(plaintext: string, digest: string): Promise<boolean> {
        
    }
}