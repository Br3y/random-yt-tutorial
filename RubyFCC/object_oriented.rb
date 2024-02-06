# Class and Objects
class Book
  attr_accessor :title, :author, :pages

  # initialize method
  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end
end
book1 = Book.new("Harry Potter", "Jk Rowling", 400) # Object
p book1

book2 = Book.new("Lord of the Rings", "Tolkien", 500) # when use initialize method
p book2