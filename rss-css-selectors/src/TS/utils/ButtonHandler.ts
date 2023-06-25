import { App } from '../components/app';
import RightHeaderView from '../components/right/right-header/RightHeaderView';
import { data } from '../data/data';

export class ButtonHandler {
    app: App;
    header: RightHeaderView;
    constructor(app: App, header: RightHeaderView) {
        this.app = app;
        this.header = header;
        this.setListeners();
    }
    setListeners() {
        const nextButton = this.header.nextButton;
        nextButton.addCallBack(() => {
            let nextIndex = this.app.index + 1;
            console.log(nextIndex);
            if (nextIndex === data.length) nextIndex = data.length - 1;
            this.app.updateIndex(nextIndex);
        });
        const prevButton = this.header.prevButton;
        prevButton.addCallBack(() => {
            let prevIndex = this.app.index - 1;
            console.log(prevIndex);
            if (prevIndex < 1) prevIndex = 0;
            this.app.updateIndex(prevIndex);
        });
    }
}
