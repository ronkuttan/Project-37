class Quiz{
    constructor(){
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    async start(){
        if(gameState === 0){
            contestant = new Contestant();

            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        question.hide();
        background(255);

        textSize(30);
        text("Result of the Quiz", 250,50);
        text("______________", 250,50);

        Contestant.getContestantInfo();

        if(allContestants !== undefined){
            debugger;
            var display_Answers = 250;
            fill("Blue")
            textSize(20);
            text("*NOTE: Contestant who answered correct are highlighted in green colour!!", 100,230);
    
            for(var plr in allContestants){
                debugger;
                var correctAns = "2";
                //var position = 230;
                if(correctAns === allContestants[plr].answer)
                    fill("Green")
               else
                    fill("red")
                   
                   
                   display_Answers = display_Answers+30;
                    textSize(18);
                    text(allContestants[plr].name + " : " + allContestants[plr].answer, 220, display_Answers);
                  }

            }
        }
    
    

}