var i,j;
for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        process.stdout.write(j+"");
    }
    console.log();//for new line
}

//

var i,j;
for(i=1;i<=5;i++){
    for(j=1;j<=5;j++)
    if(j%2==0){
        process.stdout.write("0 ");
    }
        else{
            process.stdout.write("1 ");}
            console.log();

        }


        var i,j;
        for(i=1;i<=5;i++){
            for(j=1;j<=5;j++){
                if(j==1||j==5||i==1||i==5){
                    process.stdout.write("1 ");
                }
                else{
                    process.stdout.write("  ");
                }
            }
            console.log();
        }
    
    
    