class Toggable{
    constructor(el){
        this.el = el;
        this.el.innerHTML = 'off';
        this.activated = false;
        this.el.addEventListener('click',this.onClick.bind(this));
    }

    onClick(){
        this.activated = !this.activated;
        this.toggleText();
    }

    toggleText(){
        this.el.innerHTML = this.activated ? 'on' : 'off';
    }
}

const button = document.getElementById('boton');
const miBoton = new Toggable(button);