require 'sinatra'
set :bind, '0.0.0.0'

get '/' do
  "Hello World from Ruby app!"
end