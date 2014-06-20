var cat = {
        tiredness: 20,
        hunger: 20,
        loneliness: 3,
        happiness: 15,
        irritability: 100,
        feed: function(){
            if (this.hunger < 1) {
                console.log("Cat cannot move it is too full.No more food.");
            }
            else {
                console.log("Om nom nom");
                this.hunger = this.hunger - 5;
            }
        },
        sleep: function() {
            this.tiredness = this.tiredness - 3;
            this.happiness = this.happiness + 1;
            this.irritability = this.irritability - 5;
            console.log("ZZZzzzzz but my eyes are still open");
        },
        pet: function() {
            this.loneliness = this.loneliness - 0.5;
            this.irritability = this.irritability + 10;
            if (this.irritability>150) {
                console.log("Cat scratches and hisses. Boo");
                this.happiness = this.happiness -2;
            }
            else {
                this.happiness = this.happiness +2;
            }
        },
        play: function(object) {
            if (this.irritability>175) {
                console.log("Hissss");
            }
            else {
                if (object==="catnip") {
                    this.happiness = this.happiness + 10;
                    this.irritability = this.irritability -5;
                    this.hunger = this.hunger + 10;
                    console.log("Purrrrrr");
                }
                else if (object==="feather") {
                    this.happiness = this.happiness + 1;
                    this.tiredness = this.tiredness + 5;
                    console.log("Meowmeowmeow");
                }
                else if (object==="laser") {
                    this.happiness = this.happiness + 7;
                    this.tiredness = this.tiredness + 10;
                    console.log("Slams into wall running in circles");
                }
                else {
                    console.log("Hissss");
                    this.irritability=this.irritability+10;
                }
            }
        },
        status: function() {
            if (this.hunger >=5 && this.hunger<50) {
                console.log("Tiredness= "+ this.tiredness + "," + "Hunger= " + this.hunger + ","
                + "Loneliness= " + this.loneliness + "," + "Happiness= " + this.happiness + "," +
                "Irritability= " + this.irritability + ". Cat stares at you longing for food. FEED ME!");
            }
            else if (this.hunger <5) {
                console.log("Tiredness= "+ this.tiredness + "," + "Hunger= " + this.hunger + ","
                + "Loneliness= " + this.loneliness + "," + "Happiness= " + this.happiness + "," +
                "Irritability= " + this.irritability + ".");
            }
            else {
                console.log("Dead cat.");
            }
        }
}; 


cat.status();