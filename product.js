
// to activate service tab  //////////////////

function actvPrdtfunc(a) {
    
    // sub navbar

    let nav = document.getElementById("srvcnavlst");
    let i = 1;
    let n = 6;                  // no. of services ;
    for (const chld of nav.children) {
        if (i == a) {
            chld.className = "activeProduct";
        }
        else {
            chld.className = "nonactiveProduct";
        }
        i = i + 1;
    }

    // to hide content

    for (let j = 1; j <= n; j++) {
        let srvctxt = "service";
        let srvcnm = srvctxt + String(j);
        let srvc = document.getElementById(srvcnm);
        srvc.style.visibility = "hidden"
        srvc.style.display = "none";
    }

    // to display content

    let srvctxt = "service";
    let srvcnm = srvctxt + String(a);
    let srvc = document.getElementById(srvcnm);
    srvc.style.visibility = "visible";
    srvc.style.display = "block";
    if(a== 3){
        cdccocfnc("");
    }



    document.getElementById("cdccocform").reset(); ////////  to reset cdc & coc form;



}


function cdccocfnc(a){
    let p = document.getElementById("cdcscocerviceforms");      // parent of all cdc coc service form
    
    
    document.getElementById("cdccocform").reset();     /////////////// to reset cdc& coc form; 

    document.getElementById("CDC").value = a;           ////////////// to update value of select option
    
    for (const chld of p.children) {
        if (chld.classList.contains(a)) {
            chld.style.visibility = "visible";
            chld.style.display = "block";
        }
        else {
            chld.style.visibility = "hidden";
            chld.style.display = "none";
        }
    }


}   

function cocselectfnc(){
    let p = document.getElementById("coccourseselect");      // parent of all cdc coc service form
    
    p.style.visibility = "visible";
    p.style.display = "block";

}
actvPrdtfunc(1);

