# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'net/https'
require 'json'
require 'pry'

Game.destroy_all

http = Net::HTTP.new('api-v3.igdb.com',443)
http.use_ssl = true
request = Net::HTTP::Post.new(URI('https://api-v3.igdb.com/games'), {'user-key' => '30a6059b0eff96ab842557e7cba0c1c8'})
request.body = 'fields name,genres.name,platforms.name,rating,summary,cover.url; limit 50; where rating > 85;'

gameModel =  http.request(request).body

finalModel = JSON.parse(gameModel)

finalModel.each do |game|
    Game.create({
        name: game["name"],
        genre: game["genres"],
        platform: game["platforms"],
        rating: game["rating"],
        summary: game["summary"],
        cover: game["cover"]
    })
end

# Game.all.each do |game|
#     if game.genre != ''
#         genreArray = eval(game.genre)

#         game.genre = genreArray.map{|genre| genre["name"]}
#     end

#     if game.platform != ''
#         platArray = eval(game.platform)

#         game.platform = platArray.map{|platform| platform["name"]}
#     end

#     if game.cover != ''
#         coverInfo = eval(game.cover)
#         coverUrl = coverInfo["url"]

#         game.cover = coverUrl[2..-1]
#     end
# end