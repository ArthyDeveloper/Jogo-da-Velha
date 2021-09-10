//#region Tudo   
    //#region Mapeamento de Quadrados    
    const A1 = document.querySelector('.A1')
    const A2 = document.querySelector('.A2')
    const A3 = document.querySelector('.A3')
    const B1 = document.querySelector('.B1')
    const B2 = document.querySelector('.B2')
    const B3 = document.querySelector('.B3')
    const C1 = document.querySelector('.C1')
    const C2 = document.querySelector('.C2')
    const C3 = document.querySelector('.C3')
    const Logo = document.querySelector('.Logo')
    const VezTexto = document.querySelector('.VezJogador')
    const ReiniciarBTN = document.querySelector('.ReiniciarBotão')
    var jogador = 1
    var a1 = 0
    var a2 = 0
    var a3 = 0
    var b1 = 0
    var b2 = 0
    var b3 = 0
    var c1 = 0
    var c2 = 0
    var c3 = 0

    var xa1 = 0
    var xa2 = 0
    var xa3 = 0
    var xb1 = 0
    var xb2 = 0
    var xb3 = 0
    var xc1 = 0
    var xc2 = 0
    var xc3 = 0

    var oa1 = 0
    var oa2 = 0
    var oa3 = 0
    var ob1 = 0
    var ob2 = 0
    var ob3 = 0
    var oc1 = 0
    var oc2 = 0
    var oc3 = 0

    console.log(a1, a2, a3, b1, b2, b3, c1, c2, c3, jogador)
    //#endregion
    
    Logo.addEventListener('click', function (){
        window.open("http://arthydeveloper.vercel.app/")
    })

    /*
    function mudarJogador(){
        if (jogador == 1){
            jogador = 2 ;
            VezTexto.innerHTML = "Jogador: O";
        } else {
            jogador = 1;
            VezTexto.innerHTML = "Jogador: X";
        }
    }
    */

    //#region Mudar X ou O nos quadrados separando jogadores e sinais.
        
        function A1Quadrado(){
            if (a1 == 0){
                a1 = 1
                if (jogador == 1){
                    A1.innerHTML = "X";
                    xa1 = 1;
                    VezTexto.innerHTML = "Jogador: O";
                    jogador = 2
                } else {
                    A1.innerHTML = "O";
                    oa1 = 1;
                    VezTexto.innerHTML = "Jogador: X";
                    jogador = 1
                }
            }
            if (a1 == 1){
                if (jogador == 1){
                    VezTexto.innerHTML = "Jogador: X";
                } else {
                    VezTexto.innerHTML = "Jogador: O";
                }
            }
        }
        function A2Quadrado(){
            if (a2 == 0){
                a2 = 1
                if (jogador == 1){
                    A2.innerHTML = "X";
                    xa2 = 1;
                    VezTexto.innerHTML = "Jogador: O";
                    jogador = 2
                } else {
                    A2.innerHTML = "O";
                    oa2 = 1
                    VezTexto.innerHTML = "Jogador: X";
                    jogador = 1
                }
            }
            if (a2 == 1){
                if (jogador == 1){
                    VezTexto.innerHTML = "Jogador: X";
                } else {
                    VezTexto.innerHTML = "Jogador: O";
                }
            }
        }
        function A3Quadrado(){
            if (a3 == 0){
                a3 = 1
                if (jogador == 1){
                    A3.innerHTML = "X";
                    xa3 = 1;
                    VezTexto.innerHTML = "Jogador: O";
                    jogador = 2
                } else {
                    A3.innerHTML = "O";
                    oa3 = 1
                    VezTexto.innerHTML = "Jogador: X";
                    jogador = 1
                }
            }
            if (a3 == 1){
                if (jogador == 1){
                    VezTexto.innerHTML = "Jogador: X";
                } else {
                    VezTexto.innerHTML = "Jogador: O";
                }
            }
        }

        function B1Quadrado(){
            if (b1 == 0){
                b1 = 1
                if (jogador == 1){
                    B1.innerHTML = "X";
                    xb1 = 1;
                    VezTexto.innerHTML = "Jogador: O";
                    jogador = 2
                } else {
                    B1.innerHTML = "O";
                    ob1 = 1;
                    VezTexto.innerHTML = "Jogador: X";
                    jogador = 1
                }
            }
            if (b1 == 1){
                if (jogador == 1){
                    VezTexto.innerHTML = "Jogador: X";
                } else {
                    VezTexto.innerHTML = "Jogador: O";
                }
            }
        }
        function B2Quadrado(){
            if (b2 == 0){
                b2 = 1
                if (jogador == 1){
                    B2.innerHTML = "X";
                    xb2 = 1;
                    VezTexto.innerHTML = "Jogador: O";
                    jogador = 2
                } else {
                    B2.innerHTML = "O";
                    ob2 = 1;
                    VezTexto.innerHTML = "Jogador: X";
                    jogador = 1
                }
            }
            if (b2 == 1){
                if (jogador == 1){
                    VezTexto.innerHTML = "Jogador: X";
                } else {
                    VezTexto.innerHTML = "Jogador: O";
                }
            }
        }
        function B3Quadrado(){
            if (b3 == 0){
                b3 = 1
                if (jogador == 1){
                    B3.innerHTML = "X";
                    xb3 = 1;
                    VezTexto.innerHTML = "Jogador: O";
                    jogador = 2
                } else {
                    B3.innerHTML = "O";
                    ob3 = 1;
                    VezTexto.innerHTML = "Jogador: X";
                    jogador = 1
                }
            }
            if (b3 == 1){
                if (jogador == 1){
                    VezTexto.innerHTML = "Jogador: X";
                } else {
                    VezTexto.innerHTML = "Jogador: O";
                }
            }
        }

        function C1Quadrado(){
            if (c1 == 0){
                c1 = 1
                if (jogador == 1){
                    C1.innerHTML = "X";
                    xc1 = 1;
                    VezTexto.innerHTML = "Jogador: O";
                    jogador = 2
                } else {
                    C1.innerHTML = "O";
                    oc1 = 1;
                    VezTexto.innerHTML = "Jogador: X";
                    jogador = 1
                }
            }
            if (c1 == 1){
                if (jogador == 1){
                    VezTexto.innerHTML = "Jogador: X";
                } else {
                    VezTexto.innerHTML = "Jogador: O";
                }
            }
        }
        function C2Quadrado(){
            if (c2 == 0){
                c2 = 1
                if (jogador == 1){
                    C2.innerHTML = "X";
                    xc2 = 1;
                    VezTexto.innerHTML = "Jogador: O";
                    jogador = 2
                } else {
                    C2.innerHTML = "O";
                    oc2 = 1;
                    VezTexto.innerHTML = "Jogador: X";
                    jogador = 1
                }
            }
            if (c2 == 1){
                if (jogador == 1){
                    VezTexto.innerHTML = "Jogador: X";
                } else {
                    VezTexto.innerHTML = "Jogador: O";
                }
            }
        }
        function C3Quadrado(){
            if (c3 == 0){
                c3 = 1
                if (jogador == 1){
                    C3.innerHTML = "X";
                    xc3 = 1;
                    VezTexto.innerHTML = "Jogador: O";
                    jogador = 2
                } else {
                    C3.innerHTML = "O";
                    oc3 = 1;
                    VezTexto.innerHTML = "Jogador: X";
                    jogador = 1
                }
            }
            if (c3 == 1){
                if (jogador == 1){
                    VezTexto.innerHTML = "Jogador: X";
                } else {
                    VezTexto.innerHTML = "Jogador: O";
                }
            }
        }

        /* BACKUP
        function C3Quadrado(){
            if (jogador == 1){
                C3.innerHTML = "X";
            } else {
                C3.innerHTML = "O";
            }
        }*/
    //#endregion

    A1.addEventListener('click', function () {
        console.log("A1");
        A1Quadrado();
        quemGanha();
    })
    A2.addEventListener('click', function () {
        console.log("A2")
        A2Quadrado();
        quemGanha();
    })
    A3.addEventListener('click', function () {
        console.log("A3")
        A3Quadrado();
        quemGanha();
    })

    B1.addEventListener('click', function () {
        console.log("B1")
        B1Quadrado();
        quemGanha();
    })
    B2.addEventListener('click', function () {
        console.log("B2")
        B2Quadrado();
        quemGanha();
    })
    B3.addEventListener('click', function () {
        console.log("B3")
        B3Quadrado();
        quemGanha();
    })

    C1.addEventListener('click', function () {
        console.log("C1")
        C1Quadrado();
        quemGanha();
    })
    C2.addEventListener('click', function () {
        console.log("C2")
        C2Quadrado();
        quemGanha();
    })
    C3.addEventListener('click', function () {
        console.log("C3")
        C3Quadrado();
        quemGanha();
    })

    //#region Reiniciar jogo
    function restaurarcores(){
        A1.style.backgroundColor = "darkslategray";        
        A2.style.backgroundColor = "darkslategray";
        A3.style.backgroundColor = "darkslategray";
        B1.style.backgroundColor = "darkslategray";
        B2.style.backgroundColor = "darkslategray";
        B3.style.backgroundColor = "darkslategray";
        C1.style.backgroundColor = "darkslategray";
        C2.style.backgroundColor = "darkslategray";
        C3.style.backgroundColor = "darkslategray";
    }
    function ClickBlock(){
        a1 = 1;
        a2 = 1;
        a3 = 1;
        b1 = 1;
        b2 = 1;
        b3 = 1;
        c1 = 1;
        c2 = 1;
        c3 = 1;
    }
    function reiniciar(){
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;

        xa1 = 0;
        xa2 = 0;
        xa3 = 0;
        xb1 = 0;
        xb2 = 0;
        xb3 = 0;
        xc1 = 0;
        xc2 = 0;
        xc3 = 0;

        oa1 = 0;
        oa2 = 0;
        oa3 = 0;
        ob1 = 0;
        ob2 = 0;
        ob3 = 0;
        oc1 = 0;
        oc2 = 0;
        oc3 = 0;
        
        jogador = 1;
        VezTexto.innerHTML = "Jogador: X";
        A1.innerHTML = "";
        A2.innerHTML = "";
        A3.innerHTML = "";
        B1.innerHTML = "";
        B2.innerHTML = "";
        B3.innerHTML = "";
        C1.innerHTML = "";
        C2.innerHTML = "";
        C3.innerHTML = "";

        restaurarcores();
    }
    //#endregion
    
    //#region Quem ganhou? (MUITAS FUNÇÕES)
    function quemGanha(){
        //#region Empate
            if (a1 == 1 && a2 == 1 && a3 == 1 && b1 == 1 && b2 == 1 && b3 == 1 && c1 == 1 && c2 == 1 && c3 == 1){
                console.log("Empate!")
                VezTexto.innerHTML = "Jogo Empatado!";
            }
        //#endregion
        //#region Combinações de X
            /* Combinação Horizontal */
            if (xa1 == 1 && xa2 == 1 && xa3 == 1){
                ClickBlock();
                console.log("Combinação X A1 2 e 3!")
                VezTexto.innerHTML = "X é o ganhador!";
                A1.style.background = "lightseagreen";
                A2.style.background = "lightseagreen";
                A3.style.background = "lightseagreen";
            }
            if (xb1 == 1 && xb2 == 1 && xb3 == 1){
                ClickBlock();
                console.log("Combinação X B1 2 e 3!")
                VezTexto.innerHTML = "X é o ganhador!";
                B1.style.background = "lightseagreen";
                B2.style.background = "lightseagreen";
                B3.style.background = "lightseagreen";
            }
            if (xc1 == 1 && xc2 == 1 && xc3 == 1){
                ClickBlock();
                console.log("Combinação X C1 2 e 3!")
                VezTexto.innerHTML = "X é o ganhador!";
                C1.style.background = "lightseagreen";
                C2.style.background = "lightseagreen";
                C3.style.background = "lightseagreen";
            }
            /* Combinação Vertical */
            if (xa1 == 1 && xb1 == 1 && xc1 == 1){
                ClickBlock();
                console.log("Combinação X Vertical 1!")
                VezTexto.innerHTML = "X é o ganhador!";
                A1.style.background = "lightseagreen";
                B2.style.background = "lightseagreen";
                C3.style.background = "lightseagreen";
            }
            if (xa2 == 1 && xb2 == 1 && xc2 == 1){
                ClickBlock();
                console.log("Combinação X Vertical 2!")
                VezTexto.innerHTML = "X é o ganhador!";
                A2.style.background = "lightseagreen";
                B2.style.background = "lightseagreen";
                C2.style.background = "lightseagreen";
            }
            if (xa3 == 1 && xb3 == 1 && xc3 == 1){
                ClickBlock();
                console.log("Combinação X Vertical 3!")
                VezTexto.innerHTML = "X é o ganhador!";
                A3.style.background = "lightseagreen";
                B3.style.background = "lightseagreen";
                C3.style.background = "lightseagreen";
            }
            /* Diagonais */
            if (xa1 == 1 && xb2 == 1 && xc3 == 1){
                ClickBlock();
                console.log("Combinação X Diagonal E/D")
                VezTexto.innerHTML = "X é o ganhador!";
                A1.style.background = "lightseagreen";
                B2.style.background = "lightseagreen";
                C3.style.background = "lightseagreen";
            }
            if (xa3 == 1 && xb2 == 1 && xc1 == 1){
                ClickBlock();
                console.log("Combinação X Diagonal D/E")
                VezTexto.innerHTML = "X é o ganhador!";
                A3.style.background = "lightseagreen";
                B2.style.background = "lightseagreen";
                C1.style.background = "lightseagreen";
            }
        //#endregion
        //#region Combinações de O
            /* Combinação Horizontal */
            if (oa1 == 1 && oa2 == 1 && oa3 == 1){
                ClickBlock();
                console.log("Combinação O A1 2 e 3!")
                VezTexto.innerHTML = "O é o ganhador!";
                A1.style.background = "lightseagreen";
                A2.style.background = "lightseagreen";
                A3.style.background = "lightseagreen";
            }
            if (ob1 == 1 && ob2 == 1 && ob3 == 1){
                ClickBlock();
                console.log("Combinação O B1 2 e 3!")
                VezTexto.innerHTML = "O é o ganhador!";
                B1.style.background = "lightseagreen";
                B2.style.background = "lightseagreen";
                B3.style.background = "lightseagreen";
            }
            if (oc1 == 1 && oc2 == 1 && oc3 == 1){
                ClickBlock();
                console.log("Combinação O C1 2 e 3!")
                VezTexto.innerHTML = "O é o ganhador!";
                C1.style.background = "lightseagreen";
                C2.style.background = "lightseagreen";
                C3.style.background = "lightseagreen";
            }
            /* Combinação Vertical */
            if (oa1 == 1 && ob1 == 1 && oc1 == 1){
                ClickBlock();
                console.log("Combinação O Vertical 1!")
                VezTexto.innerHTML = "O é o ganhador!";
                A1.style.background = "lightseagreen";
                B1.style.background = "lightseagreen";
                C1.style.background = "lightseagreen";
            }
            if (oa2 == 1 && ob2 == 1 && oc2 == 1){
                ClickBlock();
                console.log("Combinação O Vertical 2!")
                VezTexto.innerHTML = "O é o ganhador!";
                A2.style.background = "lightseagreen";
                B2.style.background = "lightseagreen";
                C2.style.background = "lightseagreen";
            }
            if (oa3 == 1 && ob3 == 1 && oc3 == 1){
                ClickBlock();
                console.log("Combinação O Vertical 3!")
                VezTexto.innerHTML = "O é o ganhador!";
                A3.style.background = "lightseagreen";
                B3.style.background = "lightseagreen";
                C3.style.background = "lightseagreen";
            }
            /* Diagonais */
            if (oa1 == 1 && ob2 == 1 && oc3 == 1){
                ClickBlock();
                console.log("Combinação O Diagonal E/D")
                VezTexto.innerHTML = "O é o ganhador!";
                A1.style.background = "lightseagreen";
                B2.style.background = "lightseagreen";
                C3.style.background = "lightseagreen";
            }
            if (oa3 == 1 && ob2 == 1 && oc1 == 1){
                ClickBlock();
                console.log("Combinação O Diagonal D/E")
                VezTexto.innerHTML = "O é o ganhador!";
                A3.style.background = "lightseagreen";
                B2.style.background = "lightseagreen";
                C1.style.background = "lightseagreen";
            }
        //#endregiona
    }
    //#endregion
//#endregion