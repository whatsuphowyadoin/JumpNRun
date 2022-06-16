kaboom({                                                  //za pronaci greske u slucaju da nesto krene po zlu (za debuging)

    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

/*const {
    scene,
    go,
    loadSprite,
    loadSpriteAtlas,
} =k

loadSpriteAtlas("/assets/faune.png", {
    "faune": {
        x:0,
        y:0,
        width: 769,
        height: 91,
        sliceX: 10,
        anims:{
            "walk-side": {from: 0, to: 4, loop: true, speed: 15},
            "jumping-up": {from: 5, to: 9, loop: true, speed: 15},

            "idle-side": {from: 7, to: 7},
            "idle-jump": {from: 1, to: 1},

        }
    }
})*/

//player.collides("coin", () => {
//   play("pickupCoin");
// })

loadRoot("https://i.imgur.com/")
loadSprite("hades", "IHL1pkE.png")
loadSprite("HadesRunningLeft", "DXbiPz4.png")
loadSprite("HadesJumpingRight", "NvMLhTq.png")
loadSprite("HadesStanding", "lEpqPQI.png")
loadSprite("hobotnica", "NXyJhmj.png")
loadSprite("surprise", "Y5GTcvT.png")
loadSprite("coin", "bx3yKKv.png")
loadSprite("enemies", "062fHqm.png")
loadSprite("brick", "pogC9x5.png")                          //bilder
loadSprite("block", "M6rwarW.png")
loadSprite("unboxed", "bdrLpi6.png")
loadSprite("pipe-top-left", "b95ojPm.png")
loadSprite("pipe-top-right", "b95ojPm.png")
//loadSprite("pipe-bottom-left","b95ojPm.png" )
//loadSprite("pipe-bottom-right","nqQ79eI.png" )
loadSprite("bg", "EaYxfhL.png")
loadSprite("bg1", "WU3vMm9.png")
loadSprite("bg2", "NmwK6YY.png")
loadSprite("cloud", "rM6mmqP.png")
loadSprite("Water1", "w85OjqR.png")
loadSprite("Water2", "MDdweFf.png")
loadSprite("Water3", "16wcX69.png")

//arrows
loadSprite("right", "3oQ68LG.png")
loadSprite("left", "TEg2XU3.png")
loadSprite("up  ", "Vry0kKA.png")


//blue stuff
loadSprite("blue-block", "fVscIbn.png")
loadSprite("blue-brick", "3e5YRQd.png")
loadSprite("blue-steel", "gqVoI2b.png")
loadSprite("blue-enemie", "SvV4ueD.png")
loadSprite("blue-surprise", "RMqCc1G.png")

//scene("char-movement", CharacterMovement)

//go("char-movement")

scene("game", ({ level, score }) => {
    layers(["bg", "obj", "ui"], "obj")                         //zadnji obj je deffault, zbog toga ide izvan eckige zagrade
    const maps = [                                                //kreiranje gameboarda sa mapama
        [
            "B                                                   ",
            "                                       $    $   $   ",
            "                                                    ",
            "                                                    ",
            "=========                                          =",
            "=                     ===%=*==%=        ==   ==  ===",
            "=           ======                                  ",
            "=                                   ==              ",
            "=                               ^                   ",
            "=                       ======                      ",
            "=                                                   ",
            "=                                   ==              ",
            "=                               ^                   ",
            "=     %   =*=                                      =",
            "=                     ===%=*==%=        ==   ==   ==",
            "===                                                 ",
            "=               ===                 ==              ",
            "=                               ^                   ",
            "=  %  =*=%=              ======                     ",
            "=                                                   ",
            "=                                                   ",
            "=                                                   ",
            "===========      ==%%=                              ",
            "=                              ======               ",
            "=                                                   ",
            "=                                         ^$$$$$$^  ",
            "=            =======                                ",
            "=                                                  =",
            "=                     ===%=*==%=        ============",
            "=                                                   ",
            "=                                   ==              ",
            "=                                                   ",
            "=     %  =*=%              ======                   ",
            "=                  ==                          -    ",
            "=                                                  =",
            "=                                                  =",
            "=            ^    ^                                =",
            "=========================  =====   =    ============",
        ],
        [
            "C                      ^^          ^^       ^^^^^^  ",
            "                                                    ",
            "                 ^^                     $    $^^  $ ",
            "                                                    ",
            "xxxxxxxxx                                           ",
            "x                     !!!%!*!!%!    $   !!   !!  !!!",
            "x        $$$$$$                                     ",
            "x                                   !!      ^^      ",
            "x       !!!!!!!!                ^                   ",
            "x                                                 ^ ",
            "x                  ^^  ^  !!!!!!^                   ",
            "x                                   !!  $    $    $ ",
            "x                               ^                   ",
            "x     @  !*!%                                       ",
            "x                     !!!%!*!!%!        !!   !!   !!",
            "x                           $  $                    ",
            "x                                                   ",
            "x                               ^                   ",
            "x     %  !*!%              !!!!!!        $   $     $",
            "x                                                   ",
            "x   $$                          ^        !!  !!   !!",
            "x              @%!         $  $                     ",
            "x                                                   ",
            "x  |  |                    | | |        $$$$$$$$    ",
            "x                                                   ",
            "x   $$                                            | ",
            "x            | | | |                                ",
            "x                                      |   >  |   < ",
            "x  |  |               !!!%!*!!@!                    ",
            "x                                                   ",
            "x                                        $  $ $ $   ",
            "x                               ^                   ",
            "x   %   |  *  | %            |  |  |    xxxxxxxxxxxx",
            "x                                            -     x",
            "x  $$$$$$$    $$$$$$$$                             x",
            "x                                                  x",
            "x            ^    ^                                x",
            "!!!>!!!>!!!>!!!!!!!>!!>!!  >!>!>   >    >!>!!!>!!>!>",
        ],
        [
            "D                                                   ",
            "                                                    ",
            "                                        $    $    $ ",
            "                                                    ",
            "€€€€€€€€€                                           ",
            "€                ~  ~    %   ~   * %     $   ~   ~   ",
            "€     $$$$$                                         ",
            "€                                   ~               ",
            "€     ~ ~ ~                     ^                   ",
            "€                                   $        ~      ",
            "€                               ^                   ",
            "€      $$$$$$$$$                    ~   $    $    $ ",
            "€                               ^                   ",
            "€   @   ~    *    ~                                 ",
            "€                        ~   %  *   ~     ~   ~   ~ ",
            "€                                                   ",
            "€                                                   ",
            "€                               ^    $ $ $ $ $ $ $  ",
            "€ %   ~    *   ~   %    ~        ~ ~  ~  ~  ~  ~  ~  ~",
            "€                                                   ",
            "€                               ^                   ",
            "€                $                                  ",
            "€ ~ ~ ~         @%  ~                               ",
            "€             $$$$$$$$$$$                           ",
            "€                                                   ",
            "€                                        $$$$$$$$  ~",
            "€            ~ ~ ~ ~ ~ ~ ~                          ",
            "€                                                   ",
            "€                          ~   @        ~ ~ ~ ~ ~ ~ ",
            "€                                                   ",
            "€                                     ~             ",
            "€                             !$$$$  ^              ",
            "€     %  ~   *   ~   %       ~  ~  ~        $$$$$  €",
            "€  -                                               €",
            "€      $$$$$$$       ~                             €",
            "€                                           ~ ~ ~  €",
            "€            ^    ^                                €",
            "~ ~  ~  ~  ~  ~  ~ ~ ~ ~   ~     ~  ~  ~  ~  ~  ~  ~",
        ],
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        "=": [sprite("block"), solid()],                       //defining each object as a list of components
        "%": [sprite("surprise"), solid(), "coin-surprise", scale(0.055)],
        "$": [sprite("coin"), "coin", scale(0.055)],
        "*": [sprite("surprise"), solid(), "hobotnica-surprise", scale(0.055)],
        "}": [sprite("unboxed"), solid()],
        //"(": [sprite("pipe-bottom-left"), solid()],
        //")": [sprite("pipe-bottom-right"), solid()],
        "-": [sprite("pipe-top-left"), "pipe", scale(0.2)],
        //  "+": [sprite("pipe-top-right"),  "pipe", scale(0.2)],
        "^": [sprite("enemies"), solid(), "dangerous", body(), scale(0.05)],
        "#": [sprite("hobotnica"), solid(), "hobotnica", body(), scale(0.1)],
        "B": [sprite("bg")],
        "C": [sprite("bg1"), scale(0.67)],
        "D": [sprite("bg2"), scale(0.67)],
        "~": [sprite("cloud"), solid(), scale(0.08)],
        "|": [sprite("Water1"), solid(), scale(0.08)],
        "<": [sprite("Water2"), solid(), scale(0.08)],
        ">": [sprite("Water3"), solid(), scale(0.08)],

        //MUSIC
        // "M": [sprite("")]



        "!": [sprite("blue-block"), solid(), scale(0.5)],
        "€": [sprite("blue-brick"), solid(), scale(0.5)],
        "@": [sprite("blue-surprise"), solid(), scale(0.5), "coin-surprise"],
        "x": [sprite("blue-steel"), solid(), scale(0.5)],

    }

    //add([sprite("bg"), layer("bg")])

    var audio = new Audio("sounds/fire.mp3");
    audio.play();


    //const audio = new Audio (maps [level])

    const gameLevel = addLevel(maps[level], levelCfg)

    const scoreLabel = add([
        text(score),
        pos(40, 20),
        layer("ui"),
        {
            value: score,
        }
    ])

    add([text("level" + parseInt(level + 1)), pos(40, 6)])

    const player = add([
        sprite("hades"), solid(),
        pos(30, 0),
        body(),
        //big(),
        scale(0.07),
        origin("bot"),
    ])

    //loadSound("pickupCoin", "sounds/pickupCoin.mp3.wav");

    /*player.collides("coin", () => {
        play("pickupCoin");
        })*/



    action("hobotnica", (m) => {
        m.move(50, 0)
    })

    player.on("headbump", (obj) => {                            //za skupljanje novcica iz kutija koje su oznacene da imaju iznanadenje
        if (obj.is("coin-surprise")) {
            gameLevel.spawn("$", obj.gridPos.sub(0, 1))
            destroy(obj)
            gameLevel.spawn("}", obj.gridPos.sub(0, 0))
        }

        if (obj.is("hobotnica-surprise")) {                            //za hobotnice koje se mogu dobiti
            gameLevel.spawn("#", obj.gridPos.sub(0, 1))
            destroy(obj)
            gameLevel.spawn("}", obj.gridPos.sub(0, 0))
        }
    })

    const MOVE_SPEED = 120
    const JUMP_FORCE = 450                                          //snaga za skakanje i kretanje (varijable za kretanje, skakanje)
    const BIG_JUMP_FORCE = 500
    let CURRENT_JUMP_FORCE = JUMP_FORCE
    let isJumping = true
    const FALL_DEATH = 1000


    /*player.collides("mushroom", (m) => {                          //kada hades pojede gljivicu, povecat ce se i bit ce 6 sek. velik
        destroy(m)
        player.biggify(7)
    })*/

    player.collides("coin", (c) => {
        //kada hades uzme novcic, povet ce se scoreValue
        destroy(c)
        scoreLabel.value++
        scoreLabel.text = scoreLabel.value
    })

    /*player.collides("dangerous", (d) => {
    destroy(d)
    scoreLabel.text = scoreLabel.value
    })*/

    const ENEMY_SPEED = 40

    action("dangerous", (d) => {
        d.move(-ENEMY_SPEED, 0)
    })


    player.collides("dangerous", (d) => {
        if (isJumping) {
            destroy(d)
        } else {
            go("lose", { score: scoreLabel.value })
        }
    })

    player.action(() => {
        camPos(player.pos)                                  //the camera is following the player
        if (player.pos.y >= FALL_DEATH) {
            go("lose", { score: scoreLabel.value })
        }
    })

    player.collides("pipe", () => {
        keyPress("down", () => {
            go("game", {
                level: (level + 1) % maps.length,
                score: scoreLabel.value,
            })
        })
    })

    keyDown("left", () => {
        player.changeSprite("HadesRunningLeft")
        player.move(-MOVE_SPEED, 0)
    })

    keyDown("right", () => {
        player.changeSprite("hades")
        player.move(MOVE_SPEED, 0)
    })



    player.action(() => {
        if(player.grounded()){
            isJumping=false
            //player.changeSprite("HadesStanding")
        }
    })
    
    keyPress("space", () =>{
        if(player.grounded()){
            isJumping=true
            player.changeSprite("HadesJumpingRight")
            player.jump(CURRENT_JUMP_FORCE)
        }
    })
    

   /* //Button actions for the touch function

    const keyDown={
        left:false,
        right:false,
    }

    const leftButton = add([
        sprite("left"),
        pos(10, height() - 100),
        opacity(0.5),
        fixed(),
        area(),
    ])
    const rightButton = add([
        sprite("right"),
        pos(140, height() - 100),
        opacity(0.5),
        fixed(),
        area(),
    ])
    const upButton = add([
        sprite("up"),
        pos(widht() - 120, height() - 100),
        opacity(0.5),
        fixed(),
        area(),
    ])

    onTouchstart((id, pos) => {
        if(leftButton.hasPoint(pos)){
            keyDown.left=true
            leftButton.opacity=1
        }
        else if (rightButton.hasPoint(pos)) {
            keyDown.right=true
            rightButton.opacity=1
        }
        else if (upButton.hasPoint(pos)){
            //jump here
            //keyDown=true           
            jump()
            upButton.opacity=1
        }
    })
*/

})

scene("lose", ({ score }) => {
    add([text(score, 32), origin("center"), pos(width() / 2, height() / 2)])
})

start("game", { level: 0, score: 0 })//za mape loading spritesa