# Impostor

Mini-juegos para jugar entre amigos, sin instalar nada. Cada juego es un archivo HTML autocontenido: lo abrís en el navegador del celu y listo.

## Juegos

- **`index.html` — El Impostor.** El juego de descubrir al impostor.
- **`pictionary.html` — Dibujá, Che.** Pictionary de pizarra bien argento: ustedes dibujan en una pizarra o pared con fibrón, y el celu hace de **mazo de cartas** (la palabra secreta) y de **tablero** (turnos, cronómetro y puntajes).

## Dibujá, Che (Pictionary de pizarra)

App mobile-first (React) autocontenida que corre sin internet: todo el estado vive en memoria. No se dibuja en el celular — se dibuja en una pizarra/pared real con fibrón; el celu organiza el juego.

Cómo jugar:
1. Colgá una pizarra o un papel grande en la pared y tené un fibrón a mano.
2. Abrí `pictionary.html` en el celu.
3. Armá 2+ equipos y sumá jugadores.
4. Elegí categorías, dificultad, tiempo y rondas (y si va, el modo after 🌶️).
5. Pasate el celu: el que dibuja ve la carta con la palabra, va a la pizarra y dibuja mientras su equipo adivina contra reloj.

Incluye: carta de palabra con efecto flip y categoría, cronómetro circular con tic-tac/fanfarria/bocinazo y vibración, tablero de puntajes siempre a mano, botones de "¡Adivinaron!" y "Saltear" (con penalidad opcional), muerte súbita para desempate, estadísticas finales y confeti. Visual moderno celeste y blanco.

> El código fuente legible (JSX) está en `src/pictionary.src.html`; `pictionary.html` es la versión compilada con React inlineado para que funcione offline.
