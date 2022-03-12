Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do

    resources :users do
      resources :trips
    end

    resources :trips, except: [:index, :show, :update, :create, :destroy] do
      resources :locations
    end

    resources :locations, except: [:index, :show, :update, :create, :destroy] do
      resources :addresses
    end
  end
end
