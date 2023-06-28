import ComponentCreator from '../utils/ComponentCreator';
import { ResetButtonHandler } from '../utils/ResetButtonHandler';

export class Modal extends ComponentCreator {
    reset: ResetButtonHandler;
    constructor(reset: ResetButtonHandler) {
        const options = {
            classNames: ['modal', 'modal__wrapper'],
        };
        super(options);
        this.reset = reset;
        this.configureView();
    }
    configureView() {
        const modalContent = new ComponentCreator({
            classNames: ['modal__content'],
            textContent: 'You win!',
            parentNode: this.getNode(),
        });
        const button = new ComponentCreator({
            classNames: ['modal__button', 'button'],
            textContent: 'Play again',
        });
        button.addCallBack(() => {
            this.getNode().classList.toggle('open');
            this.reset.handleReset();
        });
        this.addCallBack((e) => {
            if (e.target === this.getNode()) this.getNode().classList.toggle('open');
            this.reset.handleReset();
        });
        modalContent.append(button);
    }
}
