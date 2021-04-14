Rails.application.routes.draw do
  root to: 'home#index'
  get '/about',   to: 'home#about'
  get '/practice', to: 'home#practice'
  get '/help',    to: 'home#help'
end
