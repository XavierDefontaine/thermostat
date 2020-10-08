require 'sinatra/base'
require 'json'
require './lib/thermostat'

class ThermoServer < Sinatra::Base

  get '/' do
    File.read('public/thermostat.html')
  end

  get '/temperature' do
    thermostat = Thermostat.new;
    { temperature: thermostat.temperature }.to_json
  end

run! if app_file == $0

end