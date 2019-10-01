class CollectionsController < ApplicationController
    def index
        @collections = Collection.all

        render json: @collections
    end

    def show
        @collection = Collection.find(params[:id])

        render json: @collection
    end

    def create
        @collection = Collection.create({
            game_id: params[:game_id]
            user_id: params[:user_id]
        })
    end 
end
