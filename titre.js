const txtAnim=document.querySelector('h1');


new Typewriter(txtAnim, {
    loop:true,
    deleteSpeed:20
})
.changeDelay(100)
.typeString('Bienvenue')
.pauseFor(1000)
.typeString('<strong> Sur Ets BTP\'S </strong>')
.pause(100)
.typeString('<span style="color:#EEE099"> Thomas YOHOW</span>')
.pauseFor(2500)
.deleteChars(40)
.typeString('Bienvenue')
.pauseFor(300)
.typeString('<strong> Sur Ets BTP\'S</strong>')
.typeString('<span style="color:#EEE099"> Thomas YOHOW</span>')

.start()

