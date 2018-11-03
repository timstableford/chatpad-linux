const Chatpad = require('chatpad');
const Map = require('./map');
const UInput = require('uinput');

const CREATE_OPTIONS = {
    name: 'pip-kb',
    id: {
        busType: UInput.BUS_VIRTUAL,
        vendor: 0x1,
        product: 0x1,
        version: 1
    }
};

(async() => {
    const setupOptions = {
        EV_KEY: Map.getKeys()
    };

    const uinput = await UInput.setup(setupOptions);
    await uinput.create(CREATE_OPTIONS);

    const port = process.argv[2];
    if (!port) {
        throw new Error('Usage: nodejs index.js <port>');
    }

    const pad = new Chatpad(port);
    await pad.open();

    const onKey = async(key, pressed) => {
        // Some keys are macro keys, eg for % it's SHIFT + 6. Those
        // have to be sent as a combo, but for simpler keys we can
        // send their state too. So people being Ctrl becomes more useful.
        if (Array.isArray(key)) {
            if (pressed) {
                await uinput.emitCombo(key);
            }
        } else {
            await uinput.sendEvent(UInput.EV_KEY, key, pressed ? 1 : 0);
        }
    };

    pad.on('key', (keys) => {
        onKey(Map.map(keys.raw), keys.pressed);
    });

    const pressed = {};
    pad.on('modifier', (keys) => {
        pressed[keys.raw] = keys.pressed;
        switch (keys.raw) {
            case Map.MODIFIER_SHIFT:
            case Map.MODIFIER_PEOPLE:
            case Map.MODIFIER_CAPS:
                onKey(Map.MODIFIERS[keys.raw], keys.pressed);
                break;
            default:
                // Ignore the green and orange modifiers.
                break;
        }

        // There's a corner case when two modifiers are pressed such as for CAPS.
        // If they're not released at the exact same time then it wouldn't register.
        // Below is a work around for that.
        for (let key of Object.keys(pressed)) {
            key = Number(key);
            if (pressed[key] && (key & keys.raw) !== key) {
                onKey(Map.MODIFIERS[key], false);
                pressed[key] = false;
            }
        }
    });
})();
