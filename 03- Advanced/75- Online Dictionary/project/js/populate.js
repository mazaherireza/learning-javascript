const $ = document;

const phonetic = $.querySelector("#phonetic");
const audio = $.querySelector("audio");
const meaning = $.querySelector("#meaning");

const populate = (tranlation) => {
  meaning.innerHTML = "";
  const phLen = tranlation.phonetics.length;
  phonetic.innerHTML =
    tranlation?.phonetic ?? tranlation.phonetics[phLen - 1].text;
  audio.setAttribute("src", tranlation.phonetics[phLen - 1].audio);

  const mLen = tranlation.meanings.length;
  const definitions = tranlation.meanings[mLen - 1].definitions;

  const fragment = $.createDocumentFragment();
  definitions.forEach((definition) => {
    const li = $.createElement("li");
    li.innerHTML = definition.definition;
    fragment.append(li);
  });
  meaning.append(fragment);
};

export { populate };
