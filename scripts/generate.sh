#!/bin/bash
# process webm to hls and mp4

# Parcours de tous les fichiers .webm dans le répertoire
for file in *.webm; do
  # Récupère le nom sans extension
  filename=$(basename "$file" .webm)
  # Crée un dossier de sortie pour ce fichier
  mkdir -p "$filename"
  
  echo "Processing $file → $filename/"

  ffmpeg -i "$file" \
    -vf "scale=ceil(iw/2)*2:ceil(ih/2)*2" \
    -profile:v baseline -level 3.0 -start_number 0 \
    -hls_time 4 -hls_list_size 0 -f hls \
    "${filename}/playlist.m3u8"

  ffmpeg -i "$file" \
    -an \
    -vf "scale=ceil(iw/2)*2:ceil(ih/2)*2" \
    -vcodec libx264 -profile:v high -level 4.0 \
    -pix_fmt yuv420p \
    -preset veryslow \
    -b:v 1000k -maxrate 1200k -bufsize 2000k \
    -movflags +faststart \
    "${filename}/video.mp4"

done

echo "Préparation terminée."
