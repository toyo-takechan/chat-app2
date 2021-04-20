class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
       # ユーザーログイン後にユーザー情報のページにリダイレクトする
    else
      flash.now[:danger] = "メールアドレスとパスワードの組み合わせが無効です"
      render 'new'
    end
  end

  def destroy
  end
end
