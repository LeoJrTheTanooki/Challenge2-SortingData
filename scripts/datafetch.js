const DataCall = async () => {
  const promise = await fetch("../data/data.json");
  // Note: Glad to have data come with assignment =3
  const data = await promise.json();
  return data.People;
};

export { DataCall };
