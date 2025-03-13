md tex_astc
del tex_astc\*.pvr
PVRTexToolCLI.exe -i "tex_sample\000_10.png" -o tex_astc\000.pvr -m 16 -f ASTC_4x4,UBN,sRGB
PVRTexToolCLI.exe -i "tex_sample\001_4.png" -o tex_astc\001.pvr -m 16 -f ASTC_4x4,UBN,sRGB
PVRTexToolCLI.exe -i "tex_sample\002_5.png" -o tex_astc\002.pvr -m 16 -f ASTC_4x4,UBN,sRGB
PVRTexToolCLI.exe -i "tex_sample\003_2.png" -o tex_astc\003.pvr -m 16 -f ASTC_4x4,UBN,sRGB
PVRTexToolCLI.exe -i "tex_sample\004_1.png" -o tex_astc\004.pvr -m 16 -f ASTC_4x4,UBN,sRGB
pause
