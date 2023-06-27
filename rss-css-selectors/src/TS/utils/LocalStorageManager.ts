import { ILevel } from '../types';

export class LocalStorageManager {
    saveIndex(index: number) {
        localStorage.setItem('index', index.toString());
    }
    getIndex() {
        return Number(localStorage.getItem('index')) || null;
    }

    saveProgress(array: Element[]) {
        const levelStatus = array.map((level) => {
            return {
                id: level.getAttribute('data-id'),
                complete: level.getAttribute('data-complete'),
            };
        });
        localStorage.setItem('levelStatus', JSON.stringify(levelStatus));
    }

    getProgress(array: Element[]) {
        const levelStatus = JSON.parse(localStorage.getItem('levelStatus') as string);
        if (levelStatus) {
            levelStatus.forEach((level: ILevel, i: number) => {
                (array[i] as HTMLElement).dataset.complete = level.complete;
            });
        }
    }

    removeProgress() {
        const levelStatus = JSON.parse(localStorage.getItem('levelStatus') as string);
        if (levelStatus) {
            levelStatus.forEach((level: ILevel) => {
                level.complete = 'false';
            });
            localStorage.setItem('levelStatus', JSON.stringify(levelStatus));
        }
    }
}
