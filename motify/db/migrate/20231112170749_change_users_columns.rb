class ChangeUsersColumns < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :birth_date, :datetime, null: false
    add_column :users, :gender, :string, null: false
    add_column :users, :optin_marketing, :boolean, default: false
  end
end
