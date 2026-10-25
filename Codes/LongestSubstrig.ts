console.log("Hello Typescript");


function longestSubstring(str : string) : void {

    let max_count : number = 0;
    let max_string : string = "";

    for(let i=0;i<str.length;i++){

        let result : string = "";
        let count : number = 0;


        for(let j=i;j<str.length;j++){

            const current : string = str.charAt(j);

            if(result.indexOf(current) != -1){

                break;

            }
            else{

                result += current;
            }

            count = result.length;

            if(count > max_count){
                max_count = count;
                max_string = result;
            }

        }
    }

    console.log(max_string);
}


longestSubstring("abcdeffgh");