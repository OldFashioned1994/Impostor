# Impostor

Juegos de fiesta para juntadas, en un solo archivo HTML cada uno. Sin backend,
sin registro: abrís el archivo y jugás. Listos para instalar como PWA.

## Juegos

- **`index.html` — El Impostor.** Todos reciben la misma palabra menos el
  impostor, que tiene que zafar chamuyando. Pistas en ronda, sospechas y
  votación final.
- **`mimica.html` — Dígalo con Mímica (películas).** Charadas de cine para
  treintañeros argentinos, con 8 categorías seleccionables: clásicos 90s/2000s,
  sagas, cine nacional, comedias de culto, un modo picante/after, infantiles y
  animadas, series y streaming, y acción y superhéroes. Dos modos de juego:
  - **Pasá el celu:** el que actúa ve la peli en pantalla y la hace sin hablar.
  - **En la frente (estilo Heads Up):** te apoyás el celu en la frente y el
    grupo te hace la mímica. Inclinás hacia abajo para acierto y hacia arriba
    para pasar (usa el giroscopio, con botones de fallback si no hay sensores).

  Incluye armado de equipos, cronómetro configurable (60/90/120s) con sonidos
  y vibración, banco de ~1000 películas y series con títulos argentinos, pistas
  canjeables, tablero entre rondas, muerte súbita y estadísticas finales.

## Cómo correr

Abrí cualquiera de los `.html` en el navegador del celu (o servilo con
`python3 -m http.server`). No requiere build ni instalación.
