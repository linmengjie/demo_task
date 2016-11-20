var User = cc.Class({

    properties: {
        _data:{
            default:{}
        },
        uid:{
            get:function(){
              return this._data.get("user.uid");
            },
            set:function(value){
              this._data.set("user.uid",value);
            }
        },
        level:{
            get:function(){
              return this._data.get("user.level");
            },
            set:function(value){
              this._data.set("user.level",value);
            }
        },
        hungry:{
            get:function(){
              return this._data.get("user.hungry");
            },
            set:function(value){
              this._data.set("user.hungry",value);
            }
        },
        visit:{
            get:function(){
              return this._data.get("user.visit");
            },
            set:function(value){
              this._data.set("user.visit",value);
            }
        }
    },
    
    ctor(){
        
    },
    
    initWithData(controller,data){
        this._controller = controller;
        this._data = new Data();
        let userData = {};
        for(let key in data){
            userData[key] = data[key];
        }
        let self = this;
        this._data.sub('set','user',function (e) {app.emit('updateUserMissionState')});
        
        this._data.set('user',userData);
        
    },
    
    addLevel(n){
        this.updateLevel(add(this.level+n));  
    },
    
    // minusLevel(n){
    //     this.addLevel(-n);
    // },
    
    updateLevel(level){
        if(level>100){
            this.level = 100;
        }else if(level <1){
            this.level = 1;
        }else{
            this.level = level;
        }
    },
    
    addHungry(n){
        this.updateHungry(add(this.hungry+n));    
    },
    
    minusHungry(n){
        this.addHungry(-n);
    },
    
    
    updateHungry(hungry){
        if(hungry>100){
            this.hungry = 100;
        }else if(hungry <0){
            this.hungry = 0;
        }else{
            this.hungry = hungry;
        }
    },
    
    addVisit(n){
        this.updateVisit(add(this.visit+n));
    },
    
    // minusVisit(n){
    //     this.addVisit(-n);
    // },
    
    updateVisit(visit){
        if(visit>=0){
            this.visit = visit;
        }else{
            this.visit = 0;
        }  
    },

});

module.exports = User;