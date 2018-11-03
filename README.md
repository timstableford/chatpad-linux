# Xbox 360 Chatpad Linux
This program communicates with an Xbox 360 Chatpad over a serial connection and relays the messages into the Linux input sub-system using /dev/uinput.

This means it can be used as a standard keyboard whether that be in a terminal or game (in theory).

## Installation

### Keyboard layout
Because of how some of the macro keys are mapped your system will need to use the en-gb keyboard layout.
On Debian based systems this StackOverflow shows how to change this with console only access: https://raspberrypi.stackexchange.com/a/10103

### Permissions
This program either needs to run as root or you will need to customise the group of /dev/uinput as per this guide: https://tkcheng.wordpress.com/2013/11/11/changing-uinput-device-permission/

### Quick-start
```
git clone https://github.com/timstableford/chatpad-linux.git
cd chatpad-linux
npm i
sudo nodejs index.js <serial port>
```

## Special Keys
For ease of use this program maps some other keys in a special way.

### Left CTRL
The people button is mapped to left CTRL.

### Up/Down
Holding the green modifier key and pressing the left and right arrow keys maps to up and down.

### Home/End
Holding the orange modifier key and pressing the left and right arro keys maps to Home and End.

### F1 to F10
F1 to F10 are can be acess by holding the green modifier button and pressing the number buttons.

## Unsupported keys
Some of the keys aren't mapped. Mostly these are the language specific keys accessed through the orange and green modifier keys.
