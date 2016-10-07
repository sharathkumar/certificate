Catalog::Application.routes.draw do
  
  # Courses routes
  # =================================
  get 'courses', to: 'courses#index'

  # LTI Implementation related routes
  # =================================
  post 'register', to: 'registration#register', as: :tool_registration
  post 'reregister', to: 'registration#register', as: :tool_reregistration
  post 'submit_capabilities', to: 'registration#save_capabilities', as: 'save_capabilities'
  get 'submit_proxy/:registration_uuid', to: 'registration#submit_proxy', as: 'submit_proxy'

  # LTI2 provide engine routes
  # ==========================
  mount RailsLti2Provider::Engine => "/rails_lti2_provider"

end
