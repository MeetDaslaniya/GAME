var choice_arr = [1000];

function main() {
  range = document.getElementById("range").value;
  no_of_player = document.getElementById("no_of_player").value;


  function select_my_number() {
    for (let i = 1; i <= no_of_player; i++) {
      var num = prompt(`enter value player ${i}`);
      choice_arr[num]=i;
    }
    console.log(choice_arr);
  }
//   var arrlength=choice_arr.length;
  select_my_number();
  player_turn();
  function player_turn(){
    for(let i=0; i<=5; i++){
        var pvalue= prompt(`enter choice player ${i%3+1}`)
        if(choice_arr[pvalue]===0){
            pass;
        }
        else{
            console.log(choice_arr[pvalue])
        }
    }
  }
  
}
