/*
 * Class that defines string stack.
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-04-25
 */

export class CarStack {
  private strStack: string[]

  // variables
  constructor() {
    self.strStack = []
  }

  // show full stack separated by commas
  public get show() {
    let values = ""
    for (let counter = 0; counter < self.strStack.length; counter++) {
      values = values + self.strStack[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }

  // push item to end of list
  public push(input) {
    self.strStack.push(input)
  }

  // pop item from end of list and return value
  public pop() {
    let removed = ""
    // checks if there's at least 1 element in the stack
    if (self.strStack.length > 0) {
      removed = self.strStack[self.strStack.length - 1]
    } else {
      removed = "nothing to remove"
    }
    self.strStack.splice(-1)
    return removed
  }
}
