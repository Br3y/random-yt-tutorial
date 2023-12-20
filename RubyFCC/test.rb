# Arrays
friends = Array["Kevin", "Karen", "Oscar"]
puts friends[0]
puts friends[0]
puts "#{friends[0,2]}"

new_friends = Array.new
new_friends[0] = "Michael"
new_friends[5] = "Holly"
puts new_friends

# methods
# .length, .include?, .reverse, .sort
# you cant sort string and number together inside array


=begin
    hashes - like dictionaries that have ( key => value )
=end
puts "--------------------------------------"
states = {
    "Pennsylvania" => "PA",
    "New York" => "NY",
    "Oregon" => "OR",
    :Philippines => "PH",
    1 => "One"
}
puts states
puts states["New York"]
puts states[:Philippines]
puts states[1]