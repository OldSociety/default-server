function solution(n, k) {
    let nArray = n.toString().split('');
    for (let i = 0; i <= 3; i++) {
      nArray[i] = parseInt(nArray[i]);
    }
    while (nArray[0] < 9 && k > 0) {
      nArray[0] = nArray[0] + 1;
      k--;
    }
    while (nArray[1] < 9 && k > 0) {
      nArray[1] = nArray[1] + 1;
      k--;
    }
    while (nArray[2] < 9 && k > 0) {
      nArray[2] = nArray[2] + 1;
      k--;
    }
    console.log(nArray.join(''))
    return nArray.join('');
  }

solution(285, 20)
