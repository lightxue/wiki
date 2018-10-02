module.exports = {
    title: 'Knowledge Base',
    description: "Light Xue的个人维基",
    host: '106.186.126.45',
    themeConfig: {
        nav: [{
            text: '首页',
            link: '/'
        }, {
            text: '编程语言',
            link: '/languages/',
        }, {
            text: '操作系统',
            link: '/systems/linux/'
        }, {
            text: '工具',
            link: '/tools/shell/'
        }, {
            text: '魔方',
            link: '/rubiks/'
        }, {
            text: '其它',
            link: '/others/theory'
        }],
        sidebar: {
            '/languages/': genSidebar('/languages/'),
        }
    }
}

function genSidebar(folder) {
    const fs = require('fs')
    const path = require('path')
    const p = path.resolve('.' + folder)

    let ret = []
    fs.readdirSync(p).forEach(f => {
        let title = f, children = ['']
        const subPath = path.join(p, f)
        if (!fs.lstatSync(subPath).isDirectory()) {
            return
        }
        fs.readdirSync(subPath).forEach(file => {
            if (file === 'index.md') {
                return
            }
            children.push(path.join(folder, f, file))
        })
        ret.push({
            title,
            collapsable: false,
            children
        })
    })
    return ret
}

const util = require('util')
console.log(util.inspect(module.exports, {showHidden: false, depth: null}))
