import chai from 'chai';
import {Building} from '../building.js';
import {House} from '../building.js';


let expect = chai.expect;
let should = chai.should();

describe("Properties of the building", () => {

	let lowCost = new House('Low Cost', 'White', 20, 100);
	lowCost.addFloors(10);

	it('should return Low Cost for lowCost.name', () => {
		expect(lowCost.name).to.be.equal('Low Cost');
	})

	it('should return White for lowCost.color', () => {
		(lowCost.color).should.be.equal('White')
	})

	it('should return 20 for lowCost.floors', () => {
		(lowCost.floors).should.be.equal(20)
	})

	it('should return 100 for lowCost.rooms', () =>{
		(lowCost.rooms).should.be.equal(100);
	})

	it('should return 120 as total number of rooms for addRooms(20)', () => {
		lowCost.addRooms(20).should.be.equal(120);
	})

	it('should return 30 as total number of floors for lowCost.addFloors(10)', () => {
		lowCost.addFloors(10).should.be.equal(30);
	})
})


