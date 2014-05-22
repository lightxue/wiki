#!/usr/bin/env ruby
require 'rubygems'
require 'gollum/app'
require 'yaml'

gollum_path = File.expand_path(File.dirname(__FILE__)) # CHANGE THIS TO POINT TO YOUR OWN WIKI REPO
$: << gollum_path
require './app'
Precious::App.set(:gollum_path, gollum_path)
Precious::App.set(:default_markup, :markdown) # set your favorite markup language
Precious::App.set(:wiki_options, {
    :universal_toc => false,
    :mathjax => true,
    :live_preview => false
})
App.set(:authorized_users, YAML.load_file('/var/www/users.yml'))
run Precious::App

