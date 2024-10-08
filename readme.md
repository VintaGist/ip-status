# IP Status GNOME Shell Extension

## Description

The **IP Status** extension for GNOME Shell displays your external IP address on the top bar. This extension periodically updates the IP address and allows you to manually refresh it by clicking on the displayed IP.

## Features

- **Automatic Updates**: The external IP address is updated in 5 seconds after start.
- **Manual Refresh**: Click on the IP address to manually refresh it.

## Installation

### Manual Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vintagist/ip-status.git
   ```

2. Navigate to the extension directory:

   ```bash
   cd ip-status
   ```

3. Copy the extension to the GNOME Shell extensions directory:

   ```bash
   cp -r ip-status@vintagist.github.com ~/.local/share/gnome-shell/extensions/
   ```

4. Restart GNOME Shell:

   - Relogin to system.

5. Enable the extension:

   - Open `GNOME Tweaks` > `Extensions` and enable **IP Status**.

## Compatibility

This extension is compatible with GNOME Shell version 46.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Acknowledgments

- Thanks to the GNOME Shell development community for providing the necessary APIs and resources.
- Special thanks to the contributors of the GNOME Shell extensions ecosystem.

## Author

- **[Vintagist](https://github.com/vintagist)**

---
