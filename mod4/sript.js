var names=new Array();
names[0]="pawan";
names[1]="John";
names[2]="jen";
names[3]="jason";
names[4]="abhisek";
names[5]="ravi";
names[6]="roshan";
names[7]="Rahul";
names[8]="udit";
names[9]="tarun";

for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==='j'|| names[i].charAt(0)==='J'){
      console.log("Goodbye"+names[i])  
    }
    else{
        console.log("Hello "+names[i])
    }
}