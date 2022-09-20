input.onButtonPressed(Button.A, function () {
    radio.sendString("Never gonna give you up")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
	
})
