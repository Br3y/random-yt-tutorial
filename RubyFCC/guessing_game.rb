secret_word = "breydev"
guess = ""
guess_count = 0
guess_limit = 3
out_of_guesses = false

until guess == secret_word and out_of_guesses == false
    if guess_count < guess_limit
        puts "Enter guess: "
        guess = gets.chomp
        guess_count += 1
    else
        out_of_guesses = true
        break
    end
end


if out_of_guesses
    puts "You Lose!"
else 
    puts "You Won!"
end