Rails.application.routes.draw do
  
  get 'sessions/new'
  root to: 'home#index'
  get '/about',   to: 'home#about'
  get '/practice', to: 'home#practice'
  get '/help',    to: 'home#help'
  get '/signup',  to: 'users#new'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  resources :users
end
