function getColor(colorNumber)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(valor){
    let valor1=parseInt(valor)
    
    for (let i=0;i<valor1;i++){
        let numero=Math.floor(Math.random()*4)+1;
        
       console.log(getColor(numero));
    }
	//your loop here
    
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

