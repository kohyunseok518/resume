# 고현석 이력서

백엔드 개발자 고현석의 웹 이력서입니다.

- 이력서: https://kohyunseok518.github.io/resume/
- 포트폴리오: https://kohyunseok518.github.io/portfolio/

## 구성

[uyu423/resume-nextjs](https://github.com/uyu423/resume-nextjs)(MIT) 템플릿을 바탕으로 만들었습니다. 내용은 `payload/`에 있습니다.

## 로컬 실행과 배포

```bash
npm ci
npm run dev          # http://localhost:3000
npm run export       # docs/ 에 정적 파일 생성 (/resume 경로 기준)
```

`main`에 푸시하면 GitHub Actions(`.github/workflows/deploy.yml`)가 `npm run export` 결과를 GitHub Pages에 배포합니다.
