import { HttpResponse } from '../../presentation/protocols';

export const ok = (data: any): HttpResponse => {
    return {
        status: 200,
        statusCode: "10000",
        message: "Success",
        data
    };
}

export const badRequest = (error: Error): HttpResponse => {
    return {
        status: 400,
        statusCode: error.name,
        message: error.message,
        data:{}
    };
}

export const Unauthorized = (error: Error): HttpResponse => {
    return {
        status: 401,
        statusCode: error.name,
        message: error.message,
        data:{}
    };
}
