json.array! @artists do |artist|
  json.extract! artist, :id, :artist_name, :verified, :about_blurb, :about_img, :global_ranking, :monthly_listeners
end
