const express = require('express');
const router = express.Router();
const {accounts} = require('../data');

router.get('/savings', (req, res) => {
    res.render('account', {
        title: 'Savings',
        account: accounts.savings
    });
});

router.get('/checking', (req, res) => {
    res.render('account', {
        title: 'Checking',
        account: accounts.checking
    });
});

router.get('/credit', (req, res) => {
    res.render('account', {
        title: 'Credit',
        account: accounts.credit
    });
});

module.exports = router;