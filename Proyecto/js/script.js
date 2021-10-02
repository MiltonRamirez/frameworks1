document.getElementById('temas').addEventListener('change',temaSeleccionado);

function temaSeleccionado(){
    /*document.getElementById('if').style.display='none';
    document.getElementById('while').style.display='none';
    document.getElementById('for').style.display='none';
    document.getElementById('switch').style.display='none';*/

    var articulos = document.getElementsByTagName('article');
    for (var i=0; i< articulos.length;i++){
        articulos[i].style.display='none';

    var opcion= document.getElementById('temas').value;
   // console.log(opcion);
   document.getElementById(opcion).style.display='block';

}

document.getElementById('aumento').addEventListener('click', function(){si()});

var si = function(){
    var nume = parseInt(document.getElementById('n1').value);
    var nu=0;
    var num=0;
    var datos;
    if (nume<10) {
        if (nume<5) {
            if (nume<3) {
              nu=(40000*3)/100;
              num=40000+nu;  
            } else {
                nu=(40000*5)/100;
                num=40000+nu;
            }
        } else {
            nu=(40000*7)/100;
            num=40000+nu;
        }
    } else {
        nu=(40000*10)/100;
        num=40000+nu;
    }
    datos='Tu sueldo ha aumentado: '+nu.toString();
    document.getElementById('resultado').innerHTML=datos;
};




document.getElementById('multiplica').addEventListener('click', function(){whi()});

var whi = function(){
    var nume = parseInt(document.getElementById('n2').value);
    var nume1 = parseInt(document.getElementById('n3').value);
    var i=0
    var nume2=nume1+1;
    var datos;
    var lo="";
    while (i<nume2) {
        datos=nume.toString()+' * '+i.toString()+' = '+(nume*i)+'</br>';
        console.log(datos);
        
        lo=lo+datos;
        document.getElementById('resultado').innerHTML=lo;
        i++;
    }
};

document.getElementById('muestra').addEventListener('click', function(){fo()});

var fo = function(){
    var nume = parseInt(document.getElementById('n4').value);
    var nume1 = parseInt(document.getElementById('n5').value);
    var datos;
    var lo=""
    var nume2=nume1+1;
    for ( var i = nume; i < nume2; i++) {
        datos=i.toString()+', ';
        console.log(datos)

        lo=lo+datos;
        document.getElementById('resultado').innerHTML=lo;
    }
}

document.getElementById('mostrar').addEventListener('click', function(){swi()});

var swi = function(){
    var nume = parseInt(document.getElementById('n6').value);
    var datos;
    switch (nume) {
        case 0:
            datos='No hay establecido un valor definido para el tipo de bomba.';
            break;
        case 1:
            datos='La bomba es una bomba de agua';
            break;
        case 2:
            datos='La bomba es una bomba de gasolina';
            break;
        case 3:
            datos='La bomba es una bomba de hormigón';
            break;
        case 4:
            datos='La bomba es una bomba de pasta alimenticia';
            break;
        default:
            datos='No existe un valor válido para tipo de bomba';
            break;
    }
    document.getElementById('resultado').innerHTML=datos;
}}

document.getElementById('datos').addEventListener('click',function(){dato()});

var dato = function(){
    var texto = document.getElementsByClassName('texto');
    var valores = new Array();
    console.log(texto);

    for(var i=0 ; i < texto.length ; i++)
        valores[i] = String(texto[i].value);
        valores[i]=

    console.table(valores);
    
    var usuario = {
        
        datosp:{
            nombreU: 'Universidad Tecnólogica de León',
            carrera: 'Entornos Virtuales y Negocios Digitales',
            grupo: 'EVN402',
            turno: 'Matutino',
            materia: 'Frameworks',
            Hobbie: 'Magia',
            SignoZ: 'Capricornio',
            ComidaFav: 'Tacos & Wings',
        },
        
        nombre: valores[0],
        apellido: valores[1],
        numero: valores[2],
    };

    var datos = 'Nombre: ' + usuario.nombre.toString() +
                '<br/> Apellido: ' + usuario.apellido +
                '<br/> Numero Telefonico: ' + usuario.numero +
                '<br/> Universidad: ' + usuario.datosp.nombreU +
                '<br/> Carrera: ' + usuario.datosp.carrera +
                '<br/> Hobbie: ' + usuario.datosp.Hobbie +
                '<br/> Signo Zodiacal: ' + usuario.datosp.SignoZ +
                '<br/> Comida Favorita: ' + usuario.datosp.ComidaFav;

    document.getElementById('resultado').innerHTML = datos;
};

let respu,respue, respues,respuest,respuesta;
document.getElementById("resp").addEventListener('click',Opcio);
function Opcio(){
	if (document.getElementById("r1").checked){
		 respu=document.getElementById("r1").value;
		//document.getElementById('mensaje').innerHTML=respu;
	console.log(respu);
    
	}
	if (document.getElementById("r2").checked){
		 respu=document.getElementById("r2").value;
		//document.getElementById('mensaje').innerHTML=respu;
	console.log(respu);
    
	}
	if (document.getElementById("r3").checked){
		 respu=document.getElementById("r3").value;
		//document.getElementById('mensaje').innerHTML=respu;
	console.log(respu);
    
	}
}
	//segunda pregunta
	document.getElementById("respe").addEventListener('click',Opcion);
function Opcion(){
	if (document.getElementById("r4").checked){
		 respue=document.getElementById("r4").value;
		//document.getElementById('mensaje2').innerHTML=respue;
	console.log(respue);
    
	}
	if (document.getElementById("r5").checked){
		 respue=document.getElementById("r5").value;
		//document.getElementById('mensaje2').innerHTML=respue;
	console.log(respue);
    
	}
	if (document.getElementById("r6").checked){
		 respue=document.getElementById("r6").value;
		//document.getElementById('mensaje2').innerHTML=respue;
	console.log(respue);
    
	}
}
	//tercer pregunta
	document.getElementById("respet").addEventListener('click',Opcione);
function Opcione(){
	if (document.getElementById("r7").checked){
		 respues=document.getElementById("r7").value;
		//document.getElementById('mensaje3').innerHTML=respues;
	console.log(respues);
    
	}
	if (document.getElementById("r8").checked){
		 respues=document.getElementById("r8").value;
		//document.getElementById('mensaje3').innerHTML=respues;
	console.log(respues);
    
	}
	if (document.getElementById("r9").checked){
		 respues=document.getElementById("r9").value;
		//document.getElementById('mensaje3').innerHTML=respues;
	console.log(respues);
    
	}
	
}

//cuarta pregunta
	document.getElementById("respets").addEventListener('click',Opciones);
function Opciones(){
	if (document.getElementById("r10").checked){
		 respuest=document.getElementById("r10").value;
		//document.getElementById('mensaje4').innerHTML=respuest;
	console.log(respuest);
    
	}
	if (document.getElementById("r11").checked){
		 respuest=document.getElementById("r11").value;
		//document.getElementById('mensaje4').innerHTML=respuest;
	console.log(respuest);
    
	}
	if (document.getElementById("r12").checked){
		 respuest=document.getElementById("r12").value;
		//document.getElementById('mensaje4').innerHTML=respuest;
	console.log(respuest);
    
	}
	
}

//quinta pregunta
	document.getElementById("respetsa").addEventListener('click',Opcioness);
function Opcioness(){
	if (document.getElementById("r13").checked){
		 respuesta=document.getElementById("r13").value;
		//document.getElementById('mensaje5').innerHTML=respuesta;
	console.log(respuesta);
    
	}
	if (document.getElementById("r14").checked){
		 respuesta=document.getElementById("r14").value;
		//document.getElementById('mensaje5').innerHTML=respuesta;
	console.log(respuesta);
    
	}
	if (document.getElementById("r15").checked){
		 respuesta=document.getElementById("r15").value;
		//document.getElementById('mensaje5').innerHTML=respuesta;
	console.log(respuesta);
    
	}

	
}





function RRssdd(){
    var dd=
    '<center><span >'+
    '<section >'+
        '<p style="font-size:2.2rem;text-align:center;width:70%;color: white;font-size: 2.2rem;font-style: Time New Roman;margin-bottom: 50px;margin-top: 25px;background-color: #00C197;width: 100%;height:100px;">Cine y Peliculas.'+ '<br><br>RESULTADOS</p>'+
        '<p >Género Preferido</p>'+
        '<p >'+respu+'</p><br><br>'+

        '<p  >Director Preferido</p>'+
        '<p >'+respue+'</p><br><br>'+

        '<p  >¿Qué tipo de cine disfrutas más?</p>'+
        '<p >'+respues+'</p><br><br>'+

        '<p  >¿Donde prefieres ver peliculas?</p>'+
        '<p >'+respuest+'</p><br><br>'+

        '<p>¿Qué disfrutas ver más?</p>'+
        '<p >'+respuesta+'</p><br><br>'+
   '</section>'+
'</span></center>';
    document.getElementById('resultado').innerHTML = dd;
}

document.getElementById('crear').addEventListener('click',anadir);
 function anadir(){
    let nume = parseInt(document.getElementById('cu').value);
    let i;
    let lo="";
    let bgg=document.getElementById('bg').value;
    document.getElementById('resultado').style.borderColor="transparent";
    
    for (i = 0 ; i < nume ; i++) {
        let datos='<article style="height:100px;width:100px;background-color:'+bgg+';margin-left:10px;float:left;margin-bottom:10px;"></article>';
        
        console.log(nume);
        lo=lo+datos;
        document.getElementById('resultado').innerHTML=lo;
        
    }
    
}

