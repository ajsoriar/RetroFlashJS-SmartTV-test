# RetroFlashJS for webOS TV

![RetroFlashJS webOS app icon](app.WebOS.test_RetroFlashJS_001/images/appIcon.png)

This project packages a webOS TV test app for evaluating RetroFlash.js with Flash SWF content on television screens. It is intended to help check playback and rendering.

## Package the app

From the project root, run:

```bat
build_webos.bat
```

The script uses `ares-package` and saves the package in `dist/`.

Equivalent command:

```bat
ares-package ".\app.WebOS.test_RetroFlashJS_001" --outdir ".\dist"
```

Expected package filename:

```text
dist\com.retroflashjstv.app_1.0.0_all.ipk
```

## Install on a device

Configure the webOS device with `ares-setup-device`, then replace `<device>` with its configured alias:

```bat
ares-install --device <device> ".\dist\com.retroflashjstv.app_1.0.0_all.ipk"
```

## Launch the app

```bat
ares-launch --device <device> com.retroflashjstv.app
```

## License

The bundled RetroFlash.js library is distributed under the MIT License. See [LICENSE](LICENSE).
