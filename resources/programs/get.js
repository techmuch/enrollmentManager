if(me && (me.id === this.owner || me.type === 'admin')) {
  dpd.students.get({program: this.id}, function(students) {
    this.students = students;
    this.numEnrolled = students.length;
    this.nameAndDesc = this.name + '   ['+ this.description  +']';
  });
  dpd.users.get({id: this.owner}, function(owner){
    this.ownerName = owner.username;
  });
 }else{
     cancel();
 }