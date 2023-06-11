// interface ILoader<T> {
//     endpoint: string;
//     options?: { [key: string]: string };
//     callback?: (data: T) => void;
// }

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

interface IDataNews {
    status: Status;
    totalResults: number;
    articles: Array<Article>;
}

type Article = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string | null; name: string };
    title: string;
    url: string;
    urlToImage: string;
};
interface ISrcNews {
    status: Status;
    sources: Array<Source>;
}

type Source = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};
enum Status {
    OK = 'ok',
    ERROR = 'error',
}
type CallbackType<T> = (data?: T) => void;

export { GetRespType, IResponse, CallbackType, IDataNews, Article, ISrcNews, Source };
