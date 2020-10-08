require 'sinatra/base'
require 'json'

class ThermoServer < Sinatra::Base

get '/' do
  File.read('public/thermostat.html')
end

get '/test' do
 { string: "Hello World"}.to_json
end

run! if app_file == $0

end