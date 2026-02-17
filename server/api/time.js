export default defineEventHandler((event) => {
  return {
    message: "Hello here you can see the time",
    time: new Date().toLocaleDateString(),
  };
});
