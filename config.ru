require 'sinatra'
require 'sass/plugin/rack'
require './spike'

require 'bourbon'
require 'neat'

use Sass::Plugin::Rack
run Sinatra::Application
