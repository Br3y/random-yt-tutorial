# Class and Objects
class Book
  attr_accessor :title, :author, :pages
end
book1 = Book.new() # Object
book1.title = "Harry Potter"
book1.author = "Jk Rowling"
book1.pages = 400
puts book1.title
puts book1.author
puts book1.pages
p book1