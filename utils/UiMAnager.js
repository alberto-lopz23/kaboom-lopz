class UiManager {

    displayBlinkingUiMessage(content, position) {
        const message = add([
            text(content, {
                size: 24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"]),

        ])


        message.onStateEnter("flash-up", async () => {
            await tween(
                message.opacity,
                0,
                1,
                (nextVAlue) => message.opacity = nextVAlue,
                easings.linear
            )
            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async () => {
            await tween(
                message.opacity,
                1,
                0.5,
                (nextVAlue) => message.opacity = nextVAlue,
                easings.linear
            )
            message.enterState("flash-up")
        })

    }


    displayMainMenu() {
        add([
            sprite("forest-background"),
            scale(4.5)
        ])
        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y - 205),
            scale(8)

        ])

        this.displayBlinkingUiMessage(
            "Presiona [ enter ] para empezar el dolor",
            vec2(center().x, center().y + 150)
        )

        onKeyPress("enter", () => {
            play("confirm-ui", { speed: 1.5 })
            go("controls")
        })

    }

    displayControls() {
        add([sprite("forest-background"), scale(4.5)])
        add([
            text("Controles", { font: "Round", size: 50 }),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200),
        ])

        const controlPrompts = add([
            pos(center().x + 30, center().y)
        ])

        controlPrompts.add([
            sprite("up"),
            pos(0, -80)
        ])
        controlPrompts.add([
            sprite("down"),
            pos(0, 80)
        ])
        controlPrompts.add([
            sprite("left"),
            pos(-80, 0)
        ])
        controlPrompts.add([
            sprite("right"),
            pos(80, 0)
        ])
        controlPrompts.add([
            sprite("space"),
            pos(-300, 0)
        ])
        controlPrompts.add([
            text("Salto", { font: "Round", size: 24 }),
            pos(-290, 250)
        ])
        controlPrompts.add([
            text("moverse", { font: "Round", size: 24 }),
            pos(0, 250)
        ])


    }

}



export const uiManager = new UiManager()