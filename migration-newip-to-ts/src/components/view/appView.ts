import News from './news/news';
import Sources from './sources/sources';
import { IDataNews, ISrcNews } from '../../types';

class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: IDataNews) {
        const values: IDataNews['articles'] | [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: ISrcNews) {
        const values: ISrcNews['sources'] | [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
