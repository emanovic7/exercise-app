class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :body_part
      t.string :equipment
      t.text :description
      
      t.timestamps
    end
  end
end
