md tex_etc
del tex_etc\*.pvr
PVRTexToolCLI.exe -i "tex_sample\000_10.png" -o tex_etc\000.pvr -m 16 -f ETC2_RGB,UBN,sRGB
PVRTexToolCLI.exe -i "tex_sample\001_4.png" -o tex_etc\001.pvr -m 16 -f ETC2_RGB,UBN,sRGB
PVRTexToolCLI.exe -i "tex_sample\002_5.png" -o tex_etc\002.pvr -m 16 -f ETC2_RGB,UBN,sRGB
PVRTexToolCLI.exe -i "tex_sample\003_2.png" -o tex_etc\003.pvr -m 16 -f ETC2_RGB,UBN,sRGB
PVRTexToolCLI.exe -i "tex_sample\004_1.png" -o tex_etc\004.pvr -m 16 -f ETC2_RGB,UBN,sRGB
md tex_etc
pause
