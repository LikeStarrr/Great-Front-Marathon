function ChangeStrToVertical(str){
    if (str){
        str[0] === 'м' ? console.log(str[0].toUpperCase()) : console.log(str[0])     
        str.length > 10 ? (str = str.slice(1,10)) : (str = str.slice(1, str.length))
        for (let char of str){
            console.log(char);
        }   
    } else {
        console.log ("введите строку");
    }
}


//ChangeStrToVertical('марафончикчикчик');
//ChangeStrToVertical('железобетонный');
ChangeStrToVertical('мамамамамамамамама');
//ChangeStrToVertical('');
//ChangeStrToVertical('ммм');

