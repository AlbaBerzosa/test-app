$(document).ready(function(){
    $('#wr-block2').hide();
    getMenuElements();


});

function sendAjax (url, headers, data, fCallback){
    $.ajax({
        url: url,
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        dataType: 'json',
        headers: headers,
        data: JSON.stringify(data)
    }).done(function (response) {
        if (response){
            fCallback(response);
        }
        /*        else{
         showError ('Se producido un error en la conexión con el servidor, inténtelo de nuevo más tarde.');
         }*/
    })
}

function getMenuElements() {
    var url = './data/menu.json';
    var headers = '';
    var data = '';
    sendAjax(url,headers,data,setMenuElements);
}

function setMenuElements(obj) {
    console.log (obj);
    if(obj.data != null){
        var data = obj.data;
        var str ="";
        if (obj.data != null)
            for (var i = 0; i < data.length; i++) {
                str += "<li data-target='wr-block" + (i+1) + "'><a href='#'>" + data[i].title +"</a></li>";
                console.log(str);
            }
        $("#main-menu").append(str);
    }
    else{

    }

    $('#main-menu li').on('click', function(){
        var target = $(this).attr('data-target')
        console.log('li data-target: ' + target);

        $('[id^="wr-block"]').each(function (i, el){
            if($(el).attr('id') == target){
                console.log ('match!');
                $('[id^="wr-block"]').slideUp();
                $(this).slideDown();
            }
        })
    })
}