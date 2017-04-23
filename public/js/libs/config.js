define([], function () {
    var config = {
        serviceUrl: ":ws -h 192.168.0.11 -p ", //开发环境
        //serviceUrl: ":ws -h 192.168.0.12 -p ", //测试环境
        //serviceUrl: ":ws -h 112.124.3.182 -p ", //生产环境

        ossSignatureUrl: "http://122.224.199.228:8060/service/osssignature",    //开发环境
        //ossSignatureUrl: "http://122.224.199.228:8080/service/osssignature",    //测试环境
        //ossSignatureUrl: "http://112.124.3.182:8080/service/osssignature",      //生产环境

        orgStatus           : ["","启用","禁用"],
        tradeStatus         : ["可以交易","禁止交易"],
        roleStatus          : ["","有效","被禁用"],
        brokerStatus        : ["","有效","被禁用"],
        brokerCheckStatus   : ["","通过","未通过","未审核"],
        CRJStatus           : ["","平台处理中","银行处理中"],
        CRJCheckStatus      : ["","已通过","未审核"],

        orgType             : ["","航空","陆运","海运","其他"],
        upLevel             : ["","华东大区","陆运","海运","其他"],
        roleType            : ["","结算专员","客服"],
        CPType              : ["", "买涨", "买跌"],
        tradeType           : ["", "入金", "出金"],
        LSType              : ["", "开户", "银联转入", "微信转入", "买入清算", "买出清算", "银证转出"],
        moneyLogType        : ["", "收入", "支出"],

        REG: {
            password: "",
            smsCode: "",
            phone: /^0?1[3|4|5|7|8][0-9]\d{8}$/,
            cellphone: "",
            money: ""

        }
    };

    return config;
});