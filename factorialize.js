function factorialize(num) {
  if (num === 0) return 1;
  else{
    for (var i=num-1; i>0; i--) {
      num=num*i;
    }
  }
  return num;
}
