import { Router } from "express";
import { adaptRoute } from "../adapters";

export default (router: Router): void => {
    router.get('/home/notice', adaptRoute());
}
