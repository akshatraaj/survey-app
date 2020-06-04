class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Do you think we should follow");
    title.position(50, 0);
    var title1 = createElement('h2')
    title1.html("lockdown? Register here.");
    title1.position(50, 20);
    var title2 = createElement('h3')
    title2.html("email:");
    title2.position(75, 140);
    
    var input = createInput("");
    var button = createButton('enter');
    var button1 = createButton('yes');
    var button2 = createButton('no');
    
    input.position(130, 160);
    button.position(250, 200);
    button1.position(100, 90);
    button2.position(100,120);

    button1.mousePressed(function(){
      title.hide();
      title1.hide();

      var title3 = createElement("h2");
      title3.html("Do you think we should follow");
      title3.position(50,0);
      var title4 = createElement("h2");
      title4.html("social distancing? Register here.");
      title4.position(50,20);

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
     
    });
    button2.mousePressed(function(){
      title.hide();
      title1.hide();

      var title3 = createElement("h2");
      title3.html("Do you think we should follow");
      title3.position(50,0);
      var title4 = createElement("h2");
      title4.html("social distancing? Register here.");
      title4.position(50,20);

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
     
    });

  }
}
