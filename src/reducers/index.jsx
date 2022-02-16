import { types } from "../action/ActionTypes"

const INTIAL_STATE = [{
    name:"Fone bluetooth",
    src:"https://static.netshoes.com.br/produtos/fone-de-ouvido-wireless-inpods-12-tws-bluetooth-50-para-iphone-e-android/06/QWT-0675-006/QWT-0675-006_zoom1.jpg?ts=1615202540&ims=544x",
    preco:"25.00"
},
{
    name:"notebook",
    src:"https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1334529330",
    preco:"2500.00"
},
{
    name:"celular",
    src:"https://cf.shopee.com.br/file/6b1e9ceea07a1dc5b1b6d35b6b51df7b",
    preco:"1250.00"
},
{
    name:"SmartWatch",
    src:"https://ae01.alicdn.com/kf/HTB1cceRewmH3KVjSZKzq6z2OXXaE/Giausa-t80-mulheres-rel-gio-inteligente-ip67-prova-dip67-gua-monitor-de-freq-ncia-card-aca.jpg",
    preco:"250.00"
},
{
    name:"Kindle",
    src:"https://a-static.mlcdn.com.br/618x463/kindle-10a-geracao-tela-6-8gb-wi-fi-luz-embutida-preto/magazineluiza/225542900/7ec51beb6ca3c75cfca514bdd2c60a6f.jpg",
    preco:"375.00"
},

]

export const addProdReducer = (state = INTIAL_STATE, action ) => {
    switch (action.type) {
        case types.ADD_PRODUTO:
            return state = [...state, action.payload]
        default:
            return state
        }

} 