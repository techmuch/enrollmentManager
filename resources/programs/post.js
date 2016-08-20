if(me && me.id === this.owner) {
  dpd.students.get({program: this.id}, function(students) {
    this.students = students;
  });
 }else{
     cancel()
 }