import random

def number_guessing_game():
    print("🎯 Welcome to the Number Guessing Game!")
    print("I have picked a number between 1 and 100. Can you guess it?")

    number_to_guess = random.randint(1, 100)
    attempts = 0

    while True:
        try:
            guess = int(input("Enter your guess (1-100): "))
            attempts += 1

            if guess < 1 or guess > 100:
                print("⚠️ Please guess a number between 1 and 100.")
                continue

            if guess < number_to_guess:
                print("📉 Too low! Try again.")
            elif guess > number_to_guess:
                print("📈 Too high! Try again.")
            else:
                print(f"🎉 Congratulations! You guessed the number {number_to_guess} in {attempts} tries.")
                break
        except ValueError:
            print("⚠️ Invalid input. Please enter a number.")

if __name__ == "__main__":
    number_guessing_game()
