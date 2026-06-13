# Impostor

Juegos de fiesta para juntadas, en un solo archivo HTML cada uno. Sin backend,
sin registro: abrís el archivo y jugás. Listos para instalar como PWA.

## Juegos

- **`index.html` — El Impostor.** Todos reciben la misma palabra menos el
  impostor, que tiene que zafar chamuyando. Pistas en ronda, sospechas y
  votación final.
- **`mimica.html` — Dígalo con Mímica (películas).** Charadas de cine para
  treintañeros argentinos (clásicos 90s/2000s, sagas, cine nacional, comedias
  de culto y un modo picante). Dos modos de juego:
  - **Pasá el celu:** el que actúa ve la peli en pantalla y la hace sin hablar.
  - **En la frente (estilo Heads Up):** te apoyás el celu en la frente y el
    grupo te hace la mímica. Inclinás hacia abajo para acierto y hacia arriba
    para pasar (usa el giroscopio, con botones de fallback si no hay sensores).

  Incluye armado de equipos, cronómetro configurable (60/90/120s) con sonidos
  y vibración, banco de 220+ películas con títulos argentinos, pistas
  canjeables, tablero entre rondas, muerte súbita y estadísticas finales.
- **`pictionary.html` — Dibujá, Che.** Pictionary mobile bien argento (asado,
  fernet, modismos, fútbol y más). App mobile-first (React + Canvas)
  autocontenida que corre sin internet. Modo "pasá el celu": armado de equipos,
  selección de categorías/dificultad/tiempo/rondas (con modo after 🌶️ opcional),
  canvas con lápiz, goma, deshacer, limpiar y paleta de colores, cronómetro con
  tic-tac/fanfarria/bocinazo y vibración, tablero de puntajes, ganador con
  estadísticas y muerte súbita para desempate.

## Cómo correr

Abrí cualquiera de los `.html` en el navegador del celu (o servilo con
`python3 -m http.server`). No requiere build ni instalación.
