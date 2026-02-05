# Project Architecture: Next.js App Router + FSD

이 프로젝트는 **Next.js App Router** 기반 위에 **FSD (Feature-Sliced Design)** 아키텍처를 적용하고 있습니다.

## FSD 계층 구조 (Layers)

- 하위의 폴더들은 FSD 계층을 엄격히 따릅니다.
- 프로젝트는 다음 계층 순서(위에서 아래로 의존성 허용)를 엄격히 따릅니다.
- 상위 계층은 하위 계층을 import할 수 있지만, **하위 계층이 상위 계층을 import하는 것은 금지**됩니다.
- `index.js(ts)`는 default export를 우선적으로 사용하고, 한 파일에서 여러개를 export 해야하는 경우는 named export를 사용합니다.

1. **src/app/** (FSD App Layer)
   - 전역 프로바이더(Providers), 전역 스타일(Global Styles), 초기화 로직.
2. **src/widgets/**
   - 페이지를 구성하는 독립적인 UI 블록 (예: Header, Footer, NoticeList).
   - `entities`와 `features`를 조합하여 구성.
3. **src/features/**
   - 사용자 상호작용 기능 (예: 검색, 필터링, 좋아요, 인증).
   - 비즈니스 가치를 전달하는 사용자 시나리오 처리.
4. **src/entities/**
   - 비즈니스 도메인 모델 (예: Notice, User).
   - 데이터 타입, 상태 관리(Store), 데이터 페칭 로직 포함.
5. **src/shared/**
   - 특정 도메인에 종속되지 않는 재사용 가능한 컴포넌트, 유틸리티, API 클라이언트.

---

## FSD 방식 적용 시 참고할 사항

### Layers > Slices > Segments

- 레이어 (Layers): 코드를 재사용의 범위와 의존성(import) 규칙에 따라 수직적으로 나누어 놓은 계층 구조
  - 상위 레이어는 하위 레이어를 참조할 수 있는 단방향 의존성을 가집니다. (app > widgets > features > entities > shared)
- 슬라이스 (Slices): 레이어 내에서 코드를 비즈니스 도메인별로 분할
  - 같은 레이어 안에서는 다른 슬라이스를 참조할 수 없습니다. (높은 응집도, 낮은 결합도 유지에 도움)
- 세그먼트 (Segments): 슬라이스 내에서 코드를 기술적 목적에 따라 구분
  - 이름은 ui, api, model 등 목적을 설명해야 합니다(components, hooks 같은 성격은 지양).

#### Layers

- app: 앱 전체 에 영향을 주는 코드 ( 라우터 설정, 진입점 설정, 전역 상태관리, 전역 스타일, 프로바이더 )
  - slice 없이 segment 로만 구성됨
- widgets: 독립적으로 작동하고 여러 페이지에서 재사용되는 대규모 기능 또는 UI 컴포넌트. 보통 하나의 완전한 기능
- features: 제품 전반에 걸쳐 재사용되는 기능 구현체로, 사용자에게 실질적인 비즈니스 가치를 제공하는 동작 (동사적 개념)
- entities: 프로젝트가 다루는 비즈니스 데이터 (명사적 개념)
- shared: 앱의 기본 구성 요소 를 모아둠. 재사용 가능한 기능, 특히 프로젝트/비즈니스의 특성과 분리되어 있을 때 (반드시 그럴 필요는 없음)
  - slice 없이 segment 로만 구성됨

#### Segments

##### ui

UI와 관련된 모든 것

- ex) UI 컴포넌트, 날짜 포맷터, 스타일 등
- Widgets: 여러 페이지에서 재사용하는 독립적으로 동작하는 큰 UI 컴포넌트들을 관리
- Features: Form 등 상호작용이 가능한 UI 컴포넌트들을 관리
- Entities: 여러 페이지에서 재사용 가능한 특정 도메인과 관련된 UI 컴포넌트들을 관리
- Shared: 비즈니스 로직을 제외한 공통 UI 컴포넌트들

##### api

백엔드 통신 및 데이터 로직

- ex) request 함수, 데이터 타입, mapper 등
- Features: 기능 관련 API 요청
- Entities: 해당 Entity의 API 요청
- Shared: API 요청에 사용되는 공통 코드

##### model

애플리케이션 도메인 모델

- ex) 스키마, 인터페이스, 스토어, 비즈니스 로직 (Redux/Zustand의 액션, 리듀서, 셀렉터 등)
- Features: 검증, 내부 상태
- Entities: 데이터 상태와 검증 스키마

##### lib

슬라이스 내에서만 사용하는 라이브러리 코드

##### config

설정 파일과 feature-flag 파일

- Features: feature flag
- Shared: 환경변수, 전역 feature flag 등

### FSD 구조 시각화 예시

```bash
└─ src
  ├─ widgets
  │  ├─ benefitItem
  │  │  ├─ ui
  │  │  └─ ...
  │  └─ ...
  ├─ features
  │  ├─ benefit
  │  │  ├─ config
  │  │  ├─ model
  │  │  ├─ api
  │  │  ├─ ui
  │  │  └─ ...
  │  ├─ coupon
  │  │  ├─ config
  │  │  ├─ model
  │  │  ├─ api
  │  │  ├─ ui
  │  │  └─ ...
  │  └─ ...
  ├─ entities
  │  ├─ benefit
  │  │  ├─ model
  │  │  ├─ api
  │  │  ├─ ui
  │  │  └─ ...
  │  ├─ coupon
  │  │  ├─ model
  │  │  ├─ api
  │  │  ├─ ui
  │  │  └─...
  │  └─ ...
  └─ shared
    ├─ api
    ├─ ui
    ├─ lib
    ├─ config
    ├─ routes
    ├─ i18n
    └─ ...
```
