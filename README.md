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
- **`pictionary.html` — Dibujá, Che.** Pictionary de pizarra bien argento:
  ustedes dibujan en una pizarra o pared con fibrón, y el celu hace de **mazo
  de cartas** (la palabra secreta) y de **tablero** (turnos, cronómetro y
  puntajes). No se dibuja en el celular. Incluye carta de palabra con efecto
  flip y categoría, cronómetro circular, tablero siempre a mano, botones de
  "¡Adivinaron!" y "Saltear" (con penalidad opcional), categorías por
  dificultad con modo after 🌶️, sonidos, vibración, muerte súbita,
  estadísticas finales y confeti.

## Cómo correr

Abrí cualquiera de los `.html` en el navegador del celu (o servilo con
`python3 -m http.server`). No requiere build ni instalación.

> Para el Pictionary, el código fuente legible (JSX) está en
> `src/pictionary.src.html`; `pictionary.html` es la versión compilada con
> React inlineado para que funcione offline.
