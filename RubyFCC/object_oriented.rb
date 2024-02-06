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


# Instance/Object method
puts "--------------------------------------"
class Student
  attr_accessor :name, :major, :gpa

  def initialize(name, major, gpa)
    @name = name
    @major = major
    @gpa = gpa
  end

  def has_honors
    return true if @gpa >= 3.5
    false
  end
end
student1 = Student.new("Jim", "Business", 2.6)
student2 = Student.new("Pam", "Art", 3.6)
puts student1.has_honors
puts student2.has_honors


# Inheritance
puts "--------------------------------------"
class Chef
  def make_chicken
    puts "The chef makes chicken"
  end

  def make_salad
    puts "The chef makes salad"
  end

  def make_special_dish
    puts "The chef makes bbq dibs"
  end
end

class ItalianChef < Chef
  def make_special_dish
    puts "The chef makes eggplant parn"
  end
  
  def make_pasta
    puts "The chef makes pasta"
  end
end

chef = Chef.new
chef.make_chicken

italian_chef = ItalianChef.new
italian_chef.make_salad
italian_chef.make_special_dish
italian_chef.make_pasta