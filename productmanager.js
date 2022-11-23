class ProductManager{

        #products
        constructor(){
            this.#products= []
        }
        getNextId = () => {
                const count = this.#products.length
                return (count >0) ? this.#products[count-1].id + 1: 1
        }
        /***
         * This function return true in case a param is null
         * @param product
         * @result bool
         */
        existNull = (prod) => {
                if(!prod) return true
                else{
                        const prodValues = Object.values(prod)
                        const result = prodValues.includes(null || '' || undefined)
                        if(result) return true
                        return false
                }
        }

        addProduct = (code, title, description, price, thumbnail, stock) => {
                const id = this.getNextId()
                const aProduct = {
                        id,
                        code,
                        title,
                        description,
                        price,
                        thumbnail,
                        stock
                }
                //verify to get all required fields
                if(!this.existNull(aProduct))
                        if(!this.#products) this.#products.push(aProduct)
                        else{
                                let findProdCode = this.#products.find(prod => prod.code == aProduct.code)
                                if(!findProdCode) this.#products.push(aProduct)
                        }
        }
        /***
         * @return all products
         */
        getProducts = () => {return this.#products }

        /***
         * Return an specifict product by id
         * Because the id is increasing, starting in 1
         * We cound find the exact position in the list
         * @param id
         * @result product
         */
        getProductById = (id) => {
                if((id>0) && (id<(this.#products.length+1))) return this.#products[id-1]
                else return 'Not found'
        }
}

