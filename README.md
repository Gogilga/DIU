# DIU22
Prácticas Diseño Interfaces de Usuario 2021-22 (Tema: Hostels) 

Grupo: DIU3.SS-Team.  Curso: 2021/22

Proyecto:  Experience4u

Descripción: Se trata de un *minisite* orientado a poner de manifiesto las diferentes actividades que se presenta en el establecimiento de Hostel4u como en la ciudad de Granada en general. Las actividades pueden ser tanto culturales como gastronómicas o de ocio.

Logotipo: 
>>> Opcionalmente si diseña un logotipo para su producto en la práctica 3 pongalo aqui

Miembros
 * :bust_in_silhouette:  **Santiago Gil Legaza**    :octocat: https://github.com/Gogilga
 * :bust_in_silhouette:  **Salvador Megías Andreu**    :octocat: https://github.com/salvadorJMA

----- 

# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----

Hemos elegido 4 webs distintas de hostels en Granada, calificándolas sobre diversos aspectos como las actividades que puedan ofrecer dichos hostels a través de su website, los idiomas con los que se pueden dar a conocer, los servicios que ofrecen, la localización del hostel en la ciudad, las reseñas de otros clientes, y la calidad de la asistencia que ofrece el personal del hostel.

Los que hemos elegido son: 
- [Hostel4u](https://www.hostel4ugranada.com)
- [Oasis](https://oasisgranada.com/)
- [TOC](https://tochostels.com/destinations/granada/)
- [ECO](http://www.ecohostel.es)

![Analisis competitivo](P1/img/AnalisisCompetitivo.jpg)

Teniendo en cuenta estas características, hemos evaluado individualmente a cada uno de los 4 hostels y hemos llegado a la conclusión de que, aunque de forma muy ajustada, la mejor website y por tanto el mejor hostel es Hostel4u, debido a su sencillez, intuitiva website, localización en la ciudad, servicios que ofrece y asistencia eficaz al cliente. 


![Método UX](img/Persona.png) 1.b Persona
-----

La primera persona que hemos elegido se llama Kumiko Tani y se trata de una chica Japonesa que vive en EEUU que se dedica a escribir canciones, por lo que tiene que viajar mucho y al ser tan joven es más probable que pueda elegir cualquier tipo de alojamiento.

![Imagen de Kumiko](P1/img/KumikoTani.jpg)

Para la segunda persona hemos decidido crear a Steven Williams, dado que nos parecía interesante crear una perspectiva no tan común como puede ser la de un adolescente Canadiense sin recursos monetarios propios que quiere darle una sorpresa a su familia y reunirlos de nuevo en este viaje tan ilusionante para él.

![Imagen de Steven](P1/img/StevenWilliams.jpg)

El documento js con la información de las personas se puede encontrar [aquí](P1/data/Persona.js).

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

Hemos escogido estas dos situaciones, debido a que no son situaciones de lo más comunes de los típicos turistas que quieren viajar. Sino que nuestros personajes tienen una finalidad subyacente.

La primera situación encontramos que Kumiko está en medio de un contrato con un artista muy famoso para escribir su próxima canción. Ella está pasando ahora mismo por un bloqueo en el que solo ha escrito la primera estrofa de la canción y necesita una fuente de inspiración de cualquier modo posible. Hace varios años viajó ya a Granada y le encantó la ciudad, por lo que decide volver a visitarla para poder inspirarse y conocer gente nueva que le de nuevas historias que poder contar.

![Journey map de Kumiko](P1/img/JourneyMapKumiko.jpg)

En la segunda situación descrita encontramos al joven adolescente Steven Williams, cuya finalidad subyacente sería reunir de nuevo a su familia en un encomiable viaje lleno de actividades por y para la familia y que sean del agrado de su miembros. Dónde Granada, reúne los requisitos para satisfacer las necesidades e inquietudes de la familia Williams.

![Journey map de Steven](P1/img/JourneyMapSteven.jpg)

El documento js con la información de los Journey Map se puede encontrar [aquí](P1/data/Journey.js).

![Método UX](img/usabilityReview.png) 1.d Usability Review
----
- Aquí se puede encontrar el [xlsx](P1/Usability-review-template.xlsx) y el [pdf](P1/Usability-review-template-2.pdf) de Usability Review
- **Nota:** 91/100.
- **Valoración:** Se ha obtenido una valoración excelente (91 sobre 100). Pensamos que la website ofrecida por el hostel “Hostel4u” es más que adecuada, por cierta salvedad de un problema de programación insignificante, pero que por otra parte ofrece al usuario una experiencia muy intuitiva y amigable desde el primer momento, con un contenido claro y conciso de todo lo que ofrece este hostel, y una buena fluidez en el mismo a la hora de navegar por la website, realizar reservas,y contactar con el personal del hostel entre otras cosas. De las pocas cosas que añadiríamos a la plataforma sería corregir ese problema simple de programación, tratar de añadir más actividades que ofrecer a sus huéspedes, añadir valoraciones de clientes que hayan pasado por el hostel e intentar expandir la forma de comunicarse con potenciales clientes a través de ampliar el número de idiomas en los que la website pueda mostrar su contenido.


## Paso 2. UX Design  


![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid / EMpathy map / POV
----
* **Malla receptora de información:** A continuación se puede ver la malla receptora de información que hemos realizado en base a la experiencia que han tenido nuestros personajes (Kumiko y Steven).

![Malla receptora de información](P2/img/MallaReceptoraDeInformacion.png)

![Método UX](img/ScopeCanvas.png) 2.b ScopeCanvas
----

En nuestra propuesta de valor presentamos una mejora a la página principal del Hostel añadiendo un microsite en el que aparezcan actividades a realizar. Desde este microsite se puede filtrar por distintos tipos de actividades seugún su categoría y además se pueden reservar las que son organizadas por el Hostel. También se da informa de las actividades ajenas al hostel con información de interés y con enlaces a las páginas oficiales para poder realizar sus reservas si los clientes lo estiman oportuno.

* ScopeCanvas

![Propuesta de valor](P2/img/PropuestaDeValor.png)

![Método UX](img/Sitemap.png) 2.b Tasks analysis 
-----

En nuestra web podemos encontrar usuarios de diversos perfiles, pero lo que creemos que pueden entrar a ver nuestra web pueden ser los sisguientes:
    
- **Jóvenes:** Son las personas más jóvenes. Pueden ser mayores de edad o todavía ser menores de edad.

- **Familias:** Personas convivientes, que suele estar formada por unos padres y unos hijos.

- **Amigos:** Grupo de conocidos que viajan juntos o que se encuentran en el destino para disfrutar de unos días en compañía.

- **Parejas:** Personas jóvenes o adultas que tienen una relación sentimental.

A continuación podemos ver la User Task Matrix creada a partir de los usuarios descritos anteriormente.

| | Jóvenes | Familias | Amigos | Parejas |
| -- | -- | -- | -- | -- |
| Reservar una actividad | H | H | H | H |
| Buscar con filtro | M | H | L | M |
| Hacer una valoración | L | H | M | H |
| Consultar valoraciones | M | H | M | H |
| Pago conjunto | M | H | L | H |
| Compartir una actividad | H | L | H | L |
| Búsqueda de ofertas | H | L | H | M |
| Contactar con la ayuda | M | H | L | M |
| Consultar información adicional | M | H | M | H |
| Conocer personas | H | L | H | L |


Nivel de uso: H (alto), M (medio), L (bajo)


![Método UX](img/labelling.png) 2.c IA: Sitemap + Labelling 
----

* Sitemap 

![SiteMap](P2/img/SiteMap.png)

* Labelling 

| Término | Significado |
| -- | -- |
| Home | Vuelta a la página principal del Hostel |
| Agenda | Organización de las actividades con respecto a los días (método de búsqueda y organización) |
| Actividades | Actividades organizadas por el Hostel o con facilidades ofrecidas por inferencia del hostel (ejemplo: descuento en una actividad gastronómica por acuerdo del hostel con el bar o restaurante) |
| en Hostel | Actividades que se realizan en el propio hostel (pueden ser actividades gastronómicas o de ocio) |
| en Ciudad | Actividades que se realizan en la ciudad de Granada (pueden ser actividades gastronómicas, de ocio, o tours por la ciudad) |
| Gastronomía | Eventos de comida típica española y granadina y otro tipo de comida tanto en el hostel como fuera (ejemplos: ruta del vino, ruta de la cerveza, ruta de tapas, comidas internacionales en el hostel, bbq en el hostel.... ) |
| Ocio | Actividades de Ocio para mejorar la experiencia del viaje (Ejemplos: evento de música electrónica en el hostel, concierto de flamenco concertado en las cuevas del Sacromonte...) |
| Tours | Actividades culturales de interés de la ciudad (Ejemplos: tour por las zonas más turísticas de Granada, excursión a Sierra Nevada...) |
| Opiniones y Valoraciones | Opiniones de clientes que han realizado alguna de las actividades ofreciendo sus experiencias y valoraciones al respecto. |
| Reserva | Proceso de reservar una actividad dependiendo de la disponibilidad de la misma |
| Otras Actividades | Actividades ajenas al hostel que se ponen en conocimiento de los clientes para un mayor conocimiento de las posibilidades de la ciudad |
| Contacto | Opciones de contacto para informarse con mayor profundidad sobre las actividades o realizar posibles dudas al respecto |

![Método UX](img/Wireframes.png) 2.d Wireframes
-----

![1-Inicio](P2/img/1-Inicio.png)

![2-Agenda](P2/img/2-Agenda.png)

![3-Actividades-Hostel](P2/img/3-Actividades-Hostel.png)

![4-Actividades-Ciudad](P2/img/4-Actividades-Ciudad.png)

![5-Gastronomía-Ciudad](P2/img/5-Gastronomía-Ciudad.png)

![6-Ocio-Ciudad](P2/img/6-Ocio-Ciudad.png)

![7-Tours-Ciudad](P2/img/7-Tours-Ciudad.png)

![8-Actividades-En-Hostel](P2/img/8-Actividades-En-Hostel.png)

![9-Ocio-Hostel](P2/img/9-Ocio-Hostel.png)

![10-Gastronomia-Hostel](P2/img/10-Gastronomia-Hostel.png)

![11-Reserva-Concierto](P2/img/11-Reserva-Concierto.png)

![12-Otras-Actividades](P2/img/12-Otras-Actividades.png)


## Paso 3. Mi UX-Case Study (diseño)


![Método UX](img/moodboard.png) 3.a Moodboard
-----


>>> Plantear Diseño visual con una guía de estilos visual (moodboard) 
>>> Incluir Logotipo
>>> Si diseña un logotipo, explique la herramienta utilizada y la resolución empleada. ¿Puede usar esta imagen como cabecera de Twitter, por ejemplo, o necesita otra?


![Método UX](img/landing-page.png)  3.b Landing Page
----


>>> Plantear Landing Page 

![Método UX](img/guidelines.png) 3.c Guidelines
----

>>> Estudio de Guidelines y Patrones IU a usar 
>>> Tras documentarse, muestre las deciones tomadas sobre Patrones IU a usar para la fase siguiente de prototipado. 

![Método UX](img/mockup.png)  3.d Mockup
----

>>> Layout: Mockup / prototipo HTML  (que permita simular tareas con estilo de IU seleccionado)


![Método UX](img/caseStudy.png) 3.e ¿My UX-Case Study?
-----


>>> Publicar my Case Study en Github..
>>> Documente y resuma el diseño de su producto en forma de video de 90 segundos aprox


## Paso 4. Evaluación 


![Método UX](img/ABtesting.png) 4.a Caso asignado
----


>>> Breve descripción del caso asignado con enlace a  su repositorio Github


![Método UX](img/usability-testing.png) 4.b User Testing
----

>>> Seleccione 4 personas ficticias. Exprese las ideas de posibles situaciones conflictivas de esa persona en las propuestas evaluadas. Asigne dos a Caso A y 2 al caso B
 

| Usuarios | Sexo/Edad     | Ocupación   |  Exp.TIC    | Personalidad | Plataforma | TestA/B
| ------------- | -------- | ----------- | ----------- | -----------  | ---------- | ----
| User1's name  | H / 18   | Estudiante  | Media       | Introvertido | Web.       | A 
| User2's name  | H / 18   | Estudiante  | Media       | Timido       | Web        | A 
| User3's name  | M / 35   | Abogado     | Baja        | Emocional    | móvil      | B 
| User4's name  | H / 18   | Estudiante  | Media       | Racional     | Web        | B 


![Método UX](img/Survey.png). 4.c Cuestionario SUS
----

>>> Usaremos el **Cuestionario SUS** para valorar la satisfacción de cada usuario con el diseño (A/B) realizado. Para ello usamos la [hoja de cálculo](https://github.com/mgea/DIU19/blob/master/Cuestionario%20SUS%20DIU.xlsx) para calcular resultados sigiendo las pautas para usar la escala SUS e interpretar los resultados
http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)
Para más información, consultar aquí sobre la [metodología SUS](https://cui.unige.ch/isi/icle-wiki/_media/ipm:test-suschapt.pdf)

>>> Adjuntar captura de imagen con los resultados + Valoración personal 


![Método UX](img/usability-report.png) 4.d Usability Report
----

>> Añadir report de usabilidad para práctica B (la de los compañeros)



>>> Valoración personal 


>>> ## Paso 5. Evaluación de Accesibilidad  (no necesaria)


>>> ![Método UX](img/Accesibility.png)  5.a Accesibility evaluation Report 
>>>> ----

>>> Indica qué pretendes evaluar (de accesibilidad) sobre qué APP y qué resultados has obtenido 

>>> 5.a) Evaluación de la Accesibilidad (con simuladores o verificación de WACG) 
>>> 5.b) Uso de simuladores de accesibilidad 

>>> (uso de tabla de datos, indicar herramientas usadas) 

>>> 5.c Breve resumen del estudio de accesibilidad (de práctica 1) y puntos fuertes y de mejora de los criterios de accesibilidad de tu diseño propuesto en Práctica 4.



## Conclusión final / Valoración de las prácticas


>>> (90-150 palabras) Opinión del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos  













