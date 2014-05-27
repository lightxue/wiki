# VOIDMAIN
# Accroding to `http://senften.wordpress.com/2013/07/04/loaderror-cannot-load-such-file-gollumfrontendapp/`, change 'gollum/frontend/app' to 'gollum/app'
require 'gollum/app'
require 'digest/sha1'

class App < Precious::App
  User = Struct.new(:name, :email, :password_hash, :can_write)

  # VOIDMAIN
  # Don't need to authenticate for readers
  #before { authenticate! }

  before /^\/(edit|create|delete|livepreview|revert|rename|uploadFile)/ do authorize_write! ; end

  helpers do
    def authenticate!
      @_auth ||=  Rack::Auth::Basic::Request.new(request.env)
      if @_auth.provided?
      end
      if @_auth.provided? && @_auth.basic? && @_auth.credentials &&
        @user = detected_user(@_auth.credentials)
        return @user
      else
        response['WWW-Authenticate'] = %(Basic realm="Gollum Wiki")
        throw(:halt, [401, "Not authorized\n"])
      end
    end

    def authorize_write!
      # VOIDMAIN
      # Since we've comment out the `before {authenticate!}` code,
      # We have to invoke explicitly here to get `@user` variable set
      authenticate!
      throw(:halt, [403, "Forbidden\n"]) unless @user.can_write
    end

    def users
      @_users ||= settings.authorized_users.map {|u| User.new(*u) }
    end

    def detected_user(credentials)
      users.detect do |u|
          print u.email
        [u.email, u.password_hash] ==
        [credentials[0], Digest::SHA1.hexdigest(credentials[1])]
      end
    end
  end

  def commit_message
    {
      :message => params[:message],
      :name => @user.name,
      :email => @user.email
    }
  end
end
