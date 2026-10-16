# UST Subtitle Studio

브라우저에서 UST / USTX의 가사를 SRT/VTT 자막으로 변환하고 편집하는 독립 도구입니다. 선택한 프로젝트와 음원은 브라우저 안에서만 처리합니다.

## GitHub Pages

공개 저장소는 [ivyrecords11/ust-subtitle-studio](https://github.com/ivyrecords11/ust-subtitle-studio)이며 사이트 주소는 [https://ivyrecords11.github.io/ust-subtitle-studio/](https://ivyrecords11.github.io/ust-subtitle-studio/)입니다. 이 저장소는 빌드 없이 정적 파일을 그대로 제공합니다.

최초 게시 시 저장소 **Settings → Pages → Build and deployment**에서 **Deploy from a branch**, **main**, **/(root)**를 선택해 저장하세요. 그 뒤 main에 커밋하면 자동으로 사이트에 반영됩니다.

실제 UST·USTX·음원과 캐릭터/보이스뱅크 파일은 저장소에 올리지 마세요. 번역 API 키도 공개 코드에 넣지 마세요. 업로드한 파일을 서버로 보내지 않는 구조입니다.

## 기능

- UST/USTX를 SRT/VTT로 변환 및 자막 편집
- Shift-JIS / UTF-8 판독, USTX 트랙 선택
- 노트/쉼표 타이밍 보정과 프레이즈 편집
- 선택한 번역 API 어댑터 확장
- 외부 패키지 서버 없이 브라우저에서 실행

로컬 확인: node server.mjs 실행 후 http://127.0.0.1:8766/ 접속. 테스트: node --test tests/*.test.mjs.
