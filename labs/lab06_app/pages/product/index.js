import { ProductComponent } from "../../components/product/index.js";
import { MainPage } from "../main/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
export class ProductPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }
    get getData() {
        return this.data;
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
        backButton.render(this.clickHome.bind(this));
        const data = this.getData
        const product = new ProductComponent(this.pageRoot);
        product.render(data)
        
    }
}