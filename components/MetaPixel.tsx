// components/MetaPixel.tsx
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

type MetaPixelProps = {
  pixelId: string;
};

const MetaPixel = ({ pixelId }: MetaPixelProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Evita reinicializar o pixel
    if ((window as any).fbq) return;

    // Inicializa o Pixel
    !(function (f: any, b, e, v, n?, t?, s?) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Inicializa com o ID recebido
    (window as any).fbq('init', pixelId);
    (window as any).fbq('track', 'PageView');
  }, [pixelId]);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
};

export default MetaPixel;
