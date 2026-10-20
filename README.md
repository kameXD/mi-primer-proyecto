# NAT · Presentación web interactiva

Presentación universitaria basada exclusivamente en **NAT Informe.docx**, con los integrantes y datos académicos de la portada original. HTML, CSS y JavaScript separados, sin frameworks, fuentes remotas, dependencias de ejecución ni servicios externos.

## Ejecutar

La presentación utiliza únicamente archivos locales y no requiere Internet. En un navegador moderno sin restricciones puedes abrir **index.html** directamente. El navegador administrado de este entorno bloquea `file://`, por lo que aquí se verificó el método con servidor que sigue.

También puedes servir la carpeta desde una terminal:

```sh
cd /workspace/mi-primer-proyecto
python -m http.server 8000
```

Abre el puerto 8000 en tu navegador. No es necesario instalar paquetes ni compilar. Para cerrar el servidor: `Ctrl+C`.

## Controles

- Flechas izquierda/derecha o Page Up/Page Down: cambiar diapositiva.
- Inicio/Fin: portada/conclusión.
- F o botón superior: pantalla completa (depende del permiso del navegador).
- Espacio: iniciar/pausar la simulación si el foco está en la diapositiva; en las demás, avanzar. Si un botón tiene el foco, Espacio activa ese botón.
- Contenido y puntos inferiores: ir directamente a una diapositiva.
- Escape: cerrar índice o panel de detalle; salir de pantalla completa.
- Iniciar/Continuar, Pausar, Avanzar paso y Reiniciar: controlar cada recorrido.
- NAT estática, NAT dinámica y NAT PAT: cambiar modalidad en «Tipos de NAT».
- Explorar el tema: consultar las explicaciones completas, incluidos sus subtemas.

## Estructura exacta

Se mantienen el orden y los títulos del informe. «Cuerpo» identifica el desarrollo y no añade una diapositiva. No se incluye diapositiva de bibliografía.

1. **NAT** — portada, cinco integrantes, cuentas, universidad, asignatura, sección, catedrático y fecha del documento.
2. **Introducción**.
3. **Navegación por internet-Direcciones IP privadas/públicas y NAT.**
4. **¿Cómo funciona NAT?** — solicitud, traducción, respuesta y entrega; tabla y paquete animado.
5. **Características principales de NAT** — lista vertical numerada con cinco iconos e ilustración SVG de dispositivos, router NAT e Internet; paquetes animados y traducción de IP.
6. **Tipos de NAT** — pestañas de NAT estática, NAT dinámica y NAT PAT. Incluye **Ejemplo funcionamiento de NAT/PAT**, su analogía postal, los puertos y la tabla. NAT64 se trata en el lugar que ocupa en el informe: la diapositiva 8.
7. **Ventajas y desventajas de NAT** — seis ventajas, seis desventajas y **NAT en los videojuegos en línea** con abierto, moderado y estricto, alternativas de conectividad y aclaración sobre ping/velocidad.
8. **NAT y la transición hacia IPv6** — doble pila, túneles, traducción de protocolos y recorrido conceptual NAT64 de ida y vuelta.
9. **Conclusión**.
10. **¡Gracias por su atención!** — cierre tecnológico con una animación sutil de paquetes y botón para volver a la portada.

Los paneles de lectura contienen los párrafos originales de las secciones, para conservar los detalles que se condensan en pantalla. Las afirmaciones académicas se presentan como las expone el informe; la presentación no agrega investigación externa ni corrige el documento. El texto de portada, que Word guarda dentro de un bloque estructurado, también fue leído. El único recurso gráfico extraído es el escudo de la portada.

## Qué representan las simulaciones

Son visualizaciones didácticas, no conexiones reales ni emulaciones completas de protocolos. Cada envío tiene cuatro pasos. La tabla se registra al traducir la solicitud y permanece visible después del retorno para explicar la correspondencia; Reiniciar borra las entradas dinámicas. En estática la entrada fija ya existe desde el inicio.

La primera conexión PAT usa exactamente el ejemplo del informe:

```text
192.168.1.10:51500 ↔ 203.0.113.5:40001
```

Para mostrar varios dispositivos se usan dos conexiones adicionales **ilustrativas**, identificadas como tales en la pantalla: `.11:51501 ↔ :40002` y `.12:51502 ↔ :40003`. Todas comparten `203.0.113.5`; los puertos públicos son distintos y cada respuesta retorna al origen correspondiente. En NAT dinámica, Reproducir al terminar otro ciclo selecciona la siguiente dirección del conjunto ilustrativo `.5`, `.6`, `.7`. Reiniciar vacía la tabla sin cambiar esa selección. NAT64 usa etiquetas IPv6/IPv4, sin inventar direcciones ni detalles de traducción ausentes del informe.

Cambiar de diapositiva o modalidad cancela el recorrido anterior. La preferencia de movimiento reducido del sistema desactiva las animaciones visuales; el avance y las traducciones siguen funcionando.

## Archivos

- `index.html`: estructura, navegación y diálogos.
- `styles.css`: tema azul oscuro/cian, diagramación adaptable y movimiento reducido.
- `app.js`: diapositivas, SVG de red, estados y controles de simulación.
- `assets/report.js`: texto original de introducción, desarrollo y conclusión.
- `assets/emblem.jpeg`: escudo extraído de la portada original.
- `tests/presentation.cjs`: comprobaciones funcionales en navegador.

## Pruebas de navegador

La presentación no necesita Playwright. Para repetir únicamente las pruebas, instala Playwright en tu entorno de pruebas y ten un servidor iniciado en el puerto 8000:

```sh
npm install --prefix /tmp/nat-tests playwright
NODE_PATH=/tmp/nat-tests/node_modules CHROMIUM_PATH=/usr/bin/chromium node tests/presentation.cjs
```

`CHROMIUM_PATH` debe señalar un Chromium instalado. `BASE_URL` permite usar otra dirección del servidor. Las pruebas verifican estructura, lectura del informe, navegación, NAT, PAT, asignaciones dinámicas, NAT64, pausa, reinicio, reproducción automática, pantalla completa, apertura sin servidor y ausencia de desbordamiento en móvil/tableta/escritorio. Los errores mantienen un código de salida distinto de cero. Si la política del navegador bloquea `file://`, esa comprobación se informa como omitida; no se considera validada.

## Actualización de la exposición

La navegación, el índice y la tecla Fin incluyen las diez diapositivas. Los textos visibles presentan las explicaciones directamente, sin referencias al documento de origen; el panel «Explorar el tema» conserva los detalles académicos. Las ilustraciones nuevas son SVG locales y sus animaciones respetan la preferencia de movimiento reducido. Las simulaciones NAT, PAT y NAT64 mantienen su comportamiento.
