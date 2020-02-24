
Number.prototype.formatCoin = function(local){

    var separadorDecimal = (local == 'en-IN') ? "." : ",";
    
    //ajusta numero de casas decimais
    var valorTotal = this.toLocaleString(local); //'pt-BR' or 'en-US'

    for(var i = 1; i < 4; i++){
    
        if(valorTotal.charAt(valorTotal.length*1-(i+1)) == separadorDecimal){
        
            if(i == 1) valorTotal += "0";
            break;
        }
    }
    
    if(valorTotal.indexOf(separadorDecimal) == -1) valorTotal += (separadorDecimal + "00");
    
    return valorTotal;
    
    }