function fun() {
    var l = [];
    var n = $("#name").val();
    var e = $("#email").val();
    var p = $("#pname").val();
    var g = $('input[name="type"]:checked').val();;
    var selected = new Array();
    $("input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
    });
    var k = '<div class=s1>'+
    '<table><tr><td><p class="p"><strong>Name </strong>:'+
    `${n}`+'</p><p class="p"><strong>Email </strong>: '+
    `${e}`+'</p><p class="p"><strong>Project Name </strong>:'+
    `${p}`+'</p><p class="p"><strong>Project Type</strong> : '+
    `${g}`+'</p><p class="p"><strong>Skills</strong> : '+
    `${selected}`+'</td></tr></table></div>';
    $('#ss').append(k);
    $("#fo").trigger("reset");
}