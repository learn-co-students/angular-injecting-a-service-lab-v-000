describe('ContactController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	it('should call $timeout with a delay of 5000 milliseconds', function () {
		var $scope = {};
		var time;

		function mockTimeout(func, milliseconds) {
			time = milliseconds;
		}

		$controller('ContactController', { $scope: $scope, $timeout: mockTimeout });

		expect(time).toBe(5000);
	});

	it('should have a name property on $scope', function () {
		var $scope = {};

		$controller('ContactController', { $scope: $scope });

		expect($scope.name).not.toBe(undefined);
	});

	it('should update $scope.name after 5000 milliseconds', function () {
		var $scope = {};
		var originalName;

		function mockTimeout(func, milliseconds) {
			originalName = $scope.name;
			func();
		}

		$controller('ContactController', { $scope: $scope, $timeout: mockTimeout });

		expect(originalName).not.toBe(undefined);
		expect($scope.name).not.toBe(undefined);
		expect(originalName).not.toBe($scope.name);
	});
});
