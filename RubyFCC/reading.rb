# Reading Files
# .read, .readline, .readlines, .readchar

file = File.open("employees.txt", "r")
# puts file.readlines

File.open("employees.txt", "r") do |file|
  puts file.readlines()[2]
end
puts "----------------"
for line in file.readlines
  puts line
end

file.close # close the file and stop eating memory