import AppLoader from './appLoader';
import { CallbackType, IDataNews, ISrcNews } from '../../types';

class AppController extends AppLoader {
    getSources(callback: CallbackType<ISrcNews>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: CallbackType<IDataNews>) {
        let target = e.target as HTMLDivElement;
        const newsContainer = e.currentTarget as HTMLDivElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLDivElement;
        }
    }
}

export default AppController;
