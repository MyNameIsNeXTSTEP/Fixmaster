import { ResponseType } from 'axios';

export enum EHttpRequestMethods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    PATCH = 'PATCH',
};

export type TRequestMethod = keyof typeof EHttpRequestMethods;

export interface IRequestAxios {
    responseType?: ResponseType,
};

export interface IRequest extends RequestInit {
    uri: string,
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