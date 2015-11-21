require 'bundler'
Bundler.require


get '/' do
# view to welcome users which will be home page.
# now need to make a public folder to hold scripts and styles
  erb :index
end
