BASEDIR=$(CURDIR)
OUTPUTDIR=$(BASEDIR)/.vuepress/dist

GITHUB_PAGES_BRANCH=master

QINIU_CONFIG=config/qiniu-upload.json

help:
	@echo "Makefile for Light Xue's personal wiki                                      "
	@echo '                                                                            '
	@echo 'Usage:                                                                      '
	@echo '   make init                           initialize wiki evironment           '
	@echo '   make html                           (re)generate the web site            '
	@echo '   make clean                          remove the generated files           '
	@echo '   make serve                          serve site at http://localhost:8080  '
	@echo '   make github                         upload the web site via gh-pages     '
	@echo '   make cdn                            upload the web site to CDN           '
	@echo '   make release                        upload the web site to github and CDN'
	@echo '                                                                            '
	@echo '                                                                            '

init:
	sudo npm -g install vuepress
	sudo apt-get install -y ghp-import

html:
	vuepress build

clean:
	[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR)

serve:
	vuepress dev

publish:
	[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR)
	vuepress build

github: publish
	echo 'wiki.lightxue.com' > $(OUTPUTDIR)/CNAME
	ghp-import -m "Generate Vupress site" -b $(GITHUB_PAGES_BRANCH) $(OUTPUTDIR)
	git push origin $(GITHUB_PAGES_BRANCH)

# 上传到七牛空间
cdn: publish
	qshell qupload $(QINIU_CONFIG)

release: github cdn

.PHONY: html init help clean serve publish github cdn release
