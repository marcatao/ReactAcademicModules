export default class Categorias{
    
    constructor(){
        this.categorias = ["Trabalho","Esportes"];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);

    }
    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        })
    }
    adicionarCategoria(novaCategoria){
        
        this.categorias.push(novaCategoria);
        this.notificar();
    }


}