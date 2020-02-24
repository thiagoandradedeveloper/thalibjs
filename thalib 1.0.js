Number.prototype.formatCoin = function(local){

    var separadorDecimal = (local == 'en-US') ? "." : ",";
    
    //ajusta numero de casas decimais
    var valorTotal = this.toLocaleString(local);

    for(var i = 1; i < 4; i++){

        if(valorTotal.charAt(valorTotal.length*1-(i+1)) == separadorDecimal){
        
            if(i == 1) valorTotal += "0";
            break;
        }
    }
    
    if(valorTotal.indexOf(separadorDecimal) == -1) valorTotal += (separadorDecimal + "00");
    
    return valorTotal;
}

// Inserir elemento em um array na posicao especificada
Array.prototype.insertElement = function(pos, valor){
	
	valorFinal = this.splice(pos);
	
	this.push(valor);
	
	for(var i = 0; i < valorFinal.length; i++)			
		this.push(valorFinal[i]);
	
	return this;
}

// Delete espa�os vazios
omit_spc = del_space = suprimir_espacos = function(_varint){
	while( (_varint.indexOf(" ")) != -1 ){ _varint = _varint.replace(" ", ""); }
	return _varint;
}

// Simplifica��o do document.write
String.prototype.echo = function(){ document.write(this); }

String.prototype.replaceAll = function(isso_,porIsso_){

	var text_ = this;
	
	while( (text_.indexOf(isso_)) != -1 ) text_ = text_.replace(isso_,porIsso_);

	return text_;

}

// remove um conjunto de caracteres em um string
String.prototype.blockString = function(_blobk){

	var valueReturn = this;

	if(_blobk == "123") { _blobk = "0123456789".split(''); }
	if(_blobk == "abc") { _blobk = "abc�defghijklmnopqrstuvwxyzABC�DEFGHIJKLMNOPQRSTUVWXYZ".split(''); }
	if(_blobk == "@@@") { _blobk = "-/\_[]{}()@#$%�*\'\+,.^:;?~!=�`��".split(''); }

	for(var _i = 0; _i < _blobk.length; _i++){
		valueReturn = valueReturn = valueReturn.replaceAll(_blobk[_i],"");
	}

	return valueReturn;
}

// converte uma variavel
Object.prototype.convertTo = function(_varint){

	var returnValue = "undefined";

	if(_varint == "array"){  returnValue = [this]; }
	if(_varint == "string"){   returnValue = this.toString(); }
	if(_varint == "str"){   returnValue = this.toString(); }
	if(_varint == "float"){    returnValue = parseFloat(this); }
	if(_varint == "integer"){  returnValue = parseInt(this); }
	if(_varint == "int"){  returnValue = parseInt(this); }

	return returnValue;

}
// nimero dandomico com uma faixa
random = function(val1,val2,val4){

	val3 = val2 - val1;

	if(val4)
		return ( ( Math.random() * ( val3 + 1 ) ) + val1 ) . toDecimals(0) * 1;
	else
		return ( ( Math.random() * ( val3 + 1 ) ) + val1 ) * 1;

}

// Confirma��o para formularios
Object.prototype.confSub = function(_varint1){

	this.onsubmit = function(){

		var _conf = confirm(_varint1);

		if(_conf)
			return true;
		else
			return false;

	}
}
