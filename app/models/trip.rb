class Trip < ApplicationRecord
  belongs_to :user
  has_many :locations, dependent: :destroy

  validates :name, :duration, presence: true
end
