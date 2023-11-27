// Neste projeto foi feito uma base para que dependendo da forma de pagamento da pessoa ela obtesse o valor de 10% de desconto pagando no débito, 15% de desconto pagamento no pix; valor normal pagando em duas vezes, e acima de duas vezes preço da etiqueta mais um acrescimo de 10% em juros. 

const precoOriginal = 100
const formaDePagamento = 1

if (formaDePagamento === 1) {
    console.log(precoOriginal - (precoOriginal * 0.1))
} else if (formaDePagamento === 2) {
    console.log(precoOriginal - (precoOriginal * 0.15))
} else if (formaDePagamento === 3) {
    console.log(precoOriginal)
} else {
    console.log(precoOriginal + (precoOriginal * 0.1))
}