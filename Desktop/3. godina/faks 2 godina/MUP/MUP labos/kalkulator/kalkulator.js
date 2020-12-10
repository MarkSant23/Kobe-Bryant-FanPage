var ispis = (obj,string) => {
	if(obj.value ==null || obj.value=='0')
		obj.value = string
	else
		obj.value += string
}
var val = 0.0;
var postotak = (input) => {
	val = input.value;
	input.value += '%';
}

var del = (obj) => {
	obj.value = obj.value.substring(0,obj.value.length -1) 
}

var provjera = (eql) => {
	for(var i = 0; i < eql.length; i++){
		var c = eql.charAt(i);
		if(c<'0' || c>'9'){
			if(c!='+'&&c!='-'&&c!='*'&&c!='/'&&c!='%'&&c!='('&&c!=')' && c!='.') {
				alert("Ne valjani ulaz!")
				return false
				}
			}	
		}
		return true
}
var prebroji = (form) =>{
	form.display.value = eval(form.display.value);
}

var sin = (form) =>{
	form.display.value=Math.sin(form.display.value);
}

var cos = (form) =>{
	form.display.value=Math.cos(form.display.value);
}

var tan = (form) =>{
	form.display.value=Math.tan(form.display.value);
}

var log = (form) =>{
	form.display.value=Math.log(form.display.value);
}

var eksponent = (form) =>{
	form.display.value=Math.exp(form.display.value);
}

var sqrt =(form) =>{
	form.display.value=Math.sqrt(form.display.value);
}

var kvadriranje = (form) =>{
	form.display.value = eval(form.display.value) * eval(form.display.value);
}
