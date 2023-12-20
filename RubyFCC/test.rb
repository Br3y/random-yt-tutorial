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


=begin
    Return Statement / Keyword
=end
puts "--------------------------------------"
def cube(num)
    return num * num * num, 70
end

puts cube(3)


=begin
    if Statement
=end
puts "--------------------------------------"

ismale = true
istall = false

# Logical operators (or, and, not) or (||, &&, !)
if ismale and istall
    puts "You are a tall male"
elsif ismale and not istall
    puts "You are a short male"
elsif not ismale and istall
    puts "You are not male but are tall"
else 
    puts "You are not male and not tall"
end