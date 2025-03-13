md tex_etc
del tex_etc\*.pvr
PVRTexToolCLI.exe -i "tex_sample\000_CircleShadow2.png" -o tex_etc\000.pvr -m 16 -f ETC2_RGBA,UBN,sRGB
pause
