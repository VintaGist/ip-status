import St from 'gi://St';
import Clutter from 'gi://Clutter';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import GLib from 'gi://GLib';
const Mainloop = imports.mainloop

export default class IpAddressExtension extends Extension {
    button;
    label;
    timeoutId;
    constructor(settings) {
        super(settings);
        this.label = new St.Label({ text: 'Loading...' });
    }

    _byteArrayToString(bytes){
        let decoder = null;
        if (global.TextDecoder) {
            // available in gjs >= 1.70 (GNOME Shell >= 42)
            decoder = (new TextDecoder().decode);
        }
        else {
            // gjs-specific
            decoder = imports.byteArray.toString;
        }
        return decoder(bytes);
    };

    _getExternalIP() {
        try {
            let [ok, out, err, exit] = GLib.spawn_command_line_sync("curl -s ifconfig.me");
            if (ok && out) {
                const ip = this._byteArrayToString(out)
                log( ip );
                return ip.trim();
            }
            return "Ip not found";
        } catch (e) {
            return "Error";
        }
    }

    _updateIP() {
        let ip = this._getExternalIP();
        this.label.set_text(`IP: ${ip}`);
        return false; // one-time checking
    }

    enable() {
        this.button = new St.Bin({
            style_class: 'panel-button',
            reactive: true,
            can_focus: true,
            track_hover: true
        });

        this.button.set_child(this.label);

        Main.panel._rightBox.insert_child_at_index(this.button, 0);

        this.timeoutId = Mainloop.timeout_add_seconds(5, () => this._updateIP());

        this.button.connect('button-press-event', () => this._updateIP());
    }

    disable() {
        if (this.button) {
            Main.panel._rightBox.remove_child(this.button);
            this.button = null;
        }

        if (this.timeoutId) {
            Mainloop.source_remove(this.timeoutId);
            this.timeoutId = null;
        }
    }
}