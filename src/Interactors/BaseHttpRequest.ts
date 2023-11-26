import axios, { AxiosRequestConfig } from 'axios';
import { IRequestAxios, IRequest, BaseErrorBody, TResponse } from './types';
import { stringify } from 'querystring';

interface IBaseHttpRequest {
    send: <ResponseData>(request: IRequest) => Promise<TResponse<ResponseData, BaseErrorBody>>;
    configureRequest: (baseURL: string, request: IRequest & IRequestAxios) => AxiosRequestConfig;
};

class BaseHttpRequest implements IBaseHttpRequest {
    constructor(private url: URL) {
        this.url = url
    };
    public async send<ResponseData>(
        request: IRequest,
    ): Promise<TResponse<ResponseData, BaseErrorBody>> {
        const axiosConfig = this.configureRequest(this.url.origin, request);
        try {
            const response = await axios.request<ResponseData>(axiosConfig);
            return {
                isSuccess: true,
                payload: response.data,
            };
        // @todo Better not to use any, no high priority yet
        } catch (e: any) {
            throw new Error(e);
        };
    };

    public configureRequest(baseURL: string, request: IRequest & IRequestAxios): AxiosRequestConfig {
        const { path, headers, method, body, queryParams, responseType } = request;
        const axiosConfig: AxiosRequestConfig = {
            baseURL,
            url: path,
            method,
            headers: {
                ...headers,
            },
        };
        if (queryParams) {
            axiosConfig.params = queryParams;
            axiosConfig.paramsSerializer = (param) => stringify(param);
        }
        if (responseType) {
            axiosConfig.responseType = responseType;
        }
        if (['POST', 'PUT', 'PATCH'].includes(method)) {
            axiosConfig.data = body;
        }
        return axiosConfig;
    }
};

export default BaseHttpRequest;