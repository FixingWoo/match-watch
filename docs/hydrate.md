# Hydrate

## 개요

- `hydrate`는 **서버에서 렌더링된 HTML을 클라이언트에서 React 컴포넌트와 연결(bind)하는 과정**을 의미합니다.
- 즉, 서버에서 만들어진 HTML + 클라이언트에서 실행되는 JavaScript → 완전한 인터랙티브 SPA로 연결해주는 과정입니다.

## hydrate vs render 차이

| 항목        | `hydrate()`                                                  | `render()`                           |
| ----------- | ------------------------------------------------------------ | ------------------------------------ |
| 목적        | SSR에서 HTML을 React와 연결                                  | CSR에서 처음부터 React로 화면 렌더링 |
| 전제조건    | 이미 DOM이 서버에서 렌더링되어 있음                          | 클라이언트가 처음부터 렌더링         |
| 대표 사용처 | Next.js, React SSR 환경                                      | React SPA (Create React App 등)      |
| 예시 코드   | `ReactDOM.hydrate(<App />, document.getElementById('root'))` | `ReactDOM.render(...)` (v18 이전)    |
