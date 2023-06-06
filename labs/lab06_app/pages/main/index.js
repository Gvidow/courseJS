import { ProductCardComponent } from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {ButtonNewCard} from "../../components/button_new_card/index.js";
import {FormNewCard} from "../../components/form/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.data = 0;
        this.maxId = -1;
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
    clickCard(data) {
        return (e) => {
        data.counter = data.counter + 1;
        const cardId = e.target.dataset.id
        const productPage = new ProductPage(this.parent, data);
        productPage.render()};
    }

    clickCard(data) {
        return (e) => {
        data.counter = data.counter + 1;
        const cardId = e.target.dataset.id
        const productPage = new ProductPage(this, data);
        productPage.render()};
    }
    
    delCard(data) {
        return (e) => {
            ajax.delete(urls.getCardsById(data.id), (data)=>{});};
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html)
    
        if (this.data === 0) {
            ajax.get(urls.getCardsAll(), (data)=>{
                this.data = data;
                this.data.forEach((item) => {
                    this.maxId = Math.max(item.id, this.maxId);
                    const productCard = new ProductCardComponent(this.pageRoot)
                    productCard.render(item, this.clickCard(item), this.delCard(item));
                })
            })
        } else {
            this.data.forEach((item) => {
                const productCard = new ProductCardComponent(this.pageRoot)
                productCard.render(item, this.clickCard(item), this.delCard(item));
            })
        }

        const button_new_card = new ButtonNewCard(this.pageRoot);
        button_new_card.render((e)=>{
            const form = new FormNewCard(this.parent, this.maxId);
            form.render();
        });
    }
}