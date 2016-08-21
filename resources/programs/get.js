if(me && (me.id === this.owner || me.type === 'admin' || me.type === 'teacher')) {
    if(!query.raw){
        dpd.students.get({program: this.id, raw: true}, function(students) {
            this.students = students;
            this.numEnrolled = students.length;
            this.nameAndDesc = this.name + '   ['+ this.description  +']';
        });
        dpd.users.get({id: this.owner}, function(owner){
            this.ownerName = owner.username;
        }); 
    }
 }else{
     cancel();
 }