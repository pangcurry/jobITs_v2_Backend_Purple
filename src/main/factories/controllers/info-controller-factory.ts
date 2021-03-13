import { infoController } from "../../../presentation/controller/info-controller";
import { Controller } from "../../../presentation/protocols";

export const makeInfoController = (): Controller => {
    return new infoController();   
}