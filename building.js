class Building {

	constructor (name, color, floors) {
		this._name   =  name;
		this._color  = color;
		this._floors = floors;
	}

  get name() {
    return this._name;
  }
  
  set name(value) {
    if (typeof name !== 'string'){
      throw new Error("value must be a string");
    }
    this._name = value;
  }
  
  get color() {
    return this._color;
  }
  
  set color(value) {
    if (typeof name !== 'string'){
      throw new Error("value must be a string");
    }
    this._color = value;
  }
  
  get floors() {
    return this._floors;
  }
  
  set floors(value) {
    if (typeof name !== 'number'){
      throw new Error("value must be a number");
    }
    this._floors = floors;
  }
  
	addFloors(value) {
		if (typeof value !== 'number') {
			throw new Error('value must be a number');
		}
		return this._floors + value;
	}

	getBuildingInfo() {
		return `Buidling Info- Name: ${this._name}, Color: ${this._color}, Floors: ${this._floors}`;
	}
}

class House extends Building {

	constructor (name, color, floors, rooms) {
		super(name, color, floors);
		this._rooms = rooms;
	}
	
	get rooms() {
	  return this._rooms;
	}
	
	set rooms(value) {
	  if (typeof value !== 'number') {
	    throw new Error("value must be a number");
	  }
	  this._rooms = rooms;
	}

	addRooms(value) {
		if (typeof value !== 'number') {
			throw new Error('value must be a number');
		}
		return this._rooms + value;
	}

	getHouseInfo() {
	return `House Info: Name: ${this._name}, Color: ${this._color}, Floors: ${this._floors}, Rooms: ${this._rooms}`;	
	} 
}


export {Building, House}




