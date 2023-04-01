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
    clickBack(node) {
        let html = (`<div id="custom_info_alert" class="alert alert-info alert-dismissible" role="alert" style="width:370px; padding: 0.375rem 0.75rem; margin-left: 5px; position: relative; top: 8.5px; display: inline-flex"> 
        <img src="components/icons/info.svg" width="25px" height="25px">
        Этот кот не хочет чтобы вы уходили
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть" style="padding: 0.375rem 0.75rem; margin-left: 10px; position: relative; top: 1.7px;"></button></div>`)
        this.pageRoot.insertAdjacentHTML('beforeend', html)
        document
            .getElementById("custom_info_alert")
            .addEventListener("click", this.clickHome.bind(this));
    }
    clickHome() {
        this.parent.render()
    }
    render() {
        this.parent.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.parent.insertAdjacentHTML('beforeend', html)
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this));
        const data = this.getData
        const product = new ProductComponent(this.pageRoot);
        product.render(data)
        
    }
}