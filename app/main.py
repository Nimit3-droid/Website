import turtle

# Set up the screen
screen = turtle.Screen()
screen.bgcolor("black")  # Changing the background color to black

# Create a turtle for the animated design
animated_design_turtle = turtle.Turtle()
animated_design_turtle.speed(0)
animated_design_turtle.color("white")  # Changing the pen color to white

# Function to draw an animated design based on user input
def draw_animated_design(shape, size, speed):
    if shape == "circle":
        for _ in range(36):
            animated_design_turtle.circle(size)
            animated_design_turtle.left(10)
    elif shape == "square":
        for _ in range(4):
            animated_design_turtle.forward(size)
            animated_design_turtle.left(90)
    elif shape == "triangle":
        for _ in range(3):
            animated_design_turtle.forward(size)
            animated_design_turtle.left(120)
    elif shape == "pentagon":
        for _ in range(5):
            animated_design_turtle.forward(size)
            animated_design_turtle.left(72)
    elif shape == "hexagon":
        for _ in range(6):
            animated_design_turtle.forward(size)
            animated_design_turtle.left(60)
    else:
        print("Invalid shape. Please choose from supported shapes.")

# Get user input
user_shape = input("Enter the shape (circle, square, triangle, etc.): ")
user_size = input("Enter the size of the shape: ")
user_speed = input("Enter the speed of the animation (1-10): ")

# Convert user_size and user_speed to integers
try:
    user_size = int(user_size)
    user_speed = int(user_speed)
except ValueError:
    print("Invalid input for size or speed. Using default values.")
    user_size = 100
    user_speed = 3

# Set the speed based on user input
if 1 <= user_speed <= 10:
    animated_design_turtle.speed(user_speed)
else:
    print("Invalid speed. Setting default speed to 3.")
    animated_design_turtle.speed(3)

# Set starting position
animated_design_turtle.penup()
animated_design_turtle.goto(0, 0)
animated_design_turtle.pendown()

# Draw the animated design based on user input
draw_animated_design(user_shape.lower(), user_size, user_speed)

# Hide the turtle and display the result
animated_design_turtle.hideturtle()
turtle.done()
