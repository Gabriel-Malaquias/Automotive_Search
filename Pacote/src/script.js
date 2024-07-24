var ano = document.getElementById('ano_car')
var btn = document.getElementById('conf')

var left = document.getElementById('left')
var title = document.getElementById('titulo_car')
var right = document.getElementById('right')

var car = document.getElementById('car')
var fipe = document.getElementById('fipe_car')
var desc = document.getElementById('desc_car')

var listas = []
var listAtual = []
var index = 0

function carregar_json(){
    fetch('list_car.json')
    .then(response => response.json())
    .then(data => {
        listas = [data.list1, data.list2, data.list3, data.list4, data.list5, data.list6,
            data.list7, data.list8,  data.list9, data.list10,  data.list11, data.list12, 
            data.list13, data.list14, data.list15
        ]

        mostrar_car()
    })
}

function atualizar_car(lista){
    var j_car = lista[index]
    window.document.body.style.background = j_car.cor
    title.innerHTML = j_car.titulo
    car.src = j_car.path
    fipe.innerHTML = j_car.FIPE
    desc.innerHTML = j_car.descricao
}

function mostrar_car(){
    var anoInput = Number(ano.value)
    var anoIndex = anoInput - 2010

    if(anoIndex >= 0 && anoIndex < listas.length){
        listAtual = listas[anoIndex]
        atualizar_car(listAtual)
    }
    
    left.addEventListener('click', function(){
        index = (index - 1 + listAtual.length) % listAtual.length
        atualizar_car(listAtual)
    })

    right.addEventListener('click', function(){
        index = (index + 1 + listAtual.length) % listAtual.length
        atualizar_car(listAtual)
    })
}

btn.addEventListener('click', mostrar_car)
carregar_json()