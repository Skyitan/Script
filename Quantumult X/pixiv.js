/*
pixiv 7.9.13
会员功能移除广告 其他自测
from https://github.com/Yu9191/Rewrite


[rewrite_local]

https:\/\/(?:app-api\.pixiv\.net\/v2\/user\/detail|oauth\.secure\.pixiv\.net\/auth\/token) url script-response-body https://raw.githubusercontent.com/Skyitan/Script/master/Quantumult%20X/pixiv.js

[mitm] 

hostname = oauth.secure.pixiv.net, app-api.pixiv.net
*/

var body = $response.body;

// 可移除广告
body = body.replace(/"is_premium":\s*false/g, '"is_premium":true');

$done({ body });