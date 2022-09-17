basic.forever(function () {
    if (cbit_输入类.Rocker(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    cbit_输入类.enRocker.Up
    )) {
        basic.showString("UP")
    } else if (cbit_输入类.Rocker(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    cbit_输入类.enRocker.Down
    )) {
        basic.showString("DOWN")
    } else if (cbit_输入类.Rocker(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    cbit_输入类.enRocker.Left
    )) {
        basic.showString("Left")
    } else if (cbit_输入类.Rocker(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    cbit_输入类.enRocker.Right
    )) {
        basic.showString("Rigth")
    } else if (cbit_输入类.Rocker(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    cbit_输入类.enRocker.Press
    )) {
        basic.showString("Pressed")
    } else {
        basic.showString("Home")
    }
})
