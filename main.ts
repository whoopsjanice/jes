let position = 0
let fsr = 0
let think_list = [
"Hmm",
"Let' see..",
"One second..",
"Uh huh.."
]
let text_list = [
"You'll be hungry again in one hour",
"An alien of some sort will be appearing to you shortly.",
"You have rice in your teeth.",
"Come back later I am sleeping",
"You laugh now, wait until you get home",
"In two days, tomorrow will be yesterday",
"Error 404: Fortune not found",
"You'll find a penny under your pillow",
"You'll have a good dream but forget to write it"
]
basic.forever(function () {
    fsr = pins.analogReadPin(AnalogPin.P2)
    if (fsr > 2) {
        while (position < 180) {
            position += 1
            servos.P1.setAngle(position)
            basic.pause(10)
        }
        servos.P1.stop()
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
        basic.showString("" + (think_list._pickRandom()), 60)
basic.pause(200)
        basic.showString("" + (text_list._pickRandom()), 60)
music.stopAllSounds()
        while (position > 90) {
            position += -1
            servos.P1.setAngle(position)
            basic.pause(10)
        }
        servos.P1.stop()
    }
    if (fsr > 300) {
        basic.showString("STOP!", 60)
    }
})
control.inBackground(function () {
	
})
