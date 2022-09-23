# 들어가면서

- 코드의 품질을 높이고 훌륭한 코드를 위한 해답은 `장인 정신`이다
- 원칙과 패턴을 배우고, 몸으로 직접 익히면서 배워야한다
- 이 책은 세 가지 부분으로 나눠진다
  1. 깨끗한 코드를 작성하는 원칙, 패턴을 코드로 설명
  2. 조금 더 복잡한 여러 사례들을 제시하며 이를 더 깔끔하고 효율적으로 바꾸는 연습
  3. 앞의 사례들을 통해 얻은 이유와 휴리스틱을 정리하는 결말
- 책을 통해 코드를 수정하게 된 이유와 휴리스틱 사이의 관계를 이해하는 것이 중요하다.
- 대충 볼 수 있는 책이 아니라 열심히 집중해서 봐야하는 책이라는 것을 강조하는 챕터!!

# Chapter 1 - 깨끗한 코드

## 목차

---

- 코드가 존재하리라
- 나쁜 코드
- 깔끔한 코드에 대한 정의
- 우리들 생각과 정리

---

이 책은 코드 투성이의 책이다. 이 책을 읽고 나면 코드에 대해 많은 사실을 배울 수 있을 것이다. 그리고 좋은 코드와 나쁜 코드를 구분하는 능력도 생기고, 좋은 코드를 작성하는 방법도 익힌다. 마지막으로 나쁜 코드를 좋은 코드로 바꾸는 실력도 쌓인다.

## 코드가 존재하리라

---

- 코드 없이는 요구사항을 추상화할수도, 상세히 설명할 수도 없다
- 요구사항들을 기계가 이해할 수 있을 정도로 상세하게 요구사항을 정형화시켜 명시한 것이 코드
- 코드는 요구사항을 표현하는 언어다

## 나쁜 코드

---

- 나쁜 코드는 회사도 망하게 할 수 있다
- 서두르고 급하게 짜고, 나중에 다시 고쳐보자라고 생각했던 코드들은 스노우볼로 굴러 다시는 손대기 싫은 나쁜코드가 된다
  - 그리고 그 나중은 절대 오지 않는다
- 나쁜 코드들은 코드를 건들일때마다 코드 해독에 더 많은 시간을 쓰게 만들고 생산성이 저하된다
  - 결국은 생산성이 0에 수렴하게 된다
- 회사에서 생산성을 높이라는 압박에 나쁜 코드를 작성하게 된다는 핑계를 대지 말아라
  - 앞서 말한 장인정신을 가져야 하고, 전문가답게 나쁜 코드의 해악성과 위험을 어필해야 한다
- 최대한 깔끔한 코드를 항상 유지하는 것이 가장 중요하다

## 깔끔한 코드에 대한 정의

---

- 클린 코드는 멋진 그림을 그리는 것과 같다
- 클린 코드를 위해 경험을 쌓으며 코드 감각을 키워야 한다

### 클린 코드에 대한 의견

---

- 비야네 스트롭스트룹 (C++ 창시자)
  - 코드는 즐겁게 읽혀야하며, 효율적인 코드여야 한다
  - 에러 핸들링, 메모리 누수, 경쟁상태, 네이밍 등 디테일에 신경을 써야한다
  - 너무 많은 일을 하려다 목적이 흐려지는 코드보다 한가지 길만 가는 코드가 클린 코드이다
  - 클린 코드는 `한가지를 잘 하는 코드`를 뜻한다
- 그래디 부치 (Object Oriented Analysis and Design with Applications 저자)
  - 클린 코드는 소설처럼 기승전결을 가지며 술술 읽혀야 한다
  - 코드는 추측이 아닌 사실에 기반해야 한다
- BIG 데이브 토마스 (OTI 창립자, 이클립스 전략의 대부)
  - 클린 코드란 다른 사람이 고치기 쉬워야 한다
  - 테스트 케이스가 없는 코드는 클린 코드가 아니다
- 마이클 페더스 (Working Effectively with Legacy Code 저자)
  - 클린 코드는 주의깊게 작성한 코드다
  - 고치려고 살펴봐도 손 댈 곳이 없으며, 궁리를 하다보면 제자리로 돌아오는 코드
  - 깔끔하고 단정하게 정리한 코드
- 론 제프리스 (Extreme Programming Installed와 Extreme Programming Adventure in C# 저자)
  - 중복을 피해라
  - 한 기능만 수행하라
  - 제대로 표현하라
  - 작게 추상화하라
- 위드 커닝햄 (위키 창시자, 피트 창시자, 익스트림 프로그래밍 공동 창시자 등등등)
  - 코드를 읽으면서 짐작했던 기능을 각 루틴이 그대로 수행한다면 깨끗한 코드이다
  - 깨끗한 코드는 읽으면서 놀랄 일이 없어야 한다
  - 언어를 탓하지 말고 코드를 단순하게 보이도록 만드는 책임은 개발자에게 있다

## 우리들의 생각과 정리

---

- 이 내용들을 한 문장으로 정리하며 이 책의 주제를 말해보자면 `코드를 주의 깊게 짜는 방법`이라 할 수 있다
- 물론 이 책에서 말하는 방식들은 백프로 옳은 정답이라기 보다 수십년의 시행착오로 완성된 오답노트이다
- 코딩을 하다보면 이전에 작성된 코드를 계속해서 읽고, 새로 코드를 조금 작성하고 다시 또 고치는 일의 반복이다
- 생각보다 작성된 코드를 들여다볼 일이 많고, 이것이 깔끔한 코드의 중요성이다