
function button(self_id){
    device_type = navigator.userAgent.replace(')','(').split("(")[1];
    console.log(device_type);
    document.getElementById(self_id).innerHTML = device_type;
}