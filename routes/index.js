var express = require('express');
var router = express.Router();
var util = require('../libs/utils');

/* GET login page. 登录 */
router.get('/login', function (req, res, next) {
    res.render('pages/login', {
        title: '登录'
    });
});

/**
 * =========  账户管理  ===========
 */

/* 机构管理 */
router.get('/accountManage/orgManage', function (req, res, next) {
    res.render('pages/accountManage/orgManage', {
        title: '机构管理',
        level: [1,1]
    });
});

/* 用户管理 */
router.get('/accountManage/userManage', function (req, res, next) {
    res.render('pages/accountManage/userManage', {
        title: '用户管理',
        level: [1,2]
    });
});

/* 经纪人管理 */
router.get('/accountManage/brokerManage', function (req, res, next) {
    res.render('pages/accountManage/brokerManage', {
        title: '经纪人管理',
        level: [1,3]
    });
});

/* 微圈管理 */
router.get('/accountManage/wqManage', function (req, res, next) {
    res.render('pages/accountManage/wqManage', {
        title: '微圈管理',
        level: [1,4]
    });
});

/**
 * =========  客户管理  ===========
 */
/* 客户列表 */
router.get('/clientManage/clientList', function (req, res, next) {
    res.render('pages/clientManage/clientList', {
        title: '客户列表',
        level: [2,1]
    });
});
/* 客户列表-查看-购买记录 */
router.get('/clientManage/clientListView/buyLog', function (req, res, next) {
    res.render('pages/clientManage/clientListView/buyLog', {
        title: '购买记录',
        level: [2,1]
    });
});
/* 客户列表-查看-出入金记录 */
router.get('/clientManage/clientListView/chuRuJinLog', function (req, res, next) {
    res.render('pages/clientManage/clientListView/chuRuJinLog', {
        title: '出入金记录',
        level: [2,1]
    });
});
/* 客户列表-查看-资金流水 */
router.get('/clientManage/clientListView/wasteBook', function (req, res, next) {
    res.render('pages/clientManage/clientListView/wasteBook', {
        title: '资金流水',
        level: [2,1]
    });
});/* 客户列表-查看-资金记录 */
router.get('/clientManage/clientListView/moneyLog', function (req, res, next) {
    res.render('pages/clientManage/clientListView/moneyLog', {
        title: '资金记录',
        level: [2,1]
    });
});


/* 持仓查询 */
router.get('/clientManage/chiCangSearch', function (req, res, next) {
    res.render('pages/clientManage/chiCangSearch', {
        title: '持仓查询',
        level: [2,2]
    });
});

/* 平仓查询 */
router.get('/clientManage/pingCangSearch', function (req, res, next) {
    res.render('pages/clientManage/pingCangSearch', {
        title: '平仓查询',
        level: [2,3]
    });
});

/* 出入金查询 */
router.get('/clientManage/chuRuJinSearch', function (req, res, next) {
    res.render('pages/clientManage/chuRuJinSearch', {
        title: '出入金查询',
        level: [2,4]
    });
});

/**
 * =========  结算管理  ===========
 */
/* 统计报表 */
router.get('/countManage/countTable', function (req, res, next) {
    res.render('pages/countManage/countTable', {
        title: '统计报表',
        level: [3,1]
    });
});

/**
 * =========  系统管理  ===========
 */
/* 密码设置 */
router.get('/sysManage/pwdManage', function (req, res, next) {
    res.render('pages/sysManage/pwdManage', {
        title: '密码设置',
        level: [4,1]
    });
});

module.exports = router;
