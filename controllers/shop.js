const Product = require('../models/product');

// Get products controller (shop page)
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { 
            pageTitle: 'All Products',
            prods: products,
            pageId: '/products'
        })
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', { 
            pageTitle: 'Shop',
            prods: products,
            pageId: '/'
        })
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart',
        pageId: '/cart'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Orders',
        pageId: '/orders'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        pageId: '/checkout'
    });
};
