md tex_astc
del tex_astc\*.pvr
PVRTexToolCLI.exe -i "tex_sample\000_CircleShadow2.png" -o tex_astc\000.pvr -m 16 -f ASTC_4x4,UBN,sRGB
pause
