CREATE DATABASE avesgaditanas;
ALTER DATABASE avesgaditanas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE avesgaditanas;

CREATE TABLE ave (
	id INT PRIMARY KEY,
	nombrecomun VARCHAR(25) NOT NULL,
	nombrecientifico VARCHAR(30) NOT NULL,
	foto VARCHAR(40) NOT NULL,
	caracteristicas TEXT,
	habitat TEXT
);

CREATE TABLE comarca (
	id INT PRIMARY KEY,
	nombre VARCHAR(21) NOT NULL
);

CREATE TABLE avistamiento (
	id INT AUTO_INCREMENT,
	id_sp INT NOT NULL,
	id_comarca INT NOT NULL,
	num_ejemplares INT NOT NULL,
	fecha DATE NOT NULL,
	descripcion VARCHAR(100),
	PRIMARY KEY (id),
	FOREIGN KEY (id_sp) REFERENCES ave(id),
	FOREIGN KEY (id_comarca) REFERENCES comarca(id)
);


INSERT INTO ave VALUES(001, 'ibis eremita', 'Geronticus eremita', 'geronticus_eremita.jpg', 
'El ibis eremita es un ave grande de plumaje negro iridiscente que mide entre 70 y 80 cm de largo y tiene una envergadura alar de 125-135 cm y suele pesar 1-1,3 kg. Se caracterizan por tener la cabeza y la gartanta sin plumas, con una carúncula rojo claro. Su pico mide entre 11 y 15 cm y está ligeramente curvado hacia abajo. Sus patas también son rojas. En la nuca y parte posterior del cuello tiene un copete de plumas negras, estrechas y muy alargadas. El plumaje juvenil presenta plumas también en cabeza y cuello. Hembras y machos tienen un plumaje similar, diferenciándose solo por el tamaño (las hembras son algo menores).',
'Catalogado en peligro crítico de extinción a nivel mundial, la provincia de Cádiz posee la única población reproductora de Europa, en La Barca de Vejer.<br/>En vuelo muestran aleteos poderosos, flexibles y de poco recorrido. Emiten llamadas guturales de tipo hrump y altas y roncas de tipo hyoh en las colonias de cría, pero en cualquier otro lugar son silenciosos. Se puede confundir con otra especie de ibis, el morito, con colores similares y que comparte sus áreas de distribución pero el morito es más pequeño y menos robusto, además de tener la cabeza emplumada; en vuelo, el ibis eremita tiene las alas menos redondeadas y el cuello más corto, además de que sus patas no se prolongan por detrás de la cola (a diferencia de las del morito).'
);

INSERT INTO ave VALUES(002, 'águila perdicera', 'Aquila fasciata', 'aquila_fasciata.jpg', 
'Es un ave rapaz diurna de unos 70 cm de longitud, con un peso de 1,6-2,2 kg, de aspecto grande y fuerte. Los adultos presentan el dorso marrón claro y las partes inferiores más claras, blanco-amarillentas con trazos oscuros.',
'Es una especie sendentaria, amenazada y en regresión. En Europa se extinguió a comienzos de la edad moderna. Existen planes de conservación en cautividad y semicautividad y ha sido reintroducido en el sur de la Península Ibérica y en Austria. Cuenta con una importante población en la provincia de Cádiz. Cría en paredes rocosas con acantilados inaccesibles y terrenos abiertos próximos para cazar. La Sierra de Grazalema es una buena zona para verla. No obstante, La Janda es probablemente el mejor lugar de toda la provincia.'
);

INSERT INTO ave VALUES(003, 'vencejo moro', 'Apus affinis', 'apus_affinis.jpg',
'El vencejo moro tiene patas muy cortas; las usa solamente para aferrarse a superficies verticales. Su nombre científico proviene del griego, y significa "sin patas" ya que nunca se posan voluntariamente en tierra.</br>Los vencejos moros pueden identificarse fácilmente por su pequeño tamaño. Con las alas extendidas mide apenas treinta y tres centímetros de largo, en comparación con los cuarenta y dos centímetros del vencejo común. Son completamente negros excepto por las ancas, de color blanco, al igual que los lados de su cuerpo. Tienen una cola corta y cuadrada. El vuelo se caracteriza por su aleteo, igual que los aviones comunes.',
 'Estas aves crían en zonas de acantilados. El vencejo moro construye sus nidos en agujeros en edificios o en ocasiones en acantilados, y deposita entre uno y cuatro huevos cada vez. Cada ave regresa al mismo sitio año tras año y reconstruye su nido si es necesario.<br/>Ha colonizado Europa recientemente a través del Estrecho de Gibraltar. Crió en la Cueva del Moro, Sierra de La Plata, donde aún se le puede ver ocasionalmente. El puerto de Chipiona, donde ha formado la única colonia de cría, ofrece las mejores oportunidades. Presente todo el año, en invierno es más fácil verlo a primera hora de la mañana o última de la tarde.');

INSERT INTO ave VALUES(004, 'elanio común', 'Elanus caeruleus', 'elanus_caeruleus.jpg',
 'Es un ave inconfundible. Tiene la cabeza blanca con una "máscara" negra, y su parte inferior es blanca excepto las puntas de las afiladas alas, que son negras. La parte superior es gris azulada, con manchas negras en los hombros. La cola, corta y cuadrada, le diferencia de los milanos. Son muy difíciles de ver a simple vista, por lo que al volar se camuflan entre los cielos grises y nublados. Pequeña rapaz sedentaria',
 'Es una especie que vive principalmente en campos abiertos o semidesérticos. Prefiere áreas de cultivos de secano con arbolado disperso o bosques clareados. Buenos sitios para observarlo son la campiña en los alrededores de San José del Valle (campiña de Jerez), las inmediaciones de las lagunas de Bahía de Cádiz, la Laguna de Medina y, por supuesto, La Janda.<br/>Actualmente su área de distribución abarca gran parte de Europa central y meridional, África, el centro y sur de Asia y Nueva Guinea. Nidifica en los árboles. Su vuelo es lento como el del aguilucho, pero puede cernerse como un cernícalo');

INSERT INTO ave VALUES(005, 'cerceta pardilla', 'Marmaronetta angustirostris', 'marmaronetta_angustirostris.jpg',
 'La cerceta pardilla mide entre 39–42 cm de largo. Su plumaje es de tonos pardos claros con moteado blanquecino. Presenta una lista oscura que atraviesa sus ojos y se extiende hacia su penacho de la parte posterior de la cabeza. Sus alas de color arenoso carecen de espejuelo en sus plumas secundarias. Los machos tienen la cresta posterior más larga que las hembras. El pico de los machos es negro en su totalidad, con una línea azul hacia la punta, mientras que las hembras tienen la base verde. Los juveniles tienen un moteado blanquecino más denso y manchas claras en el pico.',
 'Especie muy escasa a nivel mundial. Declarada en peligro crítico de extinción en la Península Ibérica. En las marismas del Guadalquivir posee su principal núcleo reproductor. En nuestra provincia se la puede observar en las Lagunas de Espera, El Puerto de Santa María o Puerto Real. No obstante, el Codo de la Esparraguera (Trebujena) es la mejor opción de toda la provincia.');

INSERT INTO ave VALUES(006, 'focha moruna', 'Fulica cristata', 'fulica_cristata.jpg',
 'La focha moruna mide entre 38 y 45 cm de largo, tiene una envergadura alar de 75 a 85 cm y pesa entre 585 y 1085 g. El plumaje de los adultos es totalmente negro, en contraste con el blanco de su escudo frontal y su pico celeste. Se diferencia de la focha común por presentar dos protuberancias rojas en la parte superior del escudo, ser ligeramente mayor y tener el cuello más largo. Su patas grisáceas tienen dedos lobulados largos que le permiten nadar. El iris de su ojos es rojo. ',
 'Especie residente, declarada en peligro crítico de extinción en España. Se estiman unas 20-30 parejas para la provincia de Cádiz. Ocupa el mismo hábitat que la focha común. Las Lagunas de Espera y la Laguna de Medina son los mejores lugares donde observarla. A veces se deja ver en otros puntos como las Lagunas de El Puerto de Santa María o Puerto Real.');

INSERT INTO ave VALUES(007, 'collalba negra', 'Oenanthe leucura', 'oenanthe_leucura.jpg',
 'Se distingue por el color negro brillante del macho (pardo oscuro en la hembra), con un obispillo blanco y por ser la collalba de mayor tamaño, al menos en la península ibérica, alcanzando los 18 cm. Su voz de canto territorial es de estrofa breve, semejantes a silbidos y entremezclada con sonidos chirriantes. Durante el cortejo pueden imitar el canto de urracas y abejarucos.',
 'Especie sedentaria. Fácil de detectar por su carácter confiado. Su hábitat es agreste: cortados, zonas escarpadas y rocosas desprovistas de vegetación; también en ramblas.  Prefiere terrenos rocosos con algo de matorral y pocos árboles, con frecuencia cerca del hombre. Una de las especies emblema de la Sierra de Grazalema. Lugares donde no suele faltar son el puerto de las Palomas, la zona de inicio del recorrido de la ribera del Gaidóvar (Grazalema) o la Manga de Villaluenga.');

INSERT INTO ave VALUES(008, 'mosquitero ibérico', 'Phylloscopus ibericus', 'phylloscopus_ibericus.jpg',
 'Es un pájaro de pequeño tamaño, con las partes superiores de su cuerpo de tonos verdosos y las inferiores y la cara amarillentas. Se trata de un pájaro de pequeño tamaño, que mide de diez a once centímetros y pesa de 7 a 8,25 g. Las partes superiores de su cuerpo son de tonos verdosos, mientras que su rostro y las partes inferiores son amarillentas. Aunque su apariencia es muy similar a la de los mosquiteros comunes (P. collybita) tienen colores más vivos, el verde del obispillo y los hombros es más intenso y su cara y garganta son de un amarillo más intenso. Presenta lista ocular y brida también oliváceas. Sus alas son más apuntadas que las del mosquitero común y su cola algo más larga. Sus patas suelen ser de color marrón. Ambos sexos tienen un aspecto similar y es difícil distinguirlos a simple vista.',
 'Especie estival. En nuestra provincia, prefiere bosques maduros del género quercus o mixtos. En la Sierra de Grazalema, La Garganta Verde o el río El Bosque son buenos lugares para verlo. En Los Alcornocales, la Subida al Picacho, Valdeinfierno o la Antigua Carretera Los Barrios-Facinas. En el Estrecho de Gibraltar, Ornipark, en Pelayo, también es una buena elección. El mosquitero ibérico prefiere los hábitat montañosos y premontañosos, con bosques abiertos, bosques de ribera o sotobosques.');

INSERT INTO ave VALUES(009, 'gaviota picofina', 'Chroicocephalus genei', 'chroicocephalus_genei.jpg',
 'Esta especie mide 37-40 cm y tiene una envergadura alar de 90-102 cm. Es ligeramente mayor que la gaviota reidora, a la que se parece, aunque no presenta el capirote negro en verano. Su cabeza es pequeña y tiene un pico largo y fino de color rojo oscuro; y su cuello es alargado. Sus patas son de color rojo oscuro, y su iris es amarillo. En verano su pecho adquiere un tono rosáceo. Esta ave tarda dos años en alcanzar la madurez sexual, como es habitual entre las gaviotas. Los juveniles del primer año tienen una banda negra en el extremo de la cola, y áreas oscuras en las alas. ',
 'Escasa en el entorno del Mediterráneo. Parcialmente migradora. Selecciona humedales salobres, principalmente salinas, para criar. En la Bahía de Cádiz, Tres Amigos-Río Arillo y las Salinas La Tapa son buenas opciones. Las Salinas de Bonanza (Sanlúcar de Barrameda) suelen ofrecer excelentes observaciones. En el interior, Mesas de Asta (Jerez) alberga una importante colonia. La gaviota picofina anida en colonias, construyendo sus nidos sobre el suelo, en el que pone tres huevos. Como la mayoría de las gaviotas es gregaria en invierno, tanto cuando se alimenta como cuando en los posaderos nocturnos. No es una especie pelágica, y es raro verlas en el mar lejos de la costa.');

INSERT INTO ave VALUES(010, 'águila imperial ibérica', 'Aquila adalberti', 'aquila_adalberti.jpg',
 'El plumaje de los ejemplares adultos es de un pardo muy oscuro en todo el cuerpo, excepto en los hombros y la parte alta de las alas, donde es de color pardo salpicado de plumas blancas. La nuca es ligeramente más pálida que otras partes del cuerpo, y la cola más oscura, sin bandas claras o líneas blancas como en el águila imperial oriental. El tamaño medio de los adultos es de entre 78 y 83 cm de altura,11​ y 2,8 kg, si bien las hembras, más grandes que los machos, pueden llegar a los 3,5 kg. La envergadura alar varía entre los 1,8 y 2,1 m.',
 'Especie sedentaria muy amenazada y endémica de la Península Ibérica. Actualmente sus poblaciones se encuentran en ligero aumento y expansión gracias a proyectos de conservación y reintroducción. El mejor lugar de todas la provincia para disfrutar de ella es, sin duda, La Janda. Durante la migración individuos juveniles suelen dejarse ver por los observatorios.<br/> Sus territorios abarcan una gran cantidad de hábitats, desde pinares en las zonas de montaña a sistemas dunares y marismas en zonas de costa. Sus mayores densidades se alcanzan en terrenos llanos o con relieves suaves, con formaciones arbóreas de importancia, aunque no dominantes (dehesas) y con buenas poblaciones de conejo.');

INSERT INTO comarca VALUES(001, 'Entorno de Doñana');
INSERT INTO comarca VALUES(002, 'Campiña gaditana');
INSERT INTO comarca VALUES(003, 'Sierra de Grazalema');
INSERT INTO comarca VALUES(004, 'Bahía de Cádiz');
INSERT INTO comarca VALUES(006, 'La Janda');
INSERT INTO comarca VALUES(007, 'Estrecho de Gibraltar');

INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(003, 001, 15, '2019-04-17', 'Cerca de colonia nidificante en Chipiona');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(005, 001, 2, '2019-01-10', 'Laguna del Tarelo');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(009, 002, 1, '2018-11-30', 'humedal de Haza de la Torre');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(006, 002, 2, '2018-11-30', 'humedal de Haza de la Torre');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(006, 002, 2, '2018-12-10', 'complejo endorreico de Espera');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(008, 003, 1, '2019-03-25', 'La Garganta Verde');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(007, 003, 1, '2018-10-30', 'entre Puerto de los Acebuches y Puerto de las Palomas');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(002, 003, 1, '2019-03-19', 'Puerto de El Boyar - Llanos del Campo');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(007, 003, 1, '2019-03-25', 'Ribera del Gaidóvar');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(007, 003, 1, '2019-04-15', 'Manga de Villaluenga');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(008, 003, 1, '2019-04-15', 'Río El Bosque');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(002, 003, 1, '2019-04-03', 'Peñón de Zaframagón');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(009, 004, 2, '2019-03-07', 'sendero Tres Amigos a río Arillo');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(006, 004, 2, '2019-04-10', 'Laguna de Medina');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(005, 004, 4, '2019-04-10', 'Laguna de Medina');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(008, 006, 1, '2019-03-01', 'Picacho');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(008, 006, 1, '2019-03-01', 'sendero de Valdeinfierno');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(002, 007, 1, '2019-03-01', 'carretera Los Barrios a Facinas');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(002, 006, 1, '2018-09-27', 'Vejer');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(002, 006, 2, '2018-09-27', 'La Janda');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(001, 006, 1, '2019-03-01', 'Barca de Vejer');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(003, 007, 2, '2019-03-02', 'Cueva del Moro');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(004, 002, 1, '2019-05-10', 'Carretera de Gibalbín a Espera');
INSERT INTO avistamiento (id_sp, id_comarca, num_ejemplares, fecha, descripcion)
	VALUES(010, 007, 1, '2019-05-10', 'Parque Natural Los Alcornocales');