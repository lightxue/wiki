#!/usr/bin/env ruby
#require 'rubygems'
#require 'gollum/app'
#require 'yaml'

#gollum_path = File.expand_path(File.dirname(__FILE__)) # CHANGE THIS TO POINT TO YOUR OWN WIKI REPO
#$: << gollum_path
#require 'app'
#Precious::App.set(:gollum_path, gollum_path)
#Precious::App.set(:default_markup, :markdown) # set your favorite markup language
#Precious::App.set(:wiki_options, {
    #:universal_toc => false,
    #:mathjax => true,
    #:live_preview => false
#})
#App.set(:authorized_users, YAML.load_file('/var/www/users.yml'))
#run Precious::App

#!/usr/bin/env ruby
require 'rubygems'
require 'gollum/app'
gollum_path = File.expand_path(File.join(File.dirname(__FILE__), 'database.git')) # CHANGE THIS TO POINT TO YOUR OWN WIKI REPO
Precious::App.set(:gollum_path, gollum_path)
Precious::App.set(:default_markup, :markdown) # set your favorite markup language
Precious::App.set(:wiki_options, {:live_preview => false, :universal_toc => false, :user_icons => 'gravatar'})
module Precious
  class App < Sinatra::Base
    # Creates a simple authentication layer
    # use Rack::Auth::Basic, "Restricted Area" do |username, password|
    #   [username, password] == ['admin', 'admin']
    # end
    ['/create/*','/edit/*'].each do |path|
      before path do
        # hack, must set session to anything for AuthorApp information to carry into Gollum 
        session['time'] ||= Time.now
        if session['gollum.author'].nil? || session['gollum.author'].empty?
          redirect '/author/set'
        end
        settings.wiki_options[:live_preview] = session['author.live_preview'] unless session['author.live_preview'].nil?
        settings.wiki_options[:universal_toc] = session['author.universal_toc'] unless session['author.universal_toc'].nil?
      end
    end
  end
end
 
# App allows you to set the author through rack.session cookie
class AuthorApp < Sinatra::Base
  get '/' do    
    redirect '/author/set'
  end
  
  get '/set' do
    if session['gollum.author'].nil? || session['gollum.author'].empty?
      form = "The author is not set: <a href=\"/author/set\">Set Author</a></br></br>"
    else
      form = "Author is set to <b>#{session['gollum.author'][:name]}</b> (<b>#{session['gollum.author'][:email]}</b>) with live markdown editor set to <b>#{session['author.live_preview']}</b> and TOC to  <b>#{session['author.universal_toc']}</b>.</br></br>"
    end
    form << "Set Author/Preferences for Wiki<br/>
    <form name=\"input\" action=\"set\" method=\"post\">
    Name: <input type=\"text\" name=\"name\" value=\"#{session['gollum.author'][:name] unless session['gollum.author'].nil? || session['gollum.author'].empty? || session['gollum.author'][:name].nil?}\"><br/>
    Email: <input type=\"text\" name=\"email\" value=\"#{session['gollum.author'][:email] unless session['gollum.author'].nil? || session['gollum.author'].empty? || session['gollum.author'][:email].nil?}\"><br/>
    Live Editor (side by side live editor for markdown): <input type=\"checkbox\" name=\"live_preview\"#{' checked="checked"' if session['author.live_preview']}><br/>
    Universal TOC (table of contents): <input type=\"checkbox\" name=\"universal_toc\"#{' checked="checked"' if session['author.universal_toc']}><br/>
    <input type=\"hidden\" name=\"referrer\" value=\"#{request.referrer}\"><br/>
    <input type=\"submit\" value=\"Submit\"> or <a href=\"/author/clear\">Clear Author/Preferences</a>
    </form>"
  end
  
  post '/set' do
    session['gollum.author'] = { :name => params['name'], :email => params['email'] }
    session['author.live_preview'] = params['live_preview'].nil? ? false : true
    session['author.universal_toc'] = params['universal_toc'].nil? ? false : true
    redirect params['referrer'] || '/'
  end
  
  get '/clear' do
    session['gollum.author'] = {}
    session['author.live_preview'] = nil
    session['author.universal_toc'] = nil
    redirect '/author/set'
  end
end
 
# Set cookies used by both apps
use Rack::Session::Cookie, { :key => 'rack.session', :secret => "123", :expire_after => (1 * 365 * 24 * 60 * 60) }
 
# Mount, run both applications
run Rack::URLMap.new("/" => Precious::App.new,
                     "/author" => AuthorApp.new)
