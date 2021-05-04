Rails.application.routes.draw do
  
  get 'password_resets/new'
  get 'password_resets/edit'
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
  resources :account_activations, only: [:edit]
  resources :password_resets, only: [:new, :create, :edit ,:update]
  resources :posts
end
