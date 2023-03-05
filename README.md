# Firebase functions

Firebase 프로젝트를 사용할 때 단순 쿼리 외 api가 필요한 경우 Express 서버를 사용해 로직을 작성할 수 있는 보일러플레이트

```bash
src
├── apis
│   ├── auth
│   └── domain
├── config
├── firebase
└── index.ts
```

- `index.ts`에 필요한 라우터를 추가해서 사용

- `apis/` 아래의 도메인 로직은 프로젝트에 맞추어 개발

<br />

### 사용 방법

#### 초기 세팅

`.env`

```bash
KAKAO_KEY=
KAKAO_REDIRECT_URI=
SERVICE_ACCOUNT_ID=[admin ID]   # 카카오 로그인을 구현하지 않는다면 이것만 있어도 됨
```

`.firebaserc`

```bash
{
  "projects": {
    "default": [project name]
  }
}
```

<br />

#### 실행 및 배포

`yarn serve`

- Emulator를 실행하고 로컬에서 Express 서버를 테스트 할 수 있음

  ```bash
  ┌─────────────────────────────────────────────────────────────┐
  │ ✔  All emulators ready! It is now safe to connect your app. │
  │ i  View Emulator UI at http://127.0.0.1:4000/               │
  └─────────────────────────────────────────────────────────────┘

  ┌───────────┬────────────────┬─────────────────────────────────┐
  │ Emulator  │ Host:Port      │ View in Emulator UI             │
  ├───────────┼────────────────┼─────────────────────────────────┤
  │ Functions │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions │
  └───────────┴────────────────┴─────────────────────────────────┘
  Emulator Hub running at 127.0.0.1:4400
  Other reserved ports: 4500
  ```

- Emulator 로그에 이렇게 나온다면 정상 동작하며 Postman 등으로 로컬에서 테스트 가능

  ```bash
  Watching "/[path]/functions" for Cloud Functions...

  Loaded functions definitions from source: api.

  http function initialized (http://127.0.0.1:5001/[project name]/[region]/api).
  ```

<br />

`yarn deploy`

- 프로젝트 서버에 배포

- 터미널 또는 Firebase 콘솔에서 경로 확인

  ```bash
  i  functions: creating Node.js 18 function api(us-central1)...
  ✔  functions[api(us-central1)] Successful create operation.
  Function URL (api(us-central1)): https://[path]/api
  i  functions: cleaning up build files...

  ✔  Deploy complete!

  Project Console: https://console.firebase.google.com/project/[project name]/overview
  ✨  Done in 113.20s.
  ```

- 안되는거 아닌가 싶게 에러도 많이 나고 오래 걸리지만 로컬에서 동작한다면 문제 없는거니까 여러번 해보기
