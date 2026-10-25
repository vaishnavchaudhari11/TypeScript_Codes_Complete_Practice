

class reverseByPreventingSpace{

    reverseBySpacePreserve(str : string) : void {

        let result : string = "";

        for(let i=str.length-1;i>=0;i--){

            result += str.charAt(i);
        }

        let resultRev : string = result.replaceAll(" ", "");

        let finalR : string = "";
        let count : number = 0;

        for(let j = 0;j<str.length;j++){

            if(str.charAt(j) === " "){

                finalR += " ";
            }
            else{

                finalR += resultRev.charAt(count);
                count++;
            }
        }

        console.log(finalR);

    }




    


}

const ob = new reverseByPreventingSpace();
ob.reverseBySpacePreserve("java is coding langauge");