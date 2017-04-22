// var crypto = require('crypto');
// var moment = require('moment');
// var Promise = require('bluebird');
// var request = require('request');
// var requesty = Promise.promisify(require('request'));
// var _ = require('underscore');
// var fs = require('fs');
// var path = require('path');
// var formStream = require('formstream');
// var config = require('../config');
//
// var createHashStamp = function (str, tradeCode) {
//     var md5 = crypto.createHash('md5');
//     md5.update(str,"utf-8");
//     var d = md5.digest('hex').toUpperCase();
//     var data = {
//         "tradecode": tradeCode,
//         "traceno": +new Date(),
//         "channel": 4,
//         "usertype": 1,
//         "requesttime": moment().format("YYYYMMDDHHmmssSSS"),
//         "version": "2.2",
//         "sign": d
//     };
//     return data;
// };
//
// var requestProxy = function  (tranceCode, requestBody, callback) {
//     var str = JSON.stringify(requestBody) + "14123";
//     var data = createHashStamp(str, tranceCode);
//     console.log(tranceCode + "请求头：\n", data, "\n\n");
//     console.log(tranceCode + "请求体：\n", requestBody, "\n\n");
//     request({
//         method: "post",
//         url: config.serviceUrl,
//         json: true,
//         body: {
//             "head": data,
//             "body": requestBody
//         },
//         timeout: 10000
//     },function  (error, response, data) {
//         if (!error && response.statusCode == 200) {
//             console.log(tranceCode + "后台响应对象：\n", data, "\n\n");
//             callback(data);
//         } else {
//             console.log(error);
//         }
//     });
// };
//
// var requestPromise = function  (requestData) {
//     return new Promise(function (resolve, reject) {
//         var str = JSON.stringify(requestData.body) + "14123";
//         var data = createHashStamp(str, requestData.tradeCode);
//         console.log(requestData.tradeCode + "请求头：\n", data, "\n\n");
//         console.log(requestData.tradeCode + "请求体：\n", requestData.body, "\n\n");
//         requesty({
//             method: "post",
//             url: config.serviceUrl,
//             json: true,
//             body: {
//                 "head": data,
//                 "body": requestData.body
//             },
//             timeout: 10000
//         }).then(function  (response) {
//             if (response.statusCode == 200) {
//                 console.log(requestData.tradeCode + "后台响应对象：\n", response.body, "\n\n");
//                 if (response.body.result.code == 0) {
//                     resolve(response.body);
//                 } else {
//                     reject(response.body);
//                 }
//             } else {
//                 reject(new Error("Network failed!"));
//             }
//         });
//     });
// };
//
//
// var uploadOSS = function (formData) {
//     return new Promise(function (resolve, reject) {
//         var form = formStream().field("studentid", formData.studentid).buffer("headImg", formData.headImg, "some.jpg");
//         var upload = request({
//             method: "POST",
//             url: config.serviceUrl + "/uploadImg",
//             headers: form.headers()
//         }, function (error, response, body) {
//             if (!error && response.statusCode === 200) {
//                 resolve(body);
//             } else {
//                 reject(new Error("Error"));
//             }
//         });
//         form.pipe(upload);
//     });
// };
//
// exports.requestProxy = requestProxy;
// exports.requestPromise = requestPromise;
// exports.uploadOSS = uploadOSS;
