md tex_dxt
del tex_dxt\*.dds
texconv.exe -m 0 -f BC7_UNORM_SRGB  -o "tex_dxt" -nogpu "tex_sample\000_CircleShadow2.png" 
rename "tex_dxt\000_CircleShadow2.dds" "000.dds"
pause
