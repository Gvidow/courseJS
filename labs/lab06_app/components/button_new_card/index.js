export class ButtonNewCard {
    constructor(parent) {
        this.parent = parent;
    }
    get getButton() {
        return (`
        <button id="btn_new_card" class="btn btn-primary" style="width: 100%">+ Добавить карточку</button>
        `)
    }
    add_listener(event) {
        document.getElementById("btn_new_card").addEventListener("click", event);
    }
    render(event) {
        this.parent.insertAdjacentHTML('beforebegin', this.getButton);
        this.add_listener(event);
    }
}