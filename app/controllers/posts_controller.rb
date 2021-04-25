class PostsController < ApplicationController
  before_action :logged_in_user, only: [:new, :create, :destroy]
  
  def create
  end

  def destroy
  end
end
