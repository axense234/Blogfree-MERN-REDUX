const registerSW = async () => {
  try {
    await navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`, {
      scope: "/",
    });
    console.log("registered sw");
  } catch (error) {
    console.log(error);
  }
};

export default registerSW;
