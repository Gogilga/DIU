/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU3.SS-Team";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/Gogilga/DIU";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Kumiko Tani",
                Photo: "Persona1.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere preparar un viaje para relajarse e inspirarse",
                touch1: "agenda",
                feel1: "4",
                con1: "ver que días serían los mejores para irse, ya que no tenga que estar en alguna entrevista con algún artista",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet vuelos y lugares donde dormir",
                touch2: "ordenador",
                feel2: "2",
                con2: "hay muchos sitios en los que hospedarse con un rango amplio de precios, pero ella no quiere gastar mucho dinero en el alojamiento",
                ima2: "cartoon-looking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Elige un hostel por su localización",
                touch3: "ordenador",
                feel3: "3",
                con3: "Está preocupada por como serán las instalaciones del lugar, pues quiere un lugar moderno pero con toques decorativos tan característicos de la zona",
                ima3: "cartoon-deciding.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Entra en la web para buscar información del lugar",
                touch4: "ordenador",
                feel4: "2",
                con4: "Comprueba las diferentes actividades que se pueden hacer en la ciudad, pero comprueba que la página del alojamiento no las especifica ni tampoco da la opción de poder reservalas",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Pregunta a su novio que le parece el lugar",
                touch5: "hablar",
                feel5: "2",
                con5: "Habla con su novio y no le parece muy bien compartir habitación con muchas personas desconocidas",
                ima5: "cartoon-talking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva en una habitación pequeña en la que solamente hay dos literas y un baño privado",
                touch6: "ordenador",
                feel6: "5",
                con6: "Ha convencido a su novio para ir allí porque ella necesita conocer gente como inspiración musical",
                ima6: "cartoon-happy.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Steven Williams",
                Photo: "Persona2.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje en familia para poder estar todos juntos de nuevo y disfrutar lo máximo posible",
                touch1: "agenda",
                feel1: "5",
                con1: "Tiene que ver la disponibilidad de sus padres con sus trabajos y su hermana con la universidad, y quiere buscar un lugar que aglutine sus aficiones y las aficiones de su familia (teniendo en cuenta que su madre lleva tiempo hablando de que quería ver España)",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Investiga largo y tendido por internet y llega a la conclusión de que la mejor opción es Granada debido a que aglutina todas las aficiones de los componentes de su familia. Además de que tiene buen acceso mediante el aeropuerto internacional de Málaga y una conexión corta en bus",
                touch2: "portátil (navegador)",
                feel2: "4",
                con2: "Justo cuando su familia tiene disponibilidad, es temporada alta en Granada, por lo que le cuesta encontrar alojamiento céntrico y bonito",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Consigue realizar una reserva en un hotel bonito, pero le cancelan la reserva por un acontecimiento deportivo muy importante inesperado por el que se reserva el hotel entero para mayor privacidad",
                touch3: "portátil (navegador)",
                feel3: "1",
                con3: "Piensa que le han estafado y le han tomado el pelo",
                ima3: "cartoon-PCcrying.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Después de lo acontecido con el hotel, se muestra reticente con los hoteles y prueba a buscar opciones en hostales y hostels",
                touch4: "portátil (navegador)",
                feel4: "3",
                con4: "Sobre todo hay oferta de literas para compartir con gente y él lo que busca es algo más de intimidad para su familia y él",
                ima4: "cartoon-looking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Consigue encontrar y reservar con un hostel que le ofrece dos habitaciones, una para sus padres y otra para su hermana y él, además de una excelente localización, zonas comunes muy decentes y otros servicios ",
                touch5: "Móvil (webapp)",
                feel5: "2",
                con5: "Debe de informar a la familia acerca de su viaje sorpresa antes de lo previsto debido a que hay que realizar parte del pago antes de pasadas 48 horas de la reserva o esta se perderá y él no tiene recursos monetarios",
                ima5: "cartoon-phone.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar en fechas donde su familia está disponible y en una ciudad que ofrece mucho ocio y todo tipo de actividades, pero con dificultades para llegar a conseguirlo",
                touch6: "Ordenador (reserva OK)",
                feel6: "3",
                con6: "Tuvo que contárselo a su familia, y aunque todo salió bien, no era como quería darle la sorpresa a su fmailia ni como quería que sucediesen las cosas",
                ima6: "cartoon-deciding2.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



