
        // const add = document.getElementById("add")
        add.addEventListener("click", adicionar)

        let num = document.getElementById("num")
        let select = document.getElementById("select")
        select.innerHTML = ``
        let array = []

        function isNumero(n) {
            if (Number(n) >= 1 && Number(n) <= 100) {
                return true
            } else {
                return false
            }
        }
        function inLista(n, l) {
            if (l.indexOf(Number(n)) != -1) {
                return true
            } else {
                return false
            }
        }

        function adicionar() {
            if (isNumero(num.value) && !inLista(num.value, array)) {
                array.push(Number(num.value))
                let item = document.createElement("option")
                item.text = `${num.value}`
                select.appendChild(item)
                res.innerHTML = ``
            } else {
                alert("valor incorreto")
            }
            num.value = ``
            num.focus()
        }

        finish.addEventListener("click", finalizar)
        function finalizar() {
            if (array.length == 0) {
                alert("adicione valores antes de prosseguir")
            } else {
                let total = array.length
                let maior = array[0]
                let menor = array[0]
                let soma = 0
                let media = 0
                for (let pos in array) {
                    soma += array[pos]
                    if (array[pos] > maior) {
                        maior = array[pos]
                    }
                    if (array[pos] < menor) {
                        menor = array[pos]
                    }
                }
                media = soma / total
                res.innerHTML = ``
                res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
                res.innerHTML += `<p>O menor valor é ${menor}</p>`
                res.innerHTML += `<p>O maior valor é ${maior}</p>`
                res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
                res.innerHTML += `<p>A média dos valores é ${media}</p>`
            }
        }