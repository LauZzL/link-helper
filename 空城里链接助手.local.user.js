// ==UserScript==
// @name         空城里链接助手本地版
// @namespace    https://www.ilzya.com/
// @version      1.0
// @description  免等待下载文件，超酷的哎~
// @author       空城里

// @icon         data:image/jpeg;base64,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
// @license AGPL

// @include        *://*.77file.com/*
// @include        *://*.xunniu*.co/*
// @include        *://*.567file.com/*
// @include        *://*.expfile.com/*
// @include        *://*.xueqiupan.com/*
// @include        *://*.xfpan.cc/*
// @include        *://ownfile.net/*
// @include        *://*.dudujb.com/*
// @include        *://*.yifile.com/*
// @include        *://*.1988wp.com/*
// @include        *://rosefile.net/*
// @include        *://*.xingyaopan.com/*
// @include        *://*.kufile.net/*

// @grant        GM_addStyle
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest

// ==/UserScript==

(function() {
    'use strict';

    // 创建一个面板用来展示解析结果
    const htmlDivElement = document.createElement('div');
    htmlDivElement.id = 'link_helper_download'
    htmlDivElement.style.position = 'absolute'
    htmlDivElement.style.top = '150px'
    htmlDivElement.style.right = '50%'
    htmlDivElement.style.width = '350px'
    htmlDivElement.style.height = '150px'
    htmlDivElement.style.display = 'none'
    htmlDivElement.style.border = '1px solid red'
    htmlDivElement.style.borderRadius = '20px'
    htmlDivElement.style.backgroundColor = 'white'
    htmlDivElement.style.textAlign = 'center'



    // 创建一个按钮以开始解析
    const htmlButtonElement = document.createElement('div');
    htmlButtonElement.id = 'btn'
    htmlButtonElement.innerText = '[LINK-HELPER]获取下载地址'
    htmlButtonElement.style.position = 'absolute'
    htmlButtonElement.style.top = '150px'
    htmlButtonElement.style.right = '0px'
    htmlButtonElement.style.borderRadius = '3%';
    htmlButtonElement.onclick = function (){
        htmlButtonElement.innerText = '[LINK-HELPER]努力解析中'
        const result = getDurl();
        if(result == null){

        }else {
            htmlDivElement.style.display = 'block'
            htmlDivElement.innerHTML = result + '<div style="color: red">解析完成!</div>'
        }
        htmlButtonElement.innerText = '[LINK-HELPER]获取下载地址'
    }


    const htmlIssuesElement = document.createElement('div');
    htmlIssuesElement.id = 'btn'
    htmlIssuesElement.innerText = '有问题?点我提交issues'
    htmlIssuesElement.style.position = 'absolute'
    htmlIssuesElement.style.top = '200px'
    htmlIssuesElement.style.right = '0px'
    htmlIssuesElement.style.borderRadius = '3%';
    htmlIssuesElement.onclick = function (){
        window.open('https://github.com/sayokey/link-helper/issues')
    }

    GM_addStyle(`
        #btn {
            color:white;
            width:200px;
            height:39px;
            border:1px solid #ed7246;
            align-items:center;
            font-weight:450;
            border-radius:20px;
            justify-content:center;
            background-color:#ed7246;
            display:flex;
            cursor: pointer;
        }
    `);

    document.body.append(htmlButtonElement)
    document.body.append(htmlIssuesElement)
    document.body.append(htmlDivElement)


    // 请求路径
    const send_uri = '/ajax.php'

    // action id json,这个id需要抓包获取,我们会提供脚本支持的网盘id,如果你需要增加适配网盘且你不会或者这个id,你可以在github中提交一个issues并说明，我们会协助你。
    // 格式为 key:value key:document.domain,value:action id
    const action_id = {
        'www.xingyaopan.com':'load_down_addr5',
        'www.77file.com':'load_down_addr1',
        'www.xunniufile.com':'load_down_addr1',
        'www.567file.com':'load_down_addr10',
        'www.expfile.com':'load_down_addr1',
        'xueqiupan.com':'load_down_addr1',
        'xfpan.cc':'load_down_addr1',
        'ownfile.net':'load_down_addr1',
        'www.dudujb.com':'load_down_addr1',
        'www.yifile.com':'yifile_down',
        'www.1988wp.com':'load_down_addr1',
        'rosefile.net':'load_down_addr1',
        'kufile.net':'load_down_file_user',
    }

    // 获取完整请求路径
    function getURL(){
        return document.location.origin + send_uri;
    }

    // 获取action 在action_id中找不到会返回undefined
    function getAction(){
        return action_id[document.domain]
    }

    // 获取fileid
    function getFileId(){
        return document.documentElement.outerHTML.match(/add_ref\((.*?)\);/)[1]
    }

    // 提交解析
    function getDurl(){
        const url = getURL();
        const action = getAction();
        const fileid = getFileId();

        let result = null;

        // 对应网盘站点基本都引入了jQuery，所以脚本能直接使用，无需自己引入
        $.ajax({
            method:'post',
            url:url,
            async:false,
            data:`action=${action}&file_id=${fileid}`,
            success:(res) => {
                result = res;
            },
            error:(err) => {
                console.error(err);
                alert('获取失败,请打开控制台查看错误信息!');
            }
        })
        return result
    }

})();