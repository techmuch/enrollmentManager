if(me && (me.id === this.owner || me.type === 'admin' || me.type === 'teacher')) {
    if(!query.raw){
        dpd.programs.get({id: this.program}, function(program) {
            this.programName = program.name;
            this.programNameAndDesc = program.name + '   ['+ program.description  +']';
            this.monday = program.monday
            this.tuesday = program.tuesday
            this.wednesday = program.wednesday
            this.thursday = program.thursday
            this.friday = program.friday
            this.saturday = program.saturday
            this.sunday = program.sunday
        });
        dpd.teachers.get({id: this.teacher}, function(teacher) {
            this.teacherName = teacher.lastName;
            this.teacherNameAndGrade = teacher.lastName + '   [ Grade: ' + teacher.grade + ' ]';
        });
    }

}else{
     cancel()
}