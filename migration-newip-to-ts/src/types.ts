interface ILoader<T> {
    endpoint: string;
    options?: { [key: string]: string };
    callback?: (data: T) => void;
}

type GetRespType = {
    endpoint: string;
    options?: { sources?: string };
};

interface IResponse {
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}

type CallbackType<T> = (data?: T) => void;

export { GetRespType, IResponse, ILoader, CallbackType };
