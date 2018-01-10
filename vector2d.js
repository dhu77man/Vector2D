class Vector {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    setX(v){ this._x = v };
    setY(v){ this._y = v; }
    
	getX(){ return this._x;}
    getY(){ return this._y; }

	setAngle(angle){
		let length = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	}

	getAngle(){ return Math.atan2(this._y, this._x); }
	
	angleTo(p2){
		return Math.atan2(p2.getY() - this._y, p2.getX() - this._x);
	}

	distanceTo(p2) {
		var dx = p2.getX() - this._x,
			dy = p2.getY() - this._y;

		return Math.sqrt(dx * dx + dy * dy);
	}

	setLength(length) {
		var angle = this.getAngle();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	}
	
	gravitateTo(p2, mass, mymass) {
		var grav = Vector.create(0, 0),
            dist = mypos.distanceTo(p2);
            
		grav.setLength((G*mass*mymass) / (dist * dist));
		grav.setAngle(this.angleTo(p2));
		this.addTo(grav);
	}

	getLength() {
		return Math.sqrt(this._x * this._x + this._y * this._y);
	}
	
	maxSpeed(s){
		if(this.getLength() > s){
			this.setLength(s);
		}
	}

	add(v2) {
		return vector.create(this._x + v2.getX(), this._y + v2.getY());
	}

	subtract(v2) {
		return vector.create(this._x - v2.getX(), this._y - v2.getY());
	}

	multiply(val) {
		return vector.create(this._x * val, this._y * val);
	}

	divide(val) {
		return vector.create(this._x / val, this._y / val);
	}

	addTo(v2) {
		this._x += v2.getX();
		this._y += v2.getY();
	}

	subtractFrom(v2) {
		this._x -= v2.getX();
		this._y -= v2.getY();
	}

	multiplyBy(val) {
		this._x *= val;
		this._y *= val;
	}

	divideBy(val) {
		this._x /= val;
		this._y /= val;
	}
	
	normalize(scale){
		var norm = Math.sqrt(this._x * this._x + this._y * this._y);
		if (norm != 0) {
			return vector.create(
				scale * this._x / norm,
				scale * this._y / norm
			);
		}
	}
	
	dot(v2){
		return this._x * v2._x + this._y * v2._y;
	}

}
