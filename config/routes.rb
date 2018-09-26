Rails.application.routes.draw do


  root to: 'home#index'

  namespace :api do
    namespace :v1 do
     resources :exercises, only: [:index, :create, :destroy, :update]
    end
  end


end
