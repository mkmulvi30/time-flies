input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    basic.showString("Time Flies")
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # # #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # . #
        # . # . #
        . # # # .
        `)
    basic.clearScreen()
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . # . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . # . #
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . # . #
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . # . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            # . . . #
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
