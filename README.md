ReactNative - WeatherApp
===
![이미지](readme_resources/activity.PNG)

## [서비스 설명]
내 위치를 기반으로 날씨와 온도를 알려줌

## [사용 기술]
- **서버**: Node.js (express)
- **주요 라이브러리/API**
 : Expo / FlexBox
 
## [공부 내용 정리]

#### 1-2.What are we using
    ReactNative, Expo.io 검색해보기
	expo.io => 리액트 네이티브 앱을 쉽게 사용할 수 있게 도와줌.
	
	
#### 1-3.Requirments

	nodejs
	npm
	editor (Visual Studio Code, Atom)
	
#### 1-4. What is ReactNative
	
	리액트 네이티브
	-네이티브 웹 어플리케이션을 빌드하게 도와주는 UI 라이브러리
	-리액트 네이티브는 html, css 애플리케이션을 생성하지 않는다. 
	-html, css 앱을 만드는 아파치 코르도바, 아이오닉과 같은 차이점은 이건 네이티브라는거!
	-Objective-C는 iOS를 위한 것, Java는 Android를 위한 것 => 마지막 컴파일링 할 때, 각각 ios, android 네이티브 코드로 실행이 된다! 명심!
	-그럼 리액트 네이티브는 어떻게 동작하는가?
		=>JSX, 자바스크립트로 작성을 하고, 그 뒤에서 자바스크립트가 objective-c 혹은 java로 변환되는 것이다. 페이스북의 멋진 기술에 의하여!! 와우!!!!!
		
		
		
	장점
		1.자바스크립트를 활용할 수 있다는 것
		2.커뮤니티가 크다는 것
		3.많은 회사가 리액트 네이티브를 쓰고 있다는 것
			-에어비앤비, 인스타그램, 페이스북... 검색: showcase react native
		4.최고의 장점은 iOS-Android 앱 사이 코드를 공유할 수 있다는 것.
		
	2주마다 업데이트가 일어나고 있다.
	https://facebook.github.io/react-native/


#### 1-5. What is Expo

	expo
	-리액트 네이티브로 앱을 만드는 것을 도와줌. without Xcode, Android Studio
	-Xcode 사용 전혀 없이 ios를 위한 시뮬레이터를 관리.
	-원래라면 xcode, android studio 별도로 작업을 했어야 했지만, expo가 도와줘서 그렇게 하지 않아도 된다.
	-expo를 통해 iOS/Android 전용 네이티브 앱을 만들 수 있다. (앱 테스트가 엄청 빠르고 편해졌다.)
	-Expo Client를 통해 테스트도 아주 빠르게 가능.
	
	-앱을 배포했을 때, code push라는게 있다.
		앱을 업데이트하고 싶을 때, review process, 유저에게 업데이트를 하게끔 유도하는 등 프로세스가 꽤 많다.
		하지만 내가 업데이트를 할 때마다, 앱이 알아서 업데이트 한다면?? 수 많은 프로세스를 스킵하고..! AWESOME!
		
		만약, 너가 버그를 발견했어. 그걸 고치려면 승인 과정을 또 이틀 기다려야 한다면.....? 윽...
		expo는 앱스토어에 전체앱을 올리는 것이 아니라, expo client에 push를 한다. =>그러면 client가 앱을 실행하기 위한 코드를 다운받는다. 
		즉, 서버에 있는 코드를 업데이트 하는 것이다. 앱이 열릴때마다 서버에서 새로운 버전의 코드를 다운받는 것이다.\
		
#### 1-6. Installing Expo and Creating a new Project

	Expo XDE 다운로드 사이트
	https://docs.expo.io/versions/latest/introduction/installation
	
	Expo XDE deprecated 됨.
	CLI 설치 명령어
	# npm install -g expo-cli
	# yarn global add expo-cli
	
	# expo init
	# expo start

	XDE를 다운받은 후, create project 클릭 
		-React Native에 필요한 npm, yarn 등을 다운 받는다.
		
	폰을 노트북이랑 연결하고, Device => 본인의 폰 환경 클릭
	
	HotReloading 기능을 잘 활용하자.
	-코드를 저장하고, 변경된 부분만 골라서 리로딩 된다. (속도가 엄청 빠르다!)
	-Killer Ficture !!
	
	*안드로이드 시뮬레이터도 설치해주자.
	
#### 2-1. Basic React Native Concepts
	
	리액트 네이티브의 기본 컨셉은 <div>, <span> 등.. <html>이 없다는 것!
	=>즉, 우리가 return 할 수 있는 컴포넌트가 정해져 있다는 뜻이다.
	=>리액트 이론 자체는 동일하지만, 웹과는 전혀 다르다는 것을 이해해야 한다.
	리액트 네이티브의 컴포넌트는 모바일 환경에 따라 네이티브하게 변한다.
	<view> 컴포넌트를 이용하면 각 모바일 환경에 맞게 변한다.
	
	Expo Snack을 이용하면 시뮬레이터 설치 없이도 브라우저 상에서 테스트 해볼 수 있다.
	https://snack.expo.io/
	
	리액트 네이티브의 디자인이 FlexBox로 가능하다는 것을 알 수 있다.
	-CSS의 FlexBox
	
	*리액트 네이티브는 굉장히 엄격하다.
	-잘못된 부분 있으면 바로 오류를 뱉어낸다. 웹과는 다른 환경. (웹에서는 html 태그 잘못 써도 작동함)
	-이는 프로그래밍에 도움이 된다. (엄격한 코딩) 패턴을 잘 연구해 보도록!
	
	*리액트 네이티브 적용 과정
	1.컴포넌트를 import
	2.css와 비슷한 style이 있고
	3.명확한 규칙이 있다는 것.
	
#### 2-2. React Native Layouts with Flexbox

	FlexBox를 사용해서 디자인 한다는 것은 굉장한 장점! (웹 개발자에게) -이미 css를 잘 알기 때문에
	flex => 스크린 전체를 어떤 비율로 사용할지에 대한
	flexDirection의 기본값은 column이다.
	justifyContent: "center", "flex-start", "flex-end", "space-between", "space-around"
	alignItems:"center", "flex-end", 
	alignSelf: "flex-start", "center",
	flexWrap:'wrap, 'nowrap'
	
	기존의 css와 다른점은 쉼표를 사용한다는 것. 자바스크립트 쓰듯이 써야한다는 것을 잊지말자.
	
	리액트 네이티브 + FlexBox는 최고의 조합이다!
	
#### 3-1. Building the Loading View

	리액트 네이티브로 앱을 만들 때, 항상 local state으로 작업해야 한다.
	(redux와 같은 state management 라이브러리 => 엄청 복잡함ㅋ state, data, screen을 배우려면 풀스택 강의 고고)
	
	여기서는 state만 이야기할거다.
	
	우리가 데이터를 받았는지, 안받았는지 확인하려면 indicator가 필요하다.
	=>state ={ isLoaded:false } => 다음처럼 데이터를 받았는지 안받았는지 확인 가능.
	
	리액트 네이티브에서는 short hand property를 사용하지 않는다. 
	padding: "40 30 50 60"
	
	1.컴포넌트 안에 state를 만들고, isLoaded: false 라고 지정 => 데이터 API를 불러오게 되면, 이 값은 true로 바뀌게 됨.
	2.FlexBox로 디자인 잡기
	
#### 3-2. Building the Weather View

	LinearGradient 
	=> expo에서 제공. (갈수록 변화하는 색상 효과를 주는 것이 Linear Gradient 이다.)

#### 3-3. Working with icons

	status bar 옵션
	=>상태창을 없애고, 색깔을 바꿀 수 있음.
	
	ion icon에 굉장히 좋은 아이콘들이 많다. 아이콘 관련은 여기서 쓰자
	https://expo.github.io/vector-icons/
	
	expo에서 제공하는 아이콘 관련 패키지
	-ion icon, font awesome icon ..
	-만약, expo 패키지를 이용하지 않는다면, npm이나 yarn으로 패키지를 따로 설치해주어야 한다.
	<Ionicons color, size, name/>
	
#### 3-4. Getting Geolocation

	navigator라는 object를 활용해 위치 데이터를 불러옴.

#### 3-5. Handling Error on Geolocation

	날씨 정보를 받아오기 전에, 위치정보 에러를 처리하는 방법
	에러를 state에 저장
	
#### 4-1. Getting the weather
	
	API 조사.
	-최고의 날씨 API는 open weather map 인 듯.
	https://openweathermap.org/
	
	회원가입 후 API key 발급:
	e2ba3d8c096a5769bcaf8f19a872a48f
	
	json parameter를 보면서 어떤 정보를 받아오는 지 확인 -> json respond parameters에 weather 발견 => more info Weather condition codes 검색=> https://openweathermap.org/weather-conditions => 모든 응답값이 다 담겨있다.
	
	*디버깅 모드 (ctrl + D)
	-디버깅 모드 클릭하면 크롬창이 뜬다. 크롬에서 데이터를 다 볼 수 있음.
	
	
#### 4-2. Hooking the component to the weather data

	켈빈을 도씨로 바꿔주기 위해 작업.
	Math.floor 
	=> 123.11 => 123으로 바꿔주는 함수
	
	Math.ceil
	=> 1.78 => 2 (반올림)

#### 5-1. Changing the icons and testing on iOS

	QuickTimePlayer (아이폰 띄워주는 프로그램인 듯?)



## [참고링크]
* [노마드 코더](https://academy.nomadcoders.co/courses)