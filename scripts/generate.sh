#!/bin/bash
# process webm to hls, mp4 and webp

MODE=${1-all}

# Parcours de tous les fichiers .webm dans le répertoire
for file in *.webm; do
  # Récupère le nom sans extension
  filename=$(basename "$file" .webm)
  # Crée un dossier de sortie pour ce fichier
  mkdir -p "$filename"
  if [ $MODE = "all" ] || [ $MODE = "hls" ]; then
    ffmpeg -i "$file" \
      -vf "scale=ceil(iw/2)*2:ceil(ih/2)*2" \
      -profile:v baseline -level 3.0 -start_number 0 \
      -hls_time 4 -hls_list_size 0 -f hls \
      "${filename}/playlist.m3u8"
  fi
  if [ $MODE = "all" ] || [ $MODE = "mp4" ]; then
    ffmpeg -i "$file" \
      -vf "scale=ceil(iw/2)*2:ceil(ih/2)*2" \
      -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
      -preset slow \
      -b:v 1000k -maxrate 1200k -bufsize 2000k \
      -c:a aac -b:a 64k -ac 1 \
      -movflags +faststart \
      "${filename}/video.mp4"
  fi
  if [ $MODE = "all" ] || [ $MODE = "webp" ]; then
    ffmpeg -i "$file" \
      -vf "fps=15,scale=640:-1:flags=lanczos" \
      -loop 0 \
      "${filename}/preview.webp"
  fi
done

