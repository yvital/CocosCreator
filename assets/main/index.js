System.register("chunks:///_virtual/FailureWindow.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts"],(function(e){var t,a,r,o,n,i,s,l,c,u,h,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,a=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,i=e._decorator,s=e.Label,l=e.director,c=e.RigidBody2D,u=e.tween,h=e.Component},function(e){p=e.GameManager}],execute:function(){var d,f,w,y,g;n._RF.push({},"8be6efxrApEEpzOZ0zfY5U0","FailureWindow",void 0);var m=i.ccclass,_=i.property;e("FailureWindow",(d=m("FailureWindow"),f=_(s),d((g=t((y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,r(t,"scoreLabel",g,o(t)),t}a(t,e);var n=t.prototype;return n.start=function(){},n.restartGame=function(){var e=l.getScene().getChildByName("GameManager").getComponent(p);e.failureWindow.active=!1,e.scoreLabel.string="You loose",e.player.angle=0,e.speed=16,e.player.getComponent(c).sleep(),e.player.setPosition(-150,0),u(e.player).show().start(),u(e.heart_1).show().start(),u(e.heart_2).show().start(),u(e.heart_3).show().start(),u(e.heart_4).show().start(),u(e.heart_5).show().start(),u(e.heart_6).show().start(),u(e.heart_7).show().start(),u(e.heart_8).show().start(),u(e.heart_9).show().start(),u(e.heart_10).show().start(),e._audioSource.play(),e.score=0,e.isGameStarted=!1,l.getScene().getChildByName("Canvas").children.forEach((function(e){"TopObstacle"!==e.name&&"Sensor"!==e.name&&"BottomObstacle"!==e.name||e.destroy()}))},n.mainMenu=function(){l.loadScene("MainMenu")},n.update=function(e){},t}(h)).prototype,"scoreLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=y))||w));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,a,i,r,n,o,l,s,h,c,u,d,p,b,m,y,f,g,_,w;return{setters:[function(e){t=e.applyDecoratedDescriptor,a=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,o=e._decorator,l=e.Node,s=e.Prefab,h=e.Label,c=e.AudioSource,u=e.input,d=e.Input,p=e.Collider2D,b=e.Contact2DType,m=e.director,y=e.RigidBody2D,f=e.Vec2,g=e.tween,_=e.instantiate,w=e.Component}],execute:function(){var C,S,v,z,O,B,M,T,G,L,N,P,A,D,I,V,j,E,R,W,k,x,F,H,K,U,X,Y,q,J,Q,Z,$,ee,te;n._RF.push({},"a658aadplFN5K/lcjBXjvhE","GameManager",void 0);var ae=o.ccclass,ie=o.property;e("GameManager",(C=ae("GameManager"),S=ie(l),v=ie(l),z=ie(s),O=ie(s),B=ie(h),M=ie(c),T=ie(l),G=ie(l),L=ie(l),N=ie(l),P=ie(l),A=ie(l),D=ie(l),I=ie(l),V=ie(l),j=ie(l),C((W=t((R=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,i(t,"player",W,r(t)),i(t,"failureWindow",k,r(t)),i(t,"topObstacle",x,r(t)),i(t,"bottomObstacle",F,r(t)),i(t,"scoreLabel",H,r(t)),i(t,"_audioSource",K,r(t)),i(t,"heart_1",U,r(t)),i(t,"heart_2",X,r(t)),i(t,"heart_3",Y,r(t)),i(t,"heart_4",q,r(t)),i(t,"heart_5",J,r(t)),i(t,"heart_6",Q,r(t)),i(t,"heart_7",Z,r(t)),i(t,"heart_8",$,r(t)),i(t,"heart_9",ee,r(t)),i(t,"heart_10",te,r(t)),t.isGameStarted=!1,t.wasStarted=!1,t.score=0,t.speed=16,t}a(t,e);var n=t.prototype;return n.onLoad=function(){var e=this.node.getComponent(c);this._audioSource=e},n.start=function(){u.on(d.EventType.TOUCH_START,this.jump,this),this.player.getComponent(p).on(b.BEGIN_CONTACT,this.onBeginContact,this),this._audioSource.play()},n.onBeginContact=function(e,t){var a=this;"Sensor"!==t.node.name&&"TopBorder"!==t.node.name&&"BoottomBorder"!==t.node.name&&"BottomObstacle"!==t.node.name&&(this.failureWindow.active=!0,this.unscheduleAllCallbacks(),m.getScene().getChildByName("Canvas").children.forEach((function(e){"TopObstacle"!==e.name&&"Sensor"!==e.name&&"BottomObstacle"!==e.name||(e.getComponent(y).linearVelocity=new f(0,0),g(a.player).hide().delay(1).start(),a._audioSource.stop())}))),"BottomObstacle"===t.node.name&&(this.score+=1,this.speed=this.speed+2,g(t.node).hide().delay(1).start(),1==this.score&&g(this.heart_1).hide().delay(1).start(),2==this.score&&g(this.heart_2).hide().delay(1).start(),3==this.score&&g(this.heart_3).hide().delay(1).start(),4==this.score&&g(this.heart_4).hide().delay(1).start(),5==this.score&&g(this.heart_5).hide().delay(1).start(),6==this.score&&g(this.heart_6).hide().delay(1).start(),7==this.score&&g(this.heart_7).hide().delay(1).start(),8==this.score&&g(this.heart_8).hide().delay(1).start(),9==this.score&&g(this.heart_9).hide().delay(1).start(),10==this.score&&(g(this.heart_10).hide().delay(1).start(),this.scoreLabel.string="You win",this.failureWindow.active=!0,this.unscheduleAllCallbacks(),m.getScene().getChildByName("Canvas").children.forEach((function(e){"TopObstacle"!==e.name&&"Sensor"!==e.name&&"BottomObstacle"!==e.name||(e.getComponent(y).linearVelocity=new f(0,0),g(a.player).hide().delay(1).start(),a._audioSource.stop())}))))},n.jump=function(){var e=this,t=this.player.getComponent(y);t.linearVelocity=new f(0,0),t.applyLinearImpulseToCenter(new f(0,650),!0),this.isGameStarted||(this.schedule((function(){return e.generateObstacles()}),1.2),this.isGameStarted=!0,this._audioSource.enabled||this._audioSource.play())},n.generateObstacles=function(){var e=m.getScene().getChildByName("Canvas"),t=(Math.random()>.5?1:-1)*Math.floor(75*Math.random()),a=(Math.random()>.5?1:-1)*Math.floor(385*Math.random()),i=_(this.topObstacle);if(i.setParent(e),i.setPosition(t+750,a),i.setSiblingIndex(3),i.getComponent(y).linearVelocity=new f(-this.speed,0),Math.random()>.8){var r=(Math.random()>.5?1:-1)*Math.floor(305*Math.random()),n=_(this.bottomObstacle);n.setParent(e),n.setPosition(t+750+250,r),n.setSiblingIndex(3),n.getComponent(y).linearVelocity=new f(-this.speed,0),this.scheduleOnce((function(){n.destroy()}),5)}this.scheduleOnce((function(){i.destroy()}),5)},n.update=function(e){},t}(w)).prototype,"player",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=t(R.prototype,"failureWindow",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=t(R.prototype,"topObstacle",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=t(R.prototype,"bottomObstacle",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=t(R.prototype,"scoreLabel",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=t(R.prototype,"_audioSource",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(R.prototype,"heart_1",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=t(R.prototype,"heart_2",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=t(R.prototype,"heart_3",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=t(R.prototype,"heart_4",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=t(R.prototype,"heart_5",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=t(R.prototype,"heart_6",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=t(R.prototype,"heart_7",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=t(R.prototype,"heart_8",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ee=t(R.prototype,"heart_9",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),te=t(R.prototype,"heart_10",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=R))||E));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./FailureWindow.ts","./GameManager.ts","./MainMenu.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainMenu.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,e,o,r,c;return{setters:[function(n){t=n.inheritsLoose},function(n){e=n.cclegacy,o=n._decorator,r=n.director,c=n.Component}],execute:function(){var i;e._RF.push({},"4780fpaPo1FQYG75O/jWUCL","MainMenu",void 0);var u=o.ccclass;o.property,n("MainMenu",u("MainMenu")(i=function(n){function e(){return n.apply(this,arguments)||this}t(e,n);var o=e.prototype;return o.start=function(){},o.startGame=function(){r.loadScene("MainScene")},o.update=function(n){},e}(c))||i);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});