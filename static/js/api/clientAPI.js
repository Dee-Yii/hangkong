define(["jquery"],function(n){var t={changeLine:function(t,i){n.post("/addOrg.php",t,function(n){i(n)})},stopTrade:function(t,i){n.post("/addOrg.php",t,function(n){i(n)})},getClientList:function(t,i){n.post("/user/getlist",t,function(n){i(n)})}};return t});