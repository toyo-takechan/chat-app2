class PostsController < ApplicationController
  before_action :logged_in_user, only: [:new, :create, :destroy]
  before_action :correct_user,   only: :destroy
  
  def new
    @post = Post.new
  end
  
  def create
    @post = current_user.posts.build(post_params)
    @post.image.attach(params[:post][:image])
    if @post.save
      flash[:info] = "投稿に成功しました。"
      redirect_to user_path(current_user)   
    else
      @feed_items = current_user.feed.page(params[:page])
     render 'new' 
    end
  end

  def destroy
    @post.destroy
    flash[:success] = "投稿を削除ししました。"
    redirect_to request.referrer || root_url
  end

  private

  def post_params
    params.require(:post).permit(:content, :image )
  end

  def correct_user
    @post = current_user.posts.find_by(id: params[:id])
    redirect_to root_url if @post.nil?
  end
end
