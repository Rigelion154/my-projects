import { App } from '../app';

export class ResetButtonHandler {
    app: App;

    constructor(app: App) {
        this.app = app;
    }

    handleReset() {
        this.app.updateIndex(0);
        this.app.localStorageManager.removeProgress();
        this.app.initialize();
    }
}
