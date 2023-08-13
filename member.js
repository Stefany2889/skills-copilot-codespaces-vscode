function skillsMenber() {
    return {
        restrict: 'E',
        templateUrl: 'views/skills-member.html',
        controller: function ($scope) {
            $scope.skills = [
                { name: 'HTML5', value: 90 },
                { name: 'CSS3', value: 80 },
                { name: 'Javascript', value: 70 },
                { name: 'AngularJS', value: 60 },
                { name: 'NodeJS', value: 50 },
                { name: 'MongoDB', value: 40 },
                { name: 'PHP', value: 30 },
                { name: 'MySQL', value: 20 },
                { name: 'Python', value: 10 }
            ];
        }
    };
}