class Location < ApplicationRecord
  belongs_to :trip

  validates :name, :where, presence: true
  has_many :addresses, dependent: :destroy
end
