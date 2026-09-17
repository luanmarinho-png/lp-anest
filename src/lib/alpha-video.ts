"use client";

import { useSyncExternalStore } from "react";

/**
 * Transparência em vídeo não é confiável fora do Chromium e do Firefox.
 * O WebKit (Safari e todo navegador no iPhone) decodifica o VP9 mas
 * descarta o canal alpha, então a logo entra como um retângulo preto em
 * vez de cair para o poster. Aqui ficam as duas checagens que evitam isso.
 */

/**
 * Primeira checagem, síncrona: VP8 em WebM. Os motores que o tocam são os
 * mesmos que compõem o alpha do VP9 corretamente, então dá para decidir
 * antes de pintar qualquer quadro.
 */
function readSupport() {
  const probe = document.createElement("video");
  return probe.canPlayType('video/webm; codecs="vp8"') !== "";
}

// A resposta não muda durante a sessão, então não há nada para assinar.
const subscribe = () => () => {};

/**
 * Lido por `useSyncExternalStore` para não precisar de `setState` dentro de
 * um efeito. No servidor assume suporte e a hidratação corrige.
 */
export function useAlphaVideo() {
  return useSyncExternalStore(subscribe, readSupport, () => true);
}

/**
 * Segunda checagem, sobre o quadro de verdade: desenha o vídeo num canvas
 * pequeno e procura algum pixel transparente. Se todos vierem opacos o
 * alpha se perdeu na decodificação, por mais que o `canPlayType` prometa.
 * Pega os casos que a primeira checagem deixa passar.
 */
export function frameHasAlpha(video: HTMLVideoElement) {
  const size = 24;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return true;

  try {
    context.drawImage(video, 0, 0, size, size);
    const { data } = context.getImageData(0, 0, size, size);
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 250) return true;
    }
    return false;
  } catch {
    // Sem leitura possível, o melhor palpite é confiar no vídeo.
    return true;
  }
}
