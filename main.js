Vue.createApp({
data() {
    return {
        perspective: 100,
        rotateX: 0,
        rotateY: 0,
        rotateZ:0
    }
},
computed: {
    box() {
      return {
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `
      }
    }
  },
  methods: {
    reset() {
      this.perspective = 100
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0
    },
    copy(){
        const el = document.createElement( 'textarea' )
        el.setAttribute('readonly', '') //the user can't update the values, just select them
        el.style.position = 'absolute'
        el.style.left = '9999px'
        el.value = 'transform: ${ this.box.transform }'
        document.body.appedChild(el)  //user can copy string with values from the browser
        el.select() //user can select the content
        document.getSelection( 'copy' ) //allow us to perform user's acces on the browser
        document.body.removeChild(el)  //will remove the child element
    }
} 
}).mount('app');