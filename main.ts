let Volume = 0
let right = 0
let left = 0
input.onGesture(Gesture.TiltLeft, function () {
    music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
    bitbot.ledRainbow(true, BBArms.Right)
    Volume += 300
    if (Volume) {
        Volume = 255
    }
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showIcon(IconNames.Surprised)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showIcon(IconNames.Surprised)
    }
})
basic.forever(function () {
    right = bitbot.readLine(BBLineSensor.Right)
    left = bitbot.readLine(BBLineSensor.Left)
    if (left == 1 && right == 0) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 10)
        bitbot.move(BBMotor.Left, BBDirection.Forward, 30)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (left == 0 && right == 1) {
        bitbot.move(BBMotor.Right, BBDirection.Forward, 10)
        bitbot.move(BBMotor.Left, BBDirection.Forward, 30)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 30)
        bitbot.move(BBMotor.Left, BBDirection.Forward, 30)
    }
})
basic.forever(function () {
    let Set_Volume = 0
    music.setVolume(Set_Volume)
    led.plotBarGraph(
    Set_Volume,
    255
    )
    for (let index = 0; index < 1000; index++) {
        bitbot.setLedColor(0xFF0000)
        basic.pause(100)
        bitbot.setLedColor(0x659900)
        basic.pause(100)
        bitbot.setLedColor(0x18E600)
        basic.pause(100)
        bitbot.setLedColor(0x80FF00)
        basic.pause(100)
        bitbot.setLedColor(0x00FF00)
        basic.pause(100)
        bitbot.setLedColor(0xFF8000)
        basic.pause(100)
        bitbot.setLedColor(0xD82600)
        basic.pause(100)
        bitbot.setLedColor(0xB24C00)
        basic.pause(100)
        bitbot.setLedColor(0x00FFC0)
        basic.pause(100)
        bitbot.setLedColor(0x00FF80)
        basic.pause(100)
        bitbot.setLedColor(0x00FF80)
        basic.pause(100)
        bitbot.setLedColor(0xFFC000)
        basic.pause(100)
        bitbot.setLedColor(0xFF0080)
        basic.pause(100)
        bitbot.setLedColor(0xFF00FF)
        basic.pause(100)
        bitbot.setLedColor(0xB09EFF)
        basic.pause(100)
    }
})
