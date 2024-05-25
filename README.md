# 概要
[github](https://github.com/Shin-sibainu/inquiryform-tutorial)

# 環境構築
```
$ npx create-next-app@latest
✔ What is your project named? … react_form
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
✔ What import alias would you like configured? … @/*

$ npm run dev
```

## shadcn/ui
* `npx shadcn-ui@latest init`
```
(base) MacBookPro:react_form gm$ npx shadcn-ui@latest init
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? … no / yes
```

* npx shadcn-ui@latest add button

* npx shadcn-ui@latest add
```
✔ Which components would you like to add? › input
✔ Done.
```

* npx shadcn-ui@latest add form
* npx shadcn-ui@latest add textarea

# [react-hook-form](https://react-hook-form.com/)
* `npm install react-hook-form`

# [zod](https://zod.dev/?id=installation)
* `npm install zod`

# [zodResolver](https://github.com/react-hook-form/resolvers)
* `npm install @hookform/resolvers`

# [Resend](https://resend.com/) 類似サービス:AmazonSES, SendGrid
* `$ npm install resend`
## Create API Keys
Name: RESEND_API_TEST
Permission: Full access
Domain: All domains
RESEND_API_KEY=XXX

# Postman
POST http://localhost:3000/api/send

# [react spinners](https://www.davidhu.io/react-spinners/)
* `npm install react-spinners`

# [react-toastify](https://www.npmjs.com/package/react-toastify)
* `npm install react-toastify`

# [Vercel](https://vercel.com/)
## デプロイ
```
AddNew > Project > GithubRep
環境変数 .envの内容を入力(NEXT_PUBLIC_BASE_URLはデプロイ後のドメイン名を入れる)
Deployを押下
```
