window.onload = function () {
    const drawBoton = document.getElementById("btndraw");
    const btnSorting = document.getElementById("btnSorting");
    let cards = document.querySelector("#cards");
    var numCards = [];
    var cardmain= ["\u2666", "\u2660", "\u2663", "\u2665"];
    var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    drawBoton.addEventListener("click", function () {
        numCards = [];
        var allCards = document.getElementById("input").value;
        cards.innerHTML = " ";

        for (var i = 0; i < allCards; i++) {
            var divi = document.createElement("DIV");
            divi.innerHTML = "<div class='card1'></div><div class='number'></div><div class='card2'></div>";
            divi.classList.add("card");
            cards.appendChild(divi);

            var randomCard = Math.floor(Math.random() * 4);
            var random = Math.floor(Math.random() * 13);
            numCards.push(random);

            var card1 = document.getElementsByClassName("card1");
            var number = document.getElementsByClassName("number");
            var card2 = document.getElementsByClassName("card2");

            if (randomCard == 0) {
                var tag = cardmain[randomCard];
                card1[i].innerHTML = tag;
                var num = numbers[random];
                number[i].innerHTML = num;
                var simbolo2 = cardmain[randomCard];
                card2[i].innerHTML = simbolo2;
                card1[i].style.color = "red";
                card2[i].style.color = "red";
                number[i].style.color = "red";
            }


            else if (randomCard == 1) {
                var tag = cardmain[randomCard];
                card1[i].innerHTML = tag;
                var num = numbers[random];
                number[i].innerHTML = num;
                var simbolo2 = cardmain[randomCard];
                card2[i].innerHTML = simbolo2;
            }


            else if (randomCard == 2) {
                var tag = cardmain[randomCard];
                card1[i].innerHTML = tag;
                var num = numbers[random];
                number[i].innerHTML = num;
                var simbolo2 = cardmain[randomCard];
                card2[i].innerHTML = simbolo2;
            }


            else if (randomCard == 3) {
                var tag = cardmain[randomCard];
                card1[i].innerHTML = tag;
                var num = numbers[random];
                number[i].innerHTML = num;
                var simbolo2 = cardmain[randomCard];
                card2[i].innerHTML = simbolo2;
                card1[i].style.color = "red";
                card2[i].style.color = "red";
                number[i].style.color = "red";
            }
        }
    });

    btnSorting.addEventListener("click", function () {
        bubbleSorting(numCards);
    });


    function bubbleSorting(arr) {
        let wall = arr.length - 1;
        while (wall > 0) {
            for (let i = 0; i <= wall; i++) {
                if (arr[i] > arr[i + 1]) {
                    let empty = arr[i + 1];
                    arr[i + 1] = arr[i];
                    arr[i] = empty;
                    let emptyAux = cards.children[i + 1].innerHTML;
                    cards.children[i + 1].innerHTML = cards.children[i].innerHTML;
                    cards.children[i].innerHTML = emptyAux;
                }
            }
            wall--;
        }
    }
}

