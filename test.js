/*   Javascript ( Class or object ) */

function User () {
      this.name = ""; 
      this.life = 100;
      this.giveLife = function giveLife (targetPlayer) {
            targetPlayer.life += 1;
            this.life -= 1;
            console.log(this.name + " give 1 life to " + targetPlayer.name);
      }
}

/*   Javascript (object reference ) */

var Harsh = new User();
var Mayur = new User();

Harsh.name = "Harsh";
Mayur.name = "Mayur";

Harsh.giveLife(Mayur);

console.log("Harsh : " + Harsh.life);
console.log("Mayur : " + Mayur.life);

User.prototype.decreaselife = function decreaselife(targetPlayer){
      targetPlayer.life -= 3;
      this.life += 3;
      console.log(this.name + " just take life back from " +targetPlayer.name);
};

Harsh.decreaselife(Mayur);

console.log("Harsh : " + Harsh.life);
console.log("Mayur : " + Mayur.life);


require('./ram');
require('./kr');