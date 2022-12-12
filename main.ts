let burger: Sprite = null
let monkey = sprites.create(img`
    . f f f . 
    . f f f . 
    . f f f . 
    . . f . . 
    . f f f . 
    f . f . f 
    . . f . . 
    . . f . . 
    . f . f . 
    f . . . f 
    `, SpriteKind.Player)
controller.moveSprite(monkey)
game.onUpdateInterval(500, function () {
    burger = sprites.create(img`
        . 2 2 2 . 
        . 2 2 2 . 
        . 2 2 2 . 
        . . 2 . . 
        . 2 2 2 . 
        2 . 2 . 2 
        . . 2 . . 
        . . 2 . . 
        . 2 . 2 . 
        2 . . . 2 
        `, SpriteKind.Player)
})
