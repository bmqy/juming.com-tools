// ==UserScript==
// @name         聚名网辅助工具
// @namespace    http://bmqy.net/
// @version      0.2
// @description  聚名网搜索自动补".com"后缀，输入内容不包含".com,.net,.cn,.com.cn"时，自动补.com后缀；可使用一键检测注册状态按钮。
// @author       bmqy
// @match        http://*.juming.com/*
// @run-at document-end
// ==/UserScript==

window.onload = function(){
    (function() {
        'use strict';
        // 为搜索框自动补全".com"后缀
        var SearchInput = document.querySelector('#taodm');
        var Reg = /(.com|.net|.cn|.com.cn)$/;
        SearchInput.addEventListener('blur', function(){
            if(SearchInput.value !== '域名信息综合查询' && !SearchInput.value.match(Reg)){
                SearchInput.value += '.com';
            }
        });
        SearchInput.addEventListener('keydown', function(e){
            if(e.keyCode == 13){
                if(SearchInput.value !== '域名信息综合查询' && !SearchInput.value.match(Reg)){
                    SearchInput.value += '.com';
                }
            }
        });
        // 启用"一键检测注册状态"按钮
        document.addEventListener('DOMNodeInserted', function (){
            var BtnChazczt = document.querySelector('#a_plchazc');
            BtnChazczt.setAttribute('onclick','return pl_chazczt2();');
        });
    })();
};