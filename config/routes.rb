Rails.application.routes.draw do
  resources :tasks do
    member do
      patch :move
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
   root "tasks#index"
   get "/blocs", to: "home#index"
end
