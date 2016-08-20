if(me && (me.id === this.owner || me.type === 'admin')) {
  dpd.students.get({program: this.id}, function(students) {
    this.students = students;
  });
 }else{
     cancel()
 }