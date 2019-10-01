class User < ApplicationRecord
    has_many :games, through: :collections
end
