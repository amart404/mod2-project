class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.string :genre
      t.string :platform
      t.float :rating
      t.string :summary
      t.string :cover

      t.timestamps
    end
  end
end
