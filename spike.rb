get '/' do
  erb :index
end

get '/some-crap/:i.html' do
  str = 'This is some crap for ' << params[:i]
  <<-STR
          <div id="test-popup-<%= i %>" class="white-popup mfp-hide">
            Hello World, this is popup <%= i %>
            #{str}
          </div>
  STR
end
