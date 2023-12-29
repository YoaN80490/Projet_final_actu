const change = (int) => {
    if ($('#infosup'+int).is(':visible')) {
        $('#infosup'+int).hide();
        document.getElementById('arrow'+int).style.WebkitTransitionDuration='0.75s';
        document.getElementById('arrow'+int).style.rotate ='0deg';
    
    }
    else {
        $('#infosup'+int).show();
        document.getElementById('arrow'+int).style.WebkitTransitionDuration='0.75s';
        document.getElementById('arrow'+int).style.rotate ='180deg';
    }
}