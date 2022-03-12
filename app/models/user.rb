class User < ApplicationRecord
  has_many :trips, dependent: :destroy

  validates :email, :password, presence: true, length: {minimum: 2}
end
