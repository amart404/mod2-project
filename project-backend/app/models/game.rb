class Game < ApplicationRecord
    has_many :users, through: :collections
end
