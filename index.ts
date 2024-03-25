/*
 * This is a program pops stack.
 *
 * @author  Andi
 * @version 1.0
 * @since   2024-04-25
 */

import { CarStack } from './car-stack.ts'

let fruits = new CarStack()
fruits.push("apple")
fruits.push("banana")
console.log("popped: " + fruits.pop())
console.log("popped: " + fruits.pop())
console.log("popped: " + fruits.pop())
console.log("fruits: " + fruits.show)

let colours = new CarStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("popped: " + colours.pop())
console.log("colours: " + colours.show)

let cars = new CarStack()
cars.push("Toyota")
cars.push("Nissan")
cars.push("Mazda")
cars.push("Suzuki")
cars.push("Mitsubishi")
console.log("popped: " + cars.pop())
console.log("popped: " + cars.pop())
console.log("popped: " + cars.pop())
console.log("cars: " + cars.show)

console.log("\nDone.")
