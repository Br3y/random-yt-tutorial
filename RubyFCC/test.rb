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


=begin
    method - block of code that do specific tasks to us
    similar to function in javascript
=end
puts "--------------------------------------"
def sayhi
    puts "Hello User"
end

sayhi

# has parameters inside sayhello
# can be given default value to parameter variable
def say_hello(name, age = 24)
    puts "Hello " + name + ", you are " + age.to_s
end

say_hello("Aubrey")