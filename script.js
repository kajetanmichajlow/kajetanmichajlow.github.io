var obj = {
  f : false,
  n : '',
  q : 0,
  s : [],
  start : function(){},
  next : function(q, ans){
    obj.s[q] = ans;
    
    q += 1;
    
    //Conditional Question
    if(q == 3){
      //IF C2
      
      if(obj.s[2] == 'y'){
        
      } else {
        obj.s[q] = '-';
        
        q += 1;
      }
    }    
    
    //Conditional outcome
    if(q == 4){
      q += 1;
    }
    if(q > 4){
      //C4 = C5 or C6 or C7
      if(obj.s[5] == 'y' || obj.s[6] == 'y' || obj.s[7] == 'y'){
        obj.s[4] = 'y';
      } else {
        obj.s[4] = 'n';
      }
    }
    
    //Conditional outcome
    if(q == 9){
      //C9 = C10 or C11 or C12 or C13 or C14 or C15 or C16 or C17 or C18 or C19 or C20
      //how?
      
      q += 1;
    }
    if(q > 20){
      //C9 = C10 or C11 or C12 or C13 or C14 or C15 or C16 or C17 or C18 or C19 or C20
      if(obj.s[10] == 'y'
        || obj.s[11] == 'y'
        || obj.s[12] == 'y'
        || obj.s[13] == 'y'
        || obj.s[14] == 'y'
        || obj.s[15] == 'y'
        || obj.s[16] == 'y'
        || obj.s[17] == 'y'
        || obj.s[18] == 'y'
        || obj.s[19] == 'y'
        || obj.s[20] == 'y'
      ){
        obj.s[9] = 'y';
      } else {
        obj.s[9] = 'n';
      }
    }
    
    //Conditional Question
    if(q == 21){
      //IF (C1 or C2) and C20
      
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[20] == 'y'){
        //obj.s[21] = 'y';
      } else {
        obj.s[21] = '-';
        
        q += 1;
      }
    }
    
    //Conditional Question
    if(q == 31){
      //IF C24
      
      if(obj.s[24] == 'y'){
        
      } else {
        obj.s[31] = '-';
        
        q += 1;
      }
    }
    
    //Conditional Question
    if(q == 37){
      //C37 IF C1=Y OR C2=N
      if(obj.s[1] == 'y' || obj.s[2] == 'y'){
        
      } else {
        obj.s[q] = '-';
        
        q += 1;
      }
    }
    
    //more conditions to "simple" poll
    if(q == 39){
      if(obj.s[38] == 'y'){
        obj.s[39] = 'n';
        q += 1;
        
        obj.s[40] = 'n';
        q += 1;
      }
    }
    if(q == 40){
      $("#q_40").find(".quest-ans-no").removeClass("disabled");
      
      if(obj.s[39] == 'y'){
        obj.s[40] = 'n';
        q += 1;
      } else if(obj.s[38] == 'n' && obj.s[39] == 'n') {
        $("#q_40").removeClass("disabled").find(".quest-ans-yes").addClass("active");
        $("#q_40").find(".quest-ans-no").addClass("disabled");
        
        obj.s[40] = 'y';
        q += 1;
      }
    }
    
    //group title
    if(q>3){
      $("#tq_1").removeClass("disabled"); 
    }
    if(q>8){
      $("#tq_2").removeClass("disabled"); 
    }
    if(q>21){
      $("#tq_3").removeClass("disabled"); 
    }
    if(q>38){
      $("#tq_4").removeClass("disabled"); 
    }
    
    if(q >= 41){
      $("#start").removeClass("disabled");
    }
    
    $("#q_"+q).removeClass("disabled");
  },
  radd : function(txt, cls){
    obj.f = true;
    
    var node = $('<p></p>').text(txt);
    
    if(cls){
      node.addClass(cls);
    }
    
    $("#result_texts").append(node);
  },
  result : function(){
    $("#quests").hide();
    $("#welcome_name").hide();
    $("#start").hide();
    $("#loading").show();
    
    setTimeout(function(){
      $("#result_texts").html('');
      $("#loading").hide();
      
      //T1 - IF C38 
      //if(obj.s[38] == 'y'){
      //  obj.radd("Een DPIA is verplicht volgens AVG Artikel 35 lid 1, omdat er - gelet op de aard, omvang, context en doeleinden - een hoog risico voor de rechten en vrijheden van personen");
      //}

      //T2 - IF C1 AND C8 AND (C5 OR C6)
      if(obj.s[1] == 'y' && obj.s[8] == 'y' && (obj.s[5] == 'y' || obj.s[6] == 'y')){
        obj.radd("Een DPIA is verplicht volgens AVG artikel 35 lid 3a, omdat het gaat om ‘een systematische en uitgebreide beoordeling van persoonlijke aspecten van natuurlijke personen, die is gebaseerd op geautomatiseerde verwerking, waaronder profilering en waarop besluiten worden gebaseerd waaraan voor de natuurlijke persoon rechtsgevolgen zijn verbonden of die de natuurlijke persoon op vergelijkbare wijze wezenlijk treffen’.”");
      }

      //T3 - IF C2 AND (NOT C3) AND C10 
      if(obj.s[2] == 'y' && obj.s[3] == 'n' && obj.s[10] == 'y'){
        obj.radd("Een DPIA is verplicht volgens AVG artikel 35 lid 3b, omdat het gaat om: ‘grootschalige verwerking van bijzondere categorieën van persoonsgegevens als bedoeld in artikel 9, lid 1’.");
      }
                                                    
      //T4 - IF C2 AND (NOT C3) AND C12
      if(obj.s[2] == 'y' && obj.s[3] == 'n' && obj.s[12] == 'y'){
        obj.radd("Een DPIA is verplicht volgens AVG artikel 35 lid 3b, omdat het gaat om: ‘grootschalige verwerking van gegevens met betrekking tot strafrechtelijke veroordelingen en strafbare feiten als bedoeld in artikel 10’.");
      }

      //T5 - IF C1 AND C2 AND (NOT C3) AND C22 
      if(obj.s[1] == 'y' && obj.s[2] == 'y' && obj.s[3] == 'n' && obj.s[22] == 'y'){
        obj.radd("Een DPIA is verplicht volgens AVG artikel 35 lid 3,c omdat het gaat om: ‘stelselmatige en grootschalige monitoring van openbaar toegankelijke ruimten’.");
      }
                                                    
      //T6 - IF CountIF(C2, C4, C8, C9, C23, C24, C25, C26, C27, C28, C29; True) >=2
      var a = [2, 4, 8, 9, 23, 24, 25, 26, 27, 28, 29];
      var b = 0;
      for(var i =0; i< a.length;i++){
        if(obj.s[a[i]] == 'y'){
          b += 1;
        }
      } 
      if(b>=2){
        obj.radd("Een DPIA is verplicht volgens de opinie WP248 van de werkgroep 29 van de nationale toezichthouders, omdat:");
        var ul = $("<ul></ul>");
        if(obj.s[2] == 'y'){
          ul.append($("<li></li>").text("het gebruik van gegevens grootschalig is"));
        }
        if(obj.s[4] == 'y'){
          ul.append($("<li></li>").text("er sprake is van beoordeling, profiling of voorspelling van eigenschappen, prestaties of gedrag"));
        }
        if(obj.s[8] == 'y'){
          ul.append($("<li></li>").text("er geautomatiseerd beslissingen worden genomen met wezenlijke gevolgen voor betrokkenen"));
        }
        if(obj.s[9] == 'y'){
          ul.append($("<li></li>").text("het gaat om gevoelige gegevens"));
        }
        if(obj.s[23] == 'y'){
          ul.append($("<li></li>").text("mensen systematisch worden geobserveerd, gevolgd, gecontroleerd of bewaakt/gemonitord"));
        }
        if(obj.s[24] == 'y'){
          ul.append($("<li></li>").text("activiteiten van werknemers worden geobserveerd, gevolgd, gecontroleerd of bewaakt/gemonitord"));
        }
        if(obj.s[25] == 'y'){
          ul.append($("<li></li>").text("verschillende gegevensbestanden worden gekoppeld"));
        }
        if(obj.s[26] == 'y'){
          ul.append($("<li></li>").text("gegevens worden gebruikt van kwetsbare mensen of mensen in een ongelijke machtsverhouding tot de verwerkingsverantwoordelijke"));
        }
        if(obj.s[27] == 'y'){
          ul.append($("<li></li>").text("er sprake is van innovatief gebruik of toepassingen van technologische en organisatorische oplossingen"));
        }
        if(obj.s[28] == 'y'){
          ul.append($("<li></li>").text("gegevens worden overgedragen naar buiten de EU"));
        }
        if(obj.s[29] == 'y'){
          ul.append($("<li></li>").text("de verwerking kan betekenen dat iemand een recht niet meer kan uitoefenen, een dienst niet meer kan gebruiken of een contract niet meer kan afsluiten"));
        }
        
        $("#result_texts").append(ul);
      }

      //T7 - IF ((C1 OR C2) AND C30) OR (C24 AND C31)
      if( ( (obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[30] == 'y') || (obj.s[24] == 'y' && obj.s[31] == 'y') ){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 1 Heimelijk onderzoek. In Opinie 16/2018 geeft de EDPB aan dat een DPIA alleen verplicht zou moeten zijn als nog ten minste één ander criterium uit de lijst met criteria uit opinie WP248 (zie link onderaan deze pagina) vervuld is.");
      }

      //T8 - IF (C12 OR C13 OR C14) AND C32
      if( (obj.s[12] == 'y' || obj.s[13] == 'y' || obj.s[14] == 'y') && obj.s[32] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 2 Zwarte lijsten.");
      }
                                                    
      //T9 - IF (C1 OR C2) AND C33
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[33] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 3 Fraudebestrijding.");
      } 

      //T10 - IF (C1 OR C2) AND C14
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[14] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 4 Creditscores.");
      }  

      //T11 - IF (C1 OR C2) AND C15  
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[15] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 5 Financiële situatie.");
      }

      //T12 - IF (C1 OR C2) AND C16 
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[16] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 6 Genetische persoonsgegevens.");
      }

      //T13 - IF C2 AND C17 AND (NOT C3) 
      if(obj.s[2] == 'y' && obj.s[17] == 'y' && obj.s[3] == 'n'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 7 Gezondheidsgegevens.");
      }

      //T14 - IF C34 AND (C12 OR C15 OR C17 OR C18)
      if(obj.s[34] == 'y' && (obj.s[12] == 'y' || obj.s[15] == 'y' || obj.s[17] == 'y' || obj.s[18] == 'y') ){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 8 Samenwerkingsverbanden.");
      }

      //T15 - IF C1 AND C2 AND C22
      if(obj.s[1] == 'y' && obj.s[2] == 'y' && obj.s[22] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 9 Cameratoezicht.");
      }

      //T16 - IF (C1 OR C2) AND C35  
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[35] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 10 Flexibel cameratoezicht.");
      }

      //T17 - IF (C1 OR C2) AND C24
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[24] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 11 Controle werknemers.");
      }

      //T18 - IF (C1 OR C2) AND C19
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[19] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 12 Locatiegegevens. In Opinie 16/2018 geeft de EDPB aan dat een DPIA alleen verplicht zou moeten zijn als nog ten minste één ander criterium uit de lijst met criteria uit opinie WP248 (zie link onderaan deze pagina) vervuld is.");
      } 

      //T19 - IF (C1 OR C2) AND C20 AND (NOT C21) 
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[20] == 'y' && obj.s[21] == 'n'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 13 Communicatiegegevens.");
      }

      //T20 - IF (C1 OR C2) AND C36
      if((obj.s[1] == 'y' || obj.s[2] == 'y') && obj.s[36] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 14 Internet of Things.");
      }  

      //T21 - IF C1 AND (C5 OR C6)
      if(obj.s[1] == 'y' && (obj.s[5] == 'y' || obj.s[6] == 'y')){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 15 Profilering.");
      }

      //T22 - IF C1 AND C2 AND C37 
      if(obj.s[1] == 'y' && obj.s[2] == 'y' && obj.s[37] == 'y'){
        obj.radd("Een DPIA is verplicht volgens de lijst van de Autoriteit Persoonsgegevens met verwerkingen waarvoor een DPIA verplicht is vanwege punt 16 Observatie en beïnvloeding van gedrag.");
      }
        
      //C38 was removed
        
      if(obj.f == true){
        obj.radd("Wanneer moet u de DPIA uitvoeren?", 'text2');
        
        //T23 - IF C39
        if(obj.s[38] == 'y'){
          obj.radd("De verwerking werd voor 25 mei 2018 al uitgevoerd en zowel de verwerking als de risico’s zijn daarna gelijk gebleven. Een DPIA is alleen verplicht bij invoering of een significante wijziging van de verwerking of van de risico’s. Ook moet de DPIA volgens de opinie 248 van de Werkgroep 29 elke 3 jaar worden herhaald. Aanbevolen wordt om in de komende periode een DPIA uit te voeren.");
        }

        //T24 - IF C40
        if(obj.s[39] == 'y'){
          obj.radd("De verwerking of de risico’ is gewijzigd of ingevoerd of de risico’s zijn veranderd na 25 mei 2018. Voor wijziging van de verwerking had een DPIA uitgevoerd moeten worden. Voer de DPIA alsnog zo snel mogelijk uit en implementeer de eventuele aanvullende maatregelen om de risico’s te minimaliseren.");
        }

        //T25 - IF C41
        if(obj.s[40] == 'y'){
          obj.radd("De verwerking is nog niet gestart. Voordat u begint met de verwerking moet u een DPIA uitvoeren en de daaruit volgende maatregelen implementeren.");
        }
      } else {
        //T0
        $("#opt1").show();
        
        //p.9
        //obj.radd("Een DPIA is voor de verwerking niet verplicht op basis van de criteria uit de Avg en publicaties van de toezichthouders. Een DPIA kan ook verplicht zijn als er andere hoge risico's optreden. Ook al is een DPIA in dit geval niet verplicht, toch kan een DPIA waardevolle informatie opleveren voor de zorgvuldige omgang met persoonsgegevens en het beperken van risico’s.");    
      }
        
      $("#result").show();
      $("#result_buttons").show();
    }, 5000);
  }
}

$(document).ready(function(){
  
  
  
$("#user_name").keyup(function(e){
  var txt = $("#user_name").val();
  
  if(txt == ''){
    txt = '(NAAM)';
  }
  
  $(".user_name").text(txt);
});
$(".quest-ans").click(function(e){ 
  e.preventDefault();
  e.stopPropagation();
  
  if($(this).hasClass("disabled")){
    return false;
  }
  if($(this).parents(".quest").hasClass("disabled")){
    return false;
  }
  
  if($(this).parent().find(".active").size()==1){
    //reset all answers after this one
    
    $(this).parents(".quest").nextAll().each(function(){
      $(this).addClass("disabled");
      if($(this).find(".quest-ans.active").size()==1){
        $(this).find(".quest-ans.active").removeClass("active");
        var a = parseInt($(this).attr('id').toString().substring(2));
        obj.s[a] = '';
      }
    });
  }
  
  $(this).parent().find(".active").removeClass("active");
  $(this).addClass("active");
  
  
  
  var q = parseInt($(this).parents(".quest").attr('id').toString().substring(2)); 
  
  if($(this).hasClass("quest-ans-yes")){
    obj.next(q, 'y');
  } else {
    obj.next(q, 'n');
  }
  
  return false;
});  
$("#bt_start").click(function(e){
  e.preventDefault();
  e.stopPropagation();
  
  if($("#start").hasClass("disabled")){
    return false;
  }
  
  obj.result();
  
  return false;
}); 
$("#result_print").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    
    if($(this).hasClass("disabled")){
        return false;
    }
    
    print();
    
    return false;
});
  
  
});