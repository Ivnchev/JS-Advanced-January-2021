function foo(obj) {
   if(obj.dizziness){
       obj.levelOfHydrated += (obj.weight * 0.1) * obj.experience
       obj.dizziness = false
   }
   return obj
}


foo({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })