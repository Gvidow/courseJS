import { ProductCardComponent } from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.data = 0;
    }

    async getData() {
        ajax.post(urls.getGroupMembers(groupId), (data) => {
            this.renderData(data.response.items);
        });
    }

    renderData(items) {
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard(item))
        })
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
    // clickCard(data) {
    //     return (e) => {
    //     data.counter = data.counter + 1;
    //     const cardId = e.target.dataset.id
    //     const productPage = new ProductPage(this.parent, data);
    //     productPage.render()};
    // }

    clickCard(data) {
        return (e) => {
        // data.counter = data.counter + 1;
        // const cardId = e.target.dataset.id
        const productPage = new ProductPage(this, data);
        productPage.render()};
    }
    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        await this.getData()
    }
}