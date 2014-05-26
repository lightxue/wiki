#!/usr/bin/env ruby
require 'rubygems'
require 'yaml'

# VOIDMAIN
# Changed Precision::App to App to take advantage of the overriden methods
gollum_path = File.expand_path(File.dirname(__FILE__)) # CHANGE THIS TO POINT TO YOUR OWN WIKI REPO
$: << gollum_path
require './app'
App.set(:gollum_path, gollum_path)
App.set(:default_markup, :markdown) # set your favorite markup language
App.set(:wiki_options, {
    :universal_toc => false,
    :mathjax => true,
    :live_preview => true
})
App.set(:authorized_users, YAML.load_file('/var/www/users.yml'))
run App

