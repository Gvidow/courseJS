export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListenersBack(listener) {
        document
            .getElementById("back-button")
            .addEventListener("click", listener)
    }
    getHTML() {
        return (
            `
                <button id="back-button" class="btn btn-primary" type="button" style="position: static">Назад</button>
            `
        )
    }

    render(listenerBack) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListenersBack(listenerBack);
    }
}