import { TokenController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";

export const makeTokenController = (): Controller => {
    return new TokenController();
}