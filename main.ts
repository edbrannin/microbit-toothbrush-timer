function OuterRing () {
    for (let index = 0; index <= OuterX.length; index++) {
        led.unplot(OuterX[index], OuterY[index])
    }
    for (let index = 0; index <= OuterX.length; index++) {
        led.plot(OuterX[index], OuterY[index])
        basic.pause(Per_cycle / 16)
    }
}
input.onButtonPressed(Button.A, function () {
    Run()
})
function SetInner (Index: number, Brightness: number) {
    led.plot(InnerX[Index], InnerY[Index])
}
function Run () {
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    for (let index = 0; index <= 8; index++) {
        let LoopCount = 0
        OuterRing()
        SetInner(index, 255)
        led.plotBrightness(2, 2, index * (255 / LoopCount))
    }
    basic.showString("Done!")
}
function Init () {
    OuterX = [2, 3, 4, 4, 4, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0, 1]
    OuterY = [0, 0, 0, 1, 2, 3, 4, 4, 4, 4, 4, 3, 2, 1, 0, 0]
    InnerX = [2, 3, 3, 3, 2, 1, 1, 1]
    InnerY = [1, 1, 2, 3, 3, 3, 2, 1]
    Time = 2 * 60000
    Per_cycle = Time / 8
}
let Time = 0
let InnerY: number[] = []
let InnerX: number[] = []
let Per_cycle = 0
let OuterY: number[] = []
let OuterX: number[] = []
Init()
Run()
basic.forever(function () {
	
})
