export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.src}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <div style="height: 120px"><p class="card-text">${data.text}</p></div>
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">
                        Подробнее ${data.id}
                        </button>

                        <button id="click-del-card-${data.id}" style="border: 0; padding: 0; background: 0; width: 30px; height: 30px; margin-left: 30%">
                        <image style="width: 100%; height: 100%"; src="https://img.icons8.com/?size=512&id=8gEqye6zSUur&format=png">
                        </button>
                    </div>
                </div>
            `
        )
    }
    
    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    addListenersDel(data, listener) {
        document
            .getElementById(`click-del-card-${data.id}`)
            .addEventListener("click", listener)
    }
    
    render(data, listener, listener_del) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener);
        this.addListenersDel(data, listener_del);
    }
}