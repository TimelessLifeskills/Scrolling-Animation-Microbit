input.onButtonPressed(Button.A, function () {
    myImage.showImage(0)
    basic.pause(500)
    soundExpression.giggle.play()
    basic.showIcon(IconNames.Ghost)
    basic.pause(1000)
    myImage3.showImage(0)
    basic.pause(100)
    myImage2.showImage(0, 200)
    soundExpression.slide.play()
    myImage4.showImage(0, 200)
    myImage2.showImage(0, 200)
    myImage.showImage(0, 200)
    myImage3.scrollImage(1, 100)
    basic.pause(1000)
})
let myImage4: Image = null
let myImage2: Image = null
let myImage3: Image = null
let myImage: Image = null
myImage = images.createImage(`
    . . . . .
    # . # . .
    . # . . #
    . # # # .
    . # . # .
    `)
myImage3 = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
myImage2 = images.createImage(`
    # . # . .
    . # . . #
    . # # # .
    # . . . #
    . . . . .
    `)
myImage4 = images.createImage(`
    # . # . .
    . # . . #
    . # # # .
    . # . # .
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})
