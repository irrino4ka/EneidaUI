describe("Eneida Service", function() {

	var eneidaApiUrl = 'http://localhost:3000/api/eneida';

	var $httpBackend, $rootScope, Eneida

	beforeEach(module('mainApp'));
	beforeEach(inject(function(_$httpBackend_, _Eneida_) {
		$httpBackend = _$httpBackend_;
		Eneida = _Eneida_;

		$httpBackend.when('GET', eneidaApiUrl + '/').respond(200, [{id: 1, text: "text 1"}, {id: 2, text: "text2"}]);
		$httpBackend.when('GET', eneidaApiUrl + '/1').respond(200, {id: 1, text: "some text"});
		$httpBackend.when('POST', eneidaApiUrl + '/', {text: "new text"}).respond(201, {id: 3, text: "new text"});
		$httpBackend.when('DELETE', eneidaApiUrl + '/2').respond(200);
		$httpBackend.when('PUT', eneidaApiUrl + '/3', {id: 3, text: "some edit text"}).respond(204);

	}));

	it('loads eneida text', function() {

		$httpBackend.expectGET(eneidaApiUrl + '/');

		Eneida.load().then(function success(result) {
			
			expect(result).not.toBe(null);
			expect(result.data).not.toBe(null);
			expect(result.data.length).toBe(2);
			expect(result.data[0].id).toBe(1);
			expect(result.data[0].text).toBe("text 1");
		});
		$httpBackend.flush();
	})

	it('loads eneida row by id', function() {

		$httpBackend.expectGET(eneidaApiUrl + '/1');
		
		Eneida.findById(1).then(function success(result) {
			//console.log(result.data);
			expect(result).not.toBe(null);
			expect(result.data).not.toBe(null);
			expect(result.data.id).toBe(1);
			expect(result.data.text).toBe("some text");
		});
		$httpBackend.flush();
	})

	it('creates a new row and returns generated id', function(){

		var newRow = {text: "new text"};
		
		$httpBackend.expectPOST(eneidaApiUrl + '/', newRow);
		Eneida.addRow("new text").then(function success(result){

			expect(result.data.text).toBe("new text");
			expect(result.data.id).toBeDefined();
			expect(result.status).toBe(201);
		})
		$httpBackend.flush();
	}) 

	it('deletes eneida row by id', function(){
		$httpBackend.expectDELETE(eneidaApiUrl + '/2');
		Eneida.deleteRow(2).then(function success(result){
			expect(result.status).toBe(200);
		})
	}) 

	it('updates eneida row with a new text', function(){
		$httpBackend.expectPUT(eneidaApiUrl + '/3');

		Eneida.updateRow(3,"some text").then(function success(result){
			expect(result.status).toBe(204);
		})
	}) 
})