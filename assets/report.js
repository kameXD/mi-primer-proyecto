window.REPORT = [
  {
    "title": "Introducción",
    "paragraphs": [
      "Todos navegamos por internet, al punto que es parte de nuestro día a día, ya sea por necesidad; como trabajo, estudios, investigación, etc. O nuestro ocio personal y entretenimiento; ver videos, ver redes sociales, o jugar un juego en línea.",
      "Uno de los elementos que nos ayudan a navegar por internet son las direcciones IP. Es como enviar cartas, para que cada carta llegue al destinatario correcto se necesita una dirección postal; pues de la misma manera, cada dispositivo en una red debe tener su respectiva dirección IP para identificarlo y enviar la información al destino correcto.",
      "Resulta que los dispositivos en la red tienen dos tipos de direcciones; una para comunicarse entre la red local que se conoce como dirección IP privada. Y otra para comunicarse en la red global que es el internet, a la cual se conoce como IP pública.",
      "La dirección IP privada es la dirección asignada dentro de la red local; ya sea la red de un hogar o la de una pequeña oficina.",
      "La dirección IP publica es la que se proporciona a cualquier dispositivo conectado a Internet para ser identificado y acceder a recursos en la web, naturalmente, por cuestiones de seguridad, la dirección privada no debe ser visible en internet, esta es la razón de que existan las direcciones IP públicas.",
      "Nadie puede navegar por la red sin una IP, y ninguna web puede estar en línea sin una tampoco. Así, cuando alguien entra a youtube.com, el navegador traduce el texto a la dirección IP del sitio web.",
      "Pero con ello surge un problema, no existen direcciones IPv4 suficientes para cada dispositivo conectado en internet, por eso aquí entra una tecnología conocida como NAT. Lo que hace la NAT es traducir direcciones IP privada a públicas y viceversa, esto permite que varios dispositivos se conecten con una misma IP pública a internet, mientras utilizan distintas IP privadas de forma interna en la red doméstica. De esta manera, grandes empresas y redes pueden utilizar una única dirección IP publica, habiendo así menos saturación que si cada dispositivo tuviera una IP única para navegar por internet."
    ]
  },
  {
    "title": "Cuerpo",
    "paragraphs": []
  },
  {
    "title": "Navegación por internet-Direcciones IP privadas/públicas y NAT.",
    "paragraphs": [
      "Todos navegamos por internet, ya se volvió parte del día a día, para todos nosotros, o al menos para cualquier persona con acceso a una pantalla o un dispositivo móvil. Desde el menor hasta el mayor navegan por la web, ya sea el niño que usa una Tablet para jugar un jueguito, los jóvenes/ adultos que tiene que trabajar y estudiar, o hasta los ancianos que quieren pasar un rato de entretenimiento viendo un video en redes sociales.",
      "Uno de los elementos fundamentales para nuestra navegación adecuada por la internet son las direcciones IP. El uso de direcciones IP es como un servicio de mensajería, para que cada carta le llegue al destinatario correcto es necesario conocer su dirección postal; de la misma forma una dirección IP identifica los dispositivos en la red.",
      "Normalmente tenemos 2 tipos de direcciones IP si es que tenemos un dispositivo que accede a internet regularmente; una IP privada y una IP pública.",
      "Una dirección IP pública identifica un dispositivo en Internet, haciéndolo accesible desde cualquier parte del mundo. Por el contrario, los routers dentro de las redes más privadas como las de un hogar o una oficina utilizan una dirección IP privada para reconocer y comunicarse entre ellos localmente.",
      "Juntas, las direcciones IP públicas y privadas trabajan para garantizar que la información se transmita con precisión a través de Internet al dispositivo correcto.",
      "Pero aquí surge un problema, cuando internet fue inventado, la idea inicial no era que se fuese una red tan inmensamente extensa como hoy, ni se aspiraba a que hubiera tantos dispositivos queriendo acceder a la web. Por eso, cuando se creó esta tecnología, se reservaron solo 32 bits para crear las direcciones IPv4, lo que daba para un máximo de 4,294,967,296 direcciones únicas, que se acabaron quedando cortas.",
      "Aquí es donde entra una tecnología llamada NAT (Network Address Translation por sus siglas en Ingles), conocida como Traductor de Direcciones de Red en español. Forma parte del router, módem o el equipo que utilicemos para conectarnos a la red.",
      "Su función principal, así como indica su nombre; es traducir direcciones privadas a publicas y viceversa, esto permite que, al navegar por internet, los recursos de internet puedan llegar a nuestro dispositivo por medio de su IP publica, mientras nuestro router conoce la IP privada.",
      "Una de las tecnologías de NAT, permite ahorrar direcciones IP publicas permitiendo que por la IP publica de un router los dispositivos de la red local naveguen por internet. De esta manera, grandes empresas y redes pueden utilizar una única dirección IP, saturando todo en menor medida que si se diera el caso de asignar una dirección IP única a cada dispositivo en internet.",
      "A continuación, explicaremos más a detalle cómo funciona NAT, así como sus características y distintos tipos con ejemplos prácticos."
    ]
  },
  {
    "title": "¿Cómo funciona NAT?",
    "paragraphs": [
      "La traducción de direcciones de red (NAT) es una técnica que utilizan comúnmente los proveedores de servicios de Internet (ISPs) y las organizaciones para permitir que múltiples dispositivos compartan una sola dirección IP pública. Al utilizar NAT, los dispositivos en una red privada pueden comunicarse con dispositivos en una red pública sin la necesidad de que cada dispositivo tenga su propia dirección IP única.",
      "La NAT generalmente se implementa en un enrutador, un dispositivo que conecta dos redes. Cuando un dispositivo en la red privada envía datos a un dispositivo en la red pública, el enrutador intercepta los datos y reemplaza la dirección IP de origen con su propia dirección IP pública. Luego, el enrutador envía los datos al dispositivo de destino.",
      "Cuando el dispositivo de destino devuelve datos al enrutador, el enrutador intercepta estos datos y reemplaza la dirección IP pública con la dirección IP de origen original. Luego, el enrutador envía los datos al dispositivo fuente original. Este proceso es transparente para los dispositivos en ambas redes."
    ]
  },
  {
    "title": "Características principales de NAT",
    "paragraphs": [
      "La tecnología NAT posee las siguientes características:",
      "1. Traducción de direcciones IP: NAT permite modificar las direcciones IP de los paquetes que circulan entre redes. Por ejemplo, puede sustituir la dirección IP privada de una computadora por una dirección IP pública para permitir su comunicación con Internet.",
      "2. Uso compartido de direcciones IP públicas: Mediante una modalidad llamada PAT, varios dispositivos de una red privada pueden utilizar una misma dirección IP pública para acceder a Internet. Esto permite aprovechar mejor las direcciones IPv4 disponibles.",
      "3. Funcionamiento mediante routers: NAT generalmente se configura en dispositivos como routers y firewalls, los cuales se encargan de traducir las direcciones IP cuando los paquetes pasan de una red a otra.",
      "4. Registro de las traducciones: Los dispositivos que realizan NAT mantienen una tabla de traducciones que permite relacionar las direcciones IP utilizadas en las comunicaciones. En el caso de PAT, también se registran los números de puerto, lo que permite identificar las diferentes conexiones y dirigir las respuestas al dispositivo correspondiente.",
      "5. Diferentes modalidades de funcionamiento: NAT puede utilizarse de distintas maneras según las necesidades de una red. Entre sus modalidades se encuentran NAT estática, NAT dinámica y PAT. También existen mecanismos especializados, como NAT64, que permiten la comunicación entre IPv6 e IPv4."
    ]
  },
  {
    "title": "Tipos de NAT",
    "paragraphs": [
      "Existen distintos tipos de NAT; son cuatro tipos diferentes y las cuatro se utilizan por motivos o situaciones diferentes. Y es que, en función de cada situación, lo cierto es que conviene hacer uso de una NAT u otra. En cualquier caso, estos son los más importantes:",
      "NAT estática: Le asigna una dirección IP fija al router; convirtiendo su dirección privada en una pública de forma directa, y haciéndolo visible en Internet. La NAT estática es uno de los tipos más aconsejables para servidores web o dispositivos de los que necesitas conocer una dirección IP que siempre sea la misma, y a través de la que conectarse a Internet. También es útil para dispositivos a los que se deba poder acceder a través de Internet por el personal que esté autorizado, aunque no cualquier usuario de Internet en general.",
      "NAT dinámica: En este caso, la NAT dinámica, al contrario de la estática, no elige la misma dirección IP, sino que, este tipo de NAT, lo que hace es pasar por un conjunto de direcciones IP públicas diferentes, esto lo que significa es que el router o el dispositivo NAT que estemos utilizando, obtendrá una dirección IP diferente cada vez que la dirección IP local se traduzca en una dirección IP pública. En cuanto a la NAT dinámica, es una buena opción cuando se requiere que el dispositivo que se conecte tenga una mayor seguridad, ya que cada vez que lo haga se le asignará una diferente. En este caso, una IP pública que se esté usando ahora, mañana no será de ese dispositivo en concreto.",
      "NAT PAT: Este tipo de NAT realiza una función similar a la NAT dinámica, pero lo que hace es traducir el puerto, como lo indica su nombre al español (Traducción de Direcciones de Puerto), lo que hace realmente es convertir todas las direcciones IP locales en una única IP pública. Lo que hace el router es que tiene su propia IP publica, y todos los dispositivos en la red local usaran esa misma IP publica al momento de navegar en la web, en lugar de cada uno tener una IP propia, eso es posible gracias a el uso de distintos puertos lógicos y a la tabla de direcciones de NAT. Lo explicaremos con un ejemplo sencillo:",
      "Ejemplo funcionamiento de NAT/PAT",
      "Para comprender cómo funciona NAT, podemos compararlo con el servicio de correo postal de un edificio de apartamentos. Aunque todos los residentes comparten una misma dirección postal, cada apartamento tiene un número que permite identificar a sus habitantes y entregarles la correspondencia correctamente.",
      "En una red doméstica ocurre algo similar. Cada dispositivo tiene su propia dirección IP privada, mientras que varios dispositivos pueden compartir una misma dirección IP pública para comunicarse con Internet. Esto es posible gracias a PAT (Port Address Translation), una modalidad de NAT que utiliza números de puerto para distinguir las diferentes comunicaciones.",
      "Los puertos son números lógicos utilizados por protocolos como TCP y UDP para identificar los extremos de las comunicaciones de un dispositivo. Por ejemplo, una computadora puede descargar un archivo, reproducir un video y participar en una llamada al mismo tiempo, utilizando distintos puertos para mantener identificadas sus conexiones. Siguiendo la analogía postal, si la dirección IP identifica el edificio, los puertos funcionan como números de referencia que ayudan a distinguir las diferentes entregas.",
      "Imaginemos que una computadora con la dirección privada 192.168.1.10 solicita descargar una guía de estudio desde Internet. Para establecer la comunicación, utiliza el puerto de origen 51500. Cuando la solicitud llega al router, PAT sustituye la dirección privada por la dirección pública 203.0.113.5 y, en este ejemplo, cambia el puerto a 40001.",
      "El router registra esta correspondencia en una tabla de traducciones:",
      "192.168.1.10:51500 - 203.0.113.5:40001",
      "Cuando el servidor responde, envía la información a la dirección pública y al puerto 40001. El router consulta su tabla de traducciones, identifica que la respuesta corresponde a la computadora y la reenvía a su dirección privada y puerto originales.",
      "De esta manera, varios dispositivos pueden compartir una misma dirección IP pública sin confundir sus comunicaciones, ya que PAT utiliza los números de puerto para diferenciarlas. Es como una recepción que registra las entregas y se asegura de que cada paquete llegue al apartamento correspondiente."
    ]
  },
  {
    "title": "Ventajas y desventajas de NAT",
    "paragraphs": [
      "Ventajas",
      "La traducción de direcciones de red ofrece múltiples beneficios significativos:",
      "Conservación de direcciones IP: Al permitir que varios dispositivos compartan una sola dirección IP, la NAT ayuda a conservar el espacio de la dirección IP.",
      "Seguridad mejorada: La NAT puede proporcionar una medida de seguridad al ocultar la red interna del mundo exterior. Esto puede ser útil para prevenir ataques dirigidos a direcciones IP específicas o para evitar que se acceda a dispositivos en la red interna directamente desde Internet.",
      "Mejor velocidad: La NAT puede mejorar la velocidad de comunicación al reducir el número de paquetes que deben enrutarse a través de la red. Esto se debe a que la NAT elimina la necesidad de que cada dispositivo en la red interna tenga su propia dirección IP única.",
      "Flexibilidad: La NAT también se puede utilizar para proporcionar flexibilidad en el diseño de la red, lo que es particularmente útil para las organizaciones que desean cambiar su configuración de red sin cambiar sus direcciones IP. Es posible que las organizaciones deseen cambiar su configuración de red para mejorar la seguridad o el rendimiento o para agregar nuevos dispositivos a la red.",
      "Ahorro de costos: La NAT reduce la cantidad de direcciones IP que una organización necesita, lo que puede ahorrarles dinero en licencias de direcciones IP y otros costos asociados.",
      "Administración de red más sencilla: La NAT facilita la administración de una red al reducir el número de direcciones IP que se deben asignar. Esto beneficia a las organizaciones con una gran flota de dispositivos y a aquellas que desean reducir la cantidad de tiempo y esfuerzo necesarios para administrar sus redes.",
      "Desventajas",
      "NAT presenta algunas desventajas. El hecho de que los hosts en Internet parezcan comunicarse de forma directa con el dispositivo con NAT habilitada, en lugar de hacerlo con el host real dentro de la red privada, genera una serie de inconvenientes.",
      "1. Disminución del rendimiento: NAT puede generar retrasos adicionales en la comunicación, debido a que el router debe procesar y traducir las direcciones IP de los paquetes. Esto puede afectar especialmente a aplicaciones en tiempo real, como las llamadas de voz sobre IP (VoIP).",
      "2. Pérdida de conectividad de extremo a extremo: NAT modifica las direcciones IP durante la comunicación, lo que puede dificultar el funcionamiento de aplicaciones y protocolos que requieren conexiones directas entre dispositivos.",
      "3. Dificultad para rastrear conexiones: Al modificar las direcciones IP de los paquetes, NAT puede complicar el seguimiento del tráfico y la identificación de los dispositivos involucrados, dificultando la detección y resolución de problemas en la red.",
      "4. Incompatibilidad con ciertos protocolos: Algunos protocolos, como IPsec, pueden presentar dificultades al utilizar NAT, debido a que la modificación de los encabezados IP puede interferir con sus mecanismos de integridad y autenticación.",
      "5. Limitaciones en las conexiones entrantes: NAT puede dificultar el establecimiento de conexiones iniciadas desde Internet hacia dispositivos de una red privada. Para permitirlas, puede ser necesario configurar mecanismos adicionales, como la redirección de puertos.",
      "6. Mayor complejidad en la configuración: Algunas aplicaciones, especialmente las que requieren conexiones directas entre dispositivos, pueden necesitar configuraciones adicionales en el router para funcionar correctamente. Esto incrementa la complejidad de la administración de la red.",
      "NAT en los videojuegos en línea",
      "La configuración de NAT puede influir en la conectividad de los videojuegos multijugador, especialmente cuando requieren conexiones directas entre jugadores. En este contexto, suelen distinguirse tres niveles:",
      "NAT abierto (Tipo 1): Permite establecer conexiones con pocas restricciones, facilitando el acceso a partidas y la comunicación con otros jugadores.",
      "NAT moderado (Tipo 2): Permite jugar en línea, aunque puede presentar limitaciones al conectarse con determinados jugadores o servidores.",
      "NAT estricto (Tipo 3): Restringe más las conexiones entrantes, lo que puede dificultar el emparejamiento, las partidas multijugador y el chat de voz.",
      "Para mejorar la conectividad, pueden utilizarse funciones como UPnP, la redirección de puertos (port forwarding) o solicitar asistencia al proveedor de Internet (ISP).",
      "Es importante destacar que el tipo de NAT afecta principalmente la posibilidad de establecer determinadas conexiones, pero no determina directamente la velocidad de Internet ni la latencia; o en este caso el ping."
    ]
  },
  {
    "title": "NAT y la transición hacia IPv6",
    "paragraphs": [
      "La traducción de direcciones de red (NAT) ha sido una solución importante para disminuir el problema de la escasez de direcciones IPv4, ya que permite que varios dispositivos compartan una misma dirección IP pública. Sin embargo, NAT no soluciona definitivamente este problema, debido a que la cantidad de direcciones IPv4 disponibles sigue siendo limitada.",
      "Por ello, se desarrolló IPv6, una nueva versión del protocolo IP que ofrece una cantidad mucho mayor de direcciones. De esta manera, es posible asignar direcciones IP públicas a una gran cantidad de dispositivos sin depender de mecanismos como NAT para conservarlas.",
      "No obstante, la transición de IPv4 a IPv6 es un proceso gradual, debido a que todavía existen dispositivos, aplicaciones y servidores que utilizan únicamente IPv4. Por tanto, es necesario contar con mecanismos que permitan la coexistencia de ambos protocolos mientras se completa esta transición.",
      "Entre los principales mecanismos de transición se encuentran:",
      "1. Doble pila (Dual Stack): Permite que un dispositivo utilice tanto IPv4 como IPv6, de manera que pueda comunicarse mediante cualquiera de los dos protocolos, dependiendo de cuál sea compatible con el destino.",
      "2. Túneles: Permiten transportar paquetes de una versión del protocolo IP a través de una red que utiliza la otra versión. Por ejemplo, pueden transportar paquetes IPv6 a través de una red IPv4.",
      "3. Traducción de protocolos: Permite la comunicación entre dispositivos que utilizan versiones diferentes del protocolo IP.",
      "Uno de estos mecanismos es NAT64 (Network Address Translation 64), una tecnología que permite la comunicación entre dispositivos que utilizan IPv6 y servidores que todavía funcionan con IPv4. Este mecanismo es importante porque ambas versiones del protocolo IP utilizan direcciones diferentes y no pueden comunicarse directamente entre sí.",
      "Para comprender mejor su funcionamiento, imaginemos que una computadora utiliza únicamente IPv6 y necesita acceder a una página web que se encuentra alojada en un servidor que solo utiliza IPv4. En condiciones normales, esta comunicación no podría realizarse directamente, debido a que ambos dispositivos utilizan versiones diferentes del protocolo IP.",
      "Por ello, NAT64 actúa como un intermediario entre ambos dispositivos. Cuando la computadora envía una solicitud al servidor, NAT64 traduce la información necesaria de IPv6 a IPv4 para que el servidor pueda recibirla. Posteriormente, cuando el servidor responde, NAT64 realiza la traducción correspondiente de IPv4 a IPv6, permitiendo que la información llegue nuevamente a la computadora.",
      "En conclusión, aunque IPv6 representa una solución a largo plazo para el agotamiento de direcciones IPv4, su implementación todavía requiere tiempo. Por ello, NAT continúa siendo importante para las redes actuales, mientras que mecanismos como NAT64 facilitan la transición entre ambos protocolos."
    ]
  },
  {
    "title": "Conclusión",
    "paragraphs": [
      "Tal como hemos podido ver, para nuestra navegación por la internet se necesitan muchos elementos y tecnologías; una de esas son las direcciones IP que identifican los dispositivos en la red para que la información llegue al destino correcto.",
      "Los dispositivos utilizan una dirección IP privada para comunicarse en la red local y una IP pública para navegar por internet por motivos de seguridad.",
      "Es necesario el uso de la tecnología NAT para traducir de una dirección IP publica a una privada y viceversa, además, de que ayuda a resolver el problema de la falta de direcciones IPv4.",
      "NAT ofrece muchas ventajas y utilidades, como ayudar al ahorro de direcciones IP, reducir costos y hacer que se administre la red de forma mejor.",
      "Hay distintos tipos de NAT; estáticas, que ofrecen traducen una sola IP privada a publica, perfectos para servidores; dinámicas, con distintas IPs publicas para un dispositivo, ayuda a la seguridad. La que se usa en entornos empresariales o del hogar es la tecnología PAT, que permite que varios dispositivos usen una sola dirección IP publica, ahorrando así direcciones.",
      "Sin embargo, la tecnología NAT por si misma no es suficiente para abordar el problema de abastecer a todos los dispositivos en internet con una dirección IP. Por ello surgieron las direcciones IPv6, para abastecer la demanda de direcciones IP de los dispositivos en la internet, pero la transición de IPv4 a IPv6 es un proceso gradual.",
      "Por tanto, la tecnología NAT sigue sien do de vital importancia para navegar en internet a día de hoy y lo seguirá siendo por un rato."
    ]
  }
];
