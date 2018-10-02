const fs = require('fs')
const path = require('path')

module.exports = {
    title: 'Knowledge Base',
    description: "Light Xue的个人维基",
    themeConfig: {
        nav: [{
            text: '首页',
            link: '/'
        }, {
            text: '编程语言',
            link: '/languages/python/',
        }, {
            text: '操作系统',
            link: '/systems/linux/'
        }, {
            text: '工具',
            link: '/tools/shell/'
        }, {
            text: '其它',
            link: '/others/rubiks/'
        }],
        sidebar: {
            '/languages/': genSidebar('/languages/'),
            '/systems/': genSidebar('/systems/'),
            '/tools/': genSidebar('/tools/'),
            '/others/': genSidebar('/others/'),
        }
    }
}

function genSidebar(dir) {
    const p = toAbsPath(dir)

    let ret = []
    fs.readdirSync(p).forEach(file => {
        const subPath = path.join(p, file)
        if (fs.lstatSync(subPath).isDirectory()) {
            ret.push(scanDir(path.join(dir, file)))
        }
    })
    return ret
}

function scanDir(dir) {
    let title = path.basename(dir)
    let children = []
    const p = toAbsPath(dir)
    fs.readdirSync(p).forEach(file => {
        if (file === 'index.md') {
            title = parseTitle(path.join(p, 'index.md'))
            children.unshift(path.join(dir, '/'))
        }
        else if (file === 'img') {
        }
        else {
            children.push(path.join(dir, file))
        }
    })
    return {
        title,
        collapsable: false,
        children
    }
}

function toAbsPath(dir) {
    return path.resolve('.' + dir)
}

function parseTitle(filename) {
    const re = /# +(.+)/
    const lines = fs.readFileSync(filename).toString().split('\n')
    for (let i = 0; i < lines.length; i++) {
        const s = lines[i]
        if (re.test(s)) {
            return re.exec(s)[1]
        }
    }
    return 'Unkown'
}

//const util = require('util')
//console.log(util.inspect(module.exports, {showHidden: false, depth: null}))
