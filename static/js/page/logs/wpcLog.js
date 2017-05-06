define(["jquery","utils","config","clientAPI","layer","pagination","remodal"],function(e,o,t,n){var s={init:function(){this.render(),this.bindEvents()},render:function(){o.initClientInfo(),this.fnGetList({uid:o.getQuery("uid")},!0)},bindEvents:function(){},fnGetList:function(o,t){var s=e(".data-container table");n.getWPCList(o,function(o){if(console.log("获取平仓列表 调用成功!"),"0"==o.list.length)return s.find("tbody").empty().html("<tr><td colspan='9'>暂无记录</td></tr>"),e(".pagination").hide(),!1;var t;e.each(o.list,function(e,o){var n="<td>"+o.close_position_time+"</td>",s="<td>"+o.tid+"</td>",i="<td>"+(o.actaulInfo?o.actaulInfo.name:"")+"</td>",d="<td>"+(o.actaulInfo?o.actaulInfo.unit:"")+"</td>",l="<td>"+(o.buy_sell==-1?"卖出":"买入")+"</td>",a="<td>"+(o.buy_sell==-1?"买跌":"买涨")+"</td>",_="<td>"+o.amount+"</td>",r="<td>"+(o.result*o.gross_profit).toFixed(2)+"</td>",p="<td></td>";t+='<tr class="fadeIn animated">'+n+s+i+d+l+a+_+r+p+"</tr>"}),s.find("tbody").empty().html(t)});var i={totalPages:150,pageNum:5,page:1,list:[{tid:"1757850905579034113",uid:"5",code_id:"11",buy_sell:"-1",code:null,symbol:"fx_susdcnh",name:"上海-纽约1分钟",close_type:"6",amount:"50",open_position_time:"1493883365",close_position_time:"1493883425",gross_profit:"776.786",open_price:"6.8971",open_cost:"776.786",open_charge:"0.15",close_price:"6.8969",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"1",handle:"1",actaulInfo:{id:"1",code:"AG100G",name:"0.1kg白银",symbol:"AG",unit:"0.1kg",amount:"0.1",profit:"0.1",deposit:"8",open:"0.7",close:"0",deferred:"0.1",max:"30",min:" 1",exchange_name:"DEFAULT",platform_name:"JH",status:"1",sort:"1",show_symbol:"白银",show_name:"0.1kg"}},{tid:"1674807288714476621",uid:"5",code_id:"12",buy_sell:"-1",code:null,symbol:"fx_sjpycnh",name:"上海-东京1分钟",close_type:"6",amount:"50",open_position_time:"1493883340",close_position_time:"1493883400",gross_profit:"556.486",open_price:"0.061086",open_cost:"556.486",open_charge:"0.15",close_price:"0.061086",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"-1",handle:"0",actaulInfo:{id:"1",code:"AG100G",name:"0.1kg白银",symbol:"AG",unit:"0.1kg",amount:"0.1",profit:"0.1",deposit:"8",open:"0.7",close:"0",deferred:"0.1",max:"30",min:" 1",exchange_name:"DEFAULT",platform_name:"JH",status:"1",sort:"1",show_symbol:"白银",show_name:"0.1kg"}},{tid:"1674807288714476621",uid:"5",code_id:"12",buy_sell:"-1",code:null,symbol:"fx_sjpycnh",name:"上海-东京1分钟",close_type:"6",amount:"50",open_position_time:"1493883340",close_position_time:"1493883400",gross_profit:"556.486",open_price:"0.061086",open_cost:"556.486",open_charge:"0.15",close_price:"0.061086",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"-1",handle:"0",actaulInfo:{id:"1",code:"AG100G",name:"0.1kg白银",symbol:"AG",unit:"0.1kg",amount:"0.1",profit:"0.1",deposit:"8",open:"0.7",close:"0",deferred:"0.1",max:"30",min:" 1",exchange_name:"DEFAULT",platform_name:"JH",status:"1",sort:"1",show_symbol:"白银",show_name:"0.1kg"}},{tid:"1674807288714476621",uid:"5",code_id:"12",buy_sell:"-1",code:null,symbol:"fx_sjpycnh",name:"上海-东京1分钟",close_type:"6",amount:"50",open_position_time:"1493883340",close_position_time:"1493883400",gross_profit:"556.486",open_price:"0.061086",open_cost:"556.486",open_charge:"0.15",close_price:"0.061086",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"-1",handle:"0",actaulInfo:{id:"1",code:"AG100G",name:"0.1kg白银",symbol:"AG",unit:"0.1kg",amount:"0.1",profit:"0.1",deposit:"8",open:"0.7",close:"0",deferred:"0.1",max:"30",min:" 1",exchange_name:"DEFAULT",platform_name:"JH",status:"1",sort:"1",show_symbol:"白银",show_name:"0.1kg"}},{tid:"3642050484610273488",uid:"5",code_id:"12",buy_sell:"1",code:null,symbol:"fx_sjpycnh",name:"上海-东京1分钟",close_type:"6",amount:"50",open_position_time:"1493883324",close_position_time:"1493883384",gross_profit:"556.486",open_price:"0.061086",open_cost:"556.486",open_charge:"0.15",close_price:"0.061086",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"-1",handle:"0",actaulInfo:{id:"1",code:"AG100G",name:"0.1kg白银",symbol:"AG",unit:"0.1kg",amount:"0.1",profit:"0.1",deposit:"8",open:"0.7",close:"0",deferred:"0.1",max:"30",min:" 1",exchange_name:"DEFAULT",platform_name:"JH",status:"1",sort:"1",show_symbol:"白银",show_name:"0.1kg"}},{tid:"8791282959331912359",uid:"5",code_id:"10",buy_sell:"-1",code:null,symbol:"fx_seurcnh",name:"上海-法兰克福1分钟",close_type:"6",amount:"1",open_position_time:"1493882924",close_position_time:"1493882984",gross_profit:"12.7015",open_price:"7.509",open_cost:"12.7015",open_charge:"0.15",close_price:"7.509",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"-1",handle:"0",actaulInfo:{id:"1",code:"AG100G",name:"0.1kg白银",symbol:"AG",unit:"0.1kg",amount:"0.1",profit:"0.1",deposit:"8",open:"0.7",close:"0",deferred:"0.1",max:"30",min:" 1",exchange_name:"DEFAULT",platform_name:"JH",status:"1",sort:"1",show_symbol:"白银",show_name:"0.1kg"}},{tid:"3450102723273383353",uid:"5",code_id:"10",buy_sell:"-1",code:null,symbol:"fx_seurcnh",name:"上海-法兰克福1分钟",close_type:"6",amount:"50",open_position_time:"1493882909",close_position_time:"1493882969",gross_profit:"634.989",open_price:"7.508",open_cost:"634.989",open_charge:"0.15",close_price:"7.509",pos_limit:"0",stop:"0",deferred:"0",is_deferred:null,result:"-1",handle:"0",actaulInfo:{id:"1",code:"AG100G",name:"0.1kg白银",symbol:"AG",unit:"0.1kg",amount:"0.1",profit:"0.1",deposit:"8",open:"0.7",close:"0",deferred:"0.1",max:"30",min:" 1",exchange_name:"DEFAULT",platform_name:"JH",status:"1",sort:"1",show_symbol:"白银",show_name:"0.1kg"}}]};if(console.log("获取未平仓列表 调用成功!"),"0"==i.list.length)return s.find("tbody").empty().html("<tr><td colspan='7'>暂无记录</td></tr>"),e(".pagination").hide(),!1;var d;e.each(i.list,function(e,o){var t="<td>"+o.close_position_time+"</td>",n="<td>"+o.tid+"</td>",s="<td>"+(o.actaulInfo?o.actaulInfo.name:"")+"</td>",i="<td>"+(o.actaulInfo?o.actaulInfo.unit:"")+"</td>",l="<td>"+(o.buy_sell==-1?"卖出":"买入")+"</td>",a="<td>"+(o.buy_sell==-1?"买跌":"买涨")+"</td>",_="<td>"+o.amount+"</td>",r="<td>"+(o.result*o.gross_profit).toFixed(2)+"</td>",p="<td></td>";d+='<tr class="fadeIn animated">'+t+n+s+i+l+a+_+r+p+"</tr>"}),s.find("tbody").empty().html(d)}};s.init()});