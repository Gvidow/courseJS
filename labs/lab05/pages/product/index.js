import { ProductComponent } from "../../components/product/index.js";
import { MainPage } from "../main/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { ajax } from "../../modules/ajax.js";
import { urls } from "../../modules/urls.js";

export class ProductPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }
    get getData() {
        ajax.post(urls.getFriendsUser(this.data.id), (data) => {
            this.renderData(data.response)
        })
    }

    async renderTitle(count) {
        ajax.post(urls.getUserInfo(this.data.id, "gen"), (data) => {
            this.getTitle(data.response[0], count)
        })
    }
    getTitle(item, count) {
        const title = `<h3 style="margin-bottom: 20px">Друзья ${item.first_name} ${item.last_name}: ${count}</h3>`;
        this.pageRoot.insertAdjacentHTML('beforebegin', title);
    }

    renderData(content) {
        this.renderTitle(content.count)
        const product = new ProductComponent(this.pageRoot)
        content.items.forEach(item => {
            product.render(item)
        });
    }

    get pageRoot() {
        return document.getElementById('product-page');
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickHome() {
        this.parent.render()
    }

    render() {
        this.parent.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickHome.bind(this))
        
        this.getData()
        
    }
}