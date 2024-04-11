/*
* This is the standard Main.java starting point.
*
* @author  Andi Cucka
* @version 1.0
* @since   2024-03-27
*/

/**
* This is the Main program.
*/
final class Main {
    /**
    * Prevent instantiation
    * Throw an exception IllegalStateException.
    * if this ever is called
    *
    * @throws IllegalStateException if instantiation is attempted
    */
    private Main() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(String[] args) {
        // constants
        final String fruitsString = "fruits: ";
        final String poppedString = "popped: ";
        final String coloursString = "colours: ";
        final String carsString = "cars: ";

        final CarStack fruits = new CarStack();
        fruits.push("apple");
        fruits.push("banana");
        fruits.push("cherry");
        System.out.println(fruitsString + fruits.showStack());
        System.out.println(poppedString + fruits.popItem());
        System.out.println(fruitsString + fruits.showStack());
        System.out.println("");

        final CarStack colours = new CarStack();
        colours.push("red");
        colours.push("green");
        colours.push("blue");
        System.out.println(coloursString + colours.showStack());
        System.out.println(poppedString + colours.popItem());
        System.out.println(poppedString + colours.popItem());
        System.out.println(coloursString + colours.showStack());
        System.out.println("");

        final CarStack cars = new CarStack();
        cars.push("Nissan");
        cars.push("Mazda");
        cars.push("Suzuki");
        System.out.println(carsString + cars.showStack());
        System.out.println(poppedString + cars.popItem());
        System.out.println(poppedString + cars.popItem());
        System.out.println(poppedString + cars.popItem());
        System.out.println(poppedString + cars.popItem());
        System.out.println(carsString + cars.showStack());

        System.out.println("\nDone.");
    }
}
