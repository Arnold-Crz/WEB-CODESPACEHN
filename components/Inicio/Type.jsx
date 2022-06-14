import TypeIt from 'typeit-react';

const types = (instance) => {
  instance
    .type('Desarrollo')
    .pause(750)
    .delete(9)
    .pause(500)
    .type('iseño')
    .pause(500)
    .delete(10);
  return instance;
};

function Type() {
  return (
    <TypeIt
      element="h1"
      options={{
        waitUntilVisible: true,
        loop: true,
      }}
      getBeforeInit={types}
    />
  );
}

export default Type;
