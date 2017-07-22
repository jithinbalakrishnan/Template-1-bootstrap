/**
 * Created by Jithin Balakrishnan on 17-07-2017.
 */
$(document).ready(function(){
    $("#btn-work").click(function(){
        $("#art").toggle(1000);
    });

    //$("#btn-work").click(function(){
    //    $("#art").show();
    //});
    $(".button-1").click(function(){
        $("#p-a").slideToggle();$("#p-b").slideToggle();$("#p-c").slideToggle();
        $("#h-a").slideToggle();$("#h-b").slideToggle(); $("#h-c").slideToggle();
        $(".square").slideToggle(3000);
    });
});
