function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

//set 함수 이용하여 교집합 부분 빼내기.
