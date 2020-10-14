import React, { Component } from "react";
import Client from "shopify-buy";

const ShopperContext = React.createContext();

const client = Client.buildClient({
    storefrontAccessToken: "f69d0f912ae94c0c87e5198a82666670",
    domain: "lookinmirror.myshopify.com",
});

class ShopContext extends Component {
    state = {
        loading: true,
        products: [],
        product: {},
        productImage: '',
        collection: '',
        collections: [],
        checkout: {},
        isCartOpen: false,
    };

    componentDidMount() {

        if (localStorage.checkout) {
            this.fetchCheckout(localStorage.checkout);
        } else {
            this.createCheckout();
        }

        // if there is no checkout_id in localStorage then we will create a new checkout

        // else fetch the checkout from shopify
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout", checkout.id);
        this.setState({ checkout: checkout });
        console.log(checkout);
    };

    fetchCollection = async (query) => {
        await client.collection
            .fetchQuery({ query })
            .then((collection) => {
                this.setState({ collection: collection[0].id })
                console.log("collection[0].id: ", collection + "::" + query, ": ", this.state.collection)
            })
            .catch((err) => console.log(err));
    }

    fetchCollectionById = async (id, productsFirst) => {
        await client.collection
            .fetchWithProducts(id, productsFirst)
            .then((collections) => {
                this.setState({
                    collections: collections.products,
                    loading: false
                }, () => (
                    console.log(this.state.collections)
                ))
            })
            .catch((err) => console.log(err));
        this.setState({ loading: false })
    }

    fetchCheckout = async (checkoutId) => {
        client.checkout
            .fetch(checkoutId)
            .then((checkout) => {
                this.setState({ checkout: checkout });
            }, () => {
                console.log(checkoutId);
            })
            .catch((err) => console.log(err));
    };

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
            {
                variantId,
                quantity: parseInt(quantity, 10),
            },
        ];
        const checkout = await client.checkout.addLineItems(
            this.state.checkout.id,
            lineItemsToAdd
        );
        this.setState({ checkout: checkout });
        console.log(checkout);

        this.openCart();
    };

    updateItemsToCheckout = async (id, quantity) => {
        const lineItemsToUpdate = [
            {
                id,
                quantity: parseInt(quantity, 10),
            },
        ];
        // client.checkout.updateLineItems(this.state.checkout.id, lineItemsToUpdate).then((checkout) => {
        //     console.log(checkout)
        // })

        const checkout = await client.checkout.updateLineItems(
            this.state.checkout.id,
            lineItemsToUpdate
        );
        this.setState({ checkout: checkout });
    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll(40);
        this.setState({ products: products });
        console.log(this.state.products)
    };

    fetchProductWithId = async (id) => {
        const product = await client.product.fetch(id);
        client.product.fetch(id).then((id) => {
            this.setState({ product: product, productImage: product.images[0].src })
        })
        return product;
    };

    closeCart = () => {
        this.setState({ isCartOpen: false });
    };
    openCart = () => {
        this.setState({ isCartOpen: true });
        console.log(this.state.isCartOpen)
    };

    render() {
        return (
            <ShopperContext.Provider
                value={{
                    ...this.state,
                    fetchAllProducts: this.fetchAllProducts,
                    fetchProductWithId: this.fetchProductWithId,
                    fetchCollection: this.fetchCollection,
                    fetchCollectionById: this.fetchCollectionById,
                    closeCart: this.closeCart,
                    openCart: this.openCart,
                    addItemToCheckout: this.addItemToCheckout,
                    updateItemsToCheckout: this.updateItemsToCheckout
                }}
            >
                {this.props.children}
            </ShopperContext.Provider>
        );
    }
}

// const ShopperConsumer = ShopperContext.Consumer;

const ShopperProvider = ShopperContext.Provider;

export { ShopperProvider, ShopperContext };

export default ShopContext;