class Ajax {
    async post(url, callback) {
            try {
                const response = await fetch(url);
                const result = await response.json();
                callback(result);
            } catch (e) {
                alert(e);
            }
    }
}

export const ajax = new Ajax();