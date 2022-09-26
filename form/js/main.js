class Form {
    constructor(container = '.task') {
        this.container = container;
        this.preventDef();
    }
    preventDef() {
        document.querySelector(`${this.container}`).addEventListener('submit', event => {
            const block = document.querySelectorAll('error');
            if (!block.length === 0) {
                event.preventDefault;
            }
        })
    }
}

class FormName extends Form {
    constructor(container, error = '#oneSpan', inpt = '#one') {
        super(container);
        this.error = error;
        this.inpt = inpt;
        this._init();
    }
    _init() {
        const block = document.querySelector(`${this.inpt}`);
        block.addEventListener('change', event => {
            const str = event.target.value;
            // console.log(event.target.value);
            if(str.match(/^[a-z]+$/ig) === null) {
                block.classList.add('error');
                document.querySelector(`${this.error}`).classList.add('error-mess');
                this.preventDef();
            } else {
                block.classList.remove('error');
                document.querySelector(`${this.error}`).classList.remove('error-mess');
                this.preventDef();
            }    
        })
    }
}

class FormPhoneNumber extends Form {
    constructor(container, error = '#twoSpan', inpt = '#two') {
        super(container);
        this.error = error;
        this.inpt = inpt;
        this._init();
    }
    _init() {
        const block = document.querySelector(`${this.inpt}`);
        block.addEventListener('change', event => {
            const str = event.target.value;
            // console.log(event.target.value);
            if(str.match(/^\+\d{1}\(\d{3}\)\d{3}\-\d{4}$/ig) === null) {
                block.classList.add('error');
                document.querySelector(`${this.error}`).classList.add('error-mess');
                this.preventDef();
            } else {
                block.classList.remove('error');
                document.querySelector(`${this.error}`).classList.remove('error-mess');
                this.preventDef();
            }    
        })
    }
}

class FormEmail extends Form {
    constructor(container, error = '#threeSpan', inpt = '#three') {
        super(container);
        this.error = error;
        this.inpt = inpt;
        this._init();
    }
    _init() {
        const block = document.querySelector(`${this.inpt}`);
        block.addEventListener('change', event => {
            const str = event.target.value;
            // console.log(event.target.value);
            if(str.match(/^[a-z]+\d+\.?\-?mail@mail.ru$/ig) === null) {
                block.classList.add('error');
                document.querySelector(`${this.error}`).classList.add('error-mess');
                this.preventDef();
            } else {
                block.classList.remove('error');
                document.querySelector(`${this.error}`).classList.remove('error-mess');
                this.preventDef();
            }    
        })
    }
}

const oneInpt = new FormName();
const twoInpt = new FormPhoneNumber();
const threeInpt = new FormEmail();