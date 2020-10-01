import Phaser from 'phaser'

export default class CustomButton extends Phaser.GameObjects.Container
{
    private upImage: Phaser.GameObjects.Image
    private overImage: Phaser.GameObjects.Image

    constructor(scene: Phaser.Scene, x: number, y: number, upTexture: string, overTexture: string, x_scale: number, y_scale: number)
    {
        super(scene, x, y)

        this.upImage = scene.add.image(0, 0, upTexture).setScale(x_scale, y_scale);
        this.overImage = scene.add.image(0, 0, overTexture).setScale(x_scale, y_scale);

        this.add(this.upImage);
        this.add(this.overImage);

        this.overImage.setVisible(false);

        this.setSize(this.upImage.width*x_scale, this.upImage.height*y_scale);

        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.upImage.setVisible(false);
                this.overImage.setVisible(true);
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.upImage.setVisible(true);
                this.overImage.setVisible(false);
            })
    }
}