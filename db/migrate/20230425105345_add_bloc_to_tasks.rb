class AddBlocToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :bloc, :integer, default: 1
  end
end
