
function binarytoDecimal(number){
	var addValues = 0
	for(var i = 0; i<number.length; i++){
		var NumberIndex = number.length - i -1
		 var PNumberIndex = 2**NumberIndex
		var answer = PNumberIndex*number[i]
		var addValues = addValues+answer
	} 
	$('#bin2').val(addValues);

	console.log( 'Your Binary number ==>  ' + number + ' To Decimal = ' +  addValues)
}

// Binary to decimal ends 

$("#btn1").on('click', function(){
	binarytoDecimal($('#bin1').val())
})


function decimaltoBinary(number){
	var answer = []
	var newAnswer = " "
	for (i=number; i>0; i=Math.floor(i/2)){
		answer.push(i%2);
	}
	for (var i=1; i<=answer.length; i++){
	var r = answer[answer.length-i]
     newAnswer+=r
}
$('#de2').val(Number(newAnswer));
//console.log('Your Decimal number ==>  ' + number + ' To binary = ' + newAnswer)
}
// decimaltoBinary(12)
$("#btn2").on('click', function(){
     decimaltoBinary($('#de1').val())
})

//END




function decimaltoHexa(number){
	var answer = []
	var newAnswer1 = " "
	for (i=number; i>0; i=Math.floor(i/16)){
		answer.push(i%16);
	}
	for (var i=1; i<=answer.length; i++){
	var r = answer[answer.length-i]
newAnswer1+=r
}
$('#dec2').val(Number(newAnswer1))
// console.log( 'Your Decimal number ==>  ' +   number + ' To HexaDecimal = ' + newAnswer)
}

$("#btn3").on('click', function(){
     decimaltoHexa($('#dec1').val())
})











function toDecimal(name){
	var A = 10
	var B = 11
	var C = 12
	var D = 13
	var E = 14
	var F = 15
	var arr = []
	for(var i=0; i<name.length; i++){
		if(name[i]=='A'){
			arr.push(A)
		}
		else if (name[i]=='B'){
			arr.push(B)
		}
		else if (name[i]=='C'){
			arr.push(C)
		}
		else if (name[i]=='D'){
			arr.push(D)
		}
		else if (name[i]=='E'){
			arr.push(E)
		}
		else if (name[i]=='F'){
			arr.push(F)
		}
		else{arr.push(name[i])}
	
	}
var arr = arr.map(Number)
var addValues3 = 0
for(var i=0; i<arr.length; i++){
	var NumberIndex = arr.length-i-1
	var PNumberIndex = 16**NumberIndex
	var answer = PNumberIndex*arr[i]
	var addValues3 = addValues3+answer
}
$('#hex2').val(addValues3)
console.log( "Your hextoDecimal number ==>  " + name + " To Decimal = " + addValues3)
}
$("#btn4").on('click', function(){
     toDecimal($('#hex1').val())
})


// hexaDecimal to decimal END
// decimaltoHexa(921)
// array = []


function catalan(num){
	var array = [];
	var multipleir = 1;
	 var newMulti = 2*(num);
	 for(var i=0; i<=newMulti; i++){
	 	var multiples = newMulti-i
	 	if ( multiples == 0){
	 		array.push(multiples)

	 	}
	 	
	 	else{var multipleir = multipleir*multiples
          }
	 	
	 }
	 
	 var newAdd = num+1;
	 var newAdd1 = 1;
	 for( var b=0; b<=newAdd; b++){
	 	var newAdd2 = newAdd-b;
	 	if(newAdd2==0){
	 		array.push(newAdd2)
	 	}
	 	else{newAdd1 = newAdd1 * newAdd2 }
	 }
	 	var numself = 1;
	 	for(var c=0; c<=num; c++){
	 		var newself = num-c;
	 		if(newself==0){
	 			array.push(newself)
	 		}
	 		else { numself = numself*newself}
	 	}


	 var times = newAdd1 * numself;
	 var answer = multipleir/times;
	 console.log("Your Answer is ==  " + answer)

}


catalan(7)

