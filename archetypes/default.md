+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++

[params.colors]
  # Colores base
  [params.colors.base]
    primary = "#007AFF"
    secondary = "#6B7280"
    accent = "#10B981"

  # Variaciones claras/oscuras se generan automáticamente

# Crear directorios necesarios
mkdir -p content/{about,experience,projects}
mkdir -p static/{images,files}
