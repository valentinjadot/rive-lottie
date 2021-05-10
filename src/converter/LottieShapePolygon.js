const LottieShapeContent = require("./LottieShapeContent");
const LottieArrayProperty = require("./properties/LottieArrayProperty");

class LottieShapePolygon extends LottieShapeContent {

    _position = new LottieArrayProperty();
    _size = new LottieArrayProperty();

    get position() {
        return this._position;
    }

    get size() {
        return this._size;
    }

    serialize() {
        return {
            ty: 'el',
            p: this._position.serialize(),
            s: this._size.serialize(),
        }
    }
}

module.exports = LottieShapePolygon;