let message: string = "Hello, TypeScript!";
console.log(message);

function reverseString(str : string):void{

    let result = "";

    for(let i=str.length;i>=0;i--){
        result += str.charAt(i);

    }

    console.log("reverse String : " + result);

}

function palindromeString(str : string):void{

    let j = str.length -1;
    let isPalindrome : boolean = false;

    for(let i=0;i<str.length/2;i++){

        if(str.charAt(i) === str.charAt(j)){

            isPalindrome = true;
        }

        j--;
    }

    if(isPalindrome){
        console.log("It is Palindrome");
    }
    else{
        console.log("it is not palindrome");
    }
}


function palindromeNumber(num : number):void{

    let reversepal : number = num;
   // let r : number = 0;
    let rev : number = 0;

    while(num != 0){

        let r : number = num % 10;
        rev = rev * 10 + r;
        num = Math.floor(num/10);


    }

    console.log("Reversed number : "+ rev);

    if(reversepal === rev){
        console.log("Number is palindrome");
    }
    else{
        console.log("number is not palindrome");
    }
}

function repeatChar(str : string):void{

    for(let i=0;i<str.length;i++){

        let count : number = 0;

        for(let j =i+1;j<str.length;j++){

            if(str.charAt(i) === str.charAt(j)){

                count++;
            }
        }

        if(count > 0){
            console.log(str.charAt(i));
        }
    }

    console.log("--------------------------------------");

    const set : Set<string> = new Set();

    for(const st of str){

        if(set.has(st)){
            console.log(st);
        }
        else{
            set.add(st);
        }
        
    }

    console.log("----------SET------------");
    for(const s of set){
        console.log(s);
    }
}

function maxElement():void{

    

    const arr : number[] = [2,5,3,7,5,8];

    let max_num : number = 0;

    for(let i=0;i<arr.length;i++){

        if(arr[i] > max_num){
            console.log(arr[i]);
            max_num == arr[i];

        }
        
        }

        console.log("Max Value : "+max_num)
    
}

function sortArray() : void{

    const arr : number[] = [2,5,3,7,5,8];

    for(let i=0;i<arr.length;i++){

        for(let j =i+1;j<arr.length;j++){

            if(arr[i] > arr[j]){

                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for(const value of arr){
        console.log(value);
    }

}

function charOccurence(str : string) : void{

    for(let i=0;i<str.length;i++){


        let isRepeated : boolean = false;

        for(let k=0;k<i;k++){

            if(str.charAt(i) === str.charAt(k)){
                isRepeated = true;
                break;
            }
        }

        if(isRepeated){
            continue;
        }

        let count : number = 1;
        for(let j = i+1;j<str.length;j++){

            if(str.charAt(i) === str.charAt(j)){
                count++;
            }
        }

        console.log(str.charAt(i) + " ==== " + count);



    }


    console.log("------------ Using Map -----------------")

    const map = new Map<string, number>();

    for(const s of str){

        map.set(s, (map.get(s) ?? 0 )+1);

    }

    console.log("Key Value Pair");
    for(const [key, value] of map.entries()){

        console.log(key + " -- " + value);
    }

    console.log("All Keys");
    for(const Keys of map.keys()){
        console.log(Keys);
    }

    console.log("All Values");
    for(const Values of map.values()){
        console.log(Values);
    }
    
}


function firstNonRepeat(str : string) : void{

    for(let i=0;i<str.length;i++){

        let count : number = 0;
        for(let j =i+1;j<str.length;j++){

            if(str.charAt(i) === str.charAt(j)){
                count++;
                //break;
            }
        }

        if(count == 0){
            console.log(str.charAt(i));
            break;
        }
    }
}

function lastNonRepeat(str : string) : void{

    for(let i=str.length-1;i>=0;i--){

        let count : number = 0;
        for(let j =0;j<str.length;j++){

            if(str.charAt(i) === str.charAt(j) && i!=j){
                count++;
                //break;
            }
        }

        if(count == 0){
            console.log(str.charAt(i));
            break;
        }
    }
}

function duplicateChar(str : string) : void{

    const set : Set<string> = new Set();

    for(const s of str){

        if(set.has(s)){
            console.log(s);
         }
         else{
            set.add(s);
         }
    }

    console.log("-------Non Repeating char------------");

    for(const Set of set){
        console.log(Set);
    }
}

function fibonacci():void{

    let n: number  = 7;
    let first : number  = 0;
    let second : number  = 1;
    

    for(let i=0;i<n;i++){

        console.log(first);

        let next = first + second;
        first = second;
        second = next;
    }
}






//reverseString("programming");
// palindromeString("momoms");
// palindromeNumber(123212);
// repeatChar("programming");
// maxElement();
// sortArray();
// charOccurence("programming");
// firstNonRepeat("programming");
// lastNonRepeat("programming");
// duplicateChar("programming");
fibonacci();