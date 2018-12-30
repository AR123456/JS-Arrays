// sanitize vs validating https://medium.com/@abderrahman.hamila/what-sanitize-mean-and-why-sanitize-in-code-data-5c68c9f76164

//using the dom purify libray to sanatize user input
// <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/0.8.2/purify.min.js"></script>

//making a tagged template to sanatize

function sanitize(strings, ...values) {
  const dirty = strings.reduce(
    (prev, next, i) => `${prev}${next}${values[i] || ""}`,
    ""
  );
  return DOMPurify.sanitize(dirty);
}

const first = "Dr Strangelove";
const aboutMe = sanitize`I love to be silly <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');" />`;

const html = `
<h3>${first}</h3>
<p>${aboutMe}</p>
`;

const bio = document.querySelector(".bio");
bio.innerHTML = html;
