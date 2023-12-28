import { ResponseType } from 'axios';

export enum EHttpRequestMethodsWithoutBodies {
    GET = 'GET',
    DELETE = 'DELETE',
};

export enum EHttpRequestMethodsWithBodies {
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
}

export const HttpRequestMethods = { ...EHttpRequestMethodsWithoutBodies, ...EHttpRequestMethodsWithBodies };

export type TRequestMethod = keyof typeof HttpRequestMethods;

export interface IRequestAxios {
    responseType?: ResponseType,
};

export interface IRequest extends RequestInit {
    path: string,
    method: TRequestMethod,
    headers?: Record<string, string>,
    queryParams?: Record<string, any>,
};

export interface IResponse {
    isSuccess: boolean
};

export interface BaseErrorBody {
    code: string,
    message: string,
    status?: number,
};

export interface ISuccessResponse<T> extends IResponse {
    isSuccess: true,
    payload: T
};

export interface IErrorResponse<T extends BaseErrorBody> extends IResponse {
    isSuccess: false,
    error: T
};

export type TResponse<T, U extends BaseErrorBody> = ISuccessResponse<T> | IErrorResponse<U>;