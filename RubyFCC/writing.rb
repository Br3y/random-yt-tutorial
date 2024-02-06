# a - append file
# w - write file (overwrite all files and start to first line)

# File.open("employees.txt", "a") do |file|
#   file.write("\n0scar, Accounting")
# end 

File.open("index.html", "a") do |file|
  file.write("<h1>Hello</h1>")
end