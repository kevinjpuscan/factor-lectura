<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

:root {
  --principal-color: #3b8070;
  --principal-dark: #1a584a;
  --principal-light: #54a08e;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.btn-main {
  display: inline-block;
  border-radius: 4px;
  border: 2px solid var(--principal-color);
  color: var(--principal-color);
  text-decoration: none;
  padding: 1rem 3rem;
  font-size: 1.2rem;
}

.btn-main:hover {
  color: #fff;
  background-color: var(--principal-color);
}

.btn-grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.btn-grey:hover {
  color: #fff;
  background-color: #35495e;
}

.form-group {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1rem 0;
}

.form-group label {
  font-weight: 500;
  margin: 0.3rem 0;
}

.form-group .input-text {
  font-size: 1.3rem;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 1rem;
}

.inline {
  display: flex;
}

.link-main {
  padding: 3rem 4rem;
  border: 2px solid var(--principal-color);
  border-radius: 8px;
  color: var(--principal-color);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  margin: 1.5rem;
}

.link-main:hover {
  color: white;
  background: var(--principal-color);
}

.link-secondary {
  padding: 1rem 2rem;
  border: 2px solid var(--principal-color);
  border-radius: 8px;
  color: var(--principal-color);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  margin: 1rem 0;
}

.link-secondary:hover {
  color: white;
  background: var(--principal-color);
}
</style>
