import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '703884a6aa664aaaa520353cd4a2f4fd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
