# This repo is to expose some bugs

## 1 - IMA SDK Plugin for Videojs

The bug only happens when using a m3u8 video and android device.
I copied the simple example from https://googleads.github.io/videojs-ima/examples/simple/
and replaced the mp4 by a m3u8 video.

- Use an android devide
- load https://tbourigault.github.io/IMA-SDK-Plugin-VideoJS-Simple-M3U8.html
- start the video as fast as possible.

the preroll and main video will start playing at the same time.
