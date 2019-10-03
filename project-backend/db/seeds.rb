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
    if game["genres"] == nil || game["platforms"] == nil
        Game.create({
            name: game["name"],
            genre: game["genres"],
            platform: game["platforms"],
            rating: game["rating"].round(2),
            summary: game["summary"],
            cover: game["cover"]
        })
    else
        Game.create({
            name: game["name"],
            genre: game["genres"][0]["name"],
            platform: game["platforms"][0]["name"],
            rating: game["rating"].round(2),
            summary: game["summary"],
            cover: game["cover"]
        })
    end
end

Game.all.map do |game|
    if game.name == "Pony Creator" || game.name == "The Legend of Kusakari"
        temp = eval(game.platform)
        game.update_attribute(:platform, temp[0]["name"])
    elsif game.name == "WordCookies Cross" || game.name == "Caesars Casino Official Slots"
        temp = eval(game.platform)
        game.update_attribute(:platform, temp[0]["name"])
    end
end

Game.all.map do |game|
    if game.cover != nil
        temp = eval(game.cover)
        game.update_attribute(:cover, temp["url"][2..-1])
    end
end

# Game.all.map do |game|
#     if eval(game.platform)
#         temp = eval(game.platform)
#         game.update_attribute(:platform, temp["name"])
#     end
# end