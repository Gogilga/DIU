/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU3.SS-Team";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/Gogilga/DIU";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Kumiko Tani",
				Photo: "Persona1.jpg",
				Quote: "Cuando no sepas dónde ir, sigue el perfume de un sueño.",
				Age: 25,
				Occupation: "Compositora de canciones",
				Family: "Con pareja desde hace 3 años",
				Location: "Lewis Street (Chicago)",
				Character: "Le gusta disfrutar de las melodías",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Ir a comer comidas de muchas culturas y sitios", "Lograr trabajar para grandes artistas"],
				Frustrations: ["A veces tiene cortos periodos de tiempo de poca inspiración, pero en los lugares correctos y con las personas correctas todo se soluciona", "Le gustaría poder viajar más y conocer más sitios"],
				Bio: "Es de Tokio, reside en EEUU y vino a Granada hace 2 años para estudiar la ciudad para una de las canciones que tenía encargada, desde entonces se enamoró de la ciudad y quiere venir más a menudo para inspirarse y disfrutar. LLeva 5 años escribiendo canciones.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "LLeva un tiempo preocupada y bloqueada por lo que quiere desconectar e intentar recuperar su inspiración visitando Granada",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Steven Williams",
				Photo: "Persona2.jpg",
				Quote: "Marte está allí, esperando ser alcanzado",
				Age: 13,
				Occupation: "Estudiante en el instituto canadiense George Harvey, Toronto",
				Family: "Convive con sus padres y tiene una hermana estudiando su último año de universidad",
				Location: "Strathnairn Avenue (Toronto)",
				Character: "Le gusta disfrutar de las comidas en familia y esquiar",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Jugar, disfrutar de cada momento de la forma más intensa posible.", "Recorrer el mundo.", "Ser astronauta.", "Descubrir vida inteligente fuera de la Tierra."],
				Frustrations: ["Le gusta una chica de su clase, pero no se atreve a dar el paso.", "Quiere tener un perro, pero sus padres no quieren animales en casa.", "Le gustan los videojuegos, pero tiene horarios de resticción para los mismos.", "Quiere ver más a su hermana, pero debido a que estudia en una universidad de otra ciudad no es posible."],
				Bio: "Es de Canadá, reside en Toronto y estudia en el instituto. Es un chico muy inteligente, le gusta la astronomía, la ciencia ficción y la ciencia. Quiere ser astronauta y ver su casa desde el espacio.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Quiere volver a estar con su familia todos juntos (incluida la hermana que estudia lejos de casa). Quiere sorprenderlos organizando un viaje familiar bonito, y para ello ha buscado un sitio que ofrezca muchas actividades para el ocio familiar (visitar el observatorio de Sierra Nevada, esquiar, cultura, playa, historia y gastronomía)" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])