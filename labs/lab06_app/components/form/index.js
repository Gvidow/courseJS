import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";

export class FormNewCard {
    constructor(parent, id) {
        this.parent = parent;
        this.maxId = id;
    }
    get getForm() {
        return `
        <div>
            <div class="row" style="margin-top:10px"> <div class="col-2">Название</div> 
                              <div class="col-10"><input id="title_new_card" style="width:80%" type="text"></div>
            </div>
            <div class="row" style="margin-top:10px"> <div class="col-2">Описание</div> 
                              <div class="col-10"><input id="text_new_card" style="width:80%" type="text"></div>
            </div>
            <div class="row" style="margin-top:10px"> <div class="col-2">Ссылка на картинку</div> 
                              <div class="col-10"><input id="picture_new_card" style="width:80%" type="text"></div>
            </div>

            <button id="card_add" class="btn btn-primary" style="margin-top: 10px">Добавить</button>
        </div>`;
    }

    add_event() {
        document.getElementById("card_add").addEventListener("click", this.event.bind(this))
    }

    event(e) {
        const title_field = document.getElementById("title_new_card").value;
        const text_field = document.getElementById("text_new_card").value;
        const picture_field = document.getElementById("picture_new_card").value;
        ++this.maxId;
        ajax.post(urls.getCardsAll(), {id: this.maxId, title: title_field, text: text_field, src: picture_field}, null)
        
    }
    render() {
        this.parent.innerHTML = "";
        this.parent.insertAdjacentHTML("beforeend", this.getForm);
        this.add_event();
    }
}