

![Logo](https://github.com/imaginebig/entrevista-tecnica/blob/main/logoib.png?raw=true)

# Entrevista Técnica Innovación y Desarrollo
  Estamos muy contentos  de que estes interesado/a en sumarte a nuestro equipo! 
  Por eso esperamos que puedas completar este breve examen técnico para conocer de lo que sos capaz!
 
### Algoritmos - JavaScript
- A) Crear un algoritmo que muestre los números pares entre el 0 y el 100.
- B) JavaScript ES6: Dados los siguientes array's, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando para tal fin una única línea de código. 

```bash
const x = ["n", "bro", "c", "|"]; 
const y = ["d", "n", "l", "bro", "g"];
// Tu código aquí -> (...)
console.log( ... );
```

### Frontend - React JS
Según el diseño de figma, plasmar en código, un listado de productos con búsqueda por descripción y código de producto. 
Los productos pueden venir de un array almacenado en una variable.

Simular un tiempo de respuesta de 3 segundos con un setTimeOut Se valora el manejo de estados entre componentes, uso de hooks y estilos.

## 🔗 Links
[Diseño de figma](https://www.figma.com/file/Wik75QqHegwHcBIQTwhPWs/Innovaci%C3%B3n-y-desarrollo---Imagine-Big?node-id=0%3A1&t=AKC1mOHlHfyzKGn0-1)

### Listado de productos

```bash
export const productos = [

  {
    id: 'CODE001',
    name: 'AURICULAR KLIP XTREME OBSESSION BLACK',
    desc: 'Este original audífono con micrófono ostenta unidades excitadoras de 40mm que presentan una respuesta en frecuencia amplia, una distorsión baja, así como graves profundos que se escuchan con una fidelidad asombrosa. El auricular de cápsula cerrada, no solo brinda comodidad, sino que además aísla efectivamente el ruido de fondo. La cápsula de mando con micrófono prendida de un cable plano le confiere un sentido de funcionalidad y estilo. El equilibrio perfecto entre lo práctico y un sonido excepcional es lo que encontrarás en este nuevo auricular de Klip Xtreme.',
    price: 1499,
    img: 'https://www.venex.com.ar/products_images/1614800072_23381_pictures_product_visual_1.png',
    stock: 50
  },

  { 
    id: 'CODE002',
    name: 'NOTEBOOK ASUS X515MA INTEL CELERON N4020 8GB 240GB 15.6 FREE',
    desc: 'Ya sea para trabajar o jugar, el ASUS X515 es el computador portátil que ofrece un potente rendimiento y efectos visuales envolventes. Su pantalla NanoEdge cuenta con amplios ángulos de visión de 178° y un recubrimiento antirreflejos mate para tener una experiencia verdaderamente atractiva.',
    price: 120250,
    img: 'https://www.venex.com.ar/products_images/1638814588_notebook-asus-x515ma-n4020-8gb-240gb-15.6-free.jpg',
    stock: 25
  },

  {
    id: 'CODE003',
    name: 'TABLET POSITIVO BGH W750 7" 1GB 8GB ANDROID 7.1',
    desc: 'Comodidad, rendimiento y entretenmiento en la tablet Positivo BGH. ',
    price: 7990,
    img: 'https://www.venex.com.ar/products_images/1552145407_cm21221.jpg',
    stock: 50
  },

  {
    id: 'CODE004',
    name: 'MONITOR 24 LED SAMSUNG G50 CURVO 144HZ LC24RG50FQL',
    desc: 'Tipo de ilumunación LED Tipo de panel VA Pantalla Curva Sí',
    price: 39190,
    img: 'https://www.venex.com.ar/products_images/1560527714_142142214.png',
    stock: 44
  },

  {
    id: 'CODE005',
    name: 'STREAM DECK ELGATO 6 BOTONES LCD CUSTOMIZABLE',
    desc: 'Define el nuevo estándar. 6 teclas LCD totalmente personalizables, listas para disparar un número ilimitado de acciones. Funcionamiento táctil con una sola pulsación. Respuesta visual instantánea. Software avanzado y fácil de usar. Antes, este nivel de control solo estaba disponible para los grandes estudios de televisión. Ahora lo tienes en tus manos.',
    price: 11490,
    img: 'https://www.venex.com.ar/products_images/1555092619_sdmini_perspektive_2.png',
    stock: 33
  },

  {
    id: 'CODE006',
    name: 'NOTEBOOK BANGHO MAX L4 I1 F CELERON N4020/SSD 120GB 4GB 14 WIN10',
    desc: 'Con la Notebook Banghó Max L4 i1, podrás llevar tus archivos y documentos a todos lados gracias a su peso ligero y tamaño reducido sin perder prestaciones, pantalla de 14 pulgadas HD para visualización completa. Además, toda la conectividad a tu alcance con puertos USB, HDMI, Wifi y Bluetooth.',
    price: 41990,
    img: 'https://www.venex.com.ar/products_images/1615313775_notebook-bangho-max-l4-i1-f-celeron-n4020.jpg',
    stock: 50
  },
  {
    id: 'CODE007',
    name: 'MICROPROCESADOR INTEL CORE I3 9100 COFFEELAKE 4.2GHZ 4/4 6MB LGA1151',
    desc: 'Afronte sus tareas de productividad y disfrute de su entretenimiento con el procesador Intel® Core ™ i3-9100 de novena generación dentro de su PC de escritorio. Este es un gran rendimiento, diseñado para lo cotidiano.',
    price: 19499,
    img: 'https://www.venex.com.ar/products_images/1604925325_i3.jpg',
    stock: 50
  },

  { 
    id: 'CODE008',
    name: 'NOTEBOOK DELL VOSTRO 3500 I3 1115G4 8GB 1TB SSD 240GB 15.6 UBUNTU',
    desc: '* Este equipo posee un agregado de memoria ram y/o disco ssd realizado por TechStore. Debe contemplar una demora de entrega adicional de 72hs luego de realizar el pedido y pago de la misma *',
    price: 79990,
    img: 'https://www.venex.com.ar/products_images/1637776842_notebook-dell-vostro-3500-i3-1115g4-8gb-1tb-ssd-240gb-15.6-ubuntu.jpg',
    stock: 25
  },

  {
    id: 'CODE009',
    name: 'GAMING KIT HYPERX PULSEFIRE & ALLOY CORE RGB',
    desc: 'Contar con la barra de luz exclusiva de HyperX y con los efectos de iluminación dinámicos RGB, el HyperX Alloy Core RGB™ es ideal para los gamers que buscan ampliar el estilo y rendimiento de su teclado sin tirar la casa por la ventana. Con seis efectos de iluminación diferentes y tres niveles de brillo, representa el equilibrio ideal entre esplendor y presupuesto. Construido con una estructura plástica reforzada, el Alloy Core RGB fue diseñado para brindar una mayor estabilidad y confiabilidad para los gamers que deseen un teclado duradero. ',
    price: 6699,
    img: 'https://www.venex.com.ar/products_images/1565982821_241214214241124142241.png',
    stock: 50
  },

  {
    id: 'CODE010',
    name: 'AURICULAR HYPERX CLOUD CORE PC 7.1',
    desc: 'Los auriculares para juegos HyperX Cloud se caracterizan por su diseño ultracómodo y su increíble calidad de sonido. Nos hemos esmerado en todos los detalles de la espuma viscoelástica exclusiva HyperX, la polipiel de primera calidad, la fuerza de sujeción y la distribución del peso para crear unos auriculares cómodos durante las largas sesiones de juego. Por ello, son los auriculares para juegos más populares entre millones de jugadores. Siempre hay unos Cloud perfectos para ti, tanto si quieres centrarte en la competición como si quieres relajarte con tu juego favorito.',
    price: 7499,
    img: 'https://www.venex.com.ar/products_images/1594069090_cloudcores4.jpg',
    stock: 44
  },

  {
    id: 'CODE011',
    name: 'MICROFONO HYPERX GAMING SOLOCAST NEGRO PC/MAC/PS4',
    desc: 'Para los editores de vídeo, streamers y jugadores que buscan un micrófono USB con excelente calidad de sonido, el HyperX SoloCast es imprescindible. Es Plug N Play, lo que lo hace fácil de usar, con algunas de nuestras comodidades favoritas de los fans, como el sensor de silenciamiento con un toque y el indicador LED de silencio. El micrófono versátil tiene un soporte flexible y ajustable y también es compatible con la mayoría de los brazos articulados, por lo que puede colocarse en tu escritorio o en el trabajo. Certificado por TeamSpeak y Discord y compatible con OBS, XSplit, Streamlabs OBS y una serie de otros programas, es un micrófono extremadamente fácil de usar para los streamers.',
    price: 6199,
    img: 'https://www.venex.com.ar/products_images/1611173585_hx-product-solocast-1-zm-lg.jpg',
    stock: 33
  },

  {
    id: 'CODE012',
    name: 'AURICULAR INALAMBRICO HYPERX CLOUD STINGER CORE WHITE PC/PS4',
    desc: 'Libertad inalámbrica a un price increíble. Los auriculares inalámbricos HyperX Cloud Stinger™ Core son ligeros, duraderos y aptos para jugar en sistemas PS4. Chatea con tus amigos online y disfruta de una comunicación nítida con tu equipo gracias al micrófono con cancelación de ruido. Sumérgete en el juego y déjate llevar por el audio gracias a la calidad del sonido de los Cloud Stinger Core. Además, incluye controles de audio integrados en los cascos y un práctico micrófono que se silencia con un simple giro.',
    price: 7999,
    img: 'https://www.venex.com.ar/products_images/1603379697_hxproductcloudstingercorewirelessps41zmlg.jpg',
    stock: 5
  }
];
```
